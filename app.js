const express = require("express");

const tasks = require("./src/routes/taskRoute");

const app = express();

app.use("/tasks", tasks);

app.listen(3000, () => console.log("Odoo API running"));
