$(window).scroll(function(e){
   
    if ($(this).scrollTop() > 350) {
        $(".main-navbar2").removeClass("time-to-leave");
        $(".main-navbar2").addClass("top-nav-collapse");
    } else {
        $(".main-navbar2").addClass("time-to-leave");
        $(".main-navbar2").removeClass("top-nav-collapse");
        $(".main-navbar2").style.display = "none";
    }
});


//open function
// document.getElementById('contact-us').addEventListener('click', function(){
//     if(document.getElementById('contact-us-main').style.display == "none"){
//         document.getElementById('contact-us-main').style.display = "block";
//     } else{
//         document.getElementById('contact-us-main').style.display = "none";
//     }
// });

// //close function
// document.getElementById('contact-us-close').addEventListener('click', function(){
//         document.getElementById('contact-us-main').style.display = "none";
// });


//open function
document.getElementById('contact-us').addEventListener('click', function(){
    if(document.getElementById('contact-us-main').style.height == "0px"){
        document.body.style.overflow = 'hidden';
        document.getElementById('contact-us-main').style.height = "100%";
    } else{
        document.body.style.overflow = 'initial';
        document.getElementById('contact-us-main').style.height = "0px";
    }
});

//close function
document.getElementById('contact-us-close').addEventListener('click', function(){
    document.body.style.overflow = 'initial';
    document.getElementById('contact-us-main').style.height = "0px";
});
