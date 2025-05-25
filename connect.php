<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize user input
    function sanitize($data) {
        return htmlspecialchars(strip_tags(trim($data)));
    }

    // Get and sanitize form data
    $name = sanitize($_POST['name']);
    $email = sanitize($_POST['email']);
    $number = sanitize($_POST['number']);
    $message = sanitize($_POST['message']);

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'enquiry');

    // Check connection
    if ($conn->connect_error) {
        die("<script>alert('Database Connection Failed'); window.location.href='contacts.html';</script>");
    }

    // Prepare and execute statement
    $stmt = $conn->prepare("INSERT INTO enquiry (name, email, number, message) VALUES (?, ?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param("ssss", $name, $email, $number, $message);
        if ($stmt->execute()) {
            // Redirect without using JavaScript
            header("Location: index.html");
            exit(); // Stop script execution after redirection
        } else {
            header("Location: contacts.html?error=true");
            exit();
        }
        $stmt->close();
    } else {
        header("Location: contacts.html?error=stmt_failed");
        exit();
    }

    // Close connection
    $conn->close();
}
?>