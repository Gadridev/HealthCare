    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const motif = document.getElementById("motif");
    const date = document.getElementById("date");
    const btn=document.getElementById('btn');
    const error=document.getElementById('error-message');
    console.log(nom,prenom)
    function showAllvalues(nom, prenom, email, motif, date) {
        if(!nom || !prenom || !email || !motif || !date){
            setTimeout(() => {
                showError("invalid input")
            }, 1000);
            error.classList.add('hidden')
            return;
        }
        console.log(nom,prenom,email,motif,date)
    }
    function init() {
    showAllvalues(nom.value, prenom.value,email.value, motif.value, date.value);
    }
    function showError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
    }
    btn.addEventListener("click", function(e){
        e.preventDefault();
        init();

    });
