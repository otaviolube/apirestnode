const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: "ok",
        message: "API desenvolvida com sucesso!"
    });
});

app.listen(3000, () => console.log("API rodando na porta 3000."));