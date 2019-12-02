export class NoteService{
notes = [
{
id: '1',
nome: 'Fiat Palio',
modelo: 'Adventure',
cor: 'Prata',
placa: 'DUD-5555'
},
{
id: '2',
nome: 'Fiat Palio',
modelo: 'Fire',
cor: 'Preto',
placa: 'FUC-3333'
}
]


removeNote (note){
let index = this.notes.indexOf (note);
if (index > -1){
this.notes.splice(index, 1);
}
}

addNote (note){
this.notes.push(note);
}


}