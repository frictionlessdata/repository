(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(t,e,i){"use strict";i.r(e),e.default=i.p+"assets/images/example-91daefdf8f182c3cf7470b7494ff7d04.png"},81:function(t,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return n})),i.d(e,"metadata",(function(){return c})),i.d(e,"toc",(function(){return l})),i.d(e,"default",(function(){return p}));var o=i(3),a=i(8),r=(i(0),i(103)),s=["components"],n={title:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Build",source:"@site/../docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/introduction.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1623856850,formattedLastUpdatedAt:"6/16/2021",sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/getting-started"}},l=[{value:"How It Works",id:"how-it-works",children:[]},{value:"Github Actions",id:"github-actions",children:[]},{value:"Frictionless Data",id:"frictionless-data",children:[]}],d={toc:l};function p(t){var e=t.components,n=Object(a.a)(t,s);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/repository/actions"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/frictionlessdata/repository/general/main",alt:"Build"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://codecov.io/gh/frictionlessdata/repository"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/github/frictionlessdata/repository/main",alt:"Coverage"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/repository/releases"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/frictionlessdata/repository",alt:"Release"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/repository"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/codebase-github-brightgreen",alt:"Codebase"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://discord.com/channels/695635777199145130/695635777199145133"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/support-discord-brightgreen",alt:"Support"}))),Object(r.b)("p",null,"Frictionless Repository is a Github Action created for continuous data validation. It is a minimalistic integration between ",Object(r.b)("a",{parentName:"p",href:"https://github.com/features/actions"},"Github Actions")," and ",Object(r.b)("a",{parentName:"p",href:"https://frictionlessdata.io/"},"Frictionless Data"),". In this introduction we will show an example of its work and describe the projects it relies on."),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("p",null,"On every commit to your repository there will be run a validation process to find tabular errors and other problems in your data. A visual validation report will be provided:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Example",src:i(107).default})),Object(r.b)("h2",{id:"github-actions"},"Github Actions"),Object(r.b)("p",null,"Github Actions is a continuous integration service. If you're not familiar with Github Actions we really recommend you to watch a short talk given by ",Object(r.b)("a",{parentName:"p",href:"https://github.com/GrantRVD"},"Grant R. Vousden-Dishington")," on csv,conf,v6:"),Object(r.b)("p",null,Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0WYpiba-UjE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(r.b)("h2",{id:"frictionless-data"},"Frictionless Data"),Object(r.b)("p",null,"Frictionless Data is a comprehensive data software and standards project covering many aspects working with data. Frictionless Repository uses a Python framework to validate data and a report component to show the validation results:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://framework.frictionlessdata.io/"},"Frictionless Framework")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://components.frictionlessdata.io/?path=/story/components-report--invalid"},"Frictionless Components"))),Object(r.b)("p",null,"Frictionless Repository can be described by this simple flow:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"you add a Frictionless Repository step to their workflow on Github"),Object(r.b)("li",{parentName:"ul"},"Frictionless Framework validates your data and saves the result as a workflow's artifact"),Object(r.b)("li",{parentName:"ul"},"Frictionless Components fetch and render this validation report")),Object(r.b)("p",null,"Frictionless Repository is completely server-less so it doesn't rely on any third-party hardware except for Github infrastructure. There is no vendor-lock or something like this a you can fork this project and run it on Github differently if needed."))}p.isMDXComponent=!0}}]);