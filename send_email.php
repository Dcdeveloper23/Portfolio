<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email setup
    $to = "diviyanshuchaudhary@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission from $name";
    $body = "You have received a new message from the contact form.\n\n" .
        "Name: $name\n" .
        "Email: $email\n" .
        "Message:\n$message";

    $headers = "From: $email\r\n" .
        "Reply-To: $email\r\n" .
        "Content-Type: text/plain; charset=UTF-8";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send. Please try again later.";
    }
}
