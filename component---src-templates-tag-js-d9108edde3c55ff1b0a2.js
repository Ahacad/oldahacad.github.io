(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6MZL":function(e,a,t){},EDuE:function(e,a,t){},FRpb:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),c=t("Wbzz"),r=(t("HDCr"),t("dPA+")),s=t.n(r),o=function(e){var a=e.author,t=e.tagline;return l.a.createElement("div",{className:"bio-main w-75"},l.a.createElement("img",{src:s.a,style:{maxWidth:"100px"},className:"profile-img",alt:""}),l.a.createElement("h3",{className:"mt-2 author-bio"},a),l.a.createElement("small",{className:"text-muted"},t))},m=t("ma3e"),i=function(e){var a=e.contacts;return l.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},l.a.createElement("a",{className:"text-secondary p-2",href:a.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(m.e,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(m.d,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.stackoverflow},l.a.createElement("span",{title:"Stack Overflow"},l.a.createElement(m.g,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(m.i,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.rss},l.a.createElement("span",{title:"Rss"},l.a.createElement(m.f,{size:26,style:{color:"secondary"}}))))};t("o+pQ"),a.a=function(){return l.a.createElement(c.StaticQuery,{query:"3664200517",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sidebar-main border-right"},l.a.createElement(o,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),l.a.createElement(i,{contacts:e.site.siteMetadata.contacts}),l.a.createElement("div",{className:"page-links"},l.a.createElement(c.Link,{to:"/"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),l.a.createElement(c.Link,{to:"/about"},l.a.createElement("span",{className:"text-dark d-block py-1"},"About")),l.a.createElement(c.Link,{to:"/books"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Books")),l.a.createElement(c.Link,{to:"/videos"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Videos")),l.a.createElement(c.Link,{to:"/music"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Music")))))}})}},HDCr:function(e,a,t){},ccoC:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("Wbzz"),r=(t("+eM2"),t("EDuE"),t("Bl7J")),s=t("vrFN"),o=t("FRpb"),m=t("o+pQ");a.default=function(e){var a=e.pageContext,t=e.data,n=t.allMarkdownRemark.edges,i=t.site.siteMetadata.labels;console.log(a.tag);var d=a.tag,E=t.allMarkdownRemark.totalCount,u=E+" post"+(1===E?"":"s")+' tagged with "'+d+'"';return l.a.createElement(r.a,null,l.a.createElement(s.a,{title:"Home",keywords:["gatsby","javascript","react","web development","node.js","graphql"]}),l.a.createElement("div",{className:"index-main"},l.a.createElement("div",{className:"sidebar px-4 py-2"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"post-list-main"},l.a.createElement("i",null,l.a.createElement("h2",{className:"heading"},u)),n.map((function(e){var a=e.node.frontmatter.tags;return l.a.createElement("div",{key:e.node.id,className:"container mt-5"},l.a.createElement(c.Link,{to:e.node.fields.slug,className:"text-dark"},l.a.createElement("h2",{className:"heading"},e.node.frontmatter.title)),l.a.createElement("small",{className:"d-block text-info"},"Posted on ",e.node.frontmatter.date),l.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),l.a.createElement(c.Link,{to:e.node.fields.slug,className:"text-primary"},l.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),l.a.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,t){i.forEach((function(n){e===n.tag&&a.push(l.a.createElement(m.a,{key:t,tag:n.tag,tech:n.tech,name:n.name,size:n.size,color:n.color}))}))})),a}(a)))})))))}},"o+pQ":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),c=(t("6MZL"),t("Wbzz"));a.a=function(e){var a=e.tag,t=e.tech,n=e.name,r=e.size,s=e.color;return l.a.createElement("div",{className:"d-inline-block p-1"},l.a.createElement(c.Link,{to:"/tags/"+a+"/"},l.a.createElement("button",{className:"tech-tag text-white"},l.a.createElement("p",{className:"d-inline"},t," "),l.a.createElement("div",{className:"d-inline",style:{fontSize:r,color:s}},l.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,style:{fill:""+s}},l.a.createElement("title",null,t),l.a.createElement("path",{d:n}))))))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-d9108edde3c55ff1b0a2.js.map