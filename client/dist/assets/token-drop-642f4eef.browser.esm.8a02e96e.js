var d=Object.defineProperty;var f=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{cL as C,aV as W,aW as w,cM as y,aY as R,bb as i,aZ as b,ax as T,a_ as c,a$ as l}from"./index.04f4ab1d.js";import{C as A,a as E,G as S,b as O}from"./contract-appuri-04350497.browser.esm.ef458af5.js";import{C as V}from"./contract-interceptor-6f8989ff.browser.esm.79a9b943.js";import{C as v}from"./contract-platform-fee-5d7e7019.browser.esm.def10103.js";import{C as D}from"./contract-roles-5c7448dc.browser.esm.60ea8453.js";import{C as F}from"./contract-sales-6ec6e159.browser.esm.aa603371.js";import{D as _}from"./drop-claim-conditions-994780b2.browser.esm.b30a0fed.js";import{S as x}from"./erc-20-standard-2f349d29.browser.esm.b4354e9d.js";import"./index.f5ff819d.js";import"./assertEnabled-42ec0e48.browser.esm.18ed3d24.js";import"./setErc20Allowance-271caabd.browser.esm.50b905bb.js";import"./erc-20-a75fa597.browser.esm.98d28438.js";const h=class extends x{constructor(t,r,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},m=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,m,o,a);super(g,a,u);n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:o})}})()));n(this,"delegateTo",c(async t=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await i(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=w.parse(m||[]),this.metadata=new A(this.contractWrapper,y,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new D(this.contractWrapper,h.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new O(this.contractWrapper),this.sales=new F(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new V(this.contractWrapper),this.claimConditions=new _(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await i(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await i(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[b("transfer"),T])}async prepare(t,r,a){return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};let p=h;n(p,"contractRoles",C);export{p as TokenDrop};