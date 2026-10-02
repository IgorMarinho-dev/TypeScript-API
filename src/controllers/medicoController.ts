import type { Request, Response } from "express";
import type { Medico } from "../repositories/medicoRepository.js";
import { MedicoService } from "../services/medicoService.js";

export class MedicoController {
  private readonly medicoService: MedicoService;

  constructor(medicoService = new MedicoService()) {
    this.medicoService = medicoService;
  }

  listar(req: Request, res: Response): void {
    res.json(this.medicoService.listarMedicos());
  }

  buscarPorId(req: Request, res: Response): void {
    const medico = this.medicoService.buscarMedicoPorId(Number(req.params.id));

    if (!medico) {
      res.status(404).json({ message: "Médico não encontrado" });
      return;
    }

    res.json(medico);
  }

  criar(req: Request<unknown, unknown, Medico>, res: Response): void {
    const medico = this.medicoService.criarMedico(req.body);
    res.status(201).json(medico);
  }

  atualizar(req: Request<{ id: string }, unknown, Partial<Medico>>, res: Response): void {
    const medico = this.medicoService.atualizarMedico(Number(req.params.id), req.body);

    if (!medico) {
      res.status(404).json({ message: "Médico não encontrado" });
      return;
    }

    res.json(medico);
  }

  remover(req: Request, res: Response): void {
    const removido = this.medicoService.removerMedico(Number(req.params.id));

    if (!removido) {
      res.status(404).json({ message: "Médico não encontrado" });
      return;
    }

    res.status(200).json({ message: "Médico removido com sucesso" });
  }
}
