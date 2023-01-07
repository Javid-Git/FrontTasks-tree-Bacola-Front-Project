let atc = document.querySelectorAll('.atc');
let num = document.getElementById('cart-count')
let num_s = document.getElementById('cart-count-s')
let count = 0;
num.innerHTML = count;
num_s.innerHTML = count;




if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]));
}
for(let i=0; i<atc.length; i++){
    atc[i].addEventListener('click', function(e){
        let basket = JSON.parse(localStorage.getItem('basket'));
        let prNums = localStorage.getItem('prNums');
        let prDelPrice = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[1].innerText
        let prActPrice = e.target.parentElement.previousElementSibling.childNodes[3].childNodes[1].innerText
        let prName = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[1].innerText
        let prPic = e.target.parentElement.parentElement.previousElementSibling.childNodes[3].childNodes[1].src
        let id = e.target.parentElement.parentElement.parentElement.id
        console.log(prDelPrice)
        console.log(id)
        let exist = basket.find(p => p.Id == id);
        if(exist == undefined){
            basket.push({
                Id: id,
                Name: prName,
                DelPrice: prDelPrice,
                ActPrice: prActPrice,
                Src: prPic,
                Count: 1
            })
        }
        else{
            exist.Count++;
        }
        localStorage.setItem('basket', JSON.stringify(basket));
        Count();
        
    })
}





function Count() {
    let nums = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('cart-count').innerText = nums.length
    document.getElementById('cart-count-s').innerText = nums.length
}
Count();


function submitForm(event){
    event.preventDefault();
}


let cart_btn = $('.cart-icon-s');

cart_btn.click(function(){
    if(basket.length == 0){
        $('.cart-adds').toggle()
    }
    else{
        $('.dropdown-cart').toggle()

    }
})

