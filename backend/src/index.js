const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/server");
const biasRoutes = require("./routes/biasRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", biasRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
