import express from "express";
import { pacienteRoutes } from "./routes/pacienteRoutes.js";

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/pacientes", pacienteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
