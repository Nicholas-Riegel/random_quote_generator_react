(this.webpackJsonpquote_machine_react=this.webpackJsonpquote_machine_react||[]).push([[0],{11:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),a=c(4),s=c.n(a),r=(c(9),c(2)),u=c(0);var i=function(){var t=Object(n.useState)(null),e=Object(r.a)(t,2),c=e[0],o=e[1],a=Object(n.useState)(null),s=Object(r.a)(a,2),i=s[0],l=s[1],b=Object(n.useState)(null),h=Object(r.a)(b,2),j=h[0],d=h[1],f=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],O=function(){return f[Math.floor(Math.random()*f.length)]};return Object(n.useEffect)((function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){o(t.quotes),l(t.quotes[Math.floor(Math.random()*t.quotes.length)]),d(O)}))}),[]),Object(u.jsx)("div",{className:"App",style:{backgroundColor:j},children:Object(u.jsxs)("div",{className:"box",id:"quote-box",children:[Object(u.jsx)("div",{className:"quote-box",children:null===i?Object(u.jsx)("p",{children:"Loading..."}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{id:"text",style:{color:j},children:i.quote}),Object(u.jsxs)("p",{id:"author",style:{color:j},children:[i.author," "]})]})}),Object(u.jsxs)("div",{className:"button-box",children:[Object(u.jsx)("a",{id:"tweet-quote",href:i?"https://twitter.com/intent/tweet?text=".concat(i.quote," -").concat(i.author):"",target:"_blank",style:{backgroundColor:j},children:Object(u.jsx)("i",{className:"fab fa-twitter"})}),Object(u.jsx)("button",{id:"new-quote",onClick:function(){l(c[Math.floor(Math.random()*c.length)]),d(O)},style:{background:j,color:"whitesmoke"},children:"New Quote"})]})]})})};s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(i,{})}),document.getElementById("root"))},9:function(t,e,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.3da0e4b4.chunk.js.map