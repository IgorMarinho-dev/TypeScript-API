import { PacienteRepository } from "../repositories/pacienteRepository.js";
import type { Paciente } from "../repositories/pacienteRepository.js";

export class PacienteService {
  private readonly pacienteRepository: PacienteRepository;

  constructor(pacienteRepository = new PacienteRepository()) {
    this.pacienteRepository = pacienteRepository;
  }

  listarPacientes(): Paciente[] {
    return this.pacienteRepository.findAll();
  }

  buscarPacientePorId(id: number): Paciente | undefined {
    return this.pacienteRepository.findById(id);
  }

  criarPaciente(paciente: Paciente): Paciente {
    return this.pacienteRepository.create(paciente);
  }

  atualizarPaciente(id: number, dados: Partial<Paciente>): Paciente | undefined {
    return this.pacienteRepository.update(id, dados);
  }

  removerPaciente(id: number): boolean {
    return this.pacienteRepository.delete(id);
  }
}
