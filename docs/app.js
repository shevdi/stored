!function(a){function e(e){for(var t,r,n=e[0],o=e[1],u=e[2],c=0,i=[];c<n.length;c++)r=n[c],l[r]&&i.push(l[r][0]),l[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(f&&f(e);i.length;)i.shift()();return p.push.apply(p,u||[]),s()}function s(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==l[u]&&(n=!1)}n&&(p.splice(t--,1),e=c(c.s=r[0]))}return e}var r={},l={0:0},p=[];function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=a,c.c=r,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var f=n;p.push([83,1]),s()}({158:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"login",function(){return O}),r.d(n,"loginSuccess",function(){return S}),r.d(n,"loginError",function(){return m}),r.d(n,"logout",function(){return _});var o={};r.r(o),r.d(o,"getResources",function(){return J}),r.d(o,"getResourcesSuccess",function(){return W}),r.d(o,"getResourcesError",function(){return V}),r.d(o,"resetDiskState",function(){return X});var u=r(25),c=r(2),i=r(32),a=r(163),s=r(164),l=r(167),p=r(165),f=r(27),h=r(166),y=r(160),d=r(169),b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g={token:""},v=function(e,t){switch(void 0===e&&(e=g),t.type){case"AUTH:LOGIN_SUCCESS":return b({},e,{token:t.payload||""});case"AUTH:LOGOUT":return b({},e,{token:""});default:return e}},E=r(13);function O(e){return{type:"AUTH:LOGIN_REQUEST",payload:e}}function S(e){return{type:"AUTH:LOGIN_SUCCESS",payload:e}}function m(e){return{type:"AUTH:LOGIN_ERROR",error:e}}function _(){return{type:"AUTH:LOGOUT"}}var w=function(r,n){var o,u,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,u&&(c=2&t[0]?u.return:t[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,t[1])).done)return c;switch(u=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,u=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){i.label=t[1];break}if(6===t[0]&&i.label<c[1]){i.label=c[1],c=t;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(t);break}c[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(r,i)}catch(e){t=[6,e],u=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};function R(e,t){var r,n,o=e.api,u=t.payload;return w(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,5]),[4,Object(E.a)(o.authorize,u)];case 1:return r=e.sent(),[4,Object(E.b)(S(r))];case 2:return e.sent(),[3,5];case 3:return n=e.sent(),[4,Object(E.b)(m(n.message))];case 4:return e.sent(),[3,5];case 5:return[2]}})}function j(e){var t=e.api;return w(this,function(e){switch(e.label){case 0:return[4,Object(E.a)(t.unauthorize)];case 1:return e.sent(),[2]}})}var T,k=function(t){var r;return w(this,function(e){switch(e.label){case 0:return r="AUTH:LOGOUT",[4,Object(E.c)("AUTH:LOGIN_REQUEST",R,t)];case 1:return e.sent(),[4,Object(E.c)(r,j,t)];case 2:return e.sent(),[2]}})},U={clientId:"435842173a404ae5a4c12ffd98003b0a",clientSecret:"c2181da4b3a64503b182018bf89c878b",appPath:"/stored"},P=(T=function(e,t){return(T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return P(t,e),t.prototype.componentDidMount=function(){if(location.hash){var e=/access_token=([^&]+)/.exec(location.hash);this.props.history.replace(U.appPath),e&&this.props.login(e[1])}else this.props.login()},t.prototype.render=function(){var e="https://oauth.yandex.ru/authorize?response_type=token&client_id="+U.clientId;return c.createElement(y.a,{pullRight:!0},this.props.isLogged?c.createElement(d.a,{eventKey:2,href:"#",onClick:this.props.logout},"Logout"):c.createElement(d.a,{eventKey:1,href:e},"Login"))},t}(c.PureComponent),I={login:n.login,logout:n.logout},D=Object(u.b)(function(e){return{isLogged:!!e.auth.token}},I)(C),x=function(e){return c.createElement(h.a,{inverse:!0,collapseOnSelect:!0},c.createElement(h.a.Header,null,c.createElement(h.a.Brand,null,c.createElement("a",{href:"/"},"Stored")),c.createElement(h.a.Toggle,null)),c.createElement(h.a.Collapse,null,c.createElement(D,{history:e.history})))},A=r(17),G=r(168),K=r(161),L=r(50),q=r(162),z=r(79),H=r(20),F=function(){return(F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},M={isRequesting:!1,error:""},N={resources:[]},Q={getResources:M},B=Object(H.combineReducers)({data:function(e,t){switch(void 0===e&&(e=N),t.type){case"DISK:GET_RESOURCES_SUCCESS":return F({},e,{resources:t.payload});case"DISK:RESET_STATE":return N;default:return e}},actions:function(e,t){switch(void 0===e&&(e=Q),t.type){case"DISK:GET_RESOURCES_REQUEST":return F({},e,{getResources:{isRequesting:!0,error:""}});case"DISK:GET_RESOURCES_SUCCESS":return F({},e,{getResources:M});case"DISK:GET_RESOURCES_ERROR":return F({},e,{getResources:{isRequesting:!1,error:t.error}});case"DISK:RESET_STATE":return N;default:return e}}});function J(e){return{type:"DISK:GET_RESOURCES_REQUEST",payload:e}}function W(e){return{type:"DISK:GET_RESOURCES_SUCCESS",payload:e}}function V(e){return{type:"DISK:GET_RESOURCES_ERROR",error:e}}function X(){return{type:"DISK:RESET_STATE"}}var Y=function(r,n){var o,u,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,u&&(c=2&t[0]?u.return:t[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,t[1])).done)return c;switch(u=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,u=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){i.label=t[1];break}if(6===t[0]&&i.label<c[1]){i.label=c[1],c=t;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(t);break}c[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(r,i)}catch(e){t=[6,e],u=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};function Z(e,t){var r,n,o=e.api,u=t.payload,c=void 0===u?"/":u;return Y(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,5]),[4,Object(E.a)(o.getResources,encodeURI(c))];case 1:return r=e.sent(),[4,Object(E.b)(W(r))];case 2:return e.sent(),[3,5];case 3:return n=e.sent(),[4,Object(E.b)(V(n.message))];case 4:return e.sent(),[3,5];case 5:return[2]}})}function $(){return Y(this,function(e){switch(e.label){case 0:return[4,Object(E.b)({type:"DISK:RESET_STATE"})];case 1:return e.sent(),[2]}})}var ee,te,re,ne=function(t){return Y(this,function(e){switch(e.label){case 0:return[4,Object(E.c)("DISK:GET_RESOURCES_REQUEST",Z,t)];case 1:return e.sent(),[4,Object(E.c)("AUTH:LOGOUT",$,t)];case 2:return e.sent(),[2]}})},oe=(r(65),ee=function(e,t){return(ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ue=function(e,t,r,n){var o,u=arguments.length,c=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;0<=i;i--)(o=e[i])&&(c=(u<3?o(c):3<u?o(t,r,c):o(t,r))||c);return 3<u&&c&&Object.defineProperty(t,r,c),c},ce=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return oe(t,e),t.prototype.componentDidMount=function(){var e=this.props;(0,e.getResources)(e.location)},t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.getResources,n=t.location;e.location!==n&&r(n)},t.prototype.render=function(){var t=this,e=this.props,r=e.resources,n=e.location,o=e.error;return o?c.createElement(G.a,{bsStyle:"warning"},o):0===r.length?null:c.createElement(K.a,null,n.split(U.appPath+"/")[1]&&c.createElement(L.a,{onClick:this.moveUp},c.createElement(q.a,{glyph:"align-left glyphicon glyphicon-folder-open"}),"  ..."),r.map(function(e){return"dir"===e.type?t.renderDir(e):t.renderFile(e)}))},t.prototype.renderDir=function(e){return c.createElement(L.a,{key:e.resource_id,onClick:this.openFolder(e)},c.createElement(q.a,{glyph:"align-left glyphicon glyphicon-folder-close"})," ",c.createElement("b",null,e.name))},t.prototype.renderFile=function(e){return c.createElement("a",{href:e.file,key:e.resource_id},c.createElement(L.a,null," ",c.createElement("b",null,e.name),"file"===e.type&&" - "+z(e.size)))},t.prototype.openFolder=function(e){var t=this,r=e.path.slice(5);return function(){t.props.history.push(U.appPath+r)}},t.prototype.moveUp=function(){var e=this.props.location,t=e.split("/"),r=e.slice(0,-t[t.length-1].length);this.props.history.push(r||U.appPath)},ue([A.bind],t.prototype,"renderDir",null),ue([A.bind],t.prototype,"renderFile",null),ue([A.bind],t.prototype,"openFolder",null),ue([A.bind],t.prototype,"moveUp",null),t}(c.PureComponent),ie={getResources:o.getResources},ae=Object(u.b)(function(e){return{resources:e.disk.data.resources,error:e.disk.actions.getResources.error}},ie)(ce),se=r(78),le=(te=function(e,t){return(te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}te(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return le(t,e),t.prototype.render=function(){return c.createElement("div",null,c.createElement(x,{history:this.props.history}),c.createElement(se.a,null,c.createElement(ae,{location:this.props.location.pathname,history:this.props.history})))},t}(c.PureComponent),fe=(re=function(e,t){return(re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}re(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),he=Object(f.a)(),ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return fe(t,e),t.prototype.render=function(){return c.createElement(a.a,{history:he},c.createElement(s.a,null,c.createElement(l.a,{exact:!0,from:"/",to:U.appPath}),c.createElement(p.a,{path:U.appPath,component:pe})))},t}(c.PureComponent),de=r(80),be=r(82),ge=r(81),ve=r.n(ge),Ee=function(){return(Ee=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Oe=function(){function e(e,t){var r={baseURL:e,withCredentials:!1};this.request=ve.a.create(r),this.request.interceptors.request.use(function(e){return e.headers.Authorization=t,e})}return e.prototype.get=function(e,t,r){var n=Ee({params:t},r);return this.request.get(e,n)},e.prototype.post=function(e,t,r){return this.request.post(e,t,r)},e.prototype.patch=function(e,t,r){return this.request.patch(e,t,r)},e.prototype.del=function(e,t,r,n){var o=Ee({url:e,data:t,params:r},n);return this.request.delete(e,o)},e.prototype.put=function(e,t,r,n){return this.request.put(e,t,Ee({params:r},n))},e}(),Se={baseDiskUrl:"https://cloud-api.yandex.net",baseAuthUrl:"https://oauth.yandex.ru",disk:"/v1/disk",resources:"/v1/disk/resources",files:"/v1/disk/resources/files",authorize:"/authorize",token:"/token"},me=function(e,t,r,n){var o,u=arguments.length,c=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;0<=i;i--)(o=e[i])&&(c=(u<3?o(c):3<u?o(t,r,c):o(t,r))||c);return 3<u&&c&&Object.defineProperty(t,r,c),c},_e=function(u,c,i,a){return new(i||(i=Promise))(function(e,t){function r(e){try{o(a.next(e))}catch(e){t(e)}}function n(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new i(function(e){e(t.value)}).then(r,n)}o((a=a.apply(u,c||[])).next())})},we=function(r,n){var o,u,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,u&&(c=2&t[0]?u.return:t[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,t[1])).done)return c;switch(u=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,u=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){i.label=t[1];break}if(6===t[0]&&i.label<c[1]){i.label=c[1],c=t;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(t);break}c[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(r,i)}catch(e){t=[6,e],u=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},Re=function(){function e(){this.authActions=new Oe(Se.baseAuthUrl,"Basic "+U.clientId+":"+U.clientSecret)}return e.prototype.authorize=function(e){e&&localStorage.setItem("token",e);var t=localStorage.getItem("token");if(this.actions=new Oe(Se.baseDiskUrl,"OAuth "+t),t)return t},e.prototype.unauthorize=function(){localStorage.removeItem("token")},e.prototype.getDiskInfo=function(){return _e(this,void 0,void 0,function(){var t;return we(this,function(e){switch(e.label){case 0:return t=Se.disk,[4,this.actions.get(t,{})];case 1:return[2,e.sent()]}})})},e.prototype.getResources=function(n){return _e(this,void 0,void 0,function(){var r;return we(this,function(e){switch(e.label){case 0:return r=Se.resources,[4,this.actions.get(r,{path:(t=n,t.replace("/stored","")||"/")})];case 1:return[2,e.sent().data._embedded.items]}var t})})},e.prototype.getFiles=function(){return _e(this,void 0,void 0,function(){var t;return we(this,function(e){switch(e.label){case 0:return t=Se.files,[4,this.actions.get(t)];case 1:return[2,e.sent()]}})})},me([A.bind],e.prototype,"authorize",null),me([A.bind],e.prototype,"unauthorize",null),me([A.bind],e.prototype,"getDiskInfo",null),me([A.bind],e.prototype,"getResources",null),me([A.bind],e.prototype,"getFiles",null),e}(),je=Object(H.combineReducers)({auth:v,disk:B}),Te=Object(be.a)(),ke=Object(H.createStore)(je,Object(de.composeWithDevTools)(Object(H.applyMiddleware)(Te))),Ue=new Re;Te.run(k,{api:Ue}),Te.run(ne,{api:Ue});var Pe=ke;i.render(c.createElement(function(){return c.createElement(u.a,{store:Pe},c.createElement(ye,null))},null),document.getElementById("app"))},65:function(e,t){},83:function(e,t,r){e.exports=r(158)}});