import{r as t,g as e}from"./p-8c7de2ef.js";import{A as s}from"./p-f9edadb7.js";const i=class{constructor(e){t(this,e),this.titleSuffix="",this.pageTitle=""}updateDocumentTitle(){const t=this.el;t.ownerDocument&&(t.ownerDocument.title=`${this.pageTitle}${this.titleSuffix||""}`)}componentWillLoad(){this.updateDocumentTitle()}get el(){return e(this)}static get watchers(){return{pageTitle:["updateDocumentTitle"]}}};s.injectProps(i,["titleSuffix"]);export{i as stencil_route_title};