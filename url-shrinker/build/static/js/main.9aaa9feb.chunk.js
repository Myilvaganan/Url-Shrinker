(this["webpackJsonpurl-shrinker"]=this["webpackJsonpurl-shrinker"]||[]).push([[0],{21:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(16),s=r.n(a),i=(r(21),r(3)),l=r.n(i),o=r(7),u=r(5),j=r(4),b=r.n(j),h="https://url-shrinker-mern-myil.herokuapp.com/urlshortner",d=r(0),O=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),j=i[0],O=i[1],f=Object(n.useState)(""),p=Object(u.a)(f,2),x=p[0],m=p[1];Object(n.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(h,"/api/url")).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var k=function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t,b.a.get("".concat(h,"/").concat(n)).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:r=e.sent,m(r);case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("form",{className:"form",onSubmit:function(){!function(e){b.a.post("".concat(h,"/api/url/shorten"),{originalUrl:e},{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(r)},children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{className:"title-text",htmlFor:"search",children:"URL SHRINKER"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"searchText","aria-describedby":"text",placeholder:"Enter Original /  Long Url",onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark mt-4",children:"SHRINK"})]})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h3",{children:"SHRINKER URLs"}),Object(d.jsx)("div",{className:"table-holder",children:Object(d.jsxs)("table",{className:"table table-dark url-holder table-responsive",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Original Url"}),Object(d.jsx)("th",{children:"Shrinker Url"}),Object(d.jsx)("th",{})]})}),j.map((function(e){return Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{className:"table-dark",children:[Object(d.jsx)("td",{className:"table-dark originalUrl",children:e.originalUrl}),Object(d.jsx)("td",{className:"table-dark shrinkerUrl",children:Object(d.jsx)("a",{href:x,rel:"noreferrer",target:"_blank",children:e.urlCode})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return k(e.urlCode)},className:"btn btn-warning shrinkerUrl",children:Object(d.jsx)("a",{href:x,rel:"noreferrer",target:"_blank",children:"VISIT SITE"})})})]})})}))]})})]})]})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9aaa9feb.chunk.js.map