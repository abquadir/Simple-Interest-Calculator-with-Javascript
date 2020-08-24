var amount= document.getElementById("amount")
var year= document.getElementById("year")
var rate= document.getElementById("rate")
var btn = document.getElementById("btn")
var para = document.getElementById("para")
var total = document.getElementById("total")



btn.addEventListener("click",function(){
    if(amount.value==="" && year.value==="" && rate.value==""){
      para.innerHTML=`Need to fill the fields`
    }
    else  if(amount.value<0 && year.value<0&& rate.value<0){
        para.innerHTML=`Value can't be negative`
      }
    else{
    var sum = (parseInt(amount.value) * parseInt( year.value) * parseInt(rate.value))/100
    para.innerHTML=`Simple Interest: $ ${sum}`
    var totalAmount= parseInt(amount.value) + sum
    total.textContent =`Total amount: $  ${totalAmount} `
    }
})