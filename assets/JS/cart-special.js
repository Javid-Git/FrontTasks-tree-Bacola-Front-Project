let subtotal = 0;
let subtotal_field = $('#page-subtotal')
let total_field = $('#page-cart-total');

subtotal_field.text('$'+ subtotal.toFixed(2));
total_field.text('$'+ subtotal.toFixed(2));
for(let product of basket){
    subtotal+= Number(product.ActPrice)*Number(product.Count);
    subtotal_field.text('$'+ subtotal.toFixed(2));
    total_field.text('$'+ subtotal.toFixed(2));


}

if(basket.length === 0){
    document.getElementById('cart-adds').classList.remove('d-none');
    document.getElementById('dropdown-cart').classList.add('d-none');
}
else{
    document.getElementById('cart-adds').classList.add('d-none');
    document.getElementById('dropdown-cart').classList.remove('d-none');

    let sr ='';
    for(let product of basket){
        sr+=`
        <div class="dropdown-cart-box d-flex">
            <div class="dropdown-delete">
                <i class="small-delete fa-solid fa-xmark"></i>
            </div>
            <img src="${product.Src}" alt="" class="col-lg-3 col-3">
            <div class="dropdown-cart-description col-lg-9 col-9">
                <h3><a href="">${product.Name}</a></h3>
                <span class="quantity">${product.Count} x </span><span class="small-dollar">$<span class="small-price">${product.ActPrice}</span></span>
            </div>
        </div>`
        
        document.getElementById('dropdown-cart-top').innerHTML = sr;
        
 
    }

    
}

let small_delete = $('.small-delete')

small_delete.click(function(e){
    for(let i = 0; i<basket.length; i++){
        if(e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText === basket[i].Name){
            basket.splice(i, 1);
            localStorage.setItem('basket', JSON.stringify(basket));
            location.reload();
        }
    }
})