let userName = document.querySelector("#name");
let userSurname = document.querySelector("#surname");
let userAge = document.querySelector("#age");

let sendButton = document.querySelector("#button");
let tableContent = document.querySelector("#user-list-body");


let changeableName;
let changeableSurname;
let changeableAge;

userName.addEventListener("change", (e) => {
changeableName = e.target.value;
});
userSurname.addEventListener("change", (e) => {
changeableSurname = e.target.value;
});
userAge.addEventListener("change", (e) => {
changeableAge = e.target.value;
});

sendButton.addEventListener("click", (e) => {
e.preventDefault();
if(changeableName.length<4 || changeableSurname.length<4){
    alert("Ad ve Soyad 3 simvoldan böyük olmalıdır.");
}
else if(isNaN(changeableAge) || changeableAge==""){
    alert("Yaşınızı düzgün daxil edin.");
}
else{
    tableContent.innerHTML += `
    <tr>
         <td>
         <input type="checkbox" id="user-check" name="userCheck"></input>
         </td>
         <td class="user-name-info">${changeableName}</td>
         <td class="user-surname-info">${changeableSurname}</td>
         <td class="user-age-info">${changeableAge}</td>
     </tr>
     <script>
     let userCheck = document.querySelector("#user-check");
    let userNameInfo = document.querySelector(".user-name-info");
    let userSurnameInfo = document.querySelector(".user-surname-info");
    let userAgeInfo = document.querySelector(".user-age-info");
    userCheck.addEventListener("click", () => {
        if(userCheck.checked==true){
            userNameInfo.setAttribute("style", "background-color: aqua;");
            userSurnameInfo.setAttribute("style", "background-color: aqua;");
            userAgeInfo.setAttribute("style", "background-color: aqua;");
        }
        else{
            userNameInfo.setAttribute("style", "background-color: none;");
            userSurnameInfo.setAttribute("style", "background-color: none;");
            userAgeInfo.setAttribute("style", "background-color: none;");
        }
    });
     </script>
    `;
}
});
