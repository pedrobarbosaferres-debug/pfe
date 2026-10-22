import { NextResponse } from "next/server";
import db from "../../db/banco";

export async function GET() {
  try {
    const notas = db.prepare(`
      SELECT notas.id_nota, notas.id_aluno, notas.t1, notas.t2,
        notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra
      FROM notas
      INNER JOIN alunos ON notas.id_aluno = alunos.id_aluno
      ORDER BY alunos.nome
    `).all();

    return NextResponse.json(notas);
  } catch (erro) {
    console.error("Erro ao buscar notas:", erro);
    return NextResponse.json(
      { erro: "Erro ao buscar as notas." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const dados = await request.json();
    const idAluno = Number(dados.id_aluno);
    const valoresNotas = [dados.t1, dados.t2, dados.n1, dados.n2, dados.n3];
    const notas = valoresNotas.map(Number);

    if (
      !Number.isInteger(idAluno) ||
      valoresNotas.some((valor) => valor === "" || valor === null || valor === undefined) ||
      notas.some((nota) => !Number.isFinite(nota) || nota < 0 || nota > 10)
    ) {
      return NextResponse.json(
        { erro: "Informe um aluno e notas válidas entre 0 e 10." },
        { status: 400 }
      );
    }

    const aluno = db.prepare("SELECT id_aluno FROM alunos WHERE id_aluno = ?").get(idAluno);
    if (!aluno) {
      return NextResponse.json(
        { erro: "Aluno não encontrado." },
        { status: 404 }
      );
    }

    const sql = db.prepare(`
      INSERT INTO notas (id_aluno, t1, t2, n1, n2, n3)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    sql.run(idAluno, ...notas);

    return NextResponse.json(
      { mensagem: "Notas cadastradas com sucesso!" },
      { status: 201 }
    );
  } catch (erro) {
    if (erro.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return NextResponse.json(
        { erro: "Este aluno já possui notas cadastradas." },
        { status: 409 }
      );
    }

    console.error("Erro ao cadastrar notas:", erro);
    return NextResponse.json(
      { erro: "Erro ao cadastrar as notas." },
      { status: 500 }
    );
  }
}
