(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{82:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return s})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return u}));var n=o(3),a=o(8),i=(o(0),o(103)),r={title:"Installation"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"There are two options of installing Fricitonless Repository. In both cases it will be validating your CSV and EXCEL files on every push, tag, or PR (or based on your configuration). After a commit and a workflow run you will see a link to a validation report within the workflow log or an error message.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/docs/installation.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1621619209,formattedLastUpdatedAt:"5/21/2021",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Configuration",permalink:"/docs/configuration"}},l=[{value:"New Workflow",id:"new-workflow",children:[]},{value:"Existent Workflow",id:"existent-workflow",children:[]}],c={toc:l};function u(t){var e=t.components,o=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two options of installing Fricitonless Repository. In both cases it will be validating your CSV and EXCEL files on every push, tag, or PR (or based on your configuration). After a commit and a workflow run you will see a link to a validation report within the workflow log or an error message."),Object(i.b)("h2",{id:"new-workflow"},"New Workflow"),Object(i.b)("p",null,"Add a file shown below in your Github Repository:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},".github/worflows/frictionless.yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"name: frictionless\n\non:\n  push:\n    branches:\n      - main\n    tags:\n      - v*.*.*\n  pull_request:\n    branches:\n      - main\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n      - name: Validate data\n        uses: frictionlessdata/repository@v0.8.0 # update to the latest version\n")),Object(i.b)("h2",{id:"existent-workflow"},"Existent Workflow"),Object(i.b)("p",null,"Just add this step to an existent workflow:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},".github/worflows/(name).yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"- name: Validate data\n  uses: frictionlessdata/repository@v0.8.0 # update to the latest version\n")))}u.isMDXComponent=!0}}]);