(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{5691:function(e,t,i){"use strict";i.r(t);var n=i(7294),r=i(1664),c=i.n(r),o=i(5675),d=i.n(o),a=i(5999),s=i(9473),l=i(1781),u=i(1266),p=i(1163),h=i(5893);t.default=function(){var e=(0,s.I0)(),t=(0,p.useRouter)(),i=(0,n.useState)(0),r=i[0],o=i[1],x=(0,s.v9)((function(e){return e.cart.userCart}));return(0,n.useEffect)((function(){o(0),x.map((function(e){o((function(t){return t+e.price*e.quantity}))}))}),[x]),(0,h.jsxs)(l.default,{children:[(0,h.jsx)("div",{id:"cart",children:x.map((function(t,i){return(0,h.jsxs)("div",{className:"product",children:[(0,h.jsx)(c(),{href:"/product/".concat(t.slug),children:(0,h.jsx)("a",{children:(0,h.jsxs)("div",{className:"product-left",children:[(0,h.jsx)(d(),{src:t.image,alt:t.name,width:60,height:60}),(0,h.jsx)("div",{children:t.name})]})})}),(0,h.jsxs)("div",{className:"product-right",children:[(0,h.jsx)("div",{children:"Quantity: ".concat(t.quantity)}),(0,h.jsx)("button",{className:"remove-button",onClick:function(){return function(t){e((0,u.kh)(t))}(t)},children:(0,h.jsx)(d(),{src:a.Z,alt:"Remove Product|",width:15,height:15})})]})]},i)}))}),(0,h.jsxs)("aside",{id:"checkout",children:[(0,h.jsxs)("div",{id:"checkout-top",children:[(0,h.jsx)("h3",{children:"Checkout"}),(0,h.jsx)("ul",{children:x.map((function(e,t){return(0,h.jsxs)("li",{children:[e.name," (",e.quantity,") - ","$ ".concat(e.price.toFixed(2))]},t)}))})]}),(0,h.jsxs)("div",{id:"checkout-bottom",children:[(0,h.jsx)("h3",{children:"$ ".concat(r.toFixed(2))}),(0,h.jsx)("button",{onClick:function(){0!==r&&t.push("/checkout")},children:"Proceed to Payment"})]})]})]})}},1781:function(e,t,i){"use strict";i.r(t);var n=i(2125).ZP.main.withConfig({displayName:"styles__CartStyles",componentId:"sc-bhok9p-0"})(["display:flex;flex-direction:row;width:100%;height:100%;justify-content:center;gap:20px;margin:0 auto;padding:20px 12.5vw;background-color:#d9d9d9;#cart{display:flex;flex-direction:column;width:100%;gap:20px;.product{display:flex;flex-direction:row;height:100px;align-items:center;justify-content:space-between;padding:20px;border-radius:4px;background-color:white;a{text-decoration:none;color:inherit;}.product-left{display:flex;flex-direction:row;align-items:center;gap:20px;}.product-right{display:flex;flex-direction:row;align-items:center;gap:20px;button{display:grid;place-items:center;border:none;outline:none;padding:10px;border-radius:4px;cursor:pointer;background-color:transparent;transition:background-color 0.15s ease;:hover{background-color:#d9d9d9;}}}}}#checkout{display:flex;flex-direction:column;width:50%;height:50vh;align-items:center;justify-content:space-between;padding:50px 20px;border-radius:4px;color:white;background-color:#393d45;#checkout-top{display:flex;flex-direction:column;width:100%;align-items:center;gap:20px;ul{display:flex;flex-direction:column;width:100%;max-height:175px;align-items:flex-start;margin-left:40px;overflow:scroll;::-webkit-scrollbar{width:0;height:0;}li{font-weight:300;font-size:14px;}}}#checkout-bottom{display:flex;flex-direction:column;align-items:center;gap:10px;button{display:grid;place-items:center;border:none;outline:none;padding:6px 18px;border-radius:4px;cursor:pointer;color:#393d45;background-color:white;}}}"]);t.default=n},4476:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return i(5691)}])},5999:function(e,t){"use strict";t.Z={src:"/e-commerce//_next/static/media/trashIcon.a057b9fb.svg",height:36,width:36}},1163:function(e,t,i){e.exports=i(1587)}},function(e){e.O(0,[774,888,179],(function(){return t=4476,e(e.s=t);var t}));var t=e.O();_N_E=t}]);