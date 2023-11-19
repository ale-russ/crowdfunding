var l=Object.defineProperty;var d=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);import{aU as g,aV as C,aW as y,b$ as W,aY as f,aZ as w,ax as T,a_ as s,a$ as S}from"./index.04f4ab1d.js";import{C as A,a as R,G as b,b as E}from"./contract-appuri-04350497.browser.esm.ef458af5.js";import{C as O}from"./contract-interceptor-6f8989ff.browser.esm.79a9b943.js";import{C as B,a as F}from"./contract-owner-daa449bf.browser.esm.9e47a772.js";import{C as M}from"./contract-platform-fee-5d7e7019.browser.esm.def10103.js";import{C as v}from"./contract-roles-5c7448dc.browser.esm.60ea8453.js";import{C as x}from"./contract-sales-6ec6e159.browser.esm.aa603371.js";import{a as I}from"./erc-1155-6b6895b3.browser.esm.1116e230.js";import{S as N}from"./erc-1155-standard-91ace9bf.browser.esm.023e8083.js";import"./setErc20Allowance-271caabd.browser.esm.50b905bb.js";import"./QueryParams-d83d1a4d.browser.esm.9ccc7ae0.js";import"./index.f5ff819d.js";import"./assertEnabled-42ec0e48.browser.esm.18ed3d24.js";const i=class extends N{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,p,h,n);super(u,n,m);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=y.parse(p||[]),this.metadata=new A(this.contractWrapper,W,this.storage),this.app=new R(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,i.contractRoles),this.royalties=new B(this.contractWrapper,this.metadata),this.sales=new x(this.contractWrapper),this.encoder=new f(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.signature=new I(this.contractWrapper,this.storage,this.roles),this.owner=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[w("transfer"),T])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};let c=i;a(c,"contractRoles",g);export{c as Edition};