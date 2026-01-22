const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const motif = document.getElementById("motif");
const date = document.getElementById("date");
const btn = document.getElementById("btn");
const error = document.getElementById("error-message");

function showAllvalues(nom, prenom, email, motif, date) {
  if (!nom || !prenom || !email || !motif || !date) {
    showError("Tous les champs sont obligatoires");
    return;
  }

  const storedData = JSON.parse(localStorage.getItem("data")) || [];
  const exist = storedData.some(
    (item) =>
      item.email === email || item.nom === nom || item.prenom === prenom,
  );
  if (exist) {
    showError(" email ou nom ou prenom existe déjà");
    return;
  }

  const formData = { nom, prenom, email, motif, date };
  storedData.push(formData);

  localStorage.setItem("data", JSON.stringify(storedData));
  window.location.href = "./table.html";
}

function showError(message) {
  error.textContent = message;
  error.classList.remove("hidden");

  setTimeout(() => {
    error.classList.add("hidden");
  }, 1500);
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  showAllvalues(
    nom.value.trim(),
    prenom.value.trim(),
    email.value.trim(),
    motif.value.trim(),
    date.value.trim(),
  );
});