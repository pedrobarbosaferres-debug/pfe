

export default function MeuAvatar(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <h3>{props.nome}<span>{props.idade}</span></h3>
        <h3>{props.disciplina}</h3>
        <h3>{props.jogofav}</h3>
        <h3><img src={props.foto} /></h3>
        </>
    )
}