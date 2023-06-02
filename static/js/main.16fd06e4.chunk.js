(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(6),r=(n(20),n(21),n(4)),s=n(1),i=n(2),o=n(5),j=n.n(o),l=n(8),b=n(11);function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var h=n(0),m=function(e){var t=e.person,n=e.name,c=e.sex,r=e.setActivePerson;return Object(h.jsx)(a.b,{className:j()("",{"has-text-danger":"f"===c}),to:"/people/".concat(null===t||void 0===t?void 0:t.slug),onClick:function(){t&&r(t)},children:n})},u=function(e){var t=e.activePerson,n=e.setActivePerson,c=e.people;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"person",className:j()("",{"has-background-warning":e.slug===(null===t||void 0===t?void 0:t.slug)}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(m,{person:e,name:e.name,sex:e.sex,setActivePerson:n})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsxs)("td",{children:[e.motherName&&c.find((function(t){return t.name===e.motherName}))&&Object(h.jsx)(m,{person:c.find((function(t){return t.name===e.motherName})),name:e.motherName,sex:"f",setActivePerson:n}),e.motherName&&!c.find((function(t){return t.name===e.motherName}))&&"".concat(e.motherName),!e.motherName&&!c.find((function(t){return t.name===e.motherName}))&&"-"]}),Object(h.jsxs)("td",{children:[e.fatherName&&c.find((function(t){return t.name===e.fatherName}))&&Object(h.jsx)(m,{person:c.find((function(t){return t.name===e.fatherName})),name:e.fatherName,sex:"m",setActivePerson:n}),e.fatherName&&!c.find((function(t){return t.name===e.fatherName}))&&"".concat(e.fatherName),!e.fatherName&&!c.find((function(t){return t.name===e.fatherName}))&&"-"]})]})}))})]})]})},x=(n(23),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.activePerson,n=e.setActivePerson,c=Object(s.useState)([]),a=Object(r.a)(c,2),i=a[0],o=a[1],j=Object(s.useState)(!1),m=Object(r.a)(j,2),O=m[0],p=m[1],f=Object(s.useState)(!1),v=Object(r.a)(f,2),N=v[0],g=v[1],P=function(){var e=Object(b.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),g(!1),e.prev=2,e.next=5,d();case 5:t=e.sent,o(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),g(!0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o([]),P()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"box table-container",children:[O&&Object(h.jsx)(x,{}),N&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!O&&!N&&Object(h.jsx)(u,{activePerson:t,setActivePerson:n,people:i})]})})]})},p=(n(24),function(e){var t=e.to,n=e.text;return Object(h.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"".concat(t),children:n})}),f=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(p,{to:"/",text:"Home"}),Object(h.jsx)(p,{to:"/people",text:"People"})]})})}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(i.b,{path:"/home",element:Object(h.jsx)(i.a,{to:"/",replace:!0})}),Object(h.jsx)(i.b,{path:"/people",element:Object(h.jsx)(O,{activePerson:n,setActivePerson:c})}),Object(h.jsx)(i.b,{path:"/people/:".concat(null===n||void 0===n?void 0:n.slug),element:Object(h.jsx)(O,{activePerson:n,setActivePerson:c})}),Object(h.jsx)(i.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(f,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.16fd06e4.chunk.js.map