let accardionItemBtn = document.querySelectorAll(".accardion-item-btn");

accardionItemBtn.forEach(item => {
    item.addEventListener("click", (e) => {
        accardionItemBtn.forEach(item => {
            if(e.target!=item){
                item.classList.remove("accardion-item-btn-active");
                item.nextElementSibling.classList.remove("accardion-item-text-active");
                item.childNodes[3].classList.remove("fa-minus");
                item.childNodes[3].classList.add("fa-plus");
            }
        });
        e.target.classList.toggle("accardion-item-btn-active");
        item.nextElementSibling.classList.toggle("accardion-item-text-active");
        if(e.target.classList.contains("accardion-item-btn-active")){
            item.childNodes[3].classList.remove("fa-plus");
            item.childNodes[3].classList.add("fa-minus");
        }
        else{
            item.childNodes[3].classList.remove("fa-minus");
            item.childNodes[3].classList.add("fa-plus");
        }
    });
});