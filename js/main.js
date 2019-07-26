$(window).scroll(function (e) {

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
document.getElementById('contact-us').addEventListener('click', function () {
    if (document.getElementById('contact-us-main').style.height == "0px") {
        document.body.style.overflow = 'hidden';
        document.getElementById('contact-us-main').style.height = "100%";
    } else {
        document.body.style.overflow = 'initial';
        document.getElementById('contact-us-main').style.height = "0px";
    }
});

//close function
document.getElementById('contact-us-close').addEventListener('click', function () {
    document.body.style.overflow = 'initial';
    document.getElementById('contact-us-main').style.height = "0px";
});


//message send button
document.getElementById('submitbtn').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name != "" && email != "" && message != "") {

        $.ajax({
            type: "POST",
            data: {
                "contactname": name,
                "contactemail": email,
                "contactmessage": message,
                "contactform": "contactform"
            },
            url: "form.php",
            success: function (data) {
                console.log(data);
                hideAllErrors();
                if (data == "invalidemail") {
                    document.getElementById('email').className = "error-input text-input";
                    document.getElementById('emailerror').innerText = "Please enter an valid email address";
                } else if(data == "success"){
                    document.getElementById('contact-us-close').click();
                } else if(data == "fail"){
                    document.getElementById('nameerror').style.display = "block";
                    document.getElementById('nameerror').innerText = "Something went wrong.";
                }
            }
        });
    }
    else {
        if (name == "") {
            document.getElementById('name').className = "error-input text-input";
            document.getElementById('nameerror').style.display = "block";
        } if(email == ""){
            document.getElementById('email').className = "error-input text-input";
            document.getElementById('emailerror').style.display = "block";
        } if(message == ""){
            document.getElementById('message').className = "error-input text-input";
            document.getElementById('messageerror').style.display = "block";
        }
    }

});


function hideAllErrors() {
    document.getElementById('nameerror').style.display = "none";
    document.getElementById('emailerror').style.display = "none";
    document.getElementById('messageerror').style.display = "none";

    document.getElementById('name').classList = "text-input";
    document.getElementById('email').classList = "text-input";
    document.getElementById('message').classList = "text-input";
}