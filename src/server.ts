import express from "express";
import { usuarioRoutes } from "./routes/usuarioRoutes.js";

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/usuarios", usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
