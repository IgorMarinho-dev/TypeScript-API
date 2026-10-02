import express from "express";
import { medicoRoutes } from "./routes/medicoRoutes.js";
import { pacienteRoutes } from "./routes/pacienteRoutes.js";

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/medicos", medicoRoutes);
app.use("/pacientes", pacienteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
