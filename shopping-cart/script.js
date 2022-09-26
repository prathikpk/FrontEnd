function ddlselect(){
     var d=document.getElementById("ddselect");
    if(d.options[d.selectedIndex].text=="Parle G"){
     document.getElementById("txtvalue").value=20;
    }
     else if(d.options[d.selectedIndex].text=="Good day biscuit"){
        document.getElementById("txtvalue").value=30;
     }
}

let total=0;
function calculateTotalPrice(productPrice,productQuantity){
    total = total + (productPrice*productQuantity);
    return total;
}

button.addEventListener("click",e=>{
    table.innerHTML+=`<tr>
                        <td>${select.options[select.selectedIndex].text}</td>
                        <td>${quantity.value}</td>
                        <td>${input.placeholder}</td>
                        <td>${quantity.value*input.placeholder}</td>
    
                    </tr>`;
    let price = input.placeholder;
    let prodQuantity = quantity.value;
    total = calculateTotalPrice(price,prodQuantity);
    totalPrice.innerText = `Total Price: ${total}`;
});
