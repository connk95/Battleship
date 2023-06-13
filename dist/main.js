(()=>{"use strict";class t{constructor(t){this.size=t,this.board=this.createBoard(t),this.shots=[],this.hits=[],this.ships=[]}createBoard(t=this.size){let e=[];for(let s=0;s<t;s++){e[s]=[];for(let i=0;i<t;i++)e[s][i]=i}return e}placeShip(t,e,s,i){let l=[];return"battleship"==t&&("vertical"==i?l.push([e,s],[e,s+1],[e,s+2],[e,s+3]):"horizontal"==i&&l.push([e,s],[e+1,s],[e+2,s],[e+3,s])),"carrier"==t&&("vertical"==i?l.push([e,s],[e,s+1],[e,s+2],[e,s+3],[e,s+4]):"horizontal"==i&&l.push([e,s],[e+1,s],[e+2,s],[e+3,s],[e+4,s])),"cruiser"==t&&("vertical"==i?l.push([e,s],[e,s+1]):"horizontal"==i&&l.push([e,s],[e+1,s])),"destroyer"==t&&("vertical"==i?l.push([e,s],[e,s+1],[e,s+2]):"horizontal"==i&&l.push([e,s],[e+1,s],[e+2,s])),"submarine"==t&&("vertical"==i?l.push([e,s],[e,s+1],[e,s+2]):"horizontal"==i&&l.push([e,s],[e+1,s],[e+2,s])),l}receiveAttack(t,e){let s=[t,e];this.shots.push(s);for(let i=0;i<this.ships.length;i++)for(let l=0;l<this.ships[i].location.length;l++)if(t==this.ships[i].location[l][0]&&e==this.ships[i].location[l][1])return this.hits.push(s),1==this.ships[i].hit(s)?(alert("Hit!"),!0):(alert("Hit!"),[t,e]);return alert("Miss!"),!1}}class e{constructor(t,e){this.name=t,this.size=e,this.location=[],this.hits=[],this.sunk=!1}hit(t){if(this.hits.push(t),1==this.isSunk())return!0}isSunk(){if(this.hits.length==this.size)return this.sunk=!0,alert(`You sunk my ${this.name}!`),!0}}class s{constructor(e,s){this.isHuman=e,this.turn=s,this.myBoard=new t(10),this.myShips=[],this.shots=[],this.myHits=[],this.shotSearch=[]}place(t,s,i,l,h){if("vertical"==h&&l+s>this.myBoard.size)return void alert("Please select a valid location!");if("horizontal"==h&&i+s>this.myBoard.size)return void alert("Please select a valid location!");for(let t=0;t<this.myShips.length;t++)for(let e=0;e<this.myShips[t].location.length;e++){let s=this.myShips[t].location[e][0],h=this.myShips[t].location[e][1];if(s==i&&h==l)return void alert("There is already a ship here!")}let a=new e(t,s);a.location=this.myBoard.placeShip(t,i,l,h),this.myBoard.ships.push(a),this.myShips.push(a)}shoot(t,e,s){let i=[t,e];for(let s=0;s<this.shots.length;s++)if(t==this.shots[s][0]&&e==this.shots[s][1])return void alert("You cannot target the same spot twice!");this.shots.push(i);const l=s.myBoard.receiveAttack(t,e);if(0!=l)return this.myHits.push(l),!0}aiPlace(t,s){let i=Math.floor(Math.random()*(this.myBoard.size-s)),l=Math.floor(Math.random()*this.myBoard.size),h=Math.floor(Math.random()*this.myBoard.size),a=Math.floor(Math.random()*(this.myBoard.size-s));for(let t=0;t<this.myShips.length;t++)for(let e=0;e<this.myShips[t].location.length;e++){let s=this.myShips[t].location[e][0],o=this.myShips[t].location[e][1];if(s==h&&o==a||s==i&&o==l)return}let o=new e(t,s),r=Math.round(Math.random());o.location=r>0?this.myBoard.placeShip(t,i,l,"horizontal"):this.myBoard.placeShip(t,h,a,"vertical"),this.myBoard.ships.push(o),this.myShips.push(o)}aiShoot(t){if(console.log(this.shots),console.log(this.myHits),console.log(this.shotSearch),0!=this.shotSearch.length){let e=this.shotSearch[0][0],s=this.shotSearch[0][1];for(let i=0;i<this.shots.length;i++)if(e==this.shots[i][0]&&s==this.shots[i][1])return this.shotSearch.shift(),void this.aiShoot(t);let i=t.myBoard.receiveAttack(e,s);if(this.shots.push([e,s]),1==i)return this.myHits=[],void(this.shotSearch=[]);0!=i?(this.myHits.push(i),this.shotSearch=[],this.aiDestroy()):this.shotSearch.shift()}else{let e=Math.floor(Math.random()*t.myBoard.size),s=Math.floor(Math.random()*t.myBoard.size);for(let t=0;t<this.shots.length;t++)if(e==this.shots[t][0]&&s==this.shots[t][1])return;let i=t.myBoard.receiveAttack(e,s);this.shots.push([e,s]),0!=i&&(this.myHits.push(i),this.shotSearch=[],this.aiDestroy())}}aiDestroy(){if(1==this.myHits.length){const t=this.myHits[0][0],e=this.myHits[0][1];e<9&&this.shotSearch.push([t,e+1]),e>0&&this.shotSearch.push([t,e-1]),t>0&&this.shotSearch.push([t-1,e]),t<9&&this.shotSearch.push([t+1,e])}else if(this.myHits.length>1){const t=this.myHits[0][0],e=this.myHits[0][1],s=this.myHits[this.myHits.length-1][0],i=this.myHits[this.myHits.length-1][1];t==s?this.shotSearch.push([t,e-1],[s,i+1]):e==i&&this.shotSearch.push([t-1,e],[s+1,i])}}}document.getElementById("content");const i=document.getElementById("myGrid"),l=document.getElementsByClassName("myTile"),h=document.getElementById("aiGrid"),a=document.getElementsByClassName("aiTile");h.style.visibility="hidden";const o=document.getElementById("preview"),r=new s(!0,!0),d=new s(!1,!1);let n=!0;const c=document.getElementById("direction");let m="vertical";c.addEventListener("click",(()=>{"vertical"==m?(m="horizontal",o.style.flexDirection="row"):"horizontal"==m&&(m="vertical",o.style.flexDirection="column")}));const p=()=>{for(;d.myShips.length<5;)if(0==d.myShips.length)d.aiPlace("carrier",5);else if(1==d.myShips.length)d.aiPlace("battleship",4);else if(2==d.myShips.length)d.aiPlace("destroyer",4);else if(3==d.myShips.length)d.aiPlace("submarine",4);else{if(4!=d.myShips.length)break;d.aiPlace("cruiser",2)}},y=()=>{if(0==r.myShips.length){let t=document.createElement("div");t.classList.add("previewTile"),o.appendChild(t);for(let t=0;t<4;t++){let t=document.createElement("div");t.classList.add("previewDisplay"),o.appendChild(t)}}else if(1==r.myShips.length){let t=document.createElement("div");t.classList.add("previewTile"),o.appendChild(t);for(let t=0;t<3;t++){let t=document.createElement("div");t.classList.add("previewDisplay"),o.appendChild(t)}}else if(2==r.myShips.length){let t=document.createElement("div");t.classList.add("previewTile"),o.appendChild(t);for(let t=0;t<2;t++){let t=document.createElement("div");t.classList.add("previewDisplay"),o.appendChild(t)}}else if(3==r.myShips.length){let t=document.createElement("div");t.classList.add("previewTile"),o.appendChild(t);for(let t=0;t<2;t++){let t=document.createElement("div");t.classList.add("previewDisplay"),o.appendChild(t)}}else if(4==r.myShips.length){let t=document.createElement("div");t.classList.add("previewTile"),o.appendChild(t);for(let t=0;t<1;t++){let t=document.createElement("div");t.classList.add("previewDisplay"),o.appendChild(t)}}else for(;o.firstChild;)o.removeChild(o.firstChild)},u=(t,e,s)=>{let i=0;for(let l=0;l<t;l++){let h=document.createElement("div");h.id=l,e.appendChild(h);for(let e=0;e<t;e++){let t=document.createElement("div");t.id=i<10?`0${i}`:i,i++,1==s?t.classList.add("myTile"):0==s&&t.classList.add("aiTile"),t.addEventListener("mouseenter",(()=>{t.classList.add("hover")})),t.addEventListener("mouseleave",(()=>{t.classList.remove("hover")})),h.appendChild(t)}}},f=()=>{1!=n&&0==n&&(d.aiShoot(r),console.log(r.myShips),n=!0)},g=()=>{for(let t=0;t<a.length;t++)a[t].addEventListener("click",(()=>{if(0!=n){if(1==n){let e=String(l[t].id)[0],s=Number(e),i=String(l[t].id).slice(-1),h=Number(i);1==r.shoot(s,h,d)?a[t].classList.add("hit"):a[t].classList.add("shot"),n=!1,console.log(d.myShips),setTimeout(f,2e3)}}else alert("It's not your turn!")}))};u(10,i,!0),y(),(()=>{for(let t=0;t<l.length;t++)l[t].addEventListener("click",(()=>{const e=String(l[t].id)[0],s=Number(e),i=String(l[t].id).slice(-1),a=Number(i);if(r.myShips.length<5){if(0==r.myShips.length){if(r.place("carrier",5,s,a,m),"vertical"==m&&a<6){l[t].classList.add("placed");for(let t=0;t<5;t++)document.getElementById(`${s}${a+t}`).classList.add("placed")}else if("horizontal"==m&&s<6){l[t].classList.add("placed");for(let t=0;t<5;t++)document.getElementById(`${s+t}${a}`).classList.add("placed")}}else if(1==r.myShips.length){if(r.place("battleship",4,s,a,m),"vertical"==m&&a<7){l[t].classList.add("placed");for(let t=0;t<4;t++)document.getElementById(`${s}${a+t}`).classList.add("placed")}else if("horizontal"==m&&s<7){l[t].classList.add("placed");for(let t=0;t<4;t++)document.getElementById(`${s+t}${a}`).classList.add("placed")}}else if(2==r.myShips.length){if(r.place("destroyer",3,s,a,m),"vertical"==m&&a<8){l[t].classList.add("placed");for(let t=0;t<3;t++)document.getElementById(`${s}${a+t}`).classList.add("placed")}else if("horizontal"==m&&s<8){l[t].classList.add("placed");for(let t=0;t<3;t++)document.getElementById(`${s+t}${a}`).classList.add("placed")}}else if(3==r.myShips.length){if(r.place("submarine",3,s,a,m),"vertical"==m&&a<8){l[t].classList.add("placed");for(let t=0;t<3;t++)document.getElementById(`${s}${a+t}`).classList.add("placed")}else if("horizontal"==m&&s<8){l[t].classList.add("placed");for(let t=0;t<3;t++)document.getElementById(`${s+t}${a}`).classList.add("placed")}}else if(4==r.myShips.length){if(r.place("cruiser",2,s,a,m),"vertical"==m&&a<9){l[t].classList.add("placed");for(let t=0;t<2;t++)document.getElementById(`${s}${a+t}`).classList.add("placed")}else if("horizontal"==m&&s<9){l[t].classList.add("placed");for(let t=0;t<2;t++)document.getElementById(`${s+t}${a}`).classList.add("placed")}}else alert("You have no ships remaining!");for(;o.firstChild;)o.removeChild(o.firstChild);y(),console.log(r.myShips)}5==r.myShips.length&&(p(),h.style.visibility="visible",g())}))})(),u(10,h,!1),console.log(d.myShips)})();