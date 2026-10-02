import { prisma } from "../lib/prisma.js";

export interface Paciente {
  id: number;
  nome: string;
  telefone: string;
}

export type CriarPaciente = Omit<Paciente, "id">;
export type AtualizarPaciente = Partial<CriarPaciente>;

const camposPaciente = {
  id: true,
  nome: true,
  telefone: true,
} as const;

export class PacienteRepository {
  async findAll(): Promise<Paciente[]> {
    return prisma.paciente.findMany({
      select: camposPaciente,
      orderBy: { id: "asc" },
    });
  }

  async findById(id: number): Promise<Paciente | null> {
    return prisma.paciente.findUnique({
      where: { id },
      select: camposPaciente,
    });
  }

  async create(dados: CriarPaciente): Promise<Paciente> {
    return prisma.paciente.create({
      data: dados,
      select: camposPaciente,
    });
  }

  async update(id: number, dados: AtualizarPaciente): Promise<Paciente | null> {
    const paciente = await this.findById(id);

    if (!paciente) {
      return null;
    }

    return prisma.paciente.update({
      where: { id },
      data: dados,
      select: camposPaciente,
    });
  }

  async delete(id: number): Promise<boolean> {
    const paciente = await this.findById(id);

    if (!paciente) {
      return false;
    }

    await prisma.paciente.delete({ where: { id } });
    return true;
  }
}
