//Page 01 Script

const toggle = document.querySelector(".fa-eye");
const  input = document.querySelector("#input");
let userName = document.querySelector("#username");
let copyToggle1 = document.querySelector(".toggle1");
let password = document.querySelector("#input");
let copyToggle2 = document.querySelector(".toggle2");
let mail = document.querySelector("#mail");
let copyToggle3 = document.querySelector(".toggle3");
let number = document.querySelector("#number");
let copyToggle4 = document.querySelector(".toggle4");



//Show Hide Password
toggle.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    toggle.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    toggle.classList.replace("fa-eye-slash", "fa-eye");
  }
})


//Copy Username
copyToggle1.onclick = function(){
  navigator.clipboard.writeText(userName.value);
}

//Copy Password
copyToggle2.onclick = function(){
  navigator.clipboard.writeText(password.value);
}

//Copy Recovery mail
copyToggle3.onclick = function() {
  navigator.clipboard.writeText(mail.value);
}

//Copy Recovery Number
copyToggle4.onclick = function() {
  navigator.clipboard.writeText(number.value);
}















//main js
const btn1 = document.querySelector(".list1");
const btn2 = document.querySelector(".list2");
const btn3 = document.querySelector(".list3");
const btn4 = document.querySelector(".list4");
const btn5 = document.querySelector(".list5");
const btn6 = document.querySelector(".list6");
const btn7 = document.querySelector(".list7");
const btn8 = document.querySelector(".list8");
const btn9 = document.querySelector(".list9");
const btn10 = document.querySelector(".list10");
const btn11 = document.querySelector(".list11");
const btn12 = document.querySelector(".list12");

const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
const page7 = document.querySelector(".page7");
const page8 = document.querySelector(".page8");
const page9 = document.querySelector(".page9");
const page10 = document.querySelector(".page10");
const page11 = document.querySelector(".page11");
const page12 = document.querySelector(".page12");

btn1.onclick = (()=>{
  page1.classList.toggle("show");
});
btn2.onclick = (() => {
  page2.classList.toggle("show");
});
btn3.onclick = (() => {
  page3.classList.toggle("show");
});
btn4.onclick = (() => {
  page4.classList.toggle("show");
});
btn5.onclick = (() => {
  page5.classList.toggle("show");
});
btn6.onclick = (() => {
  page6.classList.toggle("show");
});
btn7.onclick = (() => {
  page6.classList.toggle("show");
});
btn8.onclick = (() => {
  page8.classList.toggle("show");
});
btn9.onclick = (() => {
  page9.classList.toggle("show");
});
btn10.onclick = (() => {
  page10.classList.toggle("show");
});
btn11.onclick = (() => {
  page11.classList.toggle("show");
});
btn12.onclick = (() => {
  page12.classList.toggle("show");
});