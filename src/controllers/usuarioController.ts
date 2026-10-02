import type { Request, Response } from "express";
import type { Usuario } from "../repositories/usuarioRepository.js";
import { UsuarioService } from "../services/usuarioService.js";

export class UsuarioController {
  private readonly usuarioService: UsuarioService;

  constructor(usuarioService = new UsuarioService()) {
    this.usuarioService = usuarioService;
  }

  listar(req: Request, res: Response): void {
    res.json(this.usuarioService.listarUsuarios());
  }

  buscarPorId(req: Request, res: Response): void {
    const usuario = this.usuarioService.buscarUsuarioPorId(Number(req.params.id));

    if (!usuario) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    res.json(usuario);
  }

  criar(req: Request<unknown, unknown, Usuario>, res: Response): void {
    const usuario = this.usuarioService.criarUsuario(req.body);
    res.status(201).json(usuario);
  }

  atualizar(req: Request<{ id: string }, unknown, Partial<Usuario>>, res: Response): void {
    const usuario = this.usuarioService.atualizarUsuario(Number(req.params.id), req.body);

    if (!usuario) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    res.json(usuario);
  }

  remover(req: Request, res: Response): void {
    const removido = this.usuarioService.removerUsuario(Number(req.params.id));

    if (!removido) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    res.status(200).json({ message: "Usuário removido com sucesso" });
  }
}
