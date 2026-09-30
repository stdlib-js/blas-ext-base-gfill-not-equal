"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var y=f(function(B,q){
function E(a,e,t,r,s,c){var i,u,o,n,v;for(i=r.data,u=r.accessors[0],o=r.accessors[1],n=c,v=0;v<a;v++)u(i,n)!==e&&o(i,n,t),n+=s;return r}q.exports=E
});var l=f(function(C,d){
var j=require('@stdlib/array-base-arraylike2object/dist'),k=y();function O(a,e,t,r,s,c){var i,u,o;if(a<=0)return r;if(u=j(r),u.accessorProtocol)return k(a,e,t,u,s,c),r;for(i=c,o=0;o<a;o++)r[i]!==e&&(r[i]=t),i+=s;return r}d.exports=O
});var p=f(function(D,g){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=l();function m(a,e,t,r,s){return R(a,e,t,r,s,P(a,s))}g.exports=m
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=p(),z=l();w(b,"ndarray",z);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
