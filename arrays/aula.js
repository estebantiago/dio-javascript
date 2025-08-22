// Arrays e Repetição

let notas = [];



notas.push(10);
notas.push(5);
notas.push(7);
notas.push(4);
notas.push(5);


let soma = 0;

for(let i = 0; i < notas.length; i++){
       const nota = notas[i];
       soma = soma + nota;
}

let media = soma / notas.length;

console.log(media)