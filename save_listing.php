<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$data_file = "listings.json";
$template_file = "wohnung-template.html";
$upload_dir = "uploads/";

// Eingehende JSON-Daten lesen
$input = json_decode(file_get_contents("php://input"), true);

// Prüfen
if (!$input || !isset($input["titel"])) {
    http_response_code(400);
    echo json_encode(["status" => "Fehlerhafte Daten"]);
    exit;
}

// ID für das neue Inserat (Timestamp + Zufallszahl)
$id = time() . rand(100, 999);
$input["id"] = $id;
$input["timestamp"] = time();

// Bestehende Daten lesen
$listings = file_exists($data_file) ? json_decode(file_get_contents($data_file), true) : [];
$listings[] = $input;

// JSON aktualisieren
file_put_contents($data_file, json_encode($listings, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Einzel-Inseratsseite erzeugen
if (file_exists($template_file)) {
    $tpl = file_get_contents($template_file);

    // Galerieplatzhalter vorbereiten (nur Pfade, Annahme: uploads vorhanden)
    $galerie_html = "";
    if (isset($input["bilder"]) && is_array($input["bilder"])) {
        foreach ($input["bilder"] as $bild) {
            $safe = htmlspecialchars($bild, ENT_QUOTES);
            $galerie_html .= "<img src='$upload_dir$safe' alt='Foto'><br/>";
        }
    } else {
        $galerie_html = "<div>Keine Bilder</div>";
    }

    // Platzhalter ersetzen
    $tpl = str_replace("{{TITEL}}", $input["titel"] ?? "", $tpl);
    $tpl = str_replace("{{ADRESSE}}", $input["adresse"] ?? "", $tpl);
    $tpl = str_replace("{{PREIS}}", $input["preis"] ?? "", $tpl);
    $tpl = str_replace("{{WAEHRUNG}}", $input["waehrung"] ?? "", $tpl);
    $tpl = str_replace("{{PREIS_QM}}", $input["preis_qm"] ?? "", $tpl);
    $tpl = str_replace("{{FLAECHE}}", $input["wohnflaeche"] ?? "", $tpl);
    $tpl = str_replace("{{ZIMMER}}", $input["zimmer"] ?? "", $tpl);
    $tpl = str_replace("{{ETAGE}}", $input["etage"] ?? "", $tpl);
    $tpl = str_replace("{{BAUJAHR}}", $input["baujahr"] ?? "", $tpl);
    $tpl = str_replace("{{ZUSTAND}}", $input["zustand"] ?? "", $tpl);
    $tpl = str_replace("{{VERFUEGBAR}}", $input["verfuegbar"] ?? "", $tpl);
    $tpl = str_replace("{{BESCHREIBUNG}}", nl2br($input["beschreibung"] ?? ""), $tpl);
    $tpl = str_replace("{{KONTAKT_TELEFON}}", $input["telefon"] ?? "", $tpl);
    $tpl = str_replace("{{KONTAKT_EMAIL}}", $input["email"] ?? "", $tpl);
    $tpl = str_replace("{{GALERIE}}", $galerie_html, $tpl);

    // HTML-Datei speichern
    $filename = "wohnung-$id.html";
    file_put_contents($filename, $tpl);
}

echo json_encode(["status" => "ok", "id" => $id]);
?>
