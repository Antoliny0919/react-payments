import{A as e,O as t,k as n,t as r}from"./jsx-runtime-BwZuD6r8.js";import{t as i}from"./Constants-BbHzMpKa.js";import{t as a}from"./emotion-styled.browser.esm-DNj5AwvM.js";import{n as o}from"./Button-BqvBafI2.js";var s=`data:image/svg+xml,%3csvg%20width='76'%20height='76'%20viewBox='0%200%2076%2076'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='38'%20cy='38'%20r='38'%20fill='%23333333'/%3e%3cpath%20d='M23%2034.0377L35.0471%2048L55%2028'%20stroke='white'%20stroke-width='7.49999'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`,c=r();function l(){let{firstDigitsCardNumber:e,cardBrand:r}=t().state??{},a=n();return(0,c.jsx)(u,{children:(0,c.jsxs)(f,{children:[(0,c.jsx)(d,{src:s,alt:`card-create-complete`}),(0,c.jsxs)(`p`,{children:[e,`로 시작하는 `,i[r].title,`가 등록되었어요.`]}),(0,c.jsx)(o,{type:`button`,onClick:()=>a(`/card/`),children:`확인`})]})})}var u=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 19px;
`,d=a.img`
  height: 76px;
  width: 76px;
`,f=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  p {
    font-size: 25px;
    color: #353c49;
    font-weight: 700;
  }
`,p=e(function(){return(0,c.jsx)(l,{})});export{p as default};