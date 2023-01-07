var modal = document.getElementById("reg-modal");

var btn = document.getElementById("reg-mod");

var rm_close = document.getElementById("rm-close");

btn.onclick = function() {
    modal.classList.remove('d-none')
    
}

rm_close.onclick = function() {
    modal.classList.add('d-none')
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add('d-none');
  }
}


$("#all-c").click(function() {
  $(".ac-slide").slideToggle(100, 'linear');
  document.getElementById('ac-slide').style.display = 'block';
  
});
let input = $('.input');

$('.form-button').click(function(){
    for(let inp of input){
        if(inp.value.length === 0){
            $(inp).next('.text-in').text('This field is empty')
            $(inp).next('.text-in').addClass('fail');
        }
        else{
            $(inp).next('.text-in').text('');
            $(inp).next('.text-in').removeClass('fail');

        }
    }
})


function submitForm(event){
    event.preventDefault();
}