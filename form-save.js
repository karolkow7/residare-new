
<script>
document.getElementById("full-flat-sale-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    titel: form.querySelector('input[name="titel"]')?.value || "Wohnungstitel",
    adresse: form.querySelector('input[name="adresse"]')?.value || "",
    preis: form.querySelector('input[name="preis"]')?.value || "",
    waehrung: form.querySelector('select[name="waehrung"]')?.value || "PLN",
    preis_qm: form.querySelector('input[name="preis_qm"]')?.value || "",
    wohnflaeche: form.querySelector('input[name="wohnflaeche"]')?.value || "",
    zimmer: form.querySelector('input[name="zimmer"]')?.value || "",
    etage: form.querySelector('input[name="etage"]')?.value || "",
    baujahr: form.querySelector('input[name="baujahr"]')?.value || "",
    zustand: form.querySelector('select[name="zustand"]')?.value || "",
    verfuegbar: form.querySelector('select[name="verfuegbar"]')?.value || "",
    beschreibung: form.querySelector('textarea[name="beschreibung"]')?.value || "",
    telefon: form.querySelector('input[name="telefon"]')?.value || "",
    email: form.querySelector('input[name="email"]')?.value || "",
    bilder: []
  };

  // Bildernamen extrahieren (keine Upload-Funktion hier!)
  const bilderInput = document.getElementById("file-upload");
  if (bilderInput && bilderInput.files.length > 0) {
    for (let i = 0; i < bilderInput.files.length; i++) {
      data.bilder.push(bilderInput.files[i].name);
    }
  }

  fetch("save_listing.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(response => {
    if (response.status === "ok") {
      alert("Inserat erfolgreich gespeichert!");
      window.location.href = "wohnung-" + response.id + ".html";
    } else {
      alert("Fehler: " + response.status);
    }
  })
  .catch(err => {
    alert("Es ist ein Fehler aufgetreten.");
    console.error(err);
  });
});
</script>
