<?php
    $fname = $_POST['fast-name']
    $lname = $_POST['last-name']
    $email = $_POST['email']
    $password = $_POST['password']

    //Database connection
    $conn = new mysqli('localhost', 'root', '', 'test');
    if($conn->connect_error){
        die('Connection Failed  : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(fname,lname,email,password)
            values(?,?,?,?)")
        $stmt->bind_param("ssss",$fname,$lname,$email",$password);
        $stmt-?execute();
        echo "registration success ohio toilet";
        $stmt->close();
        $conn->close();
    }

?>
