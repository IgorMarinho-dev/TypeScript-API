import type { Request, Response } from "express";
import type {
  AtualizarPaciente,
  CriarPaciente,
} from "../repositories/pacienteRepository.js";
import { PacienteService } from "../services/pacienteService.js";

export class PacienteController {
  private readonly pacienteService: PacienteService;

  constructor(pacienteService = new PacienteService()) {
    this.pacienteService = pacienteService;
  }

  async listar(req: Request, res: Response): Promise<void> {
    const pacientes = await this.pacienteService.listarPacientes();
    res.json(pacientes);
  }

  async buscarPorId(req: Request, res: Response): Promise<void> {
    const paciente = await this.pacienteService.buscarPacientePorId(Number(req.params.id));

    if (!paciente) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.json(paciente);
  }

  async criar(req: Request<unknown, unknown, CriarPaciente>, res: Response): Promise<void> {
    const paciente = await this.pacienteService.criarPaciente(req.body);
    res.status(201).json(paciente);
  }

  async atualizar(
    req: Request<{ id: string }, unknown, AtualizarPaciente>,
    res: Response,
  ): Promise<void> {
    const paciente = await this.pacienteService.atualizarPaciente(Number(req.params.id), req.body);

    if (!paciente) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.json(paciente);
  }

  async remover(req: Request, res: Response): Promise<void> {
    const removido = await this.pacienteService.removerPaciente(Number(req.params.id));

    if (!removido) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.status(200).json({ message: "Paciente removido com sucesso" });
  }
}
