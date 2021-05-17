// smooth scroll
$(document).ready(function(){
    $("html,body").hide(0).delay(500).fadeIn(2000);

    $(".scrollIndex").click(function(event){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $(".scrollPorfolio").click(function(event){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
    
    $(".scrollAbout").click(function(event){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    window.addEventListener("load", function(event) {
        var myPortfolio = document.querySelector('.myPortfolio');
        myPortfolio.addEventListener('click',function(e){
          e.preventDefault();
          mixpanel.track("myPortfolio");
        });
    });
});


var account = {
	email: 'raydingwang@gmail.com.tw',
	password:'12345678'
}

var xhr = new XMLHttpRequest();
console.log(xhr)
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader('Content-type','application/json');
var data = JSON.stringify(account);
console.log(data)
xhr.send(data);