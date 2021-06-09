(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(19),i=c.n(r),j=(c(44),c(45),c(35),c(7)),a=c(34),d=c(1);var l=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(a.a,{bg:"dark",variant:"dark",children:Object(d.jsxs)(a.a.Brand,{href:"/Cocktail",children:[Object(d.jsx)("img",{alt:"",src:"https://images.creativemarket.com/0.1.0/ps/8627349/1820/1214/m1/fpnw/wm0/cocktail-icon-glass-cup-drink-logo-thin-line-web-symbol-on-white-background-.jpg?1593368949&s=d95c0f0910d8f2b59fa7148da00171e7",width:"50",height:"50",className:"d-inline-block align-top"}),"Cocktail app"]})})})},b=c(20),h=c(37);var x=function(){return Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(b.a.Item,{interval:2e3,children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://www.hennessy.com/sites/hennessy/files/2020-01/HEADER_COCKTAIL_2880x1540.jpg",alt:"First slide",height:"700px"}),Object(d.jsxs)(b.a.Caption,{children:[Object(d.jsx)("h3",{children:"The best App for Cocktails recepies"}),Object(d.jsx)("p",{children:"Choose the drink and follow the steps"})]})]}),Object(d.jsxs)(b.a.Item,{interval:2e3,children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1598990386084-8af4dd12b3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Second slide",height:"700px"}),Object(d.jsxs)(b.a.Caption,{children:[Object(d.jsx)("h3",{children:"Any question?"}),Object(d.jsx)(h.a,{variant:"danger",children:"Contact us"})," "]})]})]})},o=c(21),O=c(26),u=s.a.createContext(),g=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(O.a)(c,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then((function(e){return e.json()})).then((function(e){console.log(e.drinks,"data"),i(e.drinks)}))}),[]),Object(d.jsx)(u.Provider,{value:r,children:t})},p=u,m=c(18);function f(){var e=Object(n.useContext)(p);return Object(d.jsx)("div",{data:e,style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:e.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(o.a,{style:{width:"18rem",marginLeft:"20px"},children:[Object(d.jsx)(o.a.Img,{variant:"top",src:e.strDrinkThumb}),Object(d.jsxs)(o.a.Body,{children:[Object(d.jsx)(o.a.Title,{children:e.strDrink}),Object(d.jsxs)(o.a.Text,{children:[Object(d.jsx)("b",{children:"Category:"})," ",e.strCategory]}),Object(d.jsx)(m.b,{style:{fontSize:"20px"},to:"/CocktailDetails/".concat(e.idDrink),children:"view more"})]})]})},e.idDrink)}))})}var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{})]})},w=c(56),k=c(39),y=c(14),C=function(){var e=Object(n.useContext)(p);console.log(e,"here data");var t=Object(j.f)().id,c=e.findIndex((function(e){return e.idDrink===t})),s=Object(n.useState)(e[c]),r=Object(O.a)(s,2),i=r[0];r[1];return Object(d.jsxs)("div",{style:{backgroundColor:" \trgb(255, 160, 122)",display:"flex",height:" calc(100vh - 80px) "},children:[Object(d.jsxs)(w.a.div,{className:"container",initial:{scale:0},animate:{rotate:360,scale:1},transition:{type:"spring",stiffness:260,damping:20},style:{marginLeft:"200px"},children:[Object(d.jsxs)("h1",{children:[i.strDrink," "]}),Object(d.jsx)("img",{src:i.strDrinkThumb,style:{width:"500px"},alt:""})]}),Object(d.jsxs)("div",{style:{marginRight:"150px"},children:[Object(d.jsx)("h1",{children:" Instructions"}),Object(d.jsxs)("h4",{children:[" ",i.strInstructions]}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"}),Object(d.jsx)(y.a,{animation:"grow"})]})]}),Object(d.jsx)("div",{style:{marginRight:"150px"},children:Object(d.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Ingredients"}),Object(d.jsx)("th",{children:"Measure"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:" 1 "}),Object(d.jsx)("td",{children:i.strIngredient1}),Object(d.jsx)("td",{children:i.strMeasure1})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"2"}),Object(d.jsx)("td",{children:i.strIngredient2}),Object(d.jsx)("td",{children:i.strMeasure2})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"3"}),Object(d.jsx)("td",{children:i.strIngredient3}),Object(d.jsx)("td",{children:i.strMeasure3})]}),null===i.strMeasure4?Object(d.jsx)("div",{children:" "}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"4"}),Object(d.jsx)("td",{children:i.strIngredient4}),Object(d.jsx)("td",{children:i.strMeasure4})]}),null===i.strMeasure5?Object(d.jsx)("div",{children:" "}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"5"}),Object(d.jsx)("td",{children:i.strIngredient5}),Object(d.jsx)("td",{children:i.strMeasure5})]}),null===i.strMeasure6?Object(d.jsx)("div",{children:" "}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"6"}),Object(d.jsx)("td",{children:i.strIngredient6}),Object(d.jsx)("td",{children:i.strMeasure6})]}),null===i.strMeasure7?Object(d.jsx)("div",{children:" "}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"7"}),Object(d.jsx)("td",{children:i.strIngredient7}),Object(d.jsx)("td",{children:i.strMeasure7})]})]})]})})]})};var I=function(){return Object(d.jsxs)(m.a,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(l,{})}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(d.jsx)(j.a,{exact:!0,path:"/CocktailDetails/:id",component:C})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(g,{children:Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(I,{})})}),document.getElementById("root")),M()}},[[52,1,2]]]);
//# sourceMappingURL=main.8c859f41.chunk.js.map