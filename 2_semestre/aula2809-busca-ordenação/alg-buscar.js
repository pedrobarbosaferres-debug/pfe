const bandas = ['metallica', 'iron maiden', 'megadeth', 'AC/DC','guns n roses','eagles','pantera','aerosmith']   

function buscarBanda(bandas,banda){
 for (let i = 0; i < bandas.length; i++) {
    if(bandas[i]==banda){
        console.log(`a banda ${bandas[i]} foi encontrada na posição ${i}`)
        return;
        }
    }
    console.log(`a banda não foi encontrada`);
}
buscarBanda(bandas,'metallica')