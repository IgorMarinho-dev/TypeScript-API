import { Router } from "express";
import { ConsultaController } from "../controllers/consultaController.js";

const consultaRoutes = Router();
const consultaController = new ConsultaController();

consultaRoutes.get("/", consultaController.listar.bind(consultaController));
consultaRoutes.get("/:id", consultaController.buscarPorId.bind(consultaController));
consultaRoutes.post("/", consultaController.criar.bind(consultaController));
consultaRoutes.put("/:id", consultaController.atualizar.bind(consultaController));
consultaRoutes.delete("/:id", consultaController.remover.bind(consultaController));

export { consultaRoutes };
