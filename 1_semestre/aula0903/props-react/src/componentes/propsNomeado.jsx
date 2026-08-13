

export default function propsNomeado({titulo1,subtitulo,status=true}){
    return(
        <>
        <h1>{titulo1}</h1>
        <h3>{subtitulo}</h3>
        <span>o status é{status}</span>
        </>
    )
}