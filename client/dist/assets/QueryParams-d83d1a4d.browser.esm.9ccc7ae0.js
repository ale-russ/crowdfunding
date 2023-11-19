import{I as E,a8 as m,B as i,bG as h,_ as u,aI as l}from"./index.04f4ab1d.js";import{a as d,C as _}from"./setErc20Allowance-271caabd.browser.esm.50b905bb.js";const C=(()=>E("0x80ac58cd"))(),I=(()=>E("0xd9b67a26"))(),w={name:"Failed to load NFT metadata"};async function R(t,a,e){if(a.startsWith("data:application/json;base64")&&typeof m.Buffer<"u"){const s=a.split(",")[1],o=JSON.parse(m.Buffer.from(s,"base64").toString("utf-8"));return d.parse({...o,id:i.from(t).toString(),uri:a})}const r=a.replace("{id}",h(i.from(t).toHexString(),32).slice(2));let n;try{n=await e.downloadJSON(r)}catch{const o=a.replace("{id}",i.from(t).toString());try{n=await e.downloadJSON(o)}catch{console.warn(`failed to get token metadata: ${JSON.stringify({tokenId:t.toString(),tokenUri:a})} -- falling back to default metadata`),n=w}}return d.parse({...n,id:i.from(t).toString(),uri:a})}async function F(t,a,e,r){let n;const s=(await u(()=>import("./IERC165.4b3b20df.js"),[])).default,o=new l(t,s,a),[p,b]=await Promise.all([o.supportsInterface(C),o.supportsInterface(I)]);if(p){const c=(await u(()=>import("./index.04f4ab1d.js").then(f=>f.dr),["assets/index.04f4ab1d.js","assets/index.7001f0b6.css"])).default;n=await new l(t,c,a).tokenURI(e)}else if(b){const c=(await u(()=>import("./index.04f4ab1d.js").then(f=>f.dt),["assets/index.04f4ab1d.js","assets/index.7001f0b6.css"])).default;n=await new l(t,c,a).uri(e)}else throw Error("Contract must implement ERC 1155 or ERC 721.");return n?R(e,n,r):d.parse({...w,id:i.from(e).toString(),uri:""})}async function S(t,a){return typeof t=="string"?t:await a.upload(_.parse(t))}async function A(t,a,e,r){if(y(t))return t;if(T(t))return await a.uploadBatch(t.map(s=>_.parse(s)),{rewriteFileNames:{fileStartNumber:e||0},onProgress:r==null?void 0:r.onProgress});throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function x(t){const a=t[0].substring(0,t[0].lastIndexOf("/"));for(let e=0;e<t.length;e++){const r=t[e].substring(0,t[e].lastIndexOf("/"));if(a!==r)throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${a}' but got '${r}'`)}return a.replace(/\/$/,"")+"/"}function y(t){return t.find(a=>typeof a!="string")===void 0}function T(t){return t.find(a=>typeof a!="object")===void 0}const L=100;export{L as D,w as F,C as I,R as a,S as b,I as c,F as f,x as g,A as u};
