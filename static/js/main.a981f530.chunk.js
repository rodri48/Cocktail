(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(19),i=c.n(r),j=(c(44),c(45),c(34),c(7)),d=c(33),a=c(1);var l=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(d.a,{bg:"dark",variant:"dark",children:Object(a.jsxs)(d.a.Brand,{href:"/",children:[Object(a.jsx)("img",{alt:"",src:"https://images.creativemarket.com/0.1.0/ps/8627349/1820/1214/m1/fpnw/wm0/cocktail-icon-glass-cup-drink-logo-thin-line-web-symbol-on-white-background-.jpg?1593368949&s=d95c0f0910d8f2b59fa7148da00171e7",width:"50",height:"50",className:"d-inline-block align-top"}),"Cocktail app"]})})})},b=c(20),h=c(36);var x=function(){return Object(a.jsxs)(b.a,{children:[Object(a.jsxs)(b.a.Item,{interval:2e3,children:[Object(a.jsx)("img",{className:"d-block w-100",src:"https://www.hennessy.com/sites/hennessy/files/2020-01/HEADER_COCKTAIL_2880x1540.jpg",alt:"First slide",height:"700px"}),Object(a.jsxs)(b.a.Caption,{children:[Object(a.jsx)("h3",{children:"The best App for Cocktails recepies"}),Object(a.jsx)("p",{children:"Choose the drink and follow the steps"})]})]}),Object(a.jsxs)(b.a.Item,{interval:2e3,children:[Object(a.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1598990386084-8af4dd12b3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Second slide",height:"700px"}),Object(a.jsxs)(b.a.Caption,{children:[Object(a.jsx)("h3",{children:"Any question?"}),Object(a.jsx)(h.a,{variant:"danger",children:"Contact us"})," "]})]})]})},o=c(21),O=c(39),u=s.a.createContext(),g=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(O.a)(c,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then((function(e){return e.json()})).then((function(e){console.log(e.drinks,"data"),i(e.drinks)}))}),[]),Object(a.jsx)(u.Provider,{value:r,children:t})},p=u,m=c(18);function f(){var e=Object(n.useContext)(p);return Object(a.jsx)("div",{data:e,style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:e.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)(o.a,{style:{width:"18rem",marginLeft:"20px"},children:[Object(a.jsx)(o.a.Img,{variant:"top",src:e.strDrinkThumb}),Object(a.jsxs)(o.a.Body,{children:[Object(a.jsx)(o.a.Title,{children:e.strDrink}),Object(a.jsxs)(o.a.Text,{children:[Object(a.jsx)("b",{children:"Category:"})," ",e.strCategory]}),Object(a.jsx)(m.b,{style:{fontSize:"20px"},to:"/CocktailDetails/".concat(e.idDrink),children:"view more"})]})]})},e.idDrink)}))})}var v=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(f,{})]})},w=c(56),k=c(38),y=c(14),C=function(){var e=Object(n.useContext)(p);console.log(e,"here data");var t=Object(j.f)().id,c=e.findIndex((function(e){return e.idDrink===t}));return console.log(e[c]),Object(a.jsxs)("div",{style:{backgroundColor:" \trgb(255, 160, 122)",display:"flex"},children:[Object(a.jsxs)(w.a.div,{className:"container",initial:{scale:0},animate:{rotate:360,scale:1},transition:{type:"spring",stiffness:260,damping:20},style:{marginLeft:"200px"},children:[Object(a.jsxs)("h1",{children:[e[c].strDrink," "]}),Object(a.jsx)("img",{src:e[c].strDrinkThumb,style:{width:"500px"},alt:""})]}),Object(a.jsxs)("div",{style:{marginRight:"150px"},children:[Object(a.jsx)("h1",{children:" Instructions"}),Object(a.jsxs)("h4",{children:[" ",e[c].strInstructions]}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"}),Object(a.jsx)(y.a,{animation:"grow"})]})]}),Object(a.jsx)("div",{style:{marginRight:"150px"},children:Object(a.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Ingredients"}),Object(a.jsx)("th",{children:"Measure"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:" 1 "}),Object(a.jsx)("td",{children:e[c].strIngredient1}),Object(a.jsx)("td",{children:e[c].strMeasure1})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"2"}),Object(a.jsx)("td",{children:e[c].strIngredient2}),Object(a.jsx)("td",{children:e[c].strMeasure2})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"3"}),Object(a.jsx)("td",{children:e[c].strIngredient3}),Object(a.jsx)("td",{children:e[c].strMeasure3})]}),null===e[c].strMeasure4?Object(a.jsx)("div",{children:" "}):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"4"}),Object(a.jsx)("td",{children:e[c].strIngredient4}),Object(a.jsx)("td",{children:e[c].strMeasure4})]}),null===e[c].strMeasure5?Object(a.jsx)("div",{children:" "}):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"5"}),Object(a.jsx)("td",{children:e[c].strIngredient5}),Object(a.jsx)("td",{children:e[c].strMeasure5})]}),null===e[c].strMeasure6?Object(a.jsx)("div",{children:" "}):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"6"}),Object(a.jsx)("td",{children:e[c].strIngredient6}),Object(a.jsx)("td",{children:e[c].strMeasure6})]}),null===e[c].strMeasure7?Object(a.jsx)("div",{children:" "}):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"7"}),Object(a.jsx)("td",{children:e[c].strIngredient7}),Object(a.jsx)("td",{children:e[c].strMeasure7})]})]})]})})]})};var I=function(){return Object(a.jsxs)(m.a,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(l,{})}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(j.a,{exact:!0,path:"/CocktailDetails/:id",component:C})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(g,{children:Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),M()}},[[52,1,2]]]);
//# sourceMappingURL=main.a981f530.chunk.js.map