export interface Paciente {
  id: number;
  nome: string;
  telefone: string;
}

export class PacienteRepository {
  private readonly pacientes: Paciente[] = [
    { id: 1, nome: "André", telefone: "123456789" },
    { id: 2, nome: "Maria", telefone: "987654321" },
  ];

  findAll(): Paciente[] {
    return this.pacientes;
  }

  findById(id: number): Paciente | undefined {
    return this.pacientes.find((paciente) => paciente.id === id);
  }

  create(paciente: Paciente): Paciente {
    this.pacientes.push(paciente);
    return paciente;
  }

  update(id: number, dados: Partial<Paciente>): Paciente | undefined {
    const indice = this.pacientes.findIndex((paciente) => paciente.id === id);

    if (indice === -1) {
      return undefined;
    }

    const pacienteAtualizado = { ...this.pacientes[indice], ...dados };
    this.pacientes[indice] = pacienteAtualizado;
    return pacienteAtualizado;
  }

  delete(id: number): boolean {
    const indice = this.pacientes.findIndex((paciente) => paciente.id === id);

    if (indice === -1) {
      return false;
    }

    this.pacientes.splice(indice, 1);
    return true;
  }
}
