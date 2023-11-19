var v=Object.defineProperty;var w=(o,t,a)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;var p=(o,t,a)=>(w(o,typeof t!="symbol"?t+"":t,a),a);import{aV as f,aW as b,cO as A,aY as y,B as C,bb as g,cP as m,b5 as P,_ as V,aI as k,bS as _,bV as x,a_ as l,a$ as d}from"./index.04f4ab1d.js";import{C as E,a as T,G as I,b as S}from"./contract-appuri-04350497.browser.esm.ef458af5.js";import{C as D}from"./contract-interceptor-6f8989ff.browser.esm.79a9b943.js";let h=function(o){return o[o.Against=0]="Against",o[o.For=1]="For",o[o.Abstain=2]="Abstain",o}({});class M{constructor(t,a,r){p(this,"propose",l(async(t,a)=>{a||(a=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);const r=a.map(s=>s.toAddress),e=a.map(s=>s.nativeTokenValue),c=a.map(s=>s.transactionData);return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[r,e,c,t],parse:s=>({id:this.contractWrapper.parseLogs("ProposalCreated",s==null?void 0:s.logs)[0].args.proposalId,receipt:s})})}));p(this,"vote",l((()=>{var t=this;return async function(a,r){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";return await t.ensureExists(a),d.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[a,r,e]})}})()));p(this,"execute",l(async t=>{await this.ensureExists(t);const a=await this.get(t),r=a.executions.map(n=>n.toAddress),e=a.executions.map(n=>n.nativeTokenValue),c=a.executions.map(n=>n.transactionData),s=m(a.description);return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[r,e,c,s]})}));let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new f(t,a,c,e,r);this._chainId=s,this.abi=b.parse(c||[]),this.contractWrapper=n,this.storage=r,this.metadata=new E(this.contractWrapper,A,this.storage),this.app=new T(this.contractWrapper,this.metadata,this.storage),this.encoder=new y(this.contractWrapper),this.estimator=new I(this.contractWrapper),this.events=new S(this.contractWrapper),this.interceptor=new D(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const r=(await this.getAll()).filter(e=>e.proposalId.eq(C.from(t)));if(r.length===0)throw new Error("proposal not found");return r[0]}async getAll(){var r;const t=(r=await this.contractWrapper.read("getAllProposals",[]))!=null?r:[];return(await Promise.all(t.map(e=>Promise.all([this.contractWrapper.read("state",[e.proposalId]),this.getProposalVotes(e.proposalId)])))).map((e,c)=>{let[s,n]=e;const i=t[c];return{proposalId:i.proposalId,proposer:i.proposer,description:i.description,startBlock:i.startBlock,endBlock:i.endBlock,state:s,votes:n,executions:i[3].map((W,u)=>({toAddress:i.targets[u],nativeTokenValue:W,transactionData:i.calldatas[u]}))}})}async getProposalVotes(t){const a=await this.contractWrapper.read("proposalVotes",[t]);return[{type:h.Against,label:"Against",count:a.againstVotes},{type:h.For,label:"For",count:a.forVotes},{type:h.Abstain,label:"Abstain",count:a.abstainVotes}]}async hasVoted(t,a){return a||(a=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await g(a)])}async canExecute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map(n=>n.toAddress),e=a.executions.map(n=>n.nativeTokenValue),c=a.executions.map(n=>n.transactionData),s=m(a.description);try{return await this.contractWrapper.callStatic().execute(r,e,c,s),!0}catch{return!1}}async balance(){const t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:P(t,18)}}async balanceOfToken(t){const a=(await V(()=>import("./index.04f4ab1d.js").then(e=>e.dp),["assets/index.04f4ab1d.js","assets/index.7001f0b6.css"])).default,r=new k(await g(t),a,this.contractWrapper.getProvider());return await _(this.contractWrapper.getProvider(),t,await r.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch{throw Error(`Proposal ${t} not found`)}}async settings(){const[t,a,r,e,c]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),s=await x(this.contractWrapper.getProvider(),r);return{votingDelay:t.toString(),votingPeriod:a.toString(),votingTokenAddress:r,votingTokenMetadata:s,votingQuorumFraction:e.toString(),proposalTokenThreshold:c.toString()}}async prepare(t,a,r){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}export{M as Vote};
