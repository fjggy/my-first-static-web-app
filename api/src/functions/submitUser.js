const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const databaseId = 'UserDatabase';
const containerId = 'Users';

const client = new CosmosClient({ endpoint, key });
const container = client.database(databaseId).container(containerId);

module.exports = async function (context, req) {
    const name = req.body.name;

    if (!name) {
        context.res = {
            status: 400,
            body: { error: "Name is required." }
        };
        return;
    }

    const userItem = {
        id: context.executionContext.invocationId,  // unique ID
        name: name
    };

    await container.items.create(userItem);

    const { resources: allUsers } = await container.items.readAll().fetchAll();

    context.res = {
        status: 200,
        body: {
            message: "User stored successfully",
            totalUsers: allUsers.length
        }
    };
};

