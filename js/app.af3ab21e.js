(function(n){function t(t){for(var r,l,o=t[0],s=t[1],c=t[2],f=0,p=[];f<o.length;f++)l=o[f],i[l]&&p.push(i[l][0]),i[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);a&&a(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,o=1;o<e.length;o++){var s=e[o];0!==i[s]&&(r=!1)}r&&(u.splice(t--,1),n=l(l.s=e[0]))}return n}var r={},i={app:0},u=[];function l(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=n,l.c=r,l.d=function(n,t,e){l.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},l.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,t){if(1&t&&(n=l(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)l.d(e,r,function(t){return n[t]}.bind(null,r));return e},l.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return l.d(t,"a",t),t},l.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},l.p="/gato/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var a=s;u.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";var r=e("64a9"),i=e.n(r);i.a},"1f8e":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("Board"),e("PlayAgain")],1)},u=[],l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"board"},n._l(n.tiles,function(t,r){return e("Tile",{key:r,attrs:{tile:t,turn:n.turn,"not-winning":n.winningTiles&&n.winningTiles.indexOf(r)<0},on:{mark:function(t){return n.markTile(r)}}})}),1)},o=[],s=e("2f62"),c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tile",class:n.dynamicClass,on:{click:function(t){return n.$emit("mark")}}},[e("div",{staticClass:"tile-content"},[n._v(n._s(n.content))])])},a=[],f=e("67bb"),p=e.n(f),d={o:"o",x:"x"},m={menu:p()("menu"),running:p()("running"),score:p()("score")},w={props:["tile","turn","not-winning"],methods:Object(s["b"])(["markTile"]),computed:{dynamicClass:function(){return{"turn-x":this.turn===d.x&&null===this.tile,"tile-x":this.tile===d.x,"turn-o":this.turn===d.o&&null===this.tile,"tile-o":this.tile===d.o,"tile-not-winning":this.notWinning}},content:function(){return null===this.tile?this.turn:this.tile}}},b=w,g=(e("d520"),e("2877")),v=Object(g["a"])(b,c,a,!1,null,"6d0218d4",null),h=v.exports,T={computed:Object(s["c"])(["tiles","turn","winningTiles"]),methods:Object(s["b"])(["markTile"]),components:{Tile:h}},y=T,x=(e("5f2f"),Object(g["a"])(y,l,o,!1,null,"419e3424",null)),O=x.exports,_=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.show?e("button",{staticClass:"fade-in",class:n.className,on:{click:n.createNewGame}},[n._v("Play again")]):n._e()},j=[],k=e("cebc"),S={computed:Object(k["a"])({},Object(s["c"])(["winner","gameStatus"]),{show:function(){return this.gameStatus===m.score},className:function(){return{"winner-x":this.winner===d.x,"winner-o":this.winner===d.o}}}),methods:Object(s["b"])(["createNewGame"])},P=S,W=(e("81d2"),Object(g["a"])(P,_,j,!1,null,"10e336e1",null)),C=W.exports,$={name:"app",components:{Board:O,PlayAgain:C}},M=$,N=(e("034f"),Object(g["a"])(M,i,u,!1,null,null,null)),B=N.exports,E={status:m.menu,tiles:[null,null,null,null,null,null,null,null,null],turn:d.x,winner:null,winningTiles:null},G={tiles:function(n){return n.tiles},turn:function(n){return n.turn},winner:function(n){return n.winner},gameStatus:function(n){return n.status},winningTiles:function(n){return n.winningTiles}},A=function(n){var t=Math.floor(n/3),e=n%3;return{row:t,col:e}},J=function(n){var t=n.row,e=n.col;return 3*t+e},q=function(n){return n<0?3+n:n>2?n-3:n},z=function(n){return 0===n||4===n||8===n},D=function(n){return 2===n||4===n||6===n},F=function(n,t,e){var r=A(t),i=r.row,u=r.col,l=J({row:i,col:q(u-1)}),o=J({row:i,col:q(u+1)}),s=J({row:q(i-1),col:u}),c=J({row:q(i+1),col:u}),a=J({row:q(i-1),col:q(u-1)}),f=J({row:q(i-1),col:q(u+1)}),p=J({row:q(i+1),col:q(u-1)}),d=J({row:q(i+1),col:q(u+1)});return e===n[l]&&e===n[o]?[l,t,o]:e===n[s]&&e===n[c]?[s,t,c]:z(t)&&e===n[a]&&e===n[d]?[a,t,d]:D(t)&&e===n[f]&&e===n[p]?[f,t,p]:null},H={markTile:function(n,t){var e=n.commit,r=n.getters;if(null===r.tiles[t]&&null===r.winningTiles){var i=r.turn,u=i===d.x?d.o:d.x,l=r.tiles.reduce(function(n,t){return n+(null===t?1:0)},0),o=F(r.tiles,t,i);o&&(e("setStatus",m.score),e("setWinner",i),e("setWinningTiles",o)),e("setTile",{position:t,mark:i}),e("setTurn",u),l<=1&&!o&&(e("setStatus",m.score),e("setWinner",null),e("setWinningTiles",null))}},createNewGame:function(n){var t=n.commit;t("emptyBoard"),t("setStatus",m.running),t("setWinningTiles",null)}},I={setTile:function(n,t){var e=t.position,r=t.mark,i=n.tiles.slice();i[e]=r,n.tiles=i},setTurn:function(n,t){n.turn=t},setStatus:function(n,t){n.status=t},setWinner:function(n,t){n.winner=t},emptyBoard:function(n){n.tiles=[null,null,null,null,null,null,null,null,null]},setWinningTiles:function(n,t){n.winningTiles=t}},K={state:E,getters:G,actions:H,mutations:I};r["a"].use(s["a"]);var L=new s["a"].Store({modules:{game:K}});r["a"].config.productionTip=!1,new r["a"]({store:L,render:function(n){return n(B)}}).$mount("#app")},"5f2f":function(n,t,e){"use strict";var r=e("bb93"),i=e.n(r);i.a},"64a9":function(n,t,e){},"81d2":function(n,t,e){"use strict";var r=e("1f8e"),i=e.n(r);i.a},"925b":function(n,t,e){},bb93:function(n,t,e){},d520:function(n,t,e){"use strict";var r=e("925b"),i=e.n(r);i.a}});
//# sourceMappingURL=app.af3ab21e.js.map