import{v as r}from"./p-108711a4.js";const e=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),t=r=>r.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1"),n=r=>r.replace(/([=!:$\/()])/g,"\\$1"),a=r=>r&&r.sensitive?"":"i",l=(r,e,n)=>{for(var l=(n=n||{}).strict,i=!1!==n.end,p=t(n.delimiter||"/"),o=n.delimiters||"./",s=[].concat(n.endsWith||[]).map(t).concat("$").join("|"),u="",f=!1,v=0;v<r.length;v++){var c=r[v];if("string"==typeof c)u+=t(c),f=v===r.length-1&&o.indexOf(c[c.length-1])>-1;else{var g=t(c.prefix||""),x=c.repeat?"(?:"+c.pattern+")(?:"+g+"(?:"+c.pattern+"))*":c.pattern;e&&e.push(c),u+=c.optional?c.partial?g+"("+x+")?":"(?:"+g+"("+x+"))?":g+"("+x+")"}}return i?(l||(u+="(?:"+p+")?"),u+="$"===s?"$":"(?="+s+")"):(l||(u+="(?:"+p+"(?="+s+"))?"),f||(u+="(?="+p+"|"+s+")")),new RegExp("^"+u,a(n))},i=(r,p,o)=>r instanceof RegExp?((r,e)=>{if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r})(r,p):Array.isArray(r)?((r,e,t)=>{for(var n=[],l=0;l<r.length;l++)n.push(i(r[l],e,t).source);return new RegExp("(?:"+n.join("|")+")",a(t))})(r,p,o):((r,a,i)=>l(((r,a)=>{for(var l,i=[],p=0,o=0,s="",u=a&&a.delimiter||"/",f=a&&a.delimiters||"./",v=!1;null!==(l=e.exec(r));){var c=l[0],g=l[1],x=l.index;if(s+=r.slice(o,x),o=x+c.length,g)s+=g[1],v=!0;else{var $="",m=r[o],y=l[2],E=l[3],d=l[4],w=l[5];if(!v&&s.length){var R=s.length-1;f.indexOf(s[R])>-1&&($=s[R],s=s.slice(0,R))}s&&(i.push(s),s="",v=!1);var h=$||u,k=E||d;i.push({name:y||p++,prefix:$,delimiter:h,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,partial:""!==$&&void 0!==m&&m!==$,pattern:k?n(k):"[^"+t(h)+"]+?"})}}return(s||o<r.length)&&i.push(s+r.substr(o)),i})(r,i),a,i))(r,p,o);let p=0;const o={},s=(r,e={})=>{"string"==typeof e&&(e={path:e});const{path:t="/",exact:n=!1,strict:a=!1}=e,{re:l,keys:s}=((r,e)=>{const t=`${e.end}${e.strict}`,n=o[t]||(o[t]={}),a=JSON.stringify(r);if(n[a])return n[a];const l=[],s={re:i(r,l,e),keys:l};return p<1e4&&(n[a]=s,p+=1),s})(t,{end:n,strict:a}),u=l.exec(r);if(!u)return null;const[f,...v]=u,c=r===f;return n&&!c?null:{path:t,url:"/"===t&&""===f?"/":f,isExact:c,params:s.reduce((r,e,t)=>(r[e.name]=v[t],r),{})}},u=(e,t)=>null==e&&null==t||null!=t&&e&&t&&e.path===t.path&&e.url===t.url&&r(e.params,t.params);export{u as a,s as m};