const { app } = require('@azure/functions');
const { CosmosClient } = require("@azure/cosmos");

app.http('getInputVariables', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
      
      //  module.exports = async function (context, req) {
      //      const name = req.body.name;

      //      const endpoint = process.env.COSMOS_DB_ENDPOINT;
      //      const key = process.env.COSMOS_DB_KEY;
      //      const databaseId = "UserDatabase";
      //      const containerId = "Users";

      //      const client = new CosmosClient({ endpoint, key });
      //      const container = client.database(databaseId).container(containerId);

      //      const newItem = {
      //          id: context.executionContext.invocationId,
      //          name: name
            };

      //      await container.items.create(newItem);

      //      context.res = {
      //          status: 200,
      //          body: "User saved!"
      //      };
        };

    }
});
