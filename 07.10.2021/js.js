//Bir array olsun:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Funksiyaya ötürülən parametrin arrayin içində olub olmamasını tapın!

function checkNumber(number){
    for (let i= 0; i< numbers.length; i++) {
        if(numbers[i]===number){
            return true;
        }        
    }
    return false;
}
console.log(checkNumber(5));
console.log(checkNumber(0));


// Arrayda olan cüt ədədləri qaytaran funksiya yazın

function checkEvenNumber(){
    let evenNumbers = [];
    for (let i= 0; i< numbers.length; i++) {
        if(numbers[i]%2==!1){
            evenNumbers.length++;
            evenNumbers[evenNumbers.length-1]=numbers[i];
        }        
    }
    return evenNumbers;
}
console.log(checkEvenNumber());


//Bir calculator funksiyası olsun. Əgər funksiyaya "+" ötürülərsə toplama, "-" ötürülərsə çıxma,
//"*" ötürülərsə vurma,  "/" ötürülərsə bölmə əməliyyatını edən funksiyanı yazın. Example: calculator(5, 10, "+") --> Result:  15;

function calculator(number1, number2, sign){
    if(sign==="+"){
        return number1 + number2;
    }
    else if(sign==="-"){
        return number1 - number2;
    }
    else if(sign==="*"){
        return number1 * number2;
    }
    else if(sign==="/"){
        return number1 / number2;
    }
    else{
        return false;
    }
}
console.log(calculator(2,3,"+"));
console.log(calculator(2,3,"-"));
console.log(calculator(2,3,"*"));
console.log(calculator(2,3,"/"));
console.log(calculator(2,3,"f"));