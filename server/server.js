import express from "express";
import cors from "cors";

const app = express();

const PORT = 8008;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.json({ status: "Message received!" });
});
