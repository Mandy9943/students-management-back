import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import studentRoutes from "./routes/studentRoutes";
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5050;

app.use(express.json());
app.use("/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
