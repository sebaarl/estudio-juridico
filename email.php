<?php
$name = $_POST['name'];
$emailFrom = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];  

$to = "rsebadb@gmail.com";

$subject = "De: ".$emailFrom;
$txt = "Nombre: ". $name . "\r\n Email: ". $emailFrom . "Asunto: " . $subject .  "\r\n Mensaje: ". $message . "\r\n";

$headers = "From: noreply@zunigahurtadoasoc.com" . "\r\n" . "CC: ". $emailFrom . "\r\n"; 

if ($emailFrom!=NULL) {
    mail($to, $subject, $txt, $headers);
}

header("Location:mensaje-enviado.html");
?>