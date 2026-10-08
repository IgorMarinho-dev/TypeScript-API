import type { Request, Response } from "express";
import type { AtualizarConsulta, CriarConsulta } from "../repositories/consultaRepository.js";
import { ConsultaService } from "../services/consultaService.js";

export class ConsultaController {
  private readonly consultaService: ConsultaService;

  constructor(consultaService = new ConsultaService()) {
    this.consultaService = consultaService;
  }

  async listar(req: Request, res: Response): Promise<void> {
    res.json(await this.consultaService.listarConsultas());
  }

  async buscarPorId(req: Request, res: Response): Promise<void> {
    const consulta = await this.consultaService.buscarConsultaPorId(Number(req.params.id));
    if (!consulta) {
      res.status(404).json({ message: "Consulta não encontrada" });
      return;
    }
    res.json(consulta);
  }

  async criar(req: Request<unknown, unknown, CriarConsulta>, res: Response): Promise<void> {
    res.status(201).json(await this.consultaService.criarConsulta(req.body));
  }

  async atualizar(req: Request<{ id: string }, unknown, AtualizarConsulta>, res: Response): Promise<void> {
    const consulta = await this.consultaService.atualizarConsulta(Number(req.params.id), req.body);
    if (!consulta) {
      res.status(404).json({ message: "Consulta não encontrada" });
      return;
    }
    res.json(consulta);
  }

  async remover(req: Request, res: Response): Promise<void> {
    const removido = await this.consultaService.removerConsulta(Number(req.params.id));
    if (!removido) {
      res.status(404).json({ message: "Consulta não encontrada" });
      return;
    }
    res.status(200).json({ message: "Consulta removida com sucesso" });
  }
}
