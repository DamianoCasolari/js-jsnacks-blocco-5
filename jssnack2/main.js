// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"


const array = [3, 2, 5, 4, 5, 9, 6, 8, 7, 10];
const max = Math.floor(Math.random() * (array.length)) + 1
const min = Math.floor(Math.random() * max );
console.log("min = "+ min,"max = " + max);
filterNumberArray(array, min, max);

function filterNumberArray(array, min, max) {
  const newArray = array.filter((number) => {
    if (number >= min && number <= max) {
      return true;
    }
  });
  console.log(newArray);
}
