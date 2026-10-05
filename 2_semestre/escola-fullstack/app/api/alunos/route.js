import db from "@/app/db/banco";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const alunos = db.prepare(
            `SELECT id_aluno AS id, id_aluno, nome, idade, serie, ra 
             FROM alunos 
             ORDER BY id_aluno ASC`
        ).all();

        return NextResponse.json(alunos);
    } catch (error) {
        console.error("Erro ao listar alunos:", error.message);

        return NextResponse.json(
            { erro: "Erro ao listar alunos" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            INSERT INTO alunos (nome, idade, serie, ra)
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

        let sql;
        let resultado;

        if (dados.id || dados.id_aluno) {
            sql = db.prepare(`
                UPDATE alunos
                SET nome = ?, idade = ?, serie = ?, ra = ?
                WHERE id_aluno = ?
            `);
            resultado = sql.run(
                dados.nome,
                dados.idade,
                dados.serie,
                dados.ra,
                dados.id || dados.id_aluno
            );
        } else if (dados.ra) {
            sql = db.prepare(`
                UPDATE alunos
                SET nome = ?, idade = ?, serie = ?
                WHERE ra = ?
            `);
            resultado = sql.run(
                dados.nome,
                dados.idade,
                dados.serie,
                dados.ra
            );
        } else {
            return NextResponse.json(
                { erro: "ID ou RA não informado" },
                { status: 400 }
            );
        }

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

        let sql;
        let resultado;

        if (dados.id || dados.id_aluno) {
            sql = db.prepare(`
                DELETE FROM alunos
                WHERE id_aluno = ?
            `);
            resultado = sql.run(dados.id || dados.id_aluno);
        } else if (dados.ra) {
            sql = db.prepare(`
                DELETE FROM alunos
                WHERE ra = ?
            `);
            resultado = sql.run(dados.ra);
        } else if (dados.nome) {
            sql = db.prepare(`
                DELETE FROM alunos
                WHERE nome = ?
            `);
            resultado = sql.run(dados.nome);
        } else {
            return NextResponse.json(
                { erro: "ID, RA ou Nome não informado" },
                { status: 400 }
            );
        }

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