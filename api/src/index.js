const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

module.exports = async function (context, req) {
    const name = req.body?.name || "anonymous";
    context.res = {
        body: { message: `Hello, ${name}!` }
    };
};