"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(ee,R,n){n.d(R,{Z:function(){return P}});var L=n(5574),r=n.n(L),k=n(24963),_=n(86738),p=n(28036),x=n(83062),I=n(67294),U=n(85893);function P(l){var O=(0,I.useState)(!1),h=r()(O,2),T=h[0],u=h[1],e=(0,I.useContext)(k.Z),d=e.lang,W=e.notice,H=e.message,S=function(){u(!0);var K=l.action();K instanceof Promise?K.then(function(V){if(u(!1),V){typeof l.onSuccess=="function"&&l.onSuccess(V);var C="";l.messageSuccess?typeof l.messageSuccess=="function"?C=l.messageSuccess(V):C=l.messageSuccess.indexOf("notification.")==0?d(l.messageSuccess):l.messageSuccess:C=d("notification.finish"),l.asynced?H.info(C):H.success(C)}}).catch(function(V){u(!1),typeof l.onError=="function"&&l.onError(V)}):u(!1)};return l.confirm?(0,U.jsx)(_.Z,{style:{width:500},title:l.confirmTitle?l.confirmTitle:d("notification.title.tip"),description:typeof l.confirm=="string"&&l.confirm.indexOf("notification.")==0?d(l.confirm):l.confirm,onConfirm:S,okText:"Yes",cancelText:"No",children:(0,U.jsx)(p.ZP,{block:l.block,disabled:l.disabled,icon:l.icon,loading:T,danger:l.danger,type:l.type,children:l.children})}):(0,U.jsx)(x.Z,{title:l.tips,children:(0,U.jsx)(p.ZP,{block:l.block,style:l.ghost?{padding:0,height:"auto"}:{},disabled:l.disabled,icon:l.icon,loading:T,onClick:S,danger:l.danger,type:l.type,children:l.children})})}},27619:function(ee,R,n){n.d(R,{Z:function(){return O}});var L=n(97857),r=n.n(L),k=n(19632),_=n.n(k),p=n(5574),x=n.n(p),I=n(64183),U=n(82346),P=n(67294),l=n(85893);function O(h){var T,u=(0,P.useState)("academy"),e=x()(u,2),d=e[0],W=e[1],H=Math.max.apply(Math,_()(h.data.map(function(c){var t;return(t=c[h.yField])!==null&&t!==void 0?t:0}))),S=(0,U.useModel)("@@initialState"),X=S.initialState,K=S.loading,V=S.error,C=S.refresh,f=S.setInitialState,v={xField:h.xField,yField:h.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:h.yLabelFormatter},scale:{y:{domainMin:(T=h.yDomainMin)!==null&&T!==void 0?T:0,domainMax:h.yDomainMax?h.yDomainMax:h.yDomainMaxCallback?h.yDomainMaxCallback(H):H}},data:h.data};return h.yLabelFormatter&&(v.axis.y.labelFormatter=h.yLabelFormatter),h.colorField&&(v.colorField=h.colorField),(0,P.useEffect)(function(){(X==null?void 0:X.theme.algorithm)=="dark"?W("classicDark"):W("academy")},[X]),(0,l.jsx)(I.Z,r()({theme:d},v))}},24963:function(ee,R,n){var L=n(67294),r=(0,L.createContext)({});R.Z=r},76214:function(ee,R,n){n.r(R),n.d(R,{default:function(){return Xe}});var L=n(15009),r=n.n(L),k=n(99289),_=n.n(k),p=n(5574),x=n.n(p),I=n(19632),U=n.n(I),P=n(80821),l=n(27619),O=n(97857),h=n.n(O),T=n(28413),u=n(67294),e=n(85893),d=(0,u.forwardRef)(function(M,ne){(0,u.useImperativeHandle)(ne,function(){return{zoomIn:function(){G<=0||G-5<=0?q(1):q(G-5)},zoomOut:function(){G>M.data.length||G+5>M.data.length?q(M.data.length):q(G+5)}}});var te=(0,u.useState)(20),J=x()(te,2),G=J[0],q=J[1],ie={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1},se=function(){return M.data.length<=G?M.data:M.data.slice(0,G)};return(0,u.useEffect)(function(){},[]),M.data?(0,e.jsx)(T.Z,h()(h()({},ie),{},{height:500,data:{name:"root",children:se()}})):(0,e.jsx)(e.Fragment,{})}),W=d,H=n(55241),S=n(71230),X=n(15746),K=n(38703),V=(0,u.forwardRef)(function(M,ne){return(0,u.useImperativeHandle)(ne,function(){return{}}),(0,e.jsxs)(H.Z,{placement:"left",children:[(0,e.jsx)(S.Z,{justify:"center",children:(0,e.jsx)(X.Z,{children:(0,e.jsx)(K.Z,{percent:M.showPercent,type:"dashboard",format:function(J,G){return"".concat(J,"%")},size:150,status:M.showPercent>=100?"exception":"normal"})})}),(0,e.jsx)(S.Z,{justify:"center",children:(0,e.jsxs)(X.Z,{style:{marginTop:"10px"},children:[M.showLabel,": ",M.showUse," / ",M.showTotal]})})]})}),C=V,f=n(24963),v=n(62597),c=n(87662),t=n(2831),D=n(18148),i=n(89075),B=n(5251),ke=n(45605),We=n(23430),Ke=n(1210),le=n(12122),ze=n(35598),Ge=n(15668),Z=n(38345),De=n(184),A=n(88273),Y=n(82346),re=n(42075),de=n(28036),z=n(26412),Ie=n(83062),Ne=n(40411),Oe=n(25593),xe=n(63490),Ve=n(86250),He=n(96074),Se=n(93162);function Xe(){var M,ne,te,J,G,q,ie,se,ae,ce,me,_e,pe,he,fe,ve,ge,je,ye,Ee,Ye=function(o,m){switch(m.type){case"update":var F=new Date().toLocaleTimeString(),j=0,y=0,ue=0,oe=0,N=0,b=0;m.payload.map(function(w){j+=w.cpu,y+=w.memory.in,ue+=w.networkIO.in,oe+=w.networkIO.out,N+=w.blockIO.in,b+=w.blockIO.out});var Q={list:m.payload,cpu:j,memory:y,network:[].concat(U()(o.network),[{date:F,usage:oe,type:"\u4E0A\u884C",source:{usage:oe}},{date:F,type:"\u4E0B\u884C",usage:ue,source:{usage:ue}}]),io:[].concat(U()(o.io),[{date:F,usage:b,type:"\u8BFB\u53D6",source:{usage:b}},{date:F,type:"\u5199\u5165",usage:N,source:{usage:N}}])};return Q}},Ce=(0,Y.useAccess)(),be=(0,u.useRef)(),Qe=(0,u.useState)(),Me=x()(Qe,2),Pe=Me[0],Je=Me[1],qe=(0,u.useState)(),Fe=x()(qe,2),a=Fe[0],en=Fe[1],nn=(0,u.useState)(),Re=x()(nn,2),E=Re[0],tn=Re[1],an=(0,u.useState)(),Ue=x()(an,2),s=Ue[0],rn=Ue[1],sn=(0,u.useState)(),Ze=x()(sn,2),Te=Ze[0],un=Ze[1],ln=(0,u.useReducer)(Ye,{cpu:0,memory:0,network:[],io:[],list:[]}),Le=x()(ln,2),$=Le[0],Be=Le[1],on=(0,u.useContext)(f.Z),$e=on.loading,Ae=(0,Y.useModel)("subscriber");Ae.addDataHandler("container:stat",function(g){Be({type:"update",payload:g.data})});var we=function(){var g=_()(r()().mark(function o(){var m,F,j,y,ue;return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return $e.show(),N.next=3,(0,t.Ll)();case 3:return m=N.sent,rn(m.data),N.next=7,(0,t.aF)().finally(function(){$e.destroy()});case 7:return F=N.sent,en(F.data),j={total:0,container:0,volume:0,image:0,cache:0,item:[],updatedAt:""},y=m.data.diskUsage,y.usage.Containers&&y.usage.Containers.map(function(b){var Q,w;j.container+=b.SizeRootFs+((Q=b.SizeRw)!==null&&Q!==void 0?Q:0),j.item.push({name:b.Names[0],value:parseFloat(((b.SizeRootFs+((w=b.SizeRw)!==null&&w!==void 0?w:0))/1024/1024).toFixed(2))})}),y.usage.Volumes&&y.usage.Volumes.map(function(b){j.volume+=b.UsageData.Size,j.item.push({name:b.Name,value:parseFloat((b.UsageData.Size/1024/1024).toFixed(2))})}),y.usage.Images&&y.usage.Images.map(function(b){var Q,w;j.image+=b.Size-((Q=b.Sharedsize)!==null&&Q!==void 0?Q:0),j.item.push({name:b.RepoTags&&b.RepoTags.length>0?b.RepoTags[0]:b.Id,value:parseFloat(((b.Size-((w=b.Sharedsize)!==null&&w!==void 0?w:0))/1024/1024).toFixed(2))})}),y.usage.BuildCache&&y.usage.BuildCache.map(function(b){j.cache+=b.Size}),!y.usage.Containers&&!y.usage.Images&&!y.usage.Volumes?j.item.push({name:"\u6B63\u5728\u83B7\u53D6\u8BA1\u7B97,\u4E2A\u522B\u7CFB\u7EDF\u4F1A\u6BD4\u8F83\u8017\u65F6.",value:100}):j.updatedAt=new Date(y.updatedAt).toLocaleString(),j.total=y.usage.LayersSize,tn(j),N.next=20,(0,c.Cz)({follow:!0});case 20:ue=N.sent,Be({type:"update",payload:[]});case 22:case"end":return N.stop()}},o)}));return function(){return g.apply(this,arguments)}}();return(0,u.useEffect)(function(){return we(),Ce.canSeePe&&(0,i.YQ)().then(function(g){Je(g.data)}),(0,t.u5)().then(function(g){un(g.data)}),function(){Ae.progress.close("container:stat")}},[]),(0,e.jsxs)(Z.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsxs)(Z.Z,{bordered:!0,split:"vertical",children:[(0,e.jsx)(Z.Z,{style:{height:"570px"},colSpan:"40%",headerBordered:!0,title:(0,e.jsx)(ke.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",extra:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(P.Z,{type:"link",icon:(0,e.jsx)(We.Z,{}),action:function(){var o;return(0,v.XH)({id:(o=a==null?void 0:a.dpanel.containerInfo.Id)!==null&&o!==void 0?o:"dpanel",lineTotal:-1,showTime:!1})},onSuccess:function(o){var m=new Blob([o],{type:"text/plain"});(0,Se.saveAs)(m,"dpanel-debug.log")},children:"\u65E5\u5FD7"}),Ce.canSeePe?Pe&&Pe.expireTime?(0,e.jsxs)("span",{children:["\u8FC7\u671F\u65F6\u95F4: ",new Date(Pe.expireTime).toLocaleString()]},"expireTime"):(0,e.jsx)(de.ZP,{type:"link",onClick:_()(r()().mark(function g(){var o,m;return r()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,i.$w)();case 2:o=j.sent,m=new Blob([o.data.code],{type:"text/plain"}),(0,Se.saveAs)(m,"dpanel.code");case 5:case"end":return j.stop()}},g)})),children:"\u6388\u6743\u7801"},"downloadCode"):(0,e.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/pro",target:"_blank",children:"Pro \u7248"},"proLink")]}),children:(0,e.jsxs)(z.Z,{column:1,labelStyle:{width:100,justifyContent:"flex-end"},children:[(0,e.jsx)(z.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(re.Z,{direction:"horizontal",children:["DPanel - ",a==null?void 0:a.dpanel.version," - ",a==null?void 0:a.dpanel.env," - ",a==null?void 0:a.dpanel.family,(0,e.jsx)(Ie.Z,{title:"\u5347\u7EA7\u65E5\u5FD7",children:(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel/releases",children:(0,e.jsx)(Ke.Z,{})})}),Te&&Te.newVersion!=""&&(0,e.jsx)(Y.Link,{to:"/system/upgrade",children:(0,e.jsx)(Ne.Z,{count:Te.newVersion,size:"small"})})]})}),(0,e.jsxs)(z.Z.Item,{label:"Docker Host",children:[a==null?void 0:a.info.Name," ",(0,e.jsx)(e.Fragment,{children:(a==null?void 0:a.info.ID)==""&&(0,e.jsx)(Y.Link,{to:"/system/env?id=local",children:"\u914D\u7F6E\u9ED8\u8BA4 Docker \u5BA2\u6237\u7AEF"})})]}),(0,e.jsx)(z.Z.Item,{label:"Docker \u7248\u672C",children:"".concat(a==null?void 0:a.info.OperatingSystem," - ").concat(a==null?void 0:a.info.ServerVersion," - ").concat(a==null?void 0:a.sdkVersion)}),(0,e.jsx)(z.Z.Item,{label:"\u6587\u4EF6\u5B58\u50A8\u9A71\u52A8",children:"".concat(a==null?void 0:a.info.Driver)}),(0,e.jsx)(z.Z.Item,{label:"\u65E5\u5FD7\u9A71\u52A8",children:"".concat(a==null?void 0:a.info.LoggingDriver)}),(0,e.jsx)(z.Z.Item,{label:"\u7CFB\u7EDF\u67B6\u6784",children:"".concat(a==null?void 0:a.info.KernelVersion," - ").concat(a==null?void 0:a.info.Architecture)}),(0,e.jsxs)(z.Z.Item,{label:"Cpu",children:[a==null?void 0:a.info.NCPU," \u6838"]}),(0,e.jsx)(z.Z.Item,{label:"Memory",children:(0,B.FI)((M=a==null?void 0:a.info.MemTotal)!==null&&M!==void 0?M:0)}),(0,e.jsx)(z.Z.Item,{label:"\u6839\u76EE\u5F55",children:a==null?void 0:a.info.DockerRootDir}),(0,e.jsx)(z.Z.Item,{label:"\u5B58\u50A8\u5377\u63D2\u4EF6",children:(0,e.jsx)(re.Z,{children:a==null?void 0:a.info.Plugins.Volume})}),(0,e.jsx)(z.Z.Item,{label:"\u7F51\u7EDC\u63D2\u4EF6",children:(0,e.jsx)(re.Z,{children:a==null?void 0:a.info.Plugins.Network})}),(0,e.jsx)(z.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((ne=a==null?void 0:a.info.SystemTime)!==null&&ne!==void 0?ne:"").toLocaleString()})]})}),(0,e.jsxs)(Z.Z,{headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u5BB9\u5668\u8FD0\u884C\u7EDF\u8BA1",split:"horizontal",extra:(0,e.jsx)(De.a,{title:"\u5BB9\u5668\u72B6\u6001\u6570\u636E",submitter:!1,trigger:(0,e.jsx)(Oe.Z.Link,{children:"\u8BE6\u60C5\u6570\u636E"}),children:(0,e.jsx)(xe.Z,{pagination:!1,dataSource:$.list,rowKey:"name",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"},{title:"Cpu",dataIndex:"cpu",sorter:function(o,m){return o.cpu-m.cpu},render:function(o,m,F){return"".concat(m.cpu.toFixed(2),"%")}},{title:"\u5185\u5B58",dataIndex:"memory",sorter:function(o,m){return o.memory.in-m.memory.in},render:function(o,m,F){var j,y;return"".concat((0,B.FI)((j=m==null?void 0:m.memory.in)!==null&&j!==void 0?j:0)," / ").concat((0,B.FI)((y=m==null?void 0:m.memory.out)!==null&&y!==void 0?y:0))}},{title:"\u7F51\u7EDC I/O",dataIndex:"networkIO",render:function(o,m,F){return"".concat((0,B.FI)(m.networkIO.in)," / ").concat((0,B.FI)(m.networkIO.out))}},{title:"\u78C1\u76D8 I/O",dataIndex:"blockIO",render:function(o,m,F){return"".concat((0,B.FI)(m.blockIO.in)," / ").concat((0,B.FI)(m.blockIO.out))}}]})}),children:[(0,e.jsx)(Z.Z,{children:(0,e.jsxs)(Ve.Z,{gap:50,align:"center",justify:"space-evenly",children:[(0,e.jsx)(C,{showPercent:parseFloat(((te=$==null?void 0:$.cpu)!==null&&te!==void 0?te:0).toFixed(2)),showLabel:"Cpu",showUse:"".concat((((J=$==null?void 0:$.cpu)!==null&&J!==void 0?J:0)/100*((G=a==null?void 0:a.info.NCPU)!==null&&G!==void 0?G:0)).toFixed(2)),showTotal:"".concat((q=a==null?void 0:a.info.NCPU)!==null&&q!==void 0?q:0," \u6838")}),(0,e.jsx)(C,{showPercent:parseFloat((((ie=$==null?void 0:$.memory)!==null&&ie!==void 0?ie:0)/((se=a==null?void 0:a.info.MemTotal)!==null&&se!==void 0?se:0)*100).toFixed(2)),showLabel:"\u5185\u5B58",showUse:(0,B.FI)((ae=$==null?void 0:$.memory)!==null&&ae!==void 0?ae:0),showTotal:"".concat((0,B.FI)((ce=a==null?void 0:a.info.MemTotal)!==null&&ce!==void 0?ce:0))})]})}),(0,e.jsxs)(Z.Z,{split:"vertical",wrap:!0,children:[(0,e.jsx)(Z.Z,{colSpan:12,title:(0,e.jsx)(le.Z,{}),subTitle:"\u7F51\u7EDC",headerBordered:!0,children:(0,e.jsx)(l.Z,{yField:"usage",xField:"date",colorField:"type",data:$.network,yLabelFormatter:function(o){return(0,B.FI)(parseFloat(o))},yDomainMaxCallback:function(o){return o*1.5}})}),(0,e.jsx)(Z.Z,{colSpan:12,title:(0,e.jsx)(le.Z,{}),subTitle:"\u78C1\u76D8",headerBordered:!0,children:(0,e.jsx)(l.Z,{yField:"usage",xField:"date",colorField:"type",data:$.io,yLabelFormatter:function(o){return(0,B.FI)(parseFloat(o))},yDomainMaxCallback:function(o){return o*1.5}})})]})]})]}),(0,e.jsxs)(Z.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u7528\u91CF\u7EDF\u8BA1",extra:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(de.ZP,{icon:(0,e.jsx)(ze.Z,{}),onClick:function(){var o;(o=be.current)===null||o===void 0||o.zoomIn()},shape:"circle"}),(0,e.jsx)(de.ZP,{icon:(0,e.jsx)(Ge.Z,{}),onClick:function(){var o;(o=be.current)===null||o===void 0||o.zoomOut()},shape:"circle"}),(0,e.jsx)(He.Z,{type:"vertical"}),(0,e.jsx)("span",{children:E&&E.updatedAt?"\u6570\u636E\u6700\u540E\u66F4\u65B0: ".concat(E.updatedAt):""},"lastUpdate")]},"size"),children:[(0,e.jsx)(Z.Z,{colSpan:"50%",ghost:!0,children:(E==null?void 0:E.item)&&(E==null?void 0:E.item.length)>0&&(0,e.jsx)(W,{ref:be,data:(me=E==null?void 0:E.item)!==null&&me!==void 0?me:[]})}),(0,e.jsxs)(Z.Z,{split:"horizontal",ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u5BB9\u5668",value:(0,B.FI)((_e=E==null?void 0:E.container)!==null&&_e!==void 0?_e:0),description:"\u5BB9\u5668\u5360\u7528\u53CA\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(A.Z,{statistic:{title:"\u955C\u50CF",value:(0,B.FI)((pe=E==null?void 0:E.image)!==null&&pe!==void 0?pe:0),description:"\u5305\u542B\u4E2D\u95F4\u955C\u50CF"}}),(0,e.jsx)(A.Z,{statistic:{title:"\u5B58\u50A8",value:(0,B.FI)((he=E==null?void 0:E.volume)!==null&&he!==void 0?he:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(A.Z,{statistic:{title:"\u6784\u5EFA\u7F13\u5B58",value:(0,B.FI)((fe=E==null?void 0:E.cache)!==null&&fe!==void 0?fe:0),description:(0,e.jsx)(P.Z,{action:function(){return(0,D.c5)()},type:"link",onSuccess:function(){we()},ghost:!0,children:"\u6E05\u9664"})}})]}),(0,e.jsxs)(Z.Z,{ghost:!0,split:"horizontal",children:[(0,e.jsx)(Z.Z,{ghost:!0,children:(0,e.jsxs)(A.Z.Group,{children:[(0,e.jsx)(A.Z,{statistic:{title:"\u5BB9\u5668",value:(ve=a==null?void 0:a.info.Containers)!==null&&ve!==void 0?ve:0,description:(0,e.jsx)(Y.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(A.Z,{statistic:{title:"\u9884\u8B66",status:"error",valueRender:function(o){var m,F,j,y=0;return s&&s.total&&s.total.containerRunning.stop&&(y+=s.total.containerRunning.stop),s&&s.total&&s.total.containerRunning.pause&&(y+=s.total.containerRunning.pause),s&&s.total&&s.total.containerRunning.unhealthy&&(y+=s.total.containerRunning.unhealthy),(0,e.jsx)(Ie.Z,{title:"\u505C\u6B62\uFF1A".concat((m=s==null?void 0:s.total.containerRunning.stop)!==null&&m!==void 0?m:0,"\uFF0C\u6682\u505C\uFF1A").concat((F=s==null?void 0:s.total.containerRunning.pause)!==null&&F!==void 0?F:0,"\uFF0C\u4E0D\u5065\u5EB7\uFF1A").concat((j=s==null?void 0:s.total.containerRunning.unhealthy)!==null&&j!==void 0?j:0),children:y})}}}),(0,e.jsx)(A.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(ge=s==null?void 0:s.total.containerTask)!==null&&ge!==void 0?ge:0,description:(0,e.jsx)(Y.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(Z.Z,{ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((je=(s==null?void 0:s.diskUsage.usage.Images)&&(s==null?void 0:s.diskUsage.usage.Images.length))!==null&&je!==void 0?je:0),description:(0,e.jsx)(Y.Link,{to:"/image/list",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u4EFB\u52A1",value:(ye=s==null?void 0:s.total.imageTask)!==null&&ye!==void 0?ye:0,description:(0,e.jsx)(Y.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chartPlacement:"left"})]}),(0,e.jsxs)(Z.Z,{ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u7F51\u7EDC",value:s==null?void 0:s.total.network,description:(0,e.jsx)(Y.Link,{to:"/docker/network",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u7AEF\u53E3\u6620\u5C04",value:s==null?void 0:s.total.port,description:(0,e.jsx)(De.a,{submitter:!1,title:"\u67E5\u770B\u6620\u5C04\u7AEF\u53E3",trigger:(0,e.jsx)(Oe.Z.Link,{children:"\u67E5\u770B"}),children:(0,e.jsx)(xe.Z,{pagination:!1,dataSource:s==null?void 0:s.port,rowKey:"name",columns:[{title:"\u4E3B\u673A\u7AEF\u53E3",dataIndex:["port","host"],sorter:function(o,m){return parseInt(o.port.host)-parseInt(m.port.host)},render:function(o,m,F){return"".concat(m.port.hostIp,":").concat(m.port.host)}},{title:"\u5BB9\u5668\u7AEF\u53E3",dataIndex:["port","dest"]},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"}]})})},chartPlacement:"left"})]}),(0,e.jsxs)(Z.Z,{ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(Ee=(s==null?void 0:s.diskUsage.usage.Volumes)&&(s==null?void 0:s.diskUsage.usage.Volumes.length))!==null&&Ee!==void 0?Ee:0,description:(0,e.jsx)(Y.Link,{to:"/docker/volume",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u5907\u4EFD",value:s==null?void 0:s.total.backup,description:(0,e.jsx)(Y.Link,{to:"/app/backup",children:"\u67E5\u770B"})},chartPlacement:"left"})]})]})]})]})}},62597:function(ee,R,n){n.d(R,{$G:function(){return x},Ct:function(){return d},Tb:function(){return l},XH:function(){return h},cl:function(){return U},iE:function(){return u},xb:function(){return H},ze:function(){return V}});var L=n(15009),r=n.n(L),k=n(99289),_=n.n(k),p=n(82346);function x(f){return I.apply(this,arguments)}function I(){return I=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/create-by-image",{method:"POST",data:v}));case 1:case"end":return t.stop()}},f)})),I.apply(this,arguments)}function U(f){return P.apply(this,arguments)}function P(){return P=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/get-list",{method:"POST",data:v}));case 1:case"end":return t.stop()}},f)})),P.apply(this,arguments)}function l(f){return O.apply(this,arguments)}function O(){return O=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v.download=!1,t.next=3,(0,p.request)("/api/app/log/run",{method:"POST",data:v});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},f)})),O.apply(this,arguments)}function h(f){return T.apply(this,arguments)}function T(){return T=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v.download=!0,t.next=3,(0,p.request)("/api/app/log/run",{method:"POST",data:v,responseType:"blob"});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},f)})),T.apply(this,arguments)}function u(f){return e.apply(this,arguments)}function e(){return e=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.request)("/api/app/site/get-detail",{data:v,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},f)})),e.apply(this,arguments)}function d(f){return W.apply(this,arguments)}function W(){return W=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/container/delete",{method:"POST",data:v}));case 1:case"end":return t.stop()}},f)})),W.apply(this,arguments)}function H(f){return S.apply(this,arguments)}function S(){return S=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/site/delete",{method:"POST",data:v}));case 1:case"end":return t.stop()}},f)})),S.apply(this,arguments)}function X(f){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime().mark(function f(v){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,request("/api/app/site/update-title",{method:"POST",data:v});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},f)})),K.apply(this,arguments)}function V(f){return C.apply(this,arguments)}function C(){return C=_()(r()().mark(function f(v){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.request)("/api/app/container/ignore",{method:"POST",data:v}));case 1:case"end":return t.stop()}},f)})),C.apply(this,arguments)}},2831:function(ee,R,n){n.d(R,{Ll:function(){return l},aF:function(){return x},d6:function(){return h},u5:function(){return U}});var L=n(15009),r=n.n(L),k=n(99289),_=n.n(k),p=n(82346);function x(){return I.apply(this,arguments)}function I(){return I=_()(r()().mark(function u(){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,p.request)("/api/common/home/info",{method:"POST"});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},u)})),I.apply(this,arguments)}function U(){return P.apply(this,arguments)}function P(){return P=_()(r()().mark(function u(){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,p.request)("/api/common/home/check-new-version",{method:"POST"});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},u)})),P.apply(this,arguments)}function l(){return O.apply(this,arguments)}function O(){return O=_()(r()().mark(function u(){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,p.request)("/api/common/home/usage",{method:"POST"});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},u)})),O.apply(this,arguments)}function h(){return T.apply(this,arguments)}function T(){return T=_()(r()().mark(function u(){return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,p.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},u)})),T.apply(this,arguments)}},18148:function(ee,R,n){n.d(R,{$q:function(){return u},Fj:function(){return V},KG:function(){return x},KX:function(){return f},T8:function(){return h},Xn:function(){return l},ao:function(){return d},c5:function(){return X},c7:function(){return H}});var L=n(15009),r=n.n(L),k=n(99289),_=n.n(k),p=n(82346);function x(c){return I.apply(this,arguments)}function I(){return I=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/app/image/get-list",{method:"POST",data:t}));case 1:case"end":return i.stop()}},c)})),I.apply(this,arguments)}function U(c){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function c(t){return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,request("/api/app/log/image-build",{method:"POST",data:t});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},c)})),P.apply(this,arguments)}function l(c){return O.apply(this,arguments)}function O(){return O=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/app/image/get-list-build",{method:"POST",data:t}));case 1:case"end":return i.stop()}},c)})),O.apply(this,arguments)}function h(c){return T.apply(this,arguments)}function T(){return T=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,p.request)("/api/app/image/get-build-task",{method:"POST",data:t});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},c)})),T.apply(this,arguments)}function u(c){return e.apply(this,arguments)}function e(){return e=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,p.request)("/api/app/image/delete-build-task",{method:"POST",data:t});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},c)})),e.apply(this,arguments)}function d(c){return W.apply(this,arguments)}function W(){return W=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,p.request)("/api/app/image/image-delete",{method:"POST",data:t});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},c)})),W.apply(this,arguments)}function H(){return S.apply(this,arguments)}function S(){return S=_()(r()().mark(function c(){return r()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,p.request)("/api/app/image/image-prune",{method:"POST"});case 2:return D.abrupt("return",D.sent);case 3:case"end":return D.stop()}},c)})),S.apply(this,arguments)}function X(){return K.apply(this,arguments)}function K(){return K=_()(r()().mark(function c(){return r()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,p.request)("/api/app/image/build-prune",{method:"POST"});case 2:return D.abrupt("return",D.sent);case 3:case"end":return D.stop()}},c)})),K.apply(this,arguments)}function V(c){return C.apply(this,arguments)}function C(){return C=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,p.request)("/api/app/image/update-title",{method:"POST",data:t});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},c)})),C.apply(this,arguments)}function f(c){return v.apply(this,arguments)}function v(){return v=_()(r()().mark(function c(t){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/app/image/tag-sync",{method:"POST",data:t}));case 1:case"end":return i.stop()}},c)})),v.apply(this,arguments)}},89075:function(ee,R,n){n.d(R,{$w:function(){return x},YQ:function(){return U},ax:function(){return l}});var L=n(15009),r=n.n(L),k=n(99289),_=n.n(k),p=n(82346);function x(){return I.apply(this,arguments)}function I(){return I=_()(r()().mark(function h(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,p.request)("/api/pro/home/get-machine-id",{method:"POST"}));case 1:case"end":return u.stop()}},h)})),I.apply(this,arguments)}function U(){return P.apply(this,arguments)}function P(){return P=_()(r()().mark(function h(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,p.request)("/api/pro/home/get-license-info",{method:"POST"}));case 1:case"end":return u.stop()}},h)})),P.apply(this,arguments)}function l(){return O.apply(this,arguments)}function O(){return O=_()(r()().mark(function h(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,p.request)("/api/pro/home/login-info",{method:"POST"}));case 1:case"end":return u.stop()}},h)})),O.apply(this,arguments)}}}]);
