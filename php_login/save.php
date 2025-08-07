<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "login_page";

$connection=mysqli_connect($server, $username, $password, $dbname);
if(!$connection){
    echo "not connected";
}
//start

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$password = $_POST['password'];

$sql="INSERT INTO `test`(`name`, `email`, `phone`, `city`, `password`) VALUES ('$name','$email','$phone','$city','$password')";

$result = mysqli_query($connection, $sql);
if($result)
{
    echo "data submitted";
}
else
{
    echo "querry failed";
}

?>