import{m as u,u as o,p as V,v as _,k as S,e as D,q as ee,w as L,x as z,y as N,n as R,g as F,s as ae,a as j,c as A,j as C,z as E,l as te,r as ne,d as le,A as se,B as ie,C as de,R as ce,o as ue,t as re,f as ve,D as oe,E as me,F as ye,L as ge}from"./Dx8bZgNz.js";import{Q as r,aj as ke,at as fe,h as be,ak as Ce,z as n,P as k,Y as g,U as O,Z as w,O as x,i as T,R as Ve,af as Ie,a1 as Ae}from"./egyMo6gj.js";function Se(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return r()({name:t??ke(fe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...u()},setup(a,c){let{slots:s}=c;return()=>{var d;return be(a.tag,{class:[e,a.class],style:a.style},(d=s.default)==null?void 0:d.call(s))}}})}const Pe=r()({name:"VCardActions",props:u(),setup(e,l){let{slots:t}=l;return Ce({VBtn:{slim:!0,variant:"text"}}),o(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),he=k({opacity:[Number,String],...u(),...V()},"VCardSubtitle"),xe=r()({name:"VCardSubtitle",props:he(),setup(e,l){let{slots:t}=l;return o(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Te=Se("v-card-title"),Be=k({start:Boolean,end:Boolean,icon:g,image:String,text:String,..._(),...u(),...S(),...D(),...ee(),...V(),...O(),...L({variant:"flat"})},"VAvatar"),B=r()({name:"VAvatar",props:Be(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=w(e),{borderClasses:c}=z(e),{colorClasses:s,colorStyles:d,variantClasses:m}=N(e),{densityClasses:y}=R(e),{roundedClasses:v}=F(e),{sizeClasses:i,sizeStyles:I}=ae(e);return o(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,s.value,y.value,v.value,i.value,m.value,e.class],style:[d.value,I.value,e.style]},{default:()=>[t.default?n(C,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?n(j,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(A,{key:"icon",icon:e.icon},null):e.text,E(!1,"v-avatar")]})),{}}}),_e=k({appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:[String,Number],title:[String,Number],...u(),...S()},"VCardItem"),De=r()({name:"VCardItem",props:_e(),setup(e,l){let{slots:t}=l;return o(()=>{var v;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),d=!!(s||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(C,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(x,null,[e.prependAvatar&&n(B,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Te,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),y&&n(xe,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),d&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(C,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(x,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(B,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Le=k({opacity:[Number,String],...u(),...V()},"VCardText"),ze=r()({name:"VCardText",props:Le(),setup(e,l){let{slots:t}=l;return o(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Ne=k({appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],..._(),...u(),...S(),...te(),...ne(),...le(),...se(),...ie(),...D(),...de(),...V(),...O(),...L({variant:"elevated"})},"VCard"),je=r()({name:"VCard",directives:{Ripple:ce},props:Ne(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:c}=w(e),{borderClasses:s}=z(e),{colorClasses:d,colorStyles:m,variantClasses:y}=N(e),{densityClasses:v}=R(e),{dimensionStyles:i}=ue(e),{elevationClasses:I}=re(e),{loaderClasses:M}=ve(e),{locationStyles:q}=oe(e),{positionClasses:H}=me(e),{roundedClasses:Q}=F(e),f=ye(e,t),U=T(()=>e.link!==!1&&f.isLink.value),b=T(()=>!e.disabled&&e.link!==!1&&(e.link||f.isClickable.value));return o(()=>{const Y=U.value?"a":e.tag,Z=!!(a.title||e.title!=null),p=!!(a.subtitle||e.subtitle!=null),G=Z||p,J=!!(a.append||e.appendAvatar||e.appendIcon),K=!!(a.prepend||e.prependAvatar||e.prependIcon),W=!!(a.image||e.image),X=G||K||J,$=!!(a.text||e.text!=null);return Ve(n(Y,Ae({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},c.value,s.value,d.value,v.value,I.value,M.value,H.value,Q.value,y.value,e.class],style:[m.value,i.value,q.value,e.style],onClick:b.value&&f.navigate,tabindex:e.disabled?-1:void 0},f.linkProps),{default:()=>{var P;return[W&&n("div",{key:"image",class:"v-card__image"},[a.image?n(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(j,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),X&&n(De,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),$&&n(ze,{key:"text"},{default:()=>{var h;return[((h=a.text)==null?void 0:h.call(a))??e.text]}}),(P=a.default)==null?void 0:P.call(a),a.actions&&n(Pe,null,{default:a.actions}),E(b.value,"v-card")]}}),[[Ie("ripple"),b.value&&e.ripple]])}),{}}});export{je as V,Te as a,xe as b,ze as c};
