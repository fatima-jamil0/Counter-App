let count =0;
let counter= document.getElementById('counter');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let reset = document.getElementById('reset');


plus.addEventListener('click',()=>{
    count++;
    counter.innerHTML=count;
})
reset.addEventListener('click',()=>{
    count=0;
    counter.innerHTML=count;
})
minus.addEventListener('click',()=>{
    count--;
    counter.innerHTML=count;
})
