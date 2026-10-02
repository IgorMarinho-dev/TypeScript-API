import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController.js";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.get("/", usuarioController.listar.bind(usuarioController));
usuarioRoutes.get("/:id", usuarioController.buscarPorId.bind(usuarioController));
usuarioRoutes.post("/", usuarioController.criar.bind(usuarioController));
usuarioRoutes.put("/:id", usuarioController.atualizar.bind(usuarioController));
usuarioRoutes.delete("/:id", usuarioController.remover.bind(usuarioController));

export { usuarioRoutes };
