const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
