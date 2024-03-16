let btn1=document.querySelector("#mybtn1");
let btn2=document.querySelector("#mybtn2");
let copycode=document.querySelector(".copy_code");
// let myHex="0123456789abcdef";
let rgb1="rgb(92,145,229)";
let rgb2="rgb(152,63,198)";
const hexVlues=()=>{
  let myHex="0123456789abcdef";
  let str="#";
  for(let i=0;i<=5;i++){
    str=str+myHex[Math.floor(Math.random()*16)];
  }
  return str;
}

const handleButton1=()=>{
  rgb1=hexVlues();
 console.log(rgb1);
 document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1},${rgb2})`;
 copycode.innerHTML= ` background-image:linear-gradient(to right ,${rgb1},${rgb2})`;
 btn1.innerText=rgb1;

};

const handleButton2=()=>{
   rgb2=hexVlues();
  console.log(rgb2);
  document.body.style.backgroundImage= `linear-gradient(to right,${rgb1} ,${rgb2})`;
  copycode.innerHTML= ` background-image:linear-gradient(to right,${rgb1},${rgb2})`;
  btn2.innerText=rgb2;

}
btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);
copycode.addEventListener("click",() =>{
  navigator.clipboard.writeText(copycode.innerText);
});