document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("Buttons1");
    var contentElement = document.getElementById("page2");

    toggleButton.addEventListener("click", function () {
        // Check if the content is currently hidden
        if (contentElement.style.display === "none" || contentElement.style.display === "") {
            // If hidden, show the content and change button text to "Show Less"
            contentElement.style.display = "block";
            toggleButton.textContent = "Show Less";
        } else {
            // If visible, hide the content and change button text to "Show More"
            contentElement.style.display = "none";
            toggleButton.textContent = "Show More";
        }
    });
});
