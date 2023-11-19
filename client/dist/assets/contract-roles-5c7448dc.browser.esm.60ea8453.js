var P=Object.defineProperty;var W=(c,e,t)=>e in c?P(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var p=(c,e,t)=>(W(c,typeof e!="symbol"?e+"":e,t),t);import{bi as E,bj as i,aZ as m,a_ as w,aY as F,bb as l,a$ as R,bk as N}from"./index.04f4ab1d.js";import{h as C}from"./contract-appuri-04350497.browser.esm.ef458af5.js";class ${constructor(e,t){p(this,"featureName",E.name);p(this,"setAll",w(async e=>{var f,v;const t=new F(this.contractWrapper),r=Object.keys(e);i(r.length,"you must provide at least one role to set"),i(r.every(n=>this.roles.includes(n)),"this contract does not support the given role");const o=await this.getAll(),a=[],d=r.sort(n=>n==="admin"?1:-1);for(let n=0;n<d.length;n++){const h=d[n],[y,b]=await Promise.all([Promise.all(((f=e[h])==null?void 0:f.map(s=>l(s)))||[]),Promise.all(((v=o[h])==null?void 0:v.map(s=>l(s)))||[])]),A=y.filter(s=>!b.includes(s)),u=b.filter(s=>!y.includes(s));A.length&&A.forEach(s=>{a.push(t.encode("grantRole",[m(h),s]))}),u.length&&(await Promise.all(u.map(g=>this.getRevokeRoleFunctionName(g)))).forEach((g,k)=>a.push(t.encode(g,[m(h),u[k]])))}return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a]})}));p(this,"grant",w(async(e,t)=>{i(this.roles.includes(e),`this contract does not support the "${e}" role`);const r=await l(t);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[m(e),r]})}));p(this,"revoke",w(async(e,t)=>{i(this.roles.includes(e),`this contract does not support the "${e}" role`);const r=await l(t),o=await this.getRevokeRoleFunctionName(r);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:o,args:[m(e),r]})}));this.contractWrapper=e,this.roles=t}async getAll(){i(this.roles.length,"this contract has no support for roles");const e={},t=Object.entries(this.roles);return(await Promise.all(t.map(r=>{let[,o]=r;return this.get(o)}))).forEach((r,o)=>e[t[o][1]]=r),e}async get(e){i(this.roles.includes(e),`this contract does not support the "${e}" role`);const t=this.contractWrapper;if(C("getRoleMemberCount",t)&&C("getRoleMember",t)){const r=m(e),o=(await t.read("getRoleMemberCount",[r])).toNumber();return await Promise.all(Array.from(Array(o).keys()).map(a=>t.read("getRoleMember",[r,a])))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(e,t){await Promise.all(e.map(async r=>{const[o,a]=await Promise.all([this.get(r),l(t)]);if(!o.map(d=>d.toLowerCase()).includes(a.toLowerCase()))throw new N(a,r)}))}async getRevokeRoleFunctionName(e){const[t,r]=await Promise.all([l(e),this.contractWrapper.getSignerAddress()]);return r.toLowerCase()===t.toLowerCase()?"renounceRole":"revokeRole"}}export{$ as C};
