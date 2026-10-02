export interface Usuario {
  id: number;
  nome: string;
  telefone: string;
}

export class UsuarioRepository {
  private readonly usuarios: Usuario[] = [
    { id: 1, nome: "André", telefone: "123456789" },
    { id: 2, nome: "Maria", telefone: "987654321" },
  ];

  findAll(): Usuario[] {
    return this.usuarios;
  }

  findById(id: number): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  create(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }

  update(id: number, dados: Partial<Usuario>): Usuario | undefined {
    const indice = this.usuarios.findIndex((usuario) => usuario.id === id);

    if (indice === -1) {
      return undefined;
    }

    const usuarioAtualizado = { ...this.usuarios[indice], ...dados };
    this.usuarios[indice] = usuarioAtualizado;
    return usuarioAtualizado;
  }

  delete(id: number): boolean {
    const indice = this.usuarios.findIndex((usuario) => usuario.id === id);

    if (indice === -1) {
      return false;
    }

    this.usuarios.splice(indice, 1);
    return true;
  }
}
