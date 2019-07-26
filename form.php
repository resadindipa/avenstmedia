<?php

if(isset($_POST['contactform'])){
    
    $conn = new mysqli("localhost", "root", "", "avenst");

    $contact_name = mysqli_real_escape_string($conn, $_POST['contactname']);
    $contact_email = mysqli_real_escape_string($conn, $_POST['contactemail']);
    $contact_message = mysqli_real_escape_string($conn, $_POST['contactmessage']);

    if(!empty($contact_name) && !empty($contact_message) && !empty($contact_email)){
        echo "fillall";
        exit();
    } else{
        if(!filter_var($contact_email, FILTER_VALIDATE_EMAIL)){
            echo "invalidemail";
            exit();
        } else{
            //upload to sql database
            $sql = "INSERT into messages (name,email,message) VALUES ('$contact_name', '$contact_email', '$contact_message')";
            $query = mysqli_query($conn, $sql);
            if($query){
                echo "success";
            } else{
                echo "fail";
            }
        }
    }

} else{
    echo "Invalid Request. Try again later.";
}