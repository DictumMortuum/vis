(this.webpackJsonpwishlist=this.webpackJsonpwishlist||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(16),i=n.n(s),a=(n(25),n(8)),u=n(10),o=(n(26),n(13)),j=n.n(o),b=n(17),f=(n(28),n(3)),h=function(e){return function(e){try{new URL(e)}catch(t){return!1}return!0}(e.Desc)?Object(f.jsx)("a",{href:e.Desc,children:e.Title}):Object(f.jsx)("span",{children:e.Title})},O=function(e){var t=Object(c.useState)("RESERVED"===e.Status),n=Object(u.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),O=o[0],l=o[1],d=Object(c.useCallback)(Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r?"AVAILABLE":"RESERVED",!O){t.next=3;break}return t.abrupt("return");case 3:return l(!0),t.next=6,fetch("https://0jq009rhqf.execute-api.eu-north-1.amazonaws.com/default/servus",{method:"POST",body:JSON.stringify(Object(a.a)(Object(a.a)({},e),{},{status:n}))});case 6:l(!1),s(!r);case 8:case"end":return t.stop()}}),t)}))),[O,e,r]);return Object(f.jsxs)("li",{className:r?"active":"notactive",children:[Object(f.jsx)(h,Object(a.a)({},e)),Object(f.jsx)("button",{onClick:d,children:r?"Reserved":"Available"})]},e.Id)},l=function(e){return Object(f.jsxs)("div",{className:"wishlist",children:[Object(f.jsxs)("h2",{children:[e.owner,"'s wishlist!"]}),Object(f.jsx)("ul",{children:e.items.sort((function(e,t){return e.Id<t.Id})).map((function(e){return O(e)}))})]})},d=n(18),p=n(1),w=function(e){var t={};return e.map((function(e){return void 0===t[e.Owner]&&(t[e.Owner]={},t[e.Owner].id=e.CalendarId,t[e.Owner].owner=e.Owner,t[e.Owner].items=[]),t[e.Owner].items.push(e),e})),Object.keys(t).map((function(e){return t[e]}))},x=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://0jq009rhqf.execute-api.eu-north-1.amazonaws.com/default/servus").then((function(e){return e.json()})).then((function(e){console.log(e),r(e)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsx)(d.a,{children:Object(f.jsx)(p.c,{children:w(n).map((function(e){return Object(f.jsx)(p.a,{path:"/"+e.owner,component:function(){return Object(f.jsx)(l,Object(a.a)({},e))}},e.id)}))})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),m()}},[[35,1,2]]]);
//# sourceMappingURL=main.cd9659c6.chunk.js.map