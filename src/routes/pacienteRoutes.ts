import { Router } from "express";
import { PacienteController } from "../controllers/pacienteController.js";

const pacienteRoutes = Router();
const pacienteController = new PacienteController();

pacienteRoutes.get("/", pacienteController.listar.bind(pacienteController));
pacienteRoutes.get("/:id", pacienteController.buscarPorId.bind(pacienteController));
pacienteRoutes.post("/", pacienteController.criar.bind(pacienteController));
pacienteRoutes.put("/:id", pacienteController.atualizar.bind(pacienteController));
pacienteRoutes.delete("/:id", pacienteController.remover.bind(pacienteController));

export { pacienteRoutes };
