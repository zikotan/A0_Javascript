
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the username from session storage
    var realName = sessionStorage.getItem("realName");

    // Populate the input field with the realName
    document.getElementById("username2").placeholder = realName;

    // Get the form element
    var form = document.getElementById("resultForm");

    // Événement de soumission du formulaire lors du clic sur le bouton
    document.getElementById("ResultBtn").addEventListener("click", function (event) {
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

    function submitForm() {
        // Get the values of Maths and Informatique
        var mathsScore = parseFloat(document.getElementById("Maths").value);
        var infoScore = parseFloat(document.getElementById("Informatique").value);

        if (mathsScore >= 0 && mathsScore <= 20 && infoScore >= 0 && infoScore <= 20) {
            // Calculate the average
            var average = (mathsScore + infoScore) / 2;

            // Determine the mention based on the average
            var mention;
            if (average >= 16) {
                mention = "Très bien";
            } else if (average >= 14) {
                mention = "Bien";
            } else if (average >= 12) {
                mention = "Assez bien";
            } else if (average >= 10) {
                mention = "Passable";
            } else {
                mention = "Insuffisant";
            }

            // Display the average and mention in a window
            alert("Full Name: " + realName + "\nMoyenne: " + average.toFixed(2) + "\nMention: " + mention);
        }
        else
            alert("inserez une valeur positive et inférieure ou egale à 20.");
    }
});
