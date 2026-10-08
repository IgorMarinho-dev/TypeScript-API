import { prisma } from "../lib/prisma.js";
import type { Prisma } from "../generated/prisma/client.js";

export interface PessoaConsulta {
  id: number;
  nome: string;
}

export interface Consulta {
  id: number;
  data: Date;
  turno: string;
  medico: PessoaConsulta;
  paciente: PessoaConsulta;
}

export interface CriarConsulta {
  data: string;
  turno: string;
  medicoId: number;
  pacienteId: number;
}

export type AtualizarConsulta = Partial<CriarConsulta>;

const camposConsulta = {
  id: true,
  data: true,
  turno: true,
  medico: { select: { id: true, nome: true } },
  paciente: { select: { id: true, nome: true } },
} as const;

const converterDadosCriar = (dados: CriarConsulta): Prisma.ConsultaUncheckedCreateInput => ({
  data: new Date(dados.data),
  turno: dados.turno,
  medicoId: dados.medicoId,
  pacienteId: dados.pacienteId,
});

const converterDadosAtualizar = (dados: AtualizarConsulta): Prisma.ConsultaUncheckedUpdateInput => {
  const dadosAtualizados: Prisma.ConsultaUncheckedUpdateInput = {};

  if (dados.data !== undefined) dadosAtualizados.data = new Date(dados.data);
  if (dados.turno !== undefined) dadosAtualizados.turno = dados.turno;
  if (dados.medicoId !== undefined) dadosAtualizados.medicoId = dados.medicoId;
  if (dados.pacienteId !== undefined) dadosAtualizados.pacienteId = dados.pacienteId;

  return dadosAtualizados;
};

export class ConsultaRepository {
  async findAll(): Promise<Consulta[]> {
    return prisma.consulta.findMany({
      select: camposConsulta,
      orderBy: [{ data: "asc" }, { id: "asc" }],
    });
  }

  async findById(id: number): Promise<Consulta | null> {
    return prisma.consulta.findUnique({ where: { id }, select: camposConsulta });
  }

  async create(dados: CriarConsulta): Promise<Consulta> {
    return prisma.consulta.create({ data: converterDadosCriar(dados), select: camposConsulta });
  }

  async update(id: number, dados: AtualizarConsulta): Promise<Consulta | null> {
    if (!(await this.findById(id))) {
      return null;
    }

    return prisma.consulta.update({
      where: { id },
      data: converterDadosAtualizar(dados),
      select: camposConsulta,
    });
  }

  async delete(id: number): Promise<boolean> {
    if (!(await this.findById(id))) {
      return false;
    }

    await prisma.consulta.delete({ where: { id } });
    return true;
  }
}
