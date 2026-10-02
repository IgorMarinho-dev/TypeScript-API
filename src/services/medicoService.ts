import { MedicoRepository } from "../repositories/medicoRepository.js";
import type { Medico } from "../repositories/medicoRepository.js";

export class MedicoService {
  private readonly medicoRepository: MedicoRepository;

  constructor(medicoRepository = new MedicoRepository()) {
    this.medicoRepository = medicoRepository;
  }

  listarMedicos(): Medico[] {
    return this.medicoRepository.findAll();
  }

  buscarMedicoPorId(id: number): Medico | undefined {
    return this.medicoRepository.findById(id);
  }

  criarMedico(medico: Medico): Medico {
    return this.medicoRepository.create(medico);
  }

  atualizarMedico(id: number, dados: Partial<Medico>): Medico | undefined {
    return this.medicoRepository.update(id, dados);
  }

  removerMedico(id: number): boolean {
    return this.medicoRepository.delete(id);
  }
}
