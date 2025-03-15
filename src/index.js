document.addEventListener("DOMContentLoaded", () => {
  /*preventig default reloding of the page */
  let preventReload= document.querySelector('#create-task-form')

preventReload.addEventListener("click",defPrenent,false);

function defPrenent(event){
  event.preventDefault()
}

/* pushing input to the to-do section*/
let inputItem=document.querySelector('#new-task-description')
let buttonClick=document.querySelector('#button')


buttonClick.addEventListener("click",()=>{
/* (validation  => my personal choice)*/
if(inputItem.value===''){
alert('Enter a to-do item')
}
else{
  const ul = document.querySelector('#tasks');
  const li = document.createElement('li');
  li.innerHTML = inputItem.value;
  inputItem.value = '';  /*(removes the place holder text )*/
  ul.appendChild(li);
}
})



});
