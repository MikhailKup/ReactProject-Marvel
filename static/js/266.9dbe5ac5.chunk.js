"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[266],{569:(e,a,s)=>{s.d(a,{A:()=>i});var c=s(43),r=s(186),t=s(579);class n extends c.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,t.jsx)(r.A,{}):this.props.children}}const i=n},186:(e,a,s)=>{s.d(a,{A:()=>t});const c=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var r=s(579);const t=()=>(0,r.jsx)("div",{className:"error-message",children:(0,r.jsx)("img",{src:c,alt:"Error",className:"error-message"})})},958:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var c=s(43),r=s(475),t=s(897),n=s(186),i=s(579);const l=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,i.jsxs)("div",{className:"skeleton",children:[(0,i.jsxs)("div",{className:"pulse skeleton__header",children:[(0,i.jsx)("div",{className:"pulse skeleton__circle"}),(0,i.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,i.jsx)("div",{className:"pulse skeleton__block"}),(0,i.jsx)("div",{className:"pulse skeleton__block"}),(0,i.jsx)("div",{className:"pulse skeleton__block"})]})]});var o=s(502);const d=e=>{let{char:a}=e;const{name:s,description:c,thumbnail:t,homepage:n,wiki:l,comics:o}=a;let d={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(d={objectFit:"contain",heigth:"160px",width:"160px"}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"char__basics",children:[(0,i.jsx)("img",{src:t,alt:s,style:d}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"char__info-name",children:s}),(0,i.jsxs)("div",{className:"char__btns",children:[(0,i.jsx)("a",{href:n,className:"button button__main",children:(0,i.jsx)("div",{className:"inner",children:"homepage"})}),(0,i.jsx)("a",{href:l,className:"button button__secondary",children:(0,i.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,i.jsx)("div",{className:"char__descr",children:c}),(0,i.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,i.jsxs)("ul",{className:"char__comics-list",children:[o.length>0?null:"There is comics for this character",o.map(((e,a)=>(0,i.jsx)(r.N_,{to:"/comics/".concat(e.resourceURI.split("/").pop()),className:"char__comics-item",children:e.name},a)))]})]})},h=e=>{const[a,s]=(0,c.useState)(null),{loading:r,error:h,getCharacter:m,clearError:u}=(0,t.A)();(0,c.useEffect)((()=>{_()}),[e.charId]);const _=()=>{const{charId:a}=e;a&&(u(),m(a).then(j))},j=e=>{s(e)},x=a||r||h?null:(0,i.jsx)(l,{}),p=r?(0,i.jsx)(o.A,{}):null,v=h?(0,i.jsx)(n.A,{}):null,b=r||h||!a?null:(0,i.jsx)(d,{char:a});return(0,i.jsxs)("div",{className:"char__info",children:[x,p,v,b]})};var m=s(772),u=s(523);const _=e=>{const[a,s]=(0,c.useState)([]),[r,l]=(0,c.useState)(!1),[d,h]=(0,c.useState)(210),[_,j]=(0,c.useState)(!1),{loading:x,error:p,getAllCharacters:v}=(0,t.A)();(0,c.useEffect)((()=>{b(d,!0)}),[]);const b=(e,a)=>{l(!a),v(e).then(g)},g=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),l(!1),h((e=>e+9)),j(a)},N=(0,c.useRef)([]),f=e=>{N.current.forEach((e=>e.classList.remove("char__item_selected"))),N.current[e].classList.add("char__item_selected"),N.current[e].focus()};const k=function(a){const s=a.map(((a,s)=>{let c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(c={objectFit:"unset"}),(0,i.jsx)(m.A,{timeout:500,classNames:"char__item",children:(0,i.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>N.current[s]=e,onClick:()=>{e.onCharSelected(a.id),f(s)},onKeyPress:c=>{" "!==c.key&&"Enter"!==c.key||(e.onCharSelected(a.id),f(s))},children:[(0,i.jsx)("img",{src:a.thumbnail,alt:a.name,style:c}),(0,i.jsx)("div",{className:"char__name",children:a.name})]},a.id)},a.id)}));return(0,i.jsx)("ul",{className:"char__grid",children:(0,i.jsx)(u.A,{component:null,children:s})})}(a),y=p?(0,i.jsx)(n.A,{}):null,C=x&&!r?(0,i.jsx)(o.A,{}):null;return(0,i.jsxs)("div",{className:"char__list",children:[y,C,k,(0,i.jsx)("button",{className:"button button__main button__long",disabled:r,style:{display:_?"none":"block"},onClick:()=>b(d),children:(0,i.jsx)("div",{className:"inner",children:"load more"})})]})};var j=s(569);const x=s.p+"static/media/mjolnir.61f31e1809f12183a524.png",p=e=>{let{char:a}=e;const{name:s,description:c,thumbnail:r,homepage:t,wiki:n}=a;let l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"contain"}),(0,i.jsxs)("div",{className:"randomchar__block",children:[(0,i.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:l}),(0,i.jsxs)("div",{className:"randomchar__info",children:[(0,i.jsx)("p",{className:"randomchar__name",children:s}),(0,i.jsx)("p",{className:"randomchar__descr",children:c}),(0,i.jsxs)("div",{className:"randomchar__btns",children:[(0,i.jsx)("a",{href:t,className:"button button__main",children:(0,i.jsx)("div",{className:"inner",children:"homepage"})}),(0,i.jsx)("a",{href:n,className:"button button__secondary",children:(0,i.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},v=()=>{const[e,a]=(0,c.useState)({}),{loading:s,error:r,getCharacter:l,clearError:d}=(0,t.A)();(0,c.useEffect)((()=>{m();const e=setInterval(m,6e4);return()=>{clearInterval(e)}}),[]);const h=e=>{a(e)},m=()=>{d();const e=Math.floor(400*Math.random()+1011e3);l(e).then(h)},u=s?(0,i.jsx)(o.A,{}):null,_=r?(0,i.jsx)(n.A,{}):null,j=s||r?null:(0,i.jsx)(p,{char:e});return(0,i.jsxs)("div",{className:"randomchar",children:[u,_,j,(0,i.jsxs)("div",{className:"randomchar__static",children:[(0,i.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,i.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,i.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,i.jsx)("button",{className:"button button__main",onClick:m,children:(0,i.jsx)("div",{className:"inner",children:"try it"})}),(0,i.jsx)("img",{src:x,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var b=s(892),g=s(899);const N=()=>{const[e,a]=(0,c.useState)(null),{loading:s,error:l,getCharacterByName:o,clearError:d}=(0,t.A)(),h=e=>{a(e)},m=l?(0,i.jsx)("div",{className:"searchform__error",children:(0,i.jsx)(n.A,{})}):null,u=e?e.length>0?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"searchform__bottom",children:[(0,i.jsxs)("div",{className:"searchform__success",children:["There is! Visit ",e[0].name," page?"]}),(0,i.jsx)(r.N_,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,i.jsx)("div",{className:"inner",children:"To page"})})]})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"searchform__error",children:"The character was not found. Check the name and try again"})}):null;return(0,i.jsxs)("div",{className:"searchform",children:[(0,i.jsx)("div",{className:"searchform__title",children:"Or find a character by name:"}),(0,i.jsx)(b.l1,{initialValues:{name:""},validationSchema:g.Ik({name:g.Yj().required("This field is required")}),onSubmit:e=>{let{name:a}=e;(e=>{d(),o(e).then(h)})(a)},children:(0,i.jsxs)(b.lV,{children:[(0,i.jsxs)("div",{className:"searchform__top",children:[(0,i.jsx)(b.D0,{id:"name",type:"text",name:"name",placeholder:"Enter name"}),(0,i.jsx)("button",{className:"button button__main",type:"submit",disabled:s,children:(0,i.jsx)("div",{className:"inner",children:"FIND"})})]}),(0,i.jsx)("div",{className:"searchform__bottom",children:(0,i.jsx)(b.Kw,{component:"div",className:"searchform__error",name:"name"})})]})}),u,m]})},f=s.p+"static/media/vision.067d4ae1936d64a577ce.png",k=()=>{const[e,a]=(0,c.useState)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.A,{children:(0,i.jsx)(v,{})}),(0,i.jsxs)("div",{className:"char__content",children:[(0,i.jsx)("div",{className:"char__content_left",children:(0,i.jsx)(j.A,{children:(0,i.jsx)(_,{onCharSelected:function(e){a((a=>e))}})})}),(0,i.jsxs)("div",{className:"char__content_right",children:[(0,i.jsx)(j.A,{children:(0,i.jsx)(h,{charId:e})}),(0,i.jsx)(N,{})]})]}),(0,i.jsx)("img",{className:"bg-decoration",src:f,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>t});var c=s(43);const r=e=>{const[a,s]=(0,c.useState)(!1),[r,t]=(0,c.useState)(null),n=(0,c.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};s(!0);try{const r=await fetch(e,{method:a,body:c,headers:n});if(!r.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(r.status));const t=await r.json();return s(!1),t}catch(r){throw s(!1),t(r.message),r}}),[]);return{loading:a,request:n,error:r,clearError:(0,c.useCallback)((()=>{t(null)}),[])}},t=()=>{const{loading:e,request:a,error:s,clearError:c}=r(),t="https://gateway.marvel.com:443/v1/public/",n="apikey=13fce9aab4e28128f7b9d466dbd48844",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,150),"..."):"Sorry...There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items?e.comics.items.slice(0,10):null}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description?"".concat(e.description.slice(0,35),"..."):"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:e,error:s,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a("".concat(t,"characters?limit=9&offset=").concat(e,"&").concat(n))).data.results.map(i)},getCharacter:async e=>{const s=await a("".concat(t,"characters/").concat(e,"?").concat(n));return i(s.data.results[0])},clearError:c,getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await a("".concat(t,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(n))).data.results.map(l)},getComic:async e=>{const s=await a("".concat(t,"comics/").concat(e,"?").concat(n));return l(s.data.results[0])},getCharacterByName:async e=>(await a("".concat(t,"characters?name=").concat(e,"&").concat(n))).data.results.map(i)}}}}]);
//# sourceMappingURL=266.9dbe5ac5.chunk.js.map