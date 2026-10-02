import { MedicoRepository } from "../repositories/medicoRepository.js";
import type {
  AtualizarMedico,
  CriarMedico,
  Medico,
} from "../repositories/medicoRepository.js";

export class MedicoService {
  private readonly medicoRepository: MedicoRepository;

  constructor(medicoRepository = new MedicoRepository()) {
    this.medicoRepository = medicoRepository;
  }

  async listarMedicos(): Promise<Medico[]> {
    return this.medicoRepository.findAll();
  }

  async buscarMedicoPorId(id: number): Promise<Medico | null> {
    return this.medicoRepository.findById(id);
  }

  async criarMedico(dados: CriarMedico): Promise<Medico> {
    return this.medicoRepository.create(dados);
  }

  async atualizarMedico(id: number, dados: AtualizarMedico): Promise<Medico | null> {
    return this.medicoRepository.update(id, dados);
  }

  async removerMedico(id: number): Promise<boolean> {
    return this.medicoRepository.delete(id);
  }
}
