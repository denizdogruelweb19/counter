let num=document.getElementById("number").textContent.trim();
let arttir=document.getElementById("arttır");
let label=document.getElementById("number");
let azalt=document.getElementById("azalt");
 let counter=Number(num);
 //arttır butonu
arttir.addEventListener("click",function(){
   
    counter++;
    label.textContent=counter;


})
//azalt butonu
azalt.addEventListener("click",function(){
    counter--;
    label.textContent=counter;
})