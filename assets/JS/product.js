let num_count = $('.num-count');
let decrease = $('.decrease');
let increase = $('.increase');
let number = 0;

$(num_count).text(number);
increase.click(function(){
    number++;
    $(num_count).text(number);

    console.log(number)
})
decrease.click(function(){
    if(number > 0){
        number--;
        $(num_count).text(number);

        console.log(number)

    }
})

//tabs
document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch, false);
    }
  
    function tabSwitch(){
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
  }, false);