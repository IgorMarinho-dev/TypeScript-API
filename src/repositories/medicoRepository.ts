export interface Medico {
  id: number;
  nome: string;
  telefone: string;
  especialidade: string;
  crm: string;
}

export class MedicoRepository {
  private readonly medicos: Medico[] = [
    {
      id: 1,
      nome: "Carlos Oliveira",
      telefone: "11987654321",
      especialidade: "Cardiologia",
      crm: "CRM-SP 123456",
    },
  ];

  findAll(): Medico[] {
    return this.medicos;
  }

  findById(id: number): Medico | undefined {
    return this.medicos.find((medico) => medico.id === id);
  }

  create(medico: Medico): Medico {
    this.medicos.push(medico);
    return medico;
  }

  update(id: number, dados: Partial<Medico>): Medico | undefined {
    const indice = this.medicos.findIndex((medico) => medico.id === id);

    if (indice === -1) {
      return undefined;
    }

    const medicoAtualizado = { ...this.medicos[indice], ...dados };
    this.medicos[indice] = medicoAtualizado;
    return medicoAtualizado;
  }

  delete(id: number): boolean {
    const indice = this.medicos.findIndex((medico) => medico.id === id);

    if (indice === -1) {
      return false;
    }

    this.medicos.splice(indice, 1);
    return true;
  }
}
