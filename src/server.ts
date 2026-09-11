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

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});