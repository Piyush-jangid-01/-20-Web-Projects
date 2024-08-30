<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $gender = htmlspecialchars($_POST['gender']);
    $dob = htmlspecialchars($_POST['dob']);
    $phone = htmlspecialchars($_POST['phone']);
    
    // For demonstration purposes, we'll just output the data
    echo "Username: $username<br>";
    echo "Email: $email<br>";
    echo "Password: [hidden]<br>";
    echo "Gender: $gender<br>";
    echo "Date of Birth: $dob<br>";
    echo "Phone Number: $phone<br>";

    // Typically, you would save the data to a database or handle it securely here
}
?>
