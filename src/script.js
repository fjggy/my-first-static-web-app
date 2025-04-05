function storeText() {
    // Get the value entered by the user
    var userInput = document.getElementById('userInput').value;

    // Store it in a variable (this can be done in different ways depending on what you want to do with the text)
    var storedText = userInput;

    // Display the stored text on the page
    document.getElementById('result').innerText = "You entered: " + storedText;

    // Optional: Clear the input field
    document.getElementById('userInput').value = '';
}