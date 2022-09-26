const products = [
    {
        name: "Parle Biscuit",
        price: 30
    },
    {
        name: "Good day Biscuit",
        price: 40
    },
    {
        name: "Hide & Seek Biscuit",
        price: 20
    }
];

const select = document.querySelector("#product");
const table = document.querySelector('table');
const buy = document.querySelector('#add');
const price = document.querySelector("#price");

for (let val of products) {
    var option = document.createElement("option");
    option.value = val.price;
    option.text = val.name;
    select.appendChild(option);
}

document.querySelector('#product').addEventListener('click', function () {
    price.value = this.value;
});


buy.addEventListener("click", function () {
    let select = document.getElementById('product');
    let price = select.options[select.selectedIndex].value;
    let productName = select.options[select.selectedIndex].text;
    let selectQuantity = document.getElementById('qty');
    let qty = selectQuantity.options[selectQuantity.selectedIndex].value;

    let present = false;

    let TotalProduct = document.querySelectorAll(".productName")
    for (var i = 0; i < TotalProduct.length; i++) {
        if (productName == TotalProduct[i].childNodes[0].nodeValue.trim()) {

            let quantity =TotalProduct[i].parentElement.children[1];
    
            let toatlPrice =TotalProduct[i].parentElement.children[3];

            quantity.innerHTML=Number(quantity.innerHTML)+Number(qty);
            toatlPrice.innerHTML=Number(toatlPrice.innerHTML)+(price * qty)

            let total = document.getElementById('total');
            total.textContent = Number(total.textContent) + (price * qty);
            present = true;
        }

    }
    if (!present) {

        table.innerHTML += `<tr>
        <td class="productName"> ${productName}</td>
       
        <td> ${qty} </td>     
        <td >  ${price}</td>
        <td id="uptotal" >  ${price * qty}</td>
        <td > <i class="fa fa-trash-o delete"></i></td>
        </tr> `;

        total = () => {
            let total = document.getElementById('total');
            total.textContent = Number(total.textContent) + (price * qty);
            return Number(total.textContent) + (price * qty);

        }
        updatedtotal = (updatedtotalPrice) => {
            let total = document.getElementById('total');
            total.textContent = Number(total.textContent) - updatedtotalPrice;
            return Number(total.textContent) - updatedtotalPrice;

        }
        total();
    }
});

table.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();

        const a = e.target.parentElement.parentElement;
        const updatedtotalPrice = a.querySelector("#uptotal").textContent
        total.textContent = updatedtotal(updatedtotalPrice);
    }
});