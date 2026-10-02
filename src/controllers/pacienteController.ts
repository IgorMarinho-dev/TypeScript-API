import type { Request, Response } from "express";
import type { Paciente } from "../repositories/pacienteRepository.js";
import { PacienteService } from "../services/pacienteService.js";

export class PacienteController {
  private readonly pacienteService: PacienteService;

  constructor(pacienteService = new PacienteService()) {
    this.pacienteService = pacienteService;
  }

  listar(req: Request, res: Response): void {
    res.json(this.pacienteService.listarPacientes());
  }

  buscarPorId(req: Request, res: Response): void {
    const paciente = this.pacienteService.buscarPacientePorId(Number(req.params.id));

    if (!paciente) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.json(paciente);
  }

  criar(req: Request<unknown, unknown, Paciente>, res: Response): void {
    const paciente = this.pacienteService.criarPaciente(req.body);
    res.status(201).json(paciente);
  }

  atualizar(req: Request<{ id: string }, unknown, Partial<Paciente>>, res: Response): void {
    const paciente = this.pacienteService.atualizarPaciente(Number(req.params.id), req.body);

    if (!paciente) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.json(paciente);
  }

  remover(req: Request, res: Response): void {
    const removido = this.pacienteService.removerPaciente(Number(req.params.id));

    if (!removido) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.status(200).json({ message: "Paciente removido com sucesso" });
  }
}
