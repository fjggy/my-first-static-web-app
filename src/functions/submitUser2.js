module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? `Hello, ${name}. This HTTP triggered function executed successfully. Yay!`
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        status: 200,  // Explicit status code
        headers: {
            'Content-Type': 'application/json'  // Ensure the response is JSON
        },
        body: JSON.stringify({ message: responseMessage })  // Return as JSON
    };
};
