import { PacienteRepository } from "../repositories/pacienteRepository.js";
import type {
  AtualizarPaciente,
  CriarPaciente,
  Paciente,
} from "../repositories/pacienteRepository.js";

export class PacienteService {
  private readonly pacienteRepository: PacienteRepository;

  constructor(pacienteRepository = new PacienteRepository()) {
    this.pacienteRepository = pacienteRepository;
  }

  async listarPacientes(): Promise<Paciente[]> {
    return this.pacienteRepository.findAll();
  }

  async buscarPacientePorId(id: number): Promise<Paciente | null> {
    return this.pacienteRepository.findById(id);
  }

  async criarPaciente(dados: CriarPaciente): Promise<Paciente> {
    return this.pacienteRepository.create(dados);
  }

  async atualizarPaciente(id: number, dados: AtualizarPaciente): Promise<Paciente | null> {
    return this.pacienteRepository.update(id, dados);
  }

  async removerPaciente(id: number): Promise<boolean> {
    return this.pacienteRepository.delete(id);
  }
}
