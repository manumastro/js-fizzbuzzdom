/*
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100.
**MILESTONE 1**
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
**MILESTONE 2**
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
**MILESTONE 3**
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/


const container = document.querySelector('.container');
const limit = 100;

for(let i = 1; i <= limit; i++){
  const boxEL = document.createElement('div');
  boxEL.className = 'box';

  if(!(i % 3) && !(i % 5)){
    boxEL.append("FizzBuzz");
    container.append(boxEL);
  }
  else if(i % 5 === 0){
    boxEL.append("Buzz");
    container.append(boxEL);
  }
  else if (i % 3 === 0){
    boxEL.append("Fizz");
    container.append(boxEL);
  }
  else{
    boxEL.append(i);
    container.append(boxEL);
  }

}