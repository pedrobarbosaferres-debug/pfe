import "./listaFrutas.css"

const frutas = ["Banana", "Maçã", "Laranja", "Uva", "Abacaxi"]

export default function ListaFrutas({ titulo }) {
    const listaFrutas = frutas.map((fruta) => {
        return <li key={fruta} className="fruta-item">{fruta}</li>
    })

    return (
        <section className="lista-frutas-root">
            <h1 className="lista-frutas-titulo">{titulo}</h1>
            <ul className="lista-frutas-ul">{listaFrutas}</ul>
        </section>
    )
}