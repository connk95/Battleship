(()=>{"use strict";class e{constructor(e){this.size=e,this.board=this.createBoard(e),this.shots=[],this.hits=[],this.ships=[]}createBoard(e=this.size){let t=[];for(let s=0;s<e;s++){t[s]=[];for(let i=0;i<e;i++)t[s][i]=i}return t}placeShip(e,t,s,i){let h=[];if("battleship"==e)if("vertical"==i){if(s>6)return void alert("Please select a valid space!");h.push([t,s],[t,s+1],[t,s+2],[t,s+3])}else if("horizontal"==i){if(t>6)return void alert("Please select a valid space!");h.push([t,s],[t+1,s],[t+2,s],[t+3,s])}if("carrier"==e)if("vertical"==i){if(s>5)return void alert("Please select a valid space!");h.push([t,s],[t,s+1],[t,s+2],[t,s+3],[t,s+4])}else if("horizontal"==i){if(t>5)return void alert("Please select a valid space!");h.push([t,s],[t+1,s],[t+2,s],[t+3,s],[t+4,s])}if("cruiser"==e)if("vertical"==i){if(s>8)return void alert("Please select a valid space!");h.push([t,s],[t,s+1])}else if("horizontal"==i){if(t>8)return void alert("Please select a valid space!");h.push([t,s],[t+1,s])}if("destroyer"==e)if("vertical"==i){if(s>7)return void alert("Please select a valid space!");h.push([t,s],[t,s+1],[t,s+2])}else if("horizontal"==i){if(t>7)return void alert("Please select a valid space!");h.push([t,s],[t+1,s],[t+2,s])}if("submarine"==e)if("vertical"==i){if(s>7)return void alert("Please select a valid space!");h.push([t,s],[t,s+1],[t,s+2])}else if("horizontal"==i){if(s>7)return void alert("Please select a valid space!");h.push([t,s],[t+1,s],[t+2,s])}return h}receiveAttack(e,t){let s=[e,t];this.shots.push(s);for(let i=0;i<this.ships.length;i++)for(let h=0;h<this.ships[i].location.length;h++)if(e==this.ships[i].location[h][0]&&t==this.ships[i].location[h][1])return this.hits.push(s),this.ships[i].hit(s),[e,t];return console.log("Miss!"),!1}}class t{constructor(e,t){this.name=e,this.size=t,this.location=[],this.hits=[],this.sunk=!1}hit(e){console.log("Hit!"),this.hits.push(e),this.isSunk()}isSunk(){this.hits.length==this.size&&(this.sunk=!0,console.log(`You sunk my ${this.name}!`))}}document.getElementById("content");const s=document.getElementById("myGrid"),i=(document.getElementById("aiGrid"),new class{constructor(t,s){this.isHuman=t,this.turn=s,this.myBoard=new e(10),this.myShips=[],this.shots=[],this.myHits=[],this.shotSearch=[]}place(e,s,i,h,o){for(let e=0;e<this.myShips.length;e++)for(let t=0;t<this.myShips[e].location.length;t++){let s=this.myShips[e].location[t][0],o=this.myShips[e].location[t][1];if(s==i&&o==h)return void alert("There is already a ship here!")}let r=new t(e,s);r.location=this.myBoard.placeShip(e,i,h,o),this.myBoard.ships.push(r),this.myShips.push(r)}shoot(e,t,s){let i=[e,t];for(let s=0;s<this.shots.length;s++)if(e==this.shots[s][0]&&t==this.shots[s][1])return void alert("You cannot target the same spot twice!");this.shots.push(i);const h=s.myBoard.receiveAttack(e,t);0!=h&&this.myHits.push(h)}aiPlace(e,s){let i=Math.floor(Math.random()*(this.myBoard.size-s)),h=Math.floor(Math.random()*this.myBoard.size),o=Math.floor(Math.random()*this.myBoard.size),r=Math.floor(Math.random()*(this.myBoard.size-s));for(let e=0;e<this.myShips.length;e++)for(let t=0;t<this.myShips[e].location.length;t++){let s=this.myShips[e].location[t][0],a=this.myShips[e].location[t][1];if(s==o&&a==r||s==i&&a==h)return}let a=new t(e,s),l=Math.round(Math.random());a.location=l>0?this.myBoard.placeShip(e,i,h,"horizontal"):this.myBoard.placeShip(e,o,r,"vertical"),this.myBoard.ships.push(a),this.myShips.push(a)}aiShoot(e){if(0!=this.shotSearch.length){let t=this.shotSearch[0][0],s=this.shotSearch[0][1];for(let e=0;e<this.shots.length;e++)if(t==this.shots[e][0]&&s==this.shots[e][1])return;let i=e.myBoard.receiveAttack(t,s);this.shots.push([t,s]),0!=i?(this.myHits.push(i),this.shotSearch=[],this.aiDestroy()):this.shotSearch.shift()}else{let t=Math.floor(Math.random()*e.myBoard.size),s=Math.floor(Math.random()*e.myBoard.size);for(let e=0;e<this.shots.length;e++)if(t==this.shots[e][0]&&s==this.shots[e][1])return;let i=e.myBoard.receiveAttack(t,s);this.shots.push([t,s]),0!=i&&(this.myHits.push(i),this.aiDestroy())}}aiDestroy(){if(1==this.myHits.length){const e=this.myHits[0][0],t=this.myHits[0][1];t<9&&this.shotSearch.push([e,t+1]),t>0&&this.shotSearch.push([e,t-1]),e>0&&this.shotSearch.push([e-1,t]),e<9&&this.shotSearch.push([e+1,t])}else{const e=this.myHits[0][0],t=this.myHits[0][1],s=this.myHits[this.myHits.length-1][0],i=this.myHits[this.myHits.length-1][1];e==s?this.shotSearch.push([e,t-1],[s,i+1]):t==i&&this.shotSearch.push([e-1,t],[s+1,i])}}}(!0,!0)),h=document.getElementById("direction");let o="vertical";h.addEventListener("click",(()=>{"vertical"==o?o="horizontal":"horizontal"==o&&(o="vertical")}));const r=(e,t)=>{let s=document.querySelector("#tile");console.log(s),Number(s.id)<10?"vertical"==t?(s.addEventListener("mouseenter",(()=>{s.classList.add("hover");for(let t=0;t<e;t++)document.getElementById(`0${Number(s.id)+t}`).classList.add("hover")})),s.addEventListener("mouseleave",(()=>{s.classList.remove("hover");for(let t=0;t<e;t++)document.getElementById(`0${Number(s.id)+t}`).classList.remove("hover")}))):"horizontal"==t&&(s.addEventListener("mouseover",(()=>{s.classList.add("hover");for(let t=0;t<e;t++)document.getElementById(`${Number(s.id)+10*t}`).classList.add("hover")})),s.addEventListener("mouseleave",(()=>{s.classList.remove("hover");for(let t=0;t<e;t++)document.getElementById(`${Number(s.id)+10*t}`).classList.remove("hover")}))):"vertical"==t?(s.addEventListener("mouseenter",(()=>{s.classList.add("hover");for(let t=0;t<e;t++)document.getElementById(`${Number(s.id)+t}`).classList.add("hover")})),s.addEventListener("mouseleave",(()=>{s.classList.remove("hover");for(let t=0;t<e;t++)document.getElementById(`${Number(s.id)+t}`).classList.remove("hover")}))):"horizontal"==t&&(s.addEventListener("mouseover",(()=>{s.classList.add("hover");for(let t=0;t<e;t++)document.getElementById(`${Number(s.id)+10*t}`).classList.add("hover")})),s.addEventListener("mouseleave",(()=>{s.classList.remove("hover");for(let t=0;t<e;t++)document.getElementById(`${Number(s.id)+10*t}`).classList.remove("hover")})))};0==i.myShips.length?r(5,o):1==i.myShips.length?r(4,o):2==i.shipSize.length||3==i.shipSize.length?r(3,o):4==i.shipSize.length&&r(2,o),((e,t)=>{let s=0;for(let e=0;e<10;e++){let e=document.createElement("div");t.appendChild(e);for(let t=0;t<10;t++){let t=document.createElement("div");t.id=s<10?`0${s}`:s,s++,t.classList.add("tile"),t.addEventListener("click",(()=>{const e=String(t.id)[0],s=Number(e),h=String(t.id).slice(-1),r=Number(h);0==i.myShips.length?i.place("carrier",5,s,r,o):1==i.myShips.length?i.place("battleship",4,s,r,o):2==i.myShips.length?i.place("destroyer",3,s,r,o):3==i.myShips.length?i.place("submarine",3,s,r,o):4==i.myShips.length?i.place("cruiser",2,s,r,o):alert("You have no ships remaining!"),console.log(i.myShips)})),e.appendChild(t)}}})(0,s)})();