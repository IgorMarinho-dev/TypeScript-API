import express from "express";

const app = express();
app.use(express.json());

const PORT: number = 3000;

interface Usuario {
    id: number;
    nome: string;
    telefone: string;
}

const usuarios: Usuario[] = [];
usuarios.push({ id: 1, nome: "André", telefone: "123456789" });
usuarios.push({ id: 2, nome: "Maria", telefone: "987654321" });

// GET /usuarios - Retorna todos os usuários
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// GET /usuarios/:id - Retorna um usuário específico pelo ID
app.get("/usuarios/:id", (req, res) => {
    const idProcurado: number = Number(req.params.id);
    const usuarioEncontrado: Usuario | undefined = usuarios.find(
        (usuario) => usuario.id === idProcurado);
    if (usuarioEncontrado) {
        res.json(usuarioEncontrado);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
});

// POST /usuarios - Adiciona um novo usuário
app.post("/usuarios", (req, res) => {
    const novoUsuario: Usuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// PUT /usuarios/:id - Atualiza um usuário existente pelo ID
app.put("/usuarios/:id", (req, res) => {
    const idProcurado: number = Number(req.params.id);
    const usuarioIndex: number = usuarios.findIndex(
        (usuario) => usuario.id === idProcurado);
    if (usuarioIndex !== -1) {
        const usuarioAtualizado: Usuario = { ...usuarios[usuarioIndex], ...req.body };
        usuarios[usuarioIndex] = usuarioAtualizado;
        res.json(usuarioAtualizado);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
});

// DELETE /usuarios/:id - Remove um usuário pelo ID
app.delete("/usuarios/:id", (req, res) => {
    const idProcurado: number = Number(req.params.id);
    const usuarioIndex: number = usuarios.findIndex(
        (usuario) => usuario.id === idProcurado);
    if (usuarioIndex !== -1) {
        usuarios.splice(usuarioIndex, 1);
        res.status(200).json({ message: "Usuário removido com sucesso" });
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});