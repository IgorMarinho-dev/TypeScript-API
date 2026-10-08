import { ConsultaRepository } from "../repositories/consultaRepository.js";
import type { AtualizarConsulta, Consulta, CriarConsulta } from "../repositories/consultaRepository.js";

export class ConsultaService {
  private readonly consultaRepository: ConsultaRepository;

  constructor(consultaRepository = new ConsultaRepository()) {
    this.consultaRepository = consultaRepository;
  }

  async listarConsultas(): Promise<Consulta[]> {
    return this.consultaRepository.findAll();
  }

  async buscarConsultaPorId(id: number): Promise<Consulta | null> {
    return this.consultaRepository.findById(id);
  }

  async criarConsulta(dados: CriarConsulta): Promise<Consulta> {
    return this.consultaRepository.create(dados);
  }

  async atualizarConsulta(id: number, dados: AtualizarConsulta): Promise<Consulta | null> {
    return this.consultaRepository.update(id, dados);
  }

  async removerConsulta(id: number): Promise<boolean> {
    return this.consultaRepository.delete(id);
  }
}
