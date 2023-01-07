let basket = JSON.parse(localStorage.getItem('basket'));
let basket_total = document.getElementById('product-in-cart');

if(basket.length === 0){
    document.getElementById('no-product').classList.remove('d-none');
    document.getElementById('cart-table').classList.add('d-none');
    document.getElementById('product-in-cart').classList.add('d-none');
}
else{
    document.getElementById('no-product').classList.add('d-none');
    document.getElementById('cart-table').classList.remove('d-none');
    document.getElementById('product-in-cart').classList.remove('d-none')

    let pr = '';
    for(let product of basket){
        
        pr+=`
        <tr>
            <td>
                <a href="">
                    <img class="cart-in-pic" src="${product.Src}" alt="">
                </a>
            </td>
            <td class="product-cart-name">${product.Name}</td>
            <td class="product-cart-price">$<span id="product-cart-price" >${product.ActPrice}</span></td>
            <td class="product-cart-count ">
                <div class="cart-counter d-flex align-items-center">
                    <div class="decrease">
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    
                    <span id="num-count" class="num-count">${product.Count}</span>

                    <div class="increase">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                
            </td>
            <td class="update-cart">
                <button class="confirm-btn btn">Update</button>
            </td>
            <td id="subtotal">$<span class="subtotal" ></span></td>
            <td><i class="delete fa-solid fa-xmark"></i></td>
            
        </tr>`
        document.getElementById('list').innerHTML = pr;
    }
}


let pr_subtotal = document.getElementsByClassName('subtotal');
let pr_result = 0;

function Subtotal(){
    for(let sub of pr_subtotal){
        let pr_count = sub.parentElement.previousElementSibling.previousElementSibling.firstElementChild.childNodes[3].innerText
        let pr_price = sub.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText
        sub.innerText = pr_result;
        sub.innerText = (Number(pr_count)*Number(pr_price)).toFixed(2)
        
    }
}

//total and subtotal prices initialization
let overal_total = $('.overall-total')


let mid_total = $('.mid-way-total')
let mid_total_price = 0;
mid_total.text(mid_total_price)


let pr_delete = $('.delete');

pr_delete.click(function(e){
    for(let i = 0; i<basket.length; i++){
        if(e.target.parentElement.parentElement.childNodes[3].innerText === basket[i].Name){
            basket.splice(i, 1)
            localStorage.setItem('basket', JSON.stringify(basket))
            location.reload()
        }
    }
})


let num_count = $('.num-count');
let decrease = document.getElementsByClassName('decrease');
let increase = $('.increase');
let confirmm = $('.confirm-btn');


for(let dec of decrease){
    dec.addEventListener('click', function(e){

        let number = Number(e.target.parentElement.nextElementSibling.innerText);
        if(number > 0){
            number--;
            e.target.parentElement.nextElementSibling.innerText = number
            Subtotal()
            MidWayTotal()
            OverallTotal()
        }
    })
}
for(let product of basket){
    Subtotal()
    MidWayTotal()
    OverallTotal()
    
}
confirmm.click(function(e){
    let number = Number(e.target.parentElement.previousElementSibling.firstElementChild.childNodes[3].innerText)
    console.log(e.target.parentElement.parentElement.childNodes[3])
    for(let i =0; i<basket.length; i++){
        if(e.target.parentElement.parentElement.childNodes[3].innerText === basket[i].Name){
            basket[i].Count = number;
            localStorage.setItem('basket', JSON.stringify(basket));
            if(basket[i].Count === 0){
                basket.splice(i, 1)
                localStorage.setItem('basket', JSON.stringify(basket));
                location.reload();
            }
        } 
    }
   
})

increase.click(function(e){
    let number = Number(e.target.parentElement.previousElementSibling.innerText);
    number++;
    console.log(number)
    e.target.parentElement.previousElementSibling.innerText = number;
    Subtotal()
    MidWayTotal()
    OverallTotal()
})




function MidWayTotal(){
    mid_total_price = 0;
    for(let subs of pr_subtotal){
        mid_total_price+=Number(subs.innerText);
        mid_total.text('$'+(mid_total_price).toFixed(2))
    
    }
}

$('.shipping').click(function(){
    if(document.getElementById('paid').checked){
        overal_total.text('$'+(Number(mid_total_price)+ Number(5)).toFixed(2));
    }
    else{
        overal_total.text('$'+ Number(mid_total_price).toFixed(2));
    }
})

function OverallTotal(){
    if(document.getElementById('paid').checked){
        overal_total.text('$'+(Number(mid_total_price)+ Number(5)).toFixed(2));
    }
    else{
        overal_total.text('$'+ Number(mid_total_price).toFixed(2));
    }
}
OverallTotal()