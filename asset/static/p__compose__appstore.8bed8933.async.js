"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7499],{80821:function(k,D,n){n.d(D,{Z:function(){return S}});var I=n(5574),r=n.n(I),K=n(24963),d=n(86738),p=n(14726),F=n(83062),O=n(67294),A=n(85893);function S(u){var x=(0,O.useState)(!1),L=r()(x,2),P=L[0],Z=L[1],y=(0,O.useContext)(K.Z),v=y.lang,b=y.notice,c=y.message,h=function(){Z(!0),u.action().then(function(a){if(Z(!1),typeof u.onSuccess=="function"&&u.onSuccess(a),u.messageSuccess){var E="";typeof u.messageSuccess=="function"?E=u.messageSuccess(a):E=u.messageSuccess,E.indexOf(".")>-1&&(E=v(E)),u.asynced?c.info(E):c.success(E)}}).catch(function(a){Z(!1),typeof u.onError=="function"&&u.onError(a)})};return u.confirm?(0,A.jsx)(d.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:v("notification.title.tip"),description:u.confirm,onConfirm:h,okText:"Yes",cancelText:"No",children:(0,A.jsx)(p.ZP,{disabled:u.disabled,icon:u.icon,loading:P,danger:u.danger,type:u.type,children:u.children})}):(0,A.jsx)(F.Z,{title:u.tips,children:(0,A.jsx)(p.ZP,{disabled:u.disabled,icon:u.icon,loading:P,onClick:h,danger:u.danger,type:u.type,children:u.children})})}},24963:function(k,D,n){var I=n(67294),r=(0,I.createContext)({});D.Z=r},43774:function(k,D,n){n.r(D),n.d(D,{default:function(){return ie}});var I=n(5574),r=n.n(I),K=n(24963),d=n(15078),p=n(90078),F=n(97269),O=n(62370),A=n(97462),S=n(38345),u=n(42075),x=n(65233),L=n(14726),P=n(92398),Z=n(2487),y=n(4393),v=n(67294),b=n(15009),c=n.n(b),h=n(99289),w=n.n(h),a=n(184),E=n(51652),B=n(71230),M=n(15746),H=n(34041),te=n(29158),V=n(74842),q=n(25593),Y=n(83062),re=n(66309),t=n(85893);function s(i){var $=(0,v.useState)(),U=r()($,2),g=U[0],R=U[1];return(0,v.useEffect)(function(){var z=i.url.substring(0,i.url.indexOf("://"));switch(z){case"image":R((0,t.jsx)("img",{width:i.imageSize?i.imageSize.width:"auto",height:i.imageSize?i.imageSize.height:"auto",src:i.url.replace("image://","/dpanel/static/store/file/")}));break;case"http":case"https":R((0,t.jsx)("img",{width:i.imageSize?i.imageSize.width:"auto",height:i.imageSize?i.imageSize.height:"auto",src:i.url}));break;case"markdown-file":(0,d.yL)({path:i.url.replace("markdown-file://","/dpanel/static/store/file/")}).then(function(G){R((0,t.jsx)(E.Z,{source:G,style:{padding:5}},"content"))});break;case"markdown":R((0,t.jsx)(E.Z,{source:i.url.replace("markdown://",""),style:{padding:5}},"content"));break}},[i.url]),(0,t.jsx)(t.Fragment,{children:g})}function o(i){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(B.Z,{gutter:[10,10],children:[(0,t.jsx)(M.Z,{span:6,children:(0,t.jsx)(s,{url:i.app.logo,imageSize:i.logoSize})}),(0,t.jsxs)(M.Z,{span:i.extra?12:18,children:[(0,t.jsx)(B.Z,{children:(0,t.jsx)(M.Z,{span:24,children:(0,t.jsx)(u.Z,{direction:"horizontal",children:(0,t.jsxs)(q.Z.Title,{level:5,children:[i.app.name,i.app.title]})})})}),(0,t.jsx)(B.Z,{style:{height:"60px"},children:(0,t.jsx)(M.Z,{children:(0,t.jsx)(Y.Z,{title:i.app.description,children:(0,t.jsx)(q.Z.Paragraph,{ellipsis:{rows:2},children:i.app.description})})})}),(0,t.jsx)(B.Z,{style:{height:"30px"},children:(0,t.jsx)(M.Z,{children:i.app.tag&&i.app.tag.map(function($,U){return(0,t.jsx)(re.Z,{children:$},U)})})})]}),(0,t.jsx)(M.Z,{span:i.extra?6:0,children:i.extra})]})})}var j=n(80821),e=n(90098),ae=n(54006),se=(0,v.forwardRef)(function(i,$){var U=(0,v.useState)(!1),g=r()(U,2),R=g[0],z=g[1],G=(0,v.useState)(),ee=r()(G,2),f=ee[0],Q=ee[1],N=(0,v.useState)(""),J=r()(N,2),C=J[0],m=J[1],W=(0,ae.useNavigate)();return(0,v.useImperativeHandle)($,function(){return{show:function(l){console.log(l),z(!0),Q(l),m(Object.keys(l.version)[0])}}}),(0,t.jsx)(a.a,{submitter:!1,open:R,onOpenChange:function(l){z(l)},title:"".concat(f==null?void 0:f.name," \u8BE6\u60C5\u4ECB\u7ECD"),children:f&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.Z,{ghost:!0,style:{marginBottom:"20px",paddingBottom:"20px",borderBottom:"#eeeeee solid 1px"},children:(0,t.jsx)(o,{app:f,logoSize:{width:"130",height:"130"},extra:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(B.Z,{gutter:[10,10],children:[(0,t.jsx)(M.Z,{children:(0,t.jsxs)(u.Z,{wrap:!0,children:[(0,t.jsx)(L.ZP,{href:f.website,target:"_blank",icon:(0,t.jsx)(te.Z,{}),children:"\u5B98\u7F51"},"website"),(0,t.jsx)(j.Z,{action:w()(c()().mark(function _(){var l,T;return c()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return console.log(f),console.log(C),X.next=4,(0,e.iE)({storeId:(l=f.storeId)!==null&&l!==void 0?l:0,name:f.name,composeFile:f.version[C].composeFile});case 4:T=X.sent,T&&T.data.id&&W("/compose/create?id="+T.data.id);case 6:case"end":return X.stop()}},_)})),type:"primary",icon:(0,t.jsx)(V.Z,{}),children:"\u5B89\u88C5"},"install")]})}),(0,t.jsx)(M.Z,{span:24,children:f.version&&(0,t.jsx)(H.Z,{style:{width:"100%"},value:C,onChange:function(l){m(l)},options:Object.keys(f.version).map(function(_){return{value:_,label:_}})})})]})})})}),Object.keys(f.version).map(function(_){if(!(C!=_||!f.version[_].environment||f.version[_].environment.length==0)){var l="## \u7248\u672C\u4FE1\u606F <sup>".concat(_,`</sup> 
 |\u53D8\u91CF\u540D|\u9ED8\u8BA4\u503C|\u8BF4\u660E| 
 |---|---|---|
`);return f.version[_].environment.map(function(T){l+="|".concat(T.name,"|").concat(T.value,"|").concat(T.label,`| 
`)}),l+="<br />",(0,t.jsx)(E.Z,{source:l,style:{padding:5}},_)}}),(0,t.jsx)(s,{url:f==null?void 0:f.content})]})})}),ue=se;function ie(){var i=(0,v.useRef)(),$=(0,v.useState)(),U=r()($,2),g=U[0],R=U[1],z=(0,v.useContext)(K.Z),G=z.loading,ee=(0,v.useState)(""),f=r()(ee,2),Q=f[0],N=f[1];(0,v.useEffect)(function(){G.show(),(0,d.eO)().then(function(C){R(Object.fromEntries(C.data.list.map(function(m){return[m.name,m]}))),C.data.list.length>0&&N(C.data.list[0].name)}).finally(function(){G.destroy()})},[]);var J=function(m){var W=[];if(g){if(g["search"+m])return;var _={};Object.keys(g).map(function(l){g[l].id!=-1&&(_[l]=g[l]),g[l].setting.apps.map(function(T){if(m&&T.name.toLowerCase().indexOf(m)!==-1){var ne=JSON.parse(JSON.stringify(T));ne.title=" - \u3010".concat(g[l].title,"\u3011"),ne.storeId=g[l].id,W.push(ne)}})}),W.length>0?(_["search"+m]={id:-1,name:"search"+m,title:"\u641C\u7D22\u7ED3\u679C",setting:{apps:W}},N("search"+m)):N(Object.keys(g)[0]),R(_)}};return(0,t.jsxs)(p._z,{extra:[(0,t.jsx)(F.A,{isKeyPressSubmit:!0,submitter:!1,onFinish:function(m){J(m.search)},children:(0,t.jsxs)(u.Z.Compact,{children:[(0,t.jsx)(O.Z,{style:{margin:0},name:"search",children:(0,t.jsx)(x.Z,{allowClear:!0,addonBefore:"\u5168\u5546\u5E97\u67E5\u8BE2",placeholder:"\u6309\u56DE\u8F66\u67E5\u8BE2\u5E94\u7528",onClear:function(){J("")}})}),(0,t.jsx)(A.Z,{name:["search"],children:function(m){var W=m.search;return(0,t.jsx)(L.ZP,{onClick:function(){J(W)},children:"\u641C\u7D22"})}})]})},"form")],children:[(0,t.jsx)(ue,{ref:i}),(0,t.jsxs)(S.Z,{children:[g&&(0,t.jsx)(P.Z,{activeKey:Q,onChange:function(m){N(m)},items:Object.keys(g).map(function(C){return{label:g[C].title,key:C}})}),(0,t.jsx)(Z.Z,{pagination:{pageSize:36},rowKey:"name",grid:{gutter:10,xs:1,sm:2,md:2,lg:2,xl:2,xxl:3},dataSource:g&&g[Q].setting.apps,renderItem:function(m,W){return(0,t.jsx)(Z.Z.Item,{children:(0,t.jsx)(y.Z,{onClick:function(){if(g){var l;m.storeId||(m.storeId=g[Q].id),(l=i.current)===null||l===void 0||l.show(m)}},hoverable:!0,children:(0,t.jsx)(o,{app:m,logoSize:{width:"50",height:"50"}})})})}})]})]})}},15078:function(k,D,n){n.d(D,{$c:function(){return F},Me:function(){return Z},eO:function(){return L},ks:function(){return A},yL:function(){return v}});var I=n(15009),r=n.n(I),K=n(99289),d=n.n(K),p=n(54006);function F(c){return O.apply(this,arguments)}function O(){return O=d()(r()().mark(function c(h){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/common/store/create",{method:"POST",data:h}));case 1:case"end":return a.stop()}},c)})),O.apply(this,arguments)}function A(c){return S.apply(this,arguments)}function S(){return S=d()(r()().mark(function c(h){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/common/store/sync",{method:"POST",data:h}));case 1:case"end":return a.stop()}},c)})),S.apply(this,arguments)}function u(c){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function c(h){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/common/store/get-detail",{method:"POST",data:h}));case 1:case"end":return a.stop()}},c)})),x.apply(this,arguments)}function L(c){return P.apply(this,arguments)}function P(){return P=d()(r()().mark(function c(h){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/common/store/get-list",{method:"POST",data:h}));case 1:case"end":return a.stop()}},c)})),P.apply(this,arguments)}function Z(c){return y.apply(this,arguments)}function y(){return y=d()(r()().mark(function c(h){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,p.request)("/api/common/store/delete",{method:"POST",data:h});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),y.apply(this,arguments)}function v(c){return b.apply(this,arguments)}function b(){return b=d()(r()().mark(function c(h){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)(h==null?void 0:h.path,{method:"GET"}));case 1:case"end":return a.stop()}},c)})),b.apply(this,arguments)}},90098:function(k,D,n){n.d(D,{CT:function(){return L},GG:function(){return w},MG:function(){return te},Oh:function(){return v},Pn:function(){return u},U_:function(){return M},VN:function(){return E},iE:function(){return re},ik:function(){return Z},im:function(){return F},mg:function(){return c},pm:function(){return A},xC:function(){return q}});var I=n(15009),r=n.n(I),K=n(99289),d=n.n(K),p=n(54006);function F(s){return O.apply(this,arguments)}function O(){return O=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/create",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),O.apply(this,arguments)}function A(s){return S.apply(this,arguments)}function S(){return S=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/get-list",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),S.apply(this,arguments)}function u(s){return x.apply(this,arguments)}function x(){return x=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/get-task",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),x.apply(this,arguments)}function L(s){return P.apply(this,arguments)}function P(){return P=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/get-detail",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),P.apply(this,arguments)}function Z(s){return y.apply(this,arguments)}function y(){return y=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/delete",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),y.apply(this,arguments)}function v(s){return b.apply(this,arguments)}function b(){return b=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/container-deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),b.apply(this,arguments)}function c(s){return h.apply(this,arguments)}function h(){return h=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/container-destroy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),h.apply(this,arguments)}function w(s){return a.apply(this,arguments)}function a(){return a=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/container-ctrl",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),a.apply(this,arguments)}function E(s){return B.apply(this,arguments)}function B(){return B=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/container-log",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),B.apply(this,arguments)}function M(s){return H.apply(this,arguments)}function H(){return H=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/container-process-kill",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),H.apply(this,arguments)}function te(s){return V.apply(this,arguments)}function V(){return V=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/get-from-uri",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),V.apply(this,arguments)}function q(s){return Y.apply(this,arguments)}function Y(){return Y=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/app/compose/parse",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),Y.apply(this,arguments)}function re(s){return t.apply(this,arguments)}function t(){return t=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/common/store/deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),t.apply(this,arguments)}}}]);
