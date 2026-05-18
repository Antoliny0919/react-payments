import{o as e}from"./chunk-BpO6jR8S.js";import{A as t,N as n,i as r,t as i}from"./jsx-runtime-BwZuD6r8.js";import{t as a}from"./CardNetwork-CBkr6fc3.js";import{c as o,n as s,s as c}from"./Converter-DElEiymh.js";import{n as l,t as u}from"./emotion-styled.browser.esm-Db6jclju.js";var d=e(n(),1),f=`data:image/svg+xml,%3csvg%20width='160'%20height='100'%20viewBox='0%200%20160%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='159'%20height='99'%20rx='4.5'%20fill='%23F5F5F5'/%3e%3crect%20x='0.5'%20y='0.5'%20width='159'%20height='99'%20rx='4.5'%20stroke='%23D9D9D9'%20stroke-dasharray='6%204'/%3e%3c/svg%3e`,p=i();function m(){return(0,p.jsxs)(h,{children:[(0,p.jsx)(g,{src:f,alt:`비어있는 카드`}),(0,p.jsx)(`h3`,{children:`등록된 카드가 없습니다`}),(0,p.jsx)(`p`,{children:`아래 버튼을 눌러 첫 카드를 등록해보세요`}),(0,p.jsx)(_,{to:`/card/create/`,children:`카드 추가하기`})]})}var h=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #353c49;
    margin-top: 16px;
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
    color: #8c8c8c;
    margin: 16px 0;
  }
`,g=u.img`
  width: 160px;
  height: 100px;
`,_=u(r)`
  display: block;
  width: 100%;
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`,v=e=>{let t=e.split(``);for(let e=6;e<12;e++)t[e]=`*`;return t.join(``)},y=(e,t)=>t===`amex`?[e.slice(0,4),e.slice(4,10),e.slice(10,15)].join(` `):t===`diners`?[e.slice(0,4),e.slice(4,10),e.slice(10,14)].join(` `):[e.slice(0,4),e.slice(4,8),e.slice(8,12),e.slice(12,16)].join(` `),b=`data:image/svg+xml,%3csvg%20width='30'%20height='27'%20viewBox='0%200%2030%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.68%2021.216L8.816%2020.352L14.064%2015.072L8.816%209.792L9.68%208.928L14.928%2014.208L20.144%208.928L21.008%209.792L15.76%2015.072L21.008%2020.352L20.144%2021.216L14.928%2015.968L9.68%2021.216Z'%20fill='%238C8C8C'/%3e%3c/svg%3e`;function x({cardData:e}){let{id:t,issuerCode:n,number:r,expirationDate:i}=e,{title:o,bgHex:l}=s(n);return(0,p.jsx)(S,{children:(0,p.jsxs)(w,{children:[(0,p.jsxs)(E,{children:[(0,p.jsx)(C,{bgHex:l}),(0,p.jsxs)(`div`,{className:`card-info`,children:[(0,p.jsx)(`p`,{className:`card-brand-name`,children:o}),(0,p.jsx)(`p`,{children:y(v(r),a(r)?.title??``)}),(0,p.jsxs)(`p`,{children:[`유효기간 `,i]})]})]}),(0,p.jsx)(T,{type:`button`,onClick:()=>{window.confirm(`카드를 제거하시겠습니까?`)&&c(t)},children:(0,p.jsx)(`img`,{src:b})})]})})}var S=u.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 73px;
  padding: 12px;
  border: solid #e6e6e6 1px;
  border-radius: 5px;
`,C=u.div`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: #${e=>e.bgHex};
`,w=u.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .card-brand-name {
    font-size: 14px;
    color: #353c49;
    font-weight: 700;
  }
  p {
    font-size: 11px;
    color: #8c8c8c;
    margin: 0;
  }
`,T=u.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 27px;
    padding: 4px 8px;
  }
`,E=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  .card-info {
    display: flex;
    flex-direction: column;
  }
`;function D({cards:e}){return(0,p.jsx)(O,{children:e.map(e=>(0,p.jsx)(x,{cardData:e},e.id))})}var O=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;function k({cards:e}){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(D,{cards:e}),(0,p.jsx)(A,{to:`/card/create/`,children:`+ 카드 추가`})]})}var A=u(r)`
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 12px 16px;
  border-width: 1px;
  border-style: dashed;
  color: #8c8c8c;
  margin-top: 1rem;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;function j(){return(0,p.jsx)(M,{children:(0,p.jsxs)(N,{children:[(0,p.jsxs)(P,{children:[(0,p.jsx)(R,{}),(0,p.jsxs)(F,{children:[(0,p.jsx)(z,{width:80,height:12}),(0,p.jsx)(z,{width:140,height:11}),(0,p.jsx)(z,{width:90,height:11})]})]}),(0,p.jsx)(B,{})]})})}var M=u.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 73px;
  padding: 12px;
  border: solid #e6e6e6 1px;
  border-radius: 5px;
  box-sizing: border-box;
`,N=u.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,P=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,F=u.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=l`
  0% { background-position: -320px 0; }
  100% { background-position: 320px 0; }
`,L=u.div`
  background: linear-gradient(90deg, #e6e6e6 25%, #f0f0f0 50%, #e6e6e6 75%);
  background-size: 640px 100%;
  animation: ${I} 1.4s ease-in-out infinite;
  border-radius: 4px;
`,R=u(L)`
  width: 64px;
  height: 40px;
  flex-shrink: 0;
`,z=u(L)`
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;
`,B=u(L)`
  width: 30px;
  height: 27px;
  border-radius: 4px;
  align-self: center;
`;function V({count:e}){return(0,p.jsx)(H,{children:Array.from({length:e},(e,t)=>(0,p.jsx)(j,{},t))})}var H=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,U=`data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='32'%20cy='32'%20r='31.25'%20fill='%23333333'%20stroke='%23D9D9D9'%20stroke-width='1.5'/%3e%3c/svg%3e`,W=`data:image/svg+xml,%3csvg%20width='6'%20height='25'%20viewBox='0%200%206%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.37594%2016.2881L0.703943%204.48005L0.543944%204.95911e-05H5.27994L5.11994%204.48005L4.44794%2016.2881H1.37594ZM2.91194%2024.8001C2.05861%2024.8001%201.35461%2024.5014%200.799943%2023.9041C0.26661%2023.3067%20-5.65052e-05%2022.5814%20-5.65052e-05%2021.7281C-5.65052e-05%2020.8321%200.26661%2020.0961%200.799943%2019.5201C1.35461%2018.9441%202.05861%2018.6561%202.91194%2018.6561C3.76528%2018.6561%204.45861%2018.9441%204.99194%2019.5201C5.54661%2020.0961%205.82394%2020.8321%205.82394%2021.7281C5.82394%2022.5814%205.54661%2023.3067%204.99194%2023.9041C4.45861%2024.5014%203.76528%2024.8001%202.91194%2024.8001Z'%20fill='white'/%3e%3c/svg%3e`;function G(){return(0,p.jsxs)(K,{children:[(0,p.jsxs)(q,{children:[(0,p.jsx)(`img`,{src:U,alt:``,width:64,height:64}),(0,p.jsx)(`img`,{src:W,alt:``,style:{position:`absolute`}})]}),(0,p.jsx)(`h3`,{children:`카드 목록을 불러올 수 없어요`}),(0,p.jsx)(`p`,{children:`잠시 후 다시 시도해 주세요.`}),(0,p.jsx)(J,{to:`/card`,children:`다시 시도`})]})}var K=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #353c49;
    margin-top: 16px;
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
    color: #8c8c8c;
    margin: 16px 0;
  }
`,q=u.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,J=u(r)`
  display: block;
  width: 100%;
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;function Y({cards:e,status:t}){return(0,p.jsxs)(X,{children:[(0,p.jsxs)(`h1`,{children:[`보유 카드 `,t===`success`?`(${e.length})`:``]}),(0,p.jsxs)(Z,{children:[t===`pending`&&(0,p.jsx)(V,{count:e.length}),t===`empty`&&(0,p.jsx)(m,{}),t===`success`&&(0,p.jsx)(k,{cards:e}),t===`error`&&(0,p.jsx)(G,{})]})]})}var X=u.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 40px 20px;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }
`,Z=u.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,Q=t(function(){let[e,t]=(0,d.useState)([]),[n,r]=(0,d.useState)(`pending`);return(0,d.useEffect)(()=>{(async()=>{try{let e=await o()??[];t(e),r(e.length?`success`:`empty`)}catch{r(`error`)}})()},[]),(0,p.jsx)(Y,{cards:e,status:n})});export{Q as default};