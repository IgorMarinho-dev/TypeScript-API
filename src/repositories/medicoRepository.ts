import { prisma } from "../lib/prisma.js";

export interface Medico {
  id: number;
  nome: string;
  telefone: string;
  especialidade: string;
  crm: string;
}

export type CriarMedico = Omit<Medico, "id">;
export type AtualizarMedico = Partial<CriarMedico>;

const camposMedico = {
  id: true,
  nome: true,
  telefone: true,
  especialidade: true,
  crm: true,
} as const;

export class MedicoRepository {
  async findAll(): Promise<Medico[]> {
    return prisma.medico.findMany({
      select: camposMedico,
      orderBy: { id: "asc" },
    });
  }

  async findById(id: number): Promise<Medico | null> {
    return prisma.medico.findUnique({
      where: { id },
      select: camposMedico,
    });
  }

  async create(dados: CriarMedico): Promise<Medico> {
    return prisma.medico.create({
      data: dados,
      select: camposMedico,
    });
  }

  async update(id: number, dados: AtualizarMedico): Promise<Medico | null> {
    const medico = await this.findById(id);

    if (!medico) {
      return null;
    }

    return prisma.medico.update({
      where: { id },
      data: dados,
      select: camposMedico,
    });
  }

  async delete(id: number): Promise<boolean> {
    const medico = await this.findById(id);

    if (!medico) {
      return false;
    }

    await prisma.medico.delete({ where: { id } });
    return true;
  }
}
