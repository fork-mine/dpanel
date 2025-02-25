package ws

import (
	"context"
	"github.com/donknap/dpanel/common/service/notice"
	"github.com/donknap/dpanel/common/service/plugin"
	"github.com/gorilla/websocket"
	"log/slog"
	"sync"
)

var (
	lock             = sync.RWMutex{}
	BroadcastMessage = make(SendMessageQueue)
)

func NewCollection() *Collection {
	obj := &Collection{
		clients:     sync.Map{},
		progressPip: sync.Map{},
	}
	go obj.Broadcast()
	return obj
}

func GetCollect() *Collection {
	return collect
}

type Collection struct {
	clients     sync.Map
	progressPip sync.Map
	ctx         context.Context
}

func (self *Collection) Join(c *Client) {
	self.clients.Store(c.Fd, c)
}

func (self *Collection) Leave(c *Client) {
	self.clients.Delete(c.Fd)

	self.progressPip.Range(func(key, value any) bool {
		if v, ok := value.(*ProgressPip); ok {
			v.CloseFd(c.Fd)
		}
		return true
	})

	// 所有客户端都退出时，销毁所有通道
	if self.Total() == 0 {
		self.progressPip.Range(func(key, value any) bool {
			if p, success := value.(*ProgressPip); success {
				p.Close()
			}
			return true
		})
		self.progressPip.Clear()

		// 没有任何用户时，中断 docker 的所有请求
		slog.Debug("docker client cancel")
		//docker.Sdk.CtxCancelFunc()
		//docker.Sdk.Client.Close()
		//ctx, cancelFunc := context.WithCancel(context.Background())
		//docker.Sdk.Ctx = ctx
		//docker.Sdk.CtxCancelFunc = cancelFunc
		//go logic.EventLogic{}.MonitorLoop()
		explorer, _ := plugin.NewPlugin(plugin.PluginExplorer, nil)
		_ = explorer.Destroy()
	}
}

func (self *Collection) sendMessage(message *RespMessage) {
	lock.Lock()
	lock.Unlock()
	self.clients.Range(func(key, value any) bool {
		c := value.(*Client)
		if message.Fd != "" && c.Fd != message.Fd {
			return true
		}
		err := c.Conn.WriteMessage(websocket.TextMessage, message.ToJson())
		if err != nil {
			slog.Error("ws broadcast error", "fd", c.Fd, "error", err.Error())
		}
		return true
	})
}

func (self *Collection) Broadcast() {
	for {
		select {
		case message := <-BroadcastMessage:
			self.sendMessage(message)

		case message := <-notice.QueueNoticePushMessage:
			data := &RespMessage{
				Type: "notice",
				Data: message,
			}
			self.sendMessage(data)
		}
	}
}

func (self *Collection) Total() int {
	lock.Lock()
	lock.Unlock()
	count := 0
	self.clients.Range(func(key, value any) bool {
		count += 1
		return true
	})
	return count
}

func (self *Collection) ProgressTotal() int {
	lock.Lock()
	lock.Unlock()
	count := 0
	self.progressPip.Range(func(key, value any) bool {
		count += 1
		return true
	})
	return count
}
