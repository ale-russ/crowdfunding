import{b as l,w as m,f as p,i as w,j as f,am as g,V as C}from"./index.04f4ab1d.js";import{a as I,U as u,R as v}from"./errors-3055a99c.browser.esm.5f84b587.js";import{InjectedConnector as R}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.242693ec.js";import"./url-bc88b2b6.browser.esm.086449d6.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var c=new WeakMap;class q extends R{constructor(t){const n={...{name:"Rainbow Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:C},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),l(this,"id",m.rainbow),p(this,c,{writable:!0,value:void 0}),w(this,c,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var r,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new I;this.setupListeners(),this.emit("message",{type:"connecting"});let i=null;if(f(this,c)&&((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(i=await this.getAccount().catch(()=>null),!!i))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!i){const o=await e.request({method:"eth_requestAccounts"});i=g(o[0])}let s=await this.getChainId(),a=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:s,unsupported:a},provider:e,account:i};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new v(e):e}}}export{q as RainbowConnector};