const { app } = require('@azure/functions');

app.http('getInputVariables', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
      //  context.log(`Http function processed request for url "${request.url}"`);

      //  const name = request.query.get('name') || await request.text() || 'world';

      //  return { body: `Hello, ${name}!` };

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

    }
});
