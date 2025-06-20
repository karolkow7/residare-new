<?php
// Keine Ausgabe vor header()!

// Dummy-Zugangsdaten (zum Testen)
$valid_email = "test@example.com";
$valid_password = "passwort123";

// Formulardaten empfangen
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if ($email === $valid_email && $password === $valid_password) {
    header("Location: dashboard.html");
    exit();
} else {
    ?>
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <title>Login fehlgeschlagen</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f5f5f5;
          color: #333;
          text-align: center;
          padding-top: 5rem;
        }
        .box {
          background: white;
          padding: 2rem;
          margin: auto;
          width: 90%;
          max-width: 400px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        a {
          color: #1f2937;
          text-decoration: none;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>Login fehlgeschlagen</h2>
        <p>Ungültige E-Mail oder Passwort.</p>
        <a href="login.html">Zurück zur Anmeldung</a>
      </div>
    </body>
    </html>
    <?php
    exit();
}
?>