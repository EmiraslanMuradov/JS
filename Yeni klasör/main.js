let uName = document.querySelector("#name");
let uSurname = document.querySelector("#surname");
let uAge = document.querySelector("#age");
let uEmail = document.querySelector("#email");

let sendBtn = document.querySelector("#btn");
let formDiv = document.querySelector(".form");

let cName;
let cSurname;
let cAge;
let cEmail;

uName.addEventListener("change",(e) => {
cName = e.target.value;
});

uSurname.addEventListener("change",(e) => {
cSurname = e.target.value;
});

uAge.addEventListener("change",(e) => {
cAge = e.target.value;
});

uEmail.addEventListener("change",(e) => {
cEmail = e.target.value;
});

sendBtn.addEventListener("click",() => {
formDiv.innerHTML = `
<div style="margin: 50px;"
<h3>Your infos:</h3>
<h4>Name: </h4> ${cName}
<h4>Surname: </h4> ${cSurname}
<h4>Age: </h4> ${cAge}
<h4>Email: </h4> ${cEmail}
</div>
`
});