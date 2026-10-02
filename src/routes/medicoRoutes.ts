import { Router } from "express";
import { MedicoController } from "../controllers/medicoController.js";

const medicoRoutes = Router();
const medicoController = new MedicoController();

medicoRoutes.get("/", medicoController.listar.bind(medicoController));
medicoRoutes.get("/:id", medicoController.buscarPorId.bind(medicoController));
medicoRoutes.post("/", medicoController.criar.bind(medicoController));
medicoRoutes.put("/:id", medicoController.atualizar.bind(medicoController));
medicoRoutes.delete("/:id", medicoController.remover.bind(medicoController));

export { medicoRoutes };
