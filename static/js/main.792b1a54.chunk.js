(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(8),c=n.n(a),s=(n(15),n(10)),u=n(1),i=n(9),o=n(3),j=(n(16),n(2));var h=function(e){var t=e.blocks,n=e.compare,r=e.sorted,a=e.swap,c=Object(l.useState)(Math.min(20,Math.ceil(window.innerWidth/t.length))),s=Object(o.a)(c,2),u=s[0],i=(s[1],t.length<=50&&u>14?"black":"transparent");return Object(j.jsx)("div",{className:"listBlocks",children:t.map((function(e,l){var c=200*e/t.length,s="#2499FF";!n||l!==n[0]&&l!==n[1]||(s="#F59B0A"),!a||l!==a[0]&&l!==a[1]||(s="red"),r&&r.includes(l)&&(s="#4bc52e");var o={backgroundColor:s,color:i,height:c,width:u};return Object(j.jsx)("div",{className:"block",style:o,children:e},l)}))})};n(18);function b(e){return Object(j.jsx)("div",{className:"card",children:e.children})}var f=function(e,t,n){var l=e[t];e[t]=e[n],e[n]=l},d=function(e){var t,n,l=e.slice(),r=[];for(t=0;t<l.length;t++){for(n=0;n<l.length-t-1;n++)r.push([n,n+1,null,null]),l[n]>l[n+1]&&(f(l,n,n+1),r.push([n,n+1,l.slice(),null]));r.push([null,null,null,n])}return r},p=function(e,t,n){var l=e[t];e[t]=e[n],e[n]=l},O=function(e){var t,n,l=e.slice(),r=[];for(t=0;t<l.length;t++){for(n=t+1;n<l.length;n++)r.push([t,n,null,null]),l[t]>l[n]&&(p(l,t,n),r.push([t,n,l.slice(),null]));r.push([null,null,null,t])}return r},v=[],x=function e(t,n,l){if(!(n>=l)){var r=Math.floor((n+l)/2);e(t,n,r),e(t,r+1,l),function(e,t,n,l){for(var r=t,a=n+1,c=[];r<=n&&a<=l;)v.push([r,a,null,null]),e[r]<=e[a]?c.push(e[r++]):c.push(e[a++]);for(;r<=n;)v.push([r,null,null,null]),c.push(e[r++]);for(;a<=l;)v.push([null,a,null,null]),c.push(e[a++]);for(r=t;r<=l;r++)e[r]=c[r-t],v.push([r,null,e.slice(),null])}(t,n,r,l)}},m=function(e){v=[];var t=e.slice();x(t,0,t.length-1);for(var n=0;n<t.length;n++)v.push([null,null,null,n]);return v},g=[],S=function(e,t,n){var l=e[t];e[t]=e[n],e[n]=l},y=function e(t,n,l){if(n>=l)n===l&&g.push([null,null,null,n]);else{var r=n+Math.floor(Math.random()*(l-n));S(t,n,r),g.push([n,r,t.slice(),null]);var a=function(e,t,n){for(var l=t,r=t,a=t+1;a<=n;a++)g.push([a,l,null,null]),e[a]<e[l]&&(S(e,a,r+=1),g.push([a,r,e.slice(),null]));return S(e,l,r),g.push([l,r,e.slice(),null]),g.push([null,null,null,r]),r}(t,n,l);e(t,n,a-1),e(t,a+1,l)}},k=function(e){var t=e.slice();return g=[],y(t,0,t.length-1),g};var C=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(l.useState)([]),c=Object(o.a)(a,2),s=c[0],u=c[1],f=Object(l.useState)(!1),p=Object(o.a)(f,2),v=p[0],x=p[1],g=Object(l.useState)([]),S=Object(o.a)(g,2),y=S[0],C=S[1],N=Object(l.useState)([]),P=Object(o.a)(N,2),w=P[0],F=P[1],I=Object(l.useState)([]),M=Object(o.a)(I,2),B=M[0],T=M[1],$=Object(l.useState)([]),A=Object(o.a)($,2),E=A[0],J=A[1],L=Object(l.useState)(0),D=Object(o.a)(L,2),Q=D[0],W=D[1],q=Object(l.useState)(!1),z=Object(o.a)(q,2),G=z[0],H=z[1];Object(l.useEffect)((function(){if(0===Q)W(1);else if(1===Q){R(),W(Q+1)}}),[s]);var K=function(e){!function t(n){setTimeout((function(){var l=Object(o.a)(e[n],4),r=l[0],a=l[1],c=l[2],s=l[3];C([r,a]),F([]),null!==s&&T([].concat(Object(i.a)(B),[s])),c&&(u(c),F([r,a])),++n<e.length?t(n):x(!1)}),150)}(0)},R=function(){x(!0),1===n?K(m(s)):2===n?K(k(s)):3===n?K(d(s)):4===n?K(O(s)):x(!1)},U=function(){return 0!==E.length};return G?Object(j.jsxs)(b,{children:[!v&&Object(j.jsx)("div",{className:"header",children:"\xa1Array sorted!"}),Object(j.jsx)(h,{blocks:s,compare:v&&y,swap:v&&w,sorted:B}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("textarea",{id:"result",value:s,readOnly:!0})}),Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("button",{onClick:function(e){return window.location.reload(e)},children:"Back"})})]}):Object(j.jsxs)(b,{children:[Object(j.jsx)("div",{className:"header",children:"Type the array to be sorted separated by commas."}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("input",{type:"text",id:"array",placeholder:"1,2,3,4,5,6,7,8,9,10",onChange:function(e){J(e.target.value)}}),Object(j.jsx)("span",{children:"Sort using:"})]}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("button",{onClick:function(){if(U()){var e=!0,t=E.split(",").map((function(t){return/^\d+$/.test(t)?parseInt(t):e=!1}));e?(u(t),r(1),H(!0)):alert("Please enter a valid array")}else alert("Please enter an array")},children:"Merge Sort"}),Object(j.jsx)("button",{onClick:function(){if(U()){var e=!0,t=E.split(",").map((function(t){return/^\d+$/.test(t)?parseInt(t):e=!1}));e?(u(t),r(2),H(!0)):alert("Please enter a valid array")}else alert("Please enter an array")},children:"Quick Sort"}),Object(j.jsx)("button",{onClick:function(){if(U()){var e=!0,t=E.split(",").map((function(t){return/^\d+$/.test(t)?parseInt(t):e=!1}));e?(u(t),r(3),H(!0)):alert("Please enter a valid array")}else alert("Please enter an array")},children:"Bubble Sort"}),Object(j.jsx)("button",{onClick:function(){if(U()){var e=!0,t=E.split(",").map((function(t){return/^\d+$/.test(t)?parseInt(t):e=!1}));e?(u(t),r(4),H(!0)):alert("Please enter a valid array")}else alert("Please enter an array")},children:"Selection Sort"})]})]})};n(19);function N(){return Object(j.jsx)("div",{className:"Input",children:Object(j.jsx)(C,{})})}var P=function(){return Object(j.jsx)(s.a,{children:Object(j.jsx)(u.c,{children:Object(j.jsx)(u.a,{path:"*",element:Object(j.jsx)(N,{})})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,l=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),l(e),r(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.792b1a54.chunk.js.map