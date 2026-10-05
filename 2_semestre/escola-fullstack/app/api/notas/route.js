import db from "@/app/db/banco";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const notas = db.prepare(
            `SELECT notas.id, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra 
             FROM notas 
             INNER JOIN alunos ON notas.id_aluno = alunos.id_alunos 
             ORDER BY alunos.nome`
        ).all();

        return NextResponse.json(notas);
    } catch (error) {
        console.error("Erro ao listar notas:", error.message);

        return NextResponse.json(
            { erro: "Erro ao listar notas" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            INSERT INTO notas (id_aluno, t1, t2, n1, n2, n3)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        sql.run(
            dados.id_aluno,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3
        );

        return NextResponse.json({
            mensagem: "Nota cadastrada com sucesso"
        });

    } catch (error) {
        console.error("Erro ao cadastrar notas:", error.message);

        return NextResponse.json(
            { erro: "Erro ao cadastrar notas" },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            UPDATE notas
            SET id_aluno = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
            WHERE id = ?
        `);

        const resultado = sql.run(
            dados.id_aluno,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3,
            dados.id
        );

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Nota não encontrada" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Nota atualizada com sucesso"
        });

    } catch (error) {
        console.error("Erro ao editar nota:", error.message);

        return NextResponse.json(
            { erro: "Erro ao editar nota" },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            DELETE FROM notas
            WHERE id = ?
        `);

        const resultado = sql.run(dados.id);

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Nota não encontrada" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Nota excluída com sucesso"
        });

    } catch (error) {
        console.error("Erro ao excluir nota:", error.message);

        return NextResponse.json(
            { erro: "Erro ao excluir nota" },
            { status: 500 }
        );
    }
}