const paises = ['uzbequistão', 'groelandia', 'paquistão', 'angola','baren','cabo verde','frança','islandia','honduras']   

function buscarPais(paises,pais){
 for (let i = 0; i < paises.length; i++) {
    if(paises[i]==pais){
        console.log(`o país ${paises[i]} foi encontrado na posição ${i}`)
        return;
        }
    }
    console.log(`o país não foi encontrado`);
}
buscarPais(paises,'honduras')