"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1717],{24963:function(p,u,a){var c=a(67294),l=(0,c.createContext)({});u.Z=l},52756:function(p,u,a){a.r(u),a.d(u,{default:function(){return M}});var c=a(82346),l=a(31418),E=a(26058),v=a(24963),m=a(65913),h=a(67294),d=a(85893);function M(){var i=(0,h.useRef)(),_=(0,c.useIntl)(),f=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];g.notification[t]({message:_.formatMessage({id:"notification.title."+t}),description:n.join(" "),placement:"topRight"})},e=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];g.message[t](n.join(" "))},g=l.Z.useApp();return(0,d.jsx)(E.Z,{children:(0,d.jsx)(v.Z.Provider,{value:{notice:{success:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];f.apply(void 0,["success"].concat(r))},error:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];f.apply(void 0,["error"].concat(r))},warning:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];f.apply(void 0,["warning"].concat(r))},info:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];f.apply(void 0,["info"].concat(r))},destroy:function(){g.notification.destroy()}},message:{success:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(void 0,["success"].concat(r))},error:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(void 0,["error"].concat(r))},warning:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(void 0,["warning"].concat(r))},info:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(void 0,["info"].concat(r))},loading:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(void 0,["loading"].concat(r))},destroy:function(){g.message.destroy()}},loading:{show:function(){i.current&&i.current.show()},destroy:function(){i.current&&i.current.destroy()}},lang:function(t,r){return _.formatMessage({id:t},r)}},children:(0,d.jsx)(m.Z,{ref:i,children:(0,d.jsx)(c.Outlet,{})})})})}},65913:function(p,u,a){var c=a(5574),l=a.n(c),E=a(74330),v=a(67294),m=a(85893),h=(0,v.forwardRef)(function(d,M){(0,v.useImperativeHandle)(M,function(){return{show:function(){e(!0)},destroy:function(){e(!1)}}});var i=(0,v.useState)(!1),_=l()(i,2),f=_[0],e=_[1];return(0,m.jsx)(E.Z,{spinning:f,size:"default",children:d.children})});u.Z=h}}]);
