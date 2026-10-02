import { UsuarioRepository } from "../repositories/usuarioRepository.js";
import type { Usuario } from "../repositories/usuarioRepository.js";

export class UsuarioService {
  private readonly usuarioRepository: UsuarioRepository;

  constructor(usuarioRepository = new UsuarioRepository()) {
    this.usuarioRepository = usuarioRepository;
  }

  listarUsuarios(): Usuario[] {
    return this.usuarioRepository.findAll();
  }

  buscarUsuarioPorId(id: number): Usuario | undefined {
    return this.usuarioRepository.findById(id);
  }

  criarUsuario(usuario: Usuario): Usuario {
    return this.usuarioRepository.create(usuario);
  }

  atualizarUsuario(id: number, dados: Partial<Usuario>): Usuario | undefined {
    return this.usuarioRepository.update(id, dados);
  }

  removerUsuario(id: number): boolean {
    return this.usuarioRepository.delete(id);
  }
}
