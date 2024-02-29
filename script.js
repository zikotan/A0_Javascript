document.addEventListener("DOMContentLoaded", function () {
    // Définition des identifiants et mots de passe corrects
    var correctUsername = "ziko";
    var correctPassword = "tan";
    if (correctUsername = "ziko")
        // Store the username in session storage
        sessionStorage.setItem("realName", "Zakaria Tanan");

    // Get the form element
    var form = document.getElementById("loginForm");

    // Événement de soumission du formulaire lors du clic sur le bouton
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut
        submitForm();
    });

    // Événement de soumission du formulaire lors de la pression de la touche "Entrée" sur les champs de saisie
    form.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            // Prevents the default behavior of the "Enter" key
            event.preventDefault();
            submitForm();
        }
    });

    // Fonction pour soumettre le formulaire
    function submitForm() {
        // Récupération des valeurs saisies par l'utilisateur
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        // Vérification des identifiants
        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            // Get the username from the input field
            var username = document.getElementById("username").value;

            // Redirection vers la deuxième page si les identifiants sont corrects
            window.location.href = "page2.html";
        } else {
            alert("Identifiant ou mot de passe incorrect.");
        }
    }
});
