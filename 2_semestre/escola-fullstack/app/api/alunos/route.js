import db from "@/app/db/banco";
import { NextResponse } from "next/server";

export async function GET(request) {
    const alunos = db.prepare(
        "SELECT * FROM alunos ORDER BY nome ASC"
    ).all();

    return NextResponse.json(alunos);
}

export async function SalvaAlunos(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            INSERT INTO alunos(nome, idade, serie, ra)
            VALUES (?, ?, ?, ?)
        `);

        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra
        );

        return NextResponse.json({
            mensagem: "Aluno cadastrado com sucesso"
        });

    } catch (error) {
        console.error("Erro ao cadastrar aluno:", error.message);

        return NextResponse.json(
            { erro: "Erro ao cadastrar aluno" },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            UPDATE alunos
            SET nome = ?, idade = ?, serie = ?, ra = ?
            WHERE id = ?
        `);

        const resultado = sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra,
            dados.id
        );

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Aluno não encontrado" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Aluno atualizado com sucesso"
        });

    } catch (error) {
        console.error("Erro ao editar aluno:", error.message);

        return NextResponse.json(
            { erro: "Erro ao editar aluno" },
            { status: 500 }
        );
    }
}


export async function DELETE(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            DELETE FROM alunos
            WHERE id = ?
        `);

        const resultado = sql.run(dados.id);

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Aluno não encontrado" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Aluno excluído com sucesso"
        });

    } catch (error) {
        console.error("Erro ao excluir aluno:", error.message);

        return NextResponse.json(
            { erro: "Erro ao excluir aluno" },
            { status: 500 }
        );
    }
}