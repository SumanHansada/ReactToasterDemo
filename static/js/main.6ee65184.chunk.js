(this["webpackJsonpreact-toaster-demo"]=this["webpackJsonpreact-toaster-demo"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(7),a=n.n(i),s=(n(12),n(13),n(6)),r=n(3),l=(n(14),n(15),n(0)),d=function(e){var t=e.toasts,n=e.position,c=e.deleteToast;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:"Hello"}),Object(l.jsx)("div",{className:"notification-container ".concat(n),children:t.map((function(e,t){return Object(l.jsxs)("div",{className:"notification toast show ".concat(n),style:{backgroundColor:e.backgroundColor},children:[Object(l.jsx)("button",{onClick:function(){return c(e.id)},children:"X"}),Object(l.jsx)("div",{className:"notification-image",children:Object(l.jsx)("img",{src:e.icon,alt:""})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"notification-title",children:e.title}),Object(l.jsx)("p",{className:"notification-message",children:e.description})]})]},t)}))})]})},u=n.p+"static/media/check.d639b7bb.svg",b=n.p+"static/media/error.f4c49f9a.svg",h=n.p+"static/media/info.b6c887b0.svg",j=n.p+"static/media/warning.9bbdb2f3.svg",f=[{id:1,type:"success",className:"success",label:"Success"},{id:2,type:"danger",className:"danger",label:"Danger"},{id:3,type:"info",className:"info",label:"Info"},{id:4,type:"warning",className:"warning",label:"Warning"}],p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)("Select Position"),a=Object(r.a)(i,2),p=a[0],m=a[1],g=Object(c.useState)(!1),v=Object(r.a)(g,2),O=v[0],x=v[1],k=Object(c.useState)(0),w=Object(r.a)(k,2),N=w[0],T=w[1],C=null,S=Object(c.useCallback)((function(e){var t=n.findIndex((function(t){return t.id===e}));n.splice(t,1),o(Object(s.a)(n))}),[n]);return Object(c.useEffect)((function(){var e=setTimeout((function(){O&&n.length&&S(n[0].id)}),N);return function(){clearTimeout(e)}}),[O,N,n,S]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("div",{className:"app-header",children:[Object(l.jsx)("p",{children:"React Toaster Component"}),Object(l.jsx)("p",{children:"Built with JavaScript!"}),Object(l.jsx)("div",{className:"toast-buttons",children:f.map((function(e){return Object(l.jsx)("button",{className:"".concat("Select Position"===p?"btn ".concat(e.className," btn-disable"):"btn ".concat(e.className)),onClick:function(){return function(e){var t=Math.floor(101*Math.random()+1);switch(e){case"success":C={id:t,title:"Success",description:"This is a success toast component",backgroundColor:"#5cb85c",icon:u};break;case"danger":C={id:t,title:"Danger",description:"This is a error toast component",backgroundColor:"#d9534f",icon:b};break;case"info":C={id:t,title:"Info",description:"This is an info toast component",backgroundColor:"#5bc0de",icon:h};break;case"warning":C={id:t,title:"Warning",description:"This is a warning toast component",backgroundColor:"#f0ad4e",icon:j};break;default:o([])}o([].concat(Object(s.a)(n),[C]))}(e.type)},children:e.label},e.id)}))}),Object(l.jsxs)("div",{className:"select",children:[Object(l.jsx)("input",{id:"auto",type:"checkbox",name:"checkbox",value:O,onChange:function(){x(O=!O),o([])}}),Object(l.jsx)("label",{htmlFor:"auto",children:"Auto Dismiss"})]}),Object(l.jsx)("div",{className:"select",children:Object(l.jsx)("input",{className:"".concat(O?"":"disabled"),type:"text",name:"checkbox",placeholder:"Dismiss time Ex: 3000",autoComplete:"false",onChange:function(e){var t=parseInt(e.target.value,10);T(t)}})}),Object(l.jsx)("div",{className:"select",children:Object(l.jsxs)("select",{name:"position",title:"position",onChange:function(e){m(e.target.value),o([])},className:"position-select",children:[Object(l.jsx)("option",{children:" Select Position"}),Object(l.jsx)("option",{value:"top-right",children:"Top Right"}),Object(l.jsx)("option",{value:"top-left",children:"Top Left"}),Object(l.jsx)("option",{value:"bottom-left",children:"Bottom Left"}),Object(l.jsx)("option",{value:"bottom-right",children:"Bottom Right"})]})}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["To Checkout the Toaster built with Blazor"," ",Object(l.jsx)("a",{href:"https://sumanhansada.github.io/BlazorToasterDemo/",children:"Click Here!"})]}),Object(l.jsxs)("p",{children:["GitHub Link -"," ",Object(l.jsx)("a",{href:"https://github.com/SumanHansada/ReactToasterDemo",children:"React Toaster Demo"})]})]}),Object(l.jsx)(d,{toasts:n,position:p,deleteToast:S})]})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactToasterDemo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ReactToasterDemo","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(t,e)}))}}(),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.6ee65184.chunk.js.map