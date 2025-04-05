function storeText() {
    // Get the value entered by the user
    var userInput = document.getElementById('userInput').value;

    // Store it in a variable (this can be done in different ways depending on what you want to do with the text)
    var storedText = userInput;

    // Display the stored text on the page (temporary)
    document.getElementById('result').innerText = "You entered: " + storedText;

    // Clear the input field
    document.getElementById('userInput').value = '';

    // Now, let's send the data to an API
    sendDataToAPI(storedText);
}

function sendDataToAPI(storedText) {
    // Prepare the data to send
    var data = {
        userText: storedText,  // Send the text entered by the user as 'userText'
        timestamp: new Date().toISOString()  // Optional: Add a timestamp to the data
    };

    // Send the data to the Postman Echo API using Fetch API
    fetch('https://postman-echo.com/post', {
         method: 'POST',  // We are making a POST request
        headers: {
            'Content-Type': 'application/json'  // Tell the server that we are sending JSON
        },
        body: JSON.stringify(data)  // Convert the data to JSON
    })
        .then(response => response.json())  // Parse the JSON response from the server
        .then(data => {
            // Once the request is successful, we can display the result
            document.getElementById('result').innerText =
                "Success! Your data has been sent. Server response: " + JSON.stringify(data);
        })
        .catch(error => {
            // Handle errors (e.g., network problems)
            console.error('Error:', error);
            document.getElementById('result').innerText = "Oops! Something went wrong.";
        });
}

function submitName() {
    const userName = document.getElementById('nameInput').value;
    console.log("User entered:", userName);

    // Now let's send this to our Azure function
    fetch(`/api/getInputVariables`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: userName })
    })
        .then(response => response.text())
        .then(data => {
            alert("Data saved!");
        })
        .catch(error => {
            console.error('Error:', error);
        });
}