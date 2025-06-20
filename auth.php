<?php
// Dummy-Zugangsdaten (zum Testen)
$valid_email = "test@example.com";
$valid_password = "passwort123";

// Formulardaten empfangen
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Prüfung (platzhalterhaft – in echt aus Datenbank)
if ($email === $valid_email && $password === $valid_password) {
    header("Location: dashboard.html");
    exit();
} else {
    echo "<h2>Login fehlgeschlagen</h2><p>Ungültige E-Mail oder Passwort.</p><a href='login.html'>Zurück</a>";
}
?>