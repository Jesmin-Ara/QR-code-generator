let input;//= document.querySelector('#input').value;
let btn = document.querySelector('.submit-button');
let img = document.querySelector('#qr-code');
let qr;
btn.addEventListener('click',()=>{
  input = document.querySelector("#input").value;
  img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input;
})