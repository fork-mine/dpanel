"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1250],{37767:function(na,S,a){a.d(S,{Z:function(){return p}});var b=a(15009),f=a.n(b),N=a(99289),I=a.n(N),L=a(5574),K=a.n(L),_=a(45605),A=a(38345),j=a(97269),x=a(26412),M=a(42075),m=a(96074),R=a(25593),i=a(2487),B=a(67294),l=a(76428),Q=a(78498),u=a(44771),$=a(60335),G=a(24963),C=a(37413),s=a(87662),t=a(85893);function p(r){var ta,ea,J,da,ra,oa,la,sa,ca,va,n=(0,B.useState)(""),fa=K()(n,2),_a=fa[0],ma=fa[1],w=(0,B.useContext)(G.Z),Ea=w.message,Da=w.notice,Pa=w.loading,ga=w.lang,c=(0,B.useRef)(),ua=[],z=[],ia=[],q=(0,B.useState)(""),k=K()(q,2),aa=k[0],H=k[1];return(0,B.useEffect)(function(){if(r.data){var E;(E=c.current)===null||E===void 0||E.setFieldValue("restart",r.data.info.HostConfig.RestartPolicy.Name),(0,s.EH)().then(function(Z){H(Z.data.ip)}),ma(r.data.info.Name)}},[r.data]),r.data&&r.data.domain&&r.data.domain.map(function(E){ia.push(E.serverName)}),r.data&&r.data.info.NetworkSettings&&r.data.info.NetworkSettings.Ports&&Object.keys(r.data.info.NetworkSettings.Ports).map(function(E){var Z,F,O=(Z=(F=r.data.info)===null||F===void 0?void 0:F.NetworkSettings.Ports[E])!==null&&Z!==void 0?Z:[{HostPort:null,HostIp:""}],T=E.split("/"),W=K()(T,2),U=W[0],y=W[1];O.map(function(V){V.HostPort?ua.push({PrivatePort:U,Type:y,IP:V.HostIp,PublicPort:V.HostPort}):z.push({PrivatePort:U,Type:y,IP:"",PublicPort:""})})}),(0,t.jsxs)(t.Fragment,{children:[r.data&&r.data.info.State.Running&&(0,t.jsx)(C.Z,{publicPort:ua,privatePort:z,domain:ia,serverIp:aa,showInDetail:!0,ghost:r.ghost,layout:"inline"}),(0,t.jsx)(A.Z,{title:(0,t.jsx)(_.Z,{}),subTitle:"\u5BB9\u5668\u72B6\u6001",ghost:r.ghost,children:(0,t.jsxs)(x.Z,{column:1,bordered:!0,children:[(0,t.jsx)(x.Z.Item,{label:"Hostname",children:(0,t.jsx)(M.Z,{split:(0,t.jsx)(m.Z,{type:"vertical"}),children:(0,t.jsx)(l.Z,{title:(ta=r.data.info)===null||ta===void 0?void 0:ta.Config.Hostname})})}),(0,t.jsx)(x.Z.Item,{label:"\u5BB9\u5668\u540D\u79F0",children:(0,t.jsxs)(M.Z,{split:(0,t.jsx)(m.Z,{type:"vertical"}),children:[(0,t.jsx)(l.Z,{title:(ea=r.data.info)===null||ea===void 0?void 0:ea.Id.substring(0,12)}),(0,t.jsx)(R.Z.Text,{copyable:!0,editable:{tooltip:"\u4FEE\u6539\u5BB9\u5668\u540D\u79F0",onChange:function(){var E=I()(f()().mark(function F(O){var T,W;return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if((T=r.data.info)!==null&&T!==void 0&&T.Id){y.next=2;break}return y.abrupt("return");case 2:return y.next=4,(0,$.eE)({md5:r.data.info.Id,name:O});case 4:W=y.sent,ma(O),Ea.success(ga("notification.finish"));case 7:case"end":return y.stop()}},F)}));function Z(F){return E.apply(this,arguments)}return Z}()},children:_a})]})}),(0,t.jsx)(x.Z.Item,{label:(0,t.jsx)(Q.Z,{title:"\u7F51\u7EDC",help:"\u9ED8\u8BA4\u7F51\u7EDC\u53EA\u652F\u6301\u901A\u8FC7ip\u8BBF\u95EE,ip\u4F1A\u968F\u7740\u5BB9\u5668\u542F\u52A8\u505C\u6B62\u6539\u53D8.\u5982\u679C\u9700\u8981\u5728\u5BB9\u5668\u5185\u4E92\u8054,\u8BF7\u901A\u8FC7\u3010\u7F16\u8F91\u7AD9\u70B9\u3011-\u3010\u6DFB\u52A0\u5173\u8054\u3011"}),children:((J=r.data.info)===null||J===void 0?void 0:J.State.Running)&&(0,t.jsxs)(x.Z,{column:1,bordered:!0,children:[r.data.info.NetworkSettings.Networks&&Object.keys(r.data.info.NetworkSettings.Networks).map(function(E,Z){var F,O,T;return(0,t.jsx)(x.Z.Item,{label:E,children:E=="host"?" Host \u7F51\u7EDC\uFF0C\u4E0E\u5BBF\u4E3B\u673A\u5171\u7528\u540C\u4E00\u7F51\u7EDC":(0,t.jsxs)(M.Z,{direction:"vertical",children:[(0,t.jsx)(l.Z,{title:(F=r.data.info)===null||F===void 0?void 0:F.NetworkSettings.Networks[E].IPAddress}),(O=r.data.info)===null||O===void 0?void 0:O.NetworkSettings.Networks[E].Gateway,(T=r.data.info)===null||T===void 0?void 0:T.NetworkSettings.Networks[E].MacAddress]})},"1")}),r.data.info.HostConfig.ExtraHosts&&(0,t.jsx)(x.Z.Item,{label:"\u5BBF\u4E3B\u673A\u7F51\u7EDC",children:(0,t.jsx)(M.Z,{direction:"vertical",children:r.data.info.HostConfig.ExtraHosts.map(function(E){if(E.indexOf(":")>-1){var Z=E.split(":");return(0,t.jsxs)(M.Z,{children:[(0,t.jsx)(l.Z,{title:Z[0]})," - ",Z[1]]})}})})},"1")]})}),(0,t.jsxs)(x.Z.Item,{label:"\u8FD0\u884C\u65F6\u95F4",children:["\u521B\u5EFA\u4E8E: ",new Date((da=(ra=r.data.info)===null||ra===void 0?void 0:ra.Created)!==null&&da!==void 0?da:"").toLocaleString()," / \u66F4\u65B0\u4E8E: ",new Date((oa=(la=r.data.info)===null||la===void 0?void 0:la.State.StartedAt)!==null&&oa!==void 0?oa:"").toLocaleString()]}),(0,t.jsx)(x.Z.Item,{label:"\u91CD\u542F\u7B56\u7565",children:(0,t.jsx)(j.A,{name:"container-restart",submitter:!1,onValuesChange:function(){var E=I()(f()().mark(function Z(F){var O,T;return f()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if((O=r.data.info)!==null&&O!==void 0&&O.Id){U.next=2;break}return U.abrupt("return");case 2:return U.next=4,(0,$.eE)({md5:r.data.info.Id,restart:F.restart});case 4:return T=U.sent,Ea.success("\u4FEE\u6539\u91CD\u542F\u7B56\u7565\u6210\u529F"),U.abrupt("return");case 7:case"end":return U.stop()}},Z)}));return function(Z){return E.apply(this,arguments)}}(),layout:"inline",formRef:c,children:(0,t.jsx)(u.Z,{defaultValue:(sa=r.data.info)===null||sa===void 0?void 0:sa.HostConfig.RestartPolicy.Name})})}),(0,t.jsx)(x.Z.Item,{label:"\u73AF\u5883\u53D8\u91CF",children:(0,t.jsx)(i.Z,{dataSource:(ca=(va=r.data.info)===null||va===void 0?void 0:va.Config.Env)!==null&&ca!==void 0?ca:[],renderItem:function(Z){var F=Z.split("=");return(0,t.jsxs)(i.Z.Item,{children:[(0,t.jsx)(R.Z.Text,{code:!0,children:F[0]})," = ",(0,t.jsx)(R.Z.Text,{copyable:!0,children:F.slice(1).join("=")})]})}})})]})})]})}},27813:function(na,S,a){a.d(S,{Z:function(){return ga}});var b=a(15009),f=a.n(b),N=a(99289),I=a.n(N),L=a(5574),K=a.n(L),_=a(67294),A=a(80821),j=a(62597),x=a(60335),M=a(43425),m=a(58638),R=a(60219),i=a(86548),B=a(57132),l=a(87784),Q=a(38345),u=a(97269),$=a(62370),G=a(24739),C=a(5966),s=a(82346),t=a(42075),p=a(65233),r=a(84567),ta=a(96074),ea=a(28036),J=a(25593),da=a(85418),ra=a(40411),oa=a(93162),la=a(28031),sa=a(85576),ca=a(63490),va=a(37476),n=a(85893);function fa(c){var ua=sa.Z.useModal(),z=K()(ua,2),ia=z[0],q=z[1],k=(0,_.useRef)(),aa="";return(0,_.useEffect)(function(){var H,E;aa=(H=localStorage.getItem("backupPath"))!==null&&H!==void 0?H:"",(E=k.current)===null||E===void 0||E.setFieldValue("backupPath",aa)},[]),(0,n.jsxs)(n.Fragment,{children:[q,(0,n.jsx)(va.Y,{modalProps:{forceRender:!0},formRef:k,title:"\u5907\u4EFD\u5BB9\u5668\u5B58\u50A8\u5377",trigger:(0,n.jsxs)(ea.ZP,{children:[(0,n.jsx)(R.Z,{})," \u5907\u4EFD\u5B58\u50A8\u76EE\u5F55"]}),onFinish:function(){var H=I()(f()().mark(function E(Z){var F,O;return f()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return Z.backupPath&&localStorage.setItem("backupPath",Z.backupPath),F={containerMd5:c.container.Id,backupPath:Z.backupPath},W.next=4,(0,la.vp)(F);case 4:return O=W.sent,ia.info({title:"\u6B63\u5728\u5907\u4EFD\u5B58\u50A8\u4E2D",content:(0,n.jsx)(Q.Z,{ghost:!0,style:{paddingTop:30},children:(0,n.jsx)(ca.Z,{columns:[{title:"\u5907\u4EFD\u6587\u4EF6",key:"backup",dataIndex:"backup",width:300,render:function(y,V,Y){return(0,n.jsx)(J.Z.Paragraph,{ellipsis:{rows:5,expandable:!0},children:V.backupTar})}},{title:"\u5907\u4EFD\u76EE\u5F55",key:"pathList",dataIndex:"pathList",render:function(y,V,Y){return V.pathList.map(function(ja,D){return(0,n.jsx)("div",{children:ja},D)})}}],dataSource:[{key:1,backupTar:O.data.backupTar,pathList:O.data.pathList}],rowKey:"key",pagination:!1})}),closable:!0,width:800}),W.abrupt("return",!0);case 7:case"end":return W.stop()}},E)}));return function(E){return H.apply(this,arguments)}}(),children:(0,n.jsx)(C.Z,{label:"\u6307\u5B9A\u5BBF\u4E3B\u673A\u76EE\u5F55",tooltip:"\u8BF7\u586B\u5199\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u4E0D\u5B58\u65F6\u4F1A\u65B0\u5EFA",name:"backupPath",placeholder:"/home/backup",initialValue:"/home/backup"})})]})}var _a=a(24963),ma=a(99861),w=a(3393),Ea=a(50888),Da=a(16596),Pa=(0,_.forwardRef)(function(c,ua){var z;(0,_.useImperativeHandle)(ua,function(){return{}});var ia=(0,s.useNavigate)(),q=(0,_.useRef)(),k=(0,_.useRef)(),aa=(0,_.useRef)(),H=(0,_.useContext)(_a.Z),E=H.message,Z=H.notice,F=H.loading,O=H.lang,T=(0,_.useRef)(),W=(0,_.useRef)(),U=(0,_.useState)(0),y=K()(U,2),V=y[0],Y=y[1],ja=function(){var D=I()(f()().mark(function d(e){var v,o,g;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=-2,!e.ignore){h.next=6;break}if(!(e.ignore.indexOf("".concat(e.info.Name,"@*"))>-1)){h.next=4;break}return h.abrupt("return",-2);case 4:if(!(e.ignore.indexOf("".concat(e.info.Name,"@").concat(e.info.Image))>-1)){h.next=6;break}return h.abrupt("return",-2);case 6:return h.next=8,(0,w.ZQ)({tag:(v=e.info.Config.Image)!==null&&v!==void 0?v:"",md5:e.info.Image,cacheTime:3600}).catch(function(X){o=-1});case 8:return g=h.sent,g&&(g.data.digestLocal&&g.data.digestLocal.length>0?o=g.data.upgrade?1:2:o=-2),h.abrupt("return",o);case 11:case"end":return h.stop()}},d)}));return function(e){return D.apply(this,arguments)}}();return(0,_.useEffect)(function(){c.checkContainerUpgrade&&(Y(0),ja(c.data).then(function(D){Y(D)}))},[c.data]),(0,n.jsx)(Q.Z,{ghost:c.ghost,title:(0,n.jsx)(M.Z,{}),subTitle:"\u5BB9\u5668\u7BA1\u7406",children:(0,n.jsxs)(t.Z,{wrap:!0,children:[(0,n.jsx)(A.Z,{icon:(0,n.jsx)(m.Z,{}),action:function(){var d,e;return(0,x.LJ)({md5:(d=(e=c.data)===null||e===void 0?void 0:e.info.Id)!==null&&d!==void 0?d:""})},confirm:"\u5BFC\u51FA\u5BB9\u5668 Tar \u5305\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55\u7684\u6570\u636E\uFF0C\u786E\u5B9A\u5417\uFF1F",onSuccess:function(d){var e,v=new Blob([d],{type:"application/tar"});(0,oa.saveAs)(v,((e=c.data)===null||e===void 0?void 0:e.info.Id)+".tar")},children:"\u5BFC\u51FA\u5BB9\u5668"}),(0,n.jsx)(A.Z,{icon:(0,n.jsx)(R.Z,{}),action:I()(f()().mark(function D(){var d,e,v,o,g;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,x.Re)({md5:(d=(e=c.data)===null||e===void 0?void 0:e.info.Id)!==null&&d!==void 0?d:"",name:(v=(o=k.current)===null||o===void 0?void 0:o.getFieldValue("saveImageName"))!==null&&v!==void 0?v:(g=c.data)===null||g===void 0?void 0:g.info.Name});case 2:case"end":return h.stop()}},D)})),confirmTitle:"\u5C06\u5F53\u524D\u5BB9\u5668\u4FDD\u5B58\u4E3A\u955C\u50CF",confirm:(0,n.jsx)(t.Z,{style:{width:400,marginTop:"10px",paddingRight:"10px"},direction:"vertical",children:(0,n.jsx)(u.A,{formRef:k,submitter:!1,children:(0,n.jsx)($.Z,{name:"saveImageName",children:(0,n.jsx)(p.Z,{addonBefore:"\u955C\u50CF\u540D\u79F0"})})})}),children:"\u53E6\u5B58\u4E3A\u955C\u50CF"}),c.data&&(0,n.jsx)(fa,{container:c.data.info}),(0,n.jsx)(A.Z,{icon:(0,n.jsx)(R.Z,{}),action:I()(f()().mark(function D(){var d,e,v,o,g;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,x.Re)({md5:(d=(e=c.data)===null||e===void 0?void 0:e.info.Id)!==null&&d!==void 0?d:"",name:(v=(o=k.current)===null||o===void 0?void 0:o.getFieldValue("saveImageName"))!==null&&v!==void 0?v:(g=c.data)===null||g===void 0?void 0:g.info.Name});case 2:case"end":return h.stop()}},D)})),confirmTitle:"\u5FEB\u7167\u5F53\u524D\u7684\u5BB9\u5668",confirm:(0,n.jsx)(t.Z,{style:{width:400,marginTop:"10px",paddingRight:"10px"},direction:"vertical",children:(0,n.jsxs)(u.A,{formRef:k,submitter:!1,children:[(0,n.jsxs)(G.UW,{children:[(0,n.jsx)($.Z,{valuePropName:"checked",name:"containerParams",initialValue:!0,children:(0,n.jsx)(r.Z,{children:"\u521B\u5EFA\u914D\u7F6E"})}),(0,n.jsx)($.Z,{name:"containerImage",valuePropName:"checked",children:(0,n.jsx)(r.Z,{children:"\u5BB9\u5668\u955C\u50CF"})}),(0,n.jsx)($.Z,{name:"containerVolume",valuePropName:"checked",initialValue:!0,children:(0,n.jsx)(r.Z,{children:"\u6302\u8F7D\u76EE\u5F55"})})]}),(0,n.jsx)(C.Z,{label:"\u5907\u4EFD\u8DEF\u5F84",placeholder:"\u6307\u5B9A\u5BBF\u4E3B\u673A\u7684\u8DEF\u5F84"})]})}),children:"\u5BB9\u5668\u5FEB\u7167"}),(0,n.jsx)(ta.Z,{type:"vertical"}),(0,n.jsx)(s.Link,{to:"/app/create/image?containerId=".concat((z=c.data)===null||z===void 0?void 0:z.info.Id,"&op=update"),children:(0,n.jsx)(ea.ZP,{type:"primary",icon:(0,n.jsx)(i.Z,{}),children:"\u7F16\u8F91\u5BB9\u5668"})}),(0,n.jsx)(A.Z,{icon:(0,n.jsx)(B.Z,{}),action:I()(f()().mark(function D(){var d,e,v,o;return f()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,x.aF)({md5:(d=(e=c.data)===null||e===void 0?void 0:e.info.Id)!==null&&d!==void 0?d:"",copyName:(v=(o=aa.current)===null||o===void 0?void 0:o.getFieldValue("copyName"))!==null&&v!==void 0?v:""});case 2:return P.abrupt("return",P.sent);case 3:case"end":return P.stop()}},D)})),confirm:(0,n.jsxs)(t.Z,{style:{width:400,paddingRight:"10px"},direction:"vertical",children:[(0,n.jsx)(J.Z.Text,{children:"\u590D\u5236\u51FA\u7684\u5BB9\u5668\u4E0E\u5F53\u524D\u5BB9\u5668\u5177\u6709\u76F8\u540C\u7684\u914D\u7F6E\uFF0C\u8BF7\u4E8C\u6B21\u7F16\u8F91\u540E\u542F\u52A8\u5BB9\u5668\u3002\u786E\u5B9A\u5417\uFF1F"}),(0,n.jsx)(u.A,{formRef:aa,submitter:!1,children:(0,n.jsx)($.Z,{name:"copyName",children:(0,n.jsx)(p.Z,{addonBefore:"\u590D\u5236\u5BB9\u5668\u540D\u79F0"})})})]}),onSuccess:function(d){ia("/app/list")},children:"\u590D\u5236\u5BB9\u5668"}),c.data&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ma.Z,{image:[c.data.info.Config.Image],ref:T}),(0,n.jsx)(da.Z,{placement:"bottomLeft",menu:{items:[{key:"1",label:(0,n.jsx)(A.Z,{action:I()(f()().mark(function D(){var d,e,v,o,g,P;return f()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,(0,j.ze)({md5:(d=(e=c.data.info)===null||e===void 0?void 0:e.Name)!==null&&d!==void 0?d:"",imageId:""});case 2:return Y(0),X.next=5,(0,w.ZQ)({tag:(v=(o=c.data.info)===null||o===void 0?void 0:o.Config.Image)!==null&&v!==void 0?v:"",md5:(g=(P=c.data.info)===null||P===void 0?void 0:P.Image)!==null&&g!==void 0?g:"",cacheTime:0}).then(function(ha){ha.data.digestLocal&&ha.data.digestLocal.length>0?Y(ha.data.upgrade?1:2):Y(-2)}).catch(function(ha){Y(-1)});case 5:return X.abrupt("return",X.sent);case 6:case"end":return X.stop()}},D)})),type:"link",children:"\u81EA\u52A8\u68C0\u6D4B"})},{key:"2",label:(0,n.jsx)(A.Z,{action:I()(f()().mark(function D(){var d,e,v,o;return f()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,j.ze)({md5:(d=(e=c.data.info)===null||e===void 0?void 0:e.Name)!==null&&d!==void 0?d:"",imageId:(v=(o=c.data.info)===null||o===void 0?void 0:o.Image)!==null&&v!==void 0?v:""});case 2:return P.abrupt("return",P.sent);case 3:case"end":return P.stop()}},D)})),type:"link",children:"\u5FFD\u7565\u672C\u6B21"})},{key:"3",label:(0,n.jsx)(A.Z,{action:I()(f()().mark(function D(){var d,e;return f()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,j.ze)({md5:(d=(e=c.data.info)===null||e===void 0?void 0:e.Name)!==null&&d!==void 0?d:"",imageId:"*"});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},D)})),type:"link",children:"\u6C38\u4E45\u5FFD\u7565"})}]},children:(0,n.jsx)(ra.Z,{count:O("app.detail.checkImageUpgrade."+V),color:O("app.detail.checkImageUpgradeColor."+V),children:(0,n.jsx)(A.Z,{disabled:V===0,icon:V===0?(0,n.jsx)(Ea.Z,{}):(0,n.jsx)(Da.Z,{}),action:I()(f()().mark(function D(){var d,e,v,o,g;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(d=T.current)===null||d===void 0?void 0:d.start();case 2:return F.show(),(e=T.current)===null||e===void 0||e.finish(),h.next=6,(0,x.RF)({md5:(v=c.data.info.Id)!==null&&v!==void 0?v:"",imageTag:"",enableBak:(o=(g=W.current)===null||g===void 0?void 0:g.getFieldValue("enableBak"))!==null&&o!==void 0?o:!0});case 6:return h.abrupt("return",h.sent);case 7:case"end":return h.stop()}},D)})),confirm:(0,n.jsxs)(t.Z,{style:{width:280,paddingRight:"10px"},direction:"vertical",children:[(0,n.jsx)(J.Z.Text,{children:"\u66F4\u65B0\u5BB9\u5668\u524D\u8BF7\u786E\u4FDD\u8FDC\u7A0B Docker \u7248\u672C\u4E0E\u9762\u677F\u73AF\u5883\u4E00\u81F4\u3002\u6B64\u64CD\u4F5C\u5C06\u4F1A\u91CD\u65B0\u62C9\u53D6\u955C\u50CF\u5E76\u91CD\u5EFA\u5BB9\u5668\u3002\u786E\u5B9A\u5417\uFF1F"}),(0,n.jsx)(u.A,{formRef:W,submitter:!1,layout:"inline",children:(0,n.jsx)($.Z,{name:"enableBak",initialValue:!0,valuePropName:"checked",children:(0,n.jsx)(r.Z,{children:"\u5907\u4EFD\u65E7\u5BB9\u5668\uFF1F"})})})]}),onSuccess:function(d){F.destroy(),c.checkContainerUpgrade&&c.checkContainerUpgrade()},children:"\u5FEB\u901F\u5347\u7EA7\u5BB9\u5668"})})})]}),(0,n.jsx)(ta.Z,{type:"vertical"}),c.data&&(0,n.jsx)(A.Z,{action:function(){var d,e,v,o,g,P;return(0,j.Ct)({md5:(d=(e=c.data)===null||e===void 0?void 0:e.info.Id)!==null&&d!==void 0?d:"",deleteImage:(v=(o=q.current)===null||o===void 0?void 0:o.getFieldValue("deleteImage"))!==null&&v!==void 0?v:!1,deleteVolume:(g=(P=q.current)===null||P===void 0?void 0:P.getFieldValue("deleteVolume"))!==null&&g!==void 0?g:!1})},danger:!0,type:"primary",icon:(0,n.jsx)(l.Z,{}),onSuccess:function(){F.destroy(),c.checkContainerUpgrade&&c.checkContainerUpgrade()},confirm:(0,n.jsxs)(t.Z,{style:{width:200},direction:"vertical",children:[(0,n.jsx)(J.Z.Text,{children:O("notification.confirm.title")}),(0,n.jsxs)(u.A,{formRef:q,layout:"inline",submitter:!1,children:[(0,n.jsx)($.Z,{name:"deleteVolume",valuePropName:"checked",children:(0,n.jsx)(r.Z,{children:"\u5220\u9664\u5B58\u50A8\uFF1F"})}),(0,n.jsx)($.Z,{name:"deleteImage",valuePropName:"checked",children:(0,n.jsx)(r.Z,{children:"\u5220\u9664\u955C\u50CF\uFF1F"})})]})]}),children:"\u5220\u9664"})]})})}),ga=Pa},14189:function(na,S,a){var b=a(43425),f=a(74842),N=a(87784),I=a(33160),L=a(30159),K=a(89035),_=a(38345),A=a(42075),j=a(96074),x=a(28036),M=a(67294),m=a(94359),R=a(80821),i=a(60335),B=a(57716),l=a(85893),Q=(0,M.forwardRef)(function(u,$){(0,M.useImperativeHandle)($,function(){return{}});var G=(0,M.useRef)();return(0,l.jsx)(_.Z,{title:(0,l.jsx)(b.Z,{}),ghost:u.ghost,subTitle:(0,l.jsxs)(A.Z,{children:["\u72B6\u6001\u7BA1\u7406 - ",u.data&&(0,l.jsx)(m.Z,{status:u.data.State.Status,message:{content:u.data.State.Status,placement:"top"}})]}),children:(0,l.jsxs)(A.Z,{wrap:!0,children:[(0,l.jsx)(R.Z,{icon:(0,l.jsx)(f.Z,{}),action:function(){var s,t;return(0,i.IW)({md5:(s=(t=u.data)===null||t===void 0?void 0:t.Id)!==null&&s!==void 0?s:"",operate:"start"})},onSuccess:function(){return u.onFinish&&u.onFinish()},disabled:u.data&&u.data.State.Running||u.data&&u.data.State.Paused,children:"\u542F\u52A8"}),(0,l.jsx)(R.Z,{action:function(){var s,t;return(0,i.IW)({md5:(s=(t=u.data)===null||t===void 0?void 0:t.Id)!==null&&s!==void 0?s:"",operate:"stop"})},icon:(0,l.jsx)(N.Z,{}),onSuccess:function(){return u.onFinish&&u.onFinish()},disabled:u.data&&u.data.State.Dead,children:"\u505C\u6B62"}),(0,l.jsx)(R.Z,{action:function(){var s,t;return(0,i.IW)({md5:(s=(t=u.data)===null||t===void 0?void 0:t.Id)!==null&&s!==void 0?s:"",operate:"restart"})},onSuccess:function(){return u.onFinish&&u.onFinish()},icon:(0,l.jsx)(I.Z,{}),children:"\u91CD\u542F"}),(0,l.jsx)(R.Z,{action:function(){var s,t;return(0,i.IW)({md5:(s=(t=u.data)===null||t===void 0?void 0:t.Id)!==null&&s!==void 0?s:"",operate:"pause"})},onSuccess:function(){return u.onFinish&&u.onFinish()},icon:(0,l.jsx)(L.Z,{}),disabled:u.data&&u.data&&!u.data.State.Running,children:"\u6682\u505C"}),(0,l.jsx)(R.Z,{action:function(){var s,t;return(0,i.IW)({md5:(s=(t=u.data)===null||t===void 0?void 0:t.Id)!==null&&s!==void 0?s:"",operate:"unpause"})},onSuccess:function(){return u.onFinish&&u.onFinish()},icon:(0,l.jsx)(f.Z,{}),disabled:u.data&&!u.data.State.Paused,children:"\u6062\u590D"}),(0,l.jsx)(j.Z,{type:"vertical"}),u.data&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(B.Z,{ref:G}),(0,l.jsx)(x.ZP,{type:"dashed",onClick:function(){var s;u.data&&((s=G.current)===null||s===void 0||s.show(u.data.Id))},icon:(0,l.jsx)(K.Z,{}),children:"Console"})]}),(0,l.jsx)(j.Z,{type:"vertical"}),u.extra&&u.extra.map(function(C,s){return(0,l.jsx)("span",{children:C},s)})]})})});S.Z=Q},52031:function(na,S,a){a.d(S,{Z:function(){return A}});var b=a(31574),f=a(95591),N=a(38345),I=a(26412),L=a(78451),K=a(82346),_=a(85893);function A(j){var x;return j.data&&j.data.Mounts&&j.data.Mounts.length>0&&(0,_.jsx)(N.Z,{ghost:j.ghost,title:(0,_.jsx)(b.Z,{}),subTitle:"\u6302\u8F7D\u76EE\u5F55\u8BE6\u60C5",children:(0,_.jsx)(I.Z,{column:1,bordered:!0,children:(x=j.data)===null||x===void 0?void 0:x.Mounts.map(function(M,m){var R;return(0,_.jsx)(I.Z.Item,{labelStyle:{width:"30%"},label:M.Type=="volume"?(0,_.jsx)(L.Z,{content:M.Name}):M.Source,children:(0,_.jsxs)(K.Link,{target:"_blank",to:"/app/detail/file/".concat((R=j.data)===null||R===void 0?void 0:R.Id,"?tab=file&path=").concat(encodeURIComponent(M.Destination)),children:[M.Destination," ",(0,_.jsx)(f.Z,{})]})},m)})})})}},94359:function(na,S,a){a.d(S,{Z:function(){return R}});var b=a(67294),f=a(3089),N=a(98165),I=a(18429),L=a(8751),K=a(14313),_=a(30159),A=a(87740),j=a(66309),x=a(83062),M=a(82346),m=a(85893);function R(i){var B=(0,m.jsx)(m.Fragment,{});if(i.status=="0"&&(B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(f.Z,{}),color:"default",children:"waiting"})),i.status=="10"&&(B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(N.Z,{spin:!0}),color:"processing",children:"processing"})),i.status=="20"&&(B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(I.Z,{}),color:"error",children:"error"})),i.status=="30"&&(B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(L.Z,{}),color:"success",children:"success"})),i.status=="running"||i.status=="healthy"){var l,Q;B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(K.Z,{}),color:"success",children:(l=i.message)!==null&&l!==void 0&&l.showInTag?(Q=i.message)===null||Q===void 0?void 0:Q.content:i.status})}if(i.status=="paused"){var u,$;B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(_.Z,{}),children:(u=i.message)!==null&&u!==void 0&&u.showInTag?($=i.message)===null||$===void 0?void 0:$.content:i.status})}if(i.status=="waiting"||i.status=="starting"){var G,C;B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(A.Z,{}),children:(G=i.message)!==null&&G!==void 0&&G.showInTag?(C=i.message)===null||C===void 0?void 0:C.content:i.status})}if(i.status=="exited"||i.status=="dead"||i.status=="removing"||i.status=="restarting"||i.status=="unhealthy"||i.status=="created"){var s,t;B=(0,m.jsx)(j.Z,{icon:(0,m.jsx)(I.Z,{}),color:"warning",children:(s=i.message)!==null&&s!==void 0&&s.showInTag?(t=i.message)===null||t===void 0?void 0:t.content:i.status})}if(i.link&&(B=(0,m.jsx)(M.Link,{to:i.link,children:B})),i.message){var p;B=(0,m.jsx)(x.Z,{placement:(p=i.message.placement)!==null&&p!==void 0?p:"top",title:i.message.content,children:B})}return(0,m.jsx)(m.Fragment,{children:B})}},76428:function(na,S,a){a.d(S,{Z:function(){return I}});var b=a(25593),f=a(67294),N=a(85893);function I(L){return(0,N.jsx)(b.Z.Text,{copyable:!0,children:L.title})}},78498:function(na,S,a){a.d(S,{Z:function(){return K}});var b=a(25035),f=a(42075),N=a(83062),I=a(67294),L=a(85893);function K(_){return(0,L.jsxs)(f.Z,{children:[_.title,(0,L.jsx)(N.Z,{title:_.help,children:(0,L.jsx)(b.Z,{})})]})}}}]);
