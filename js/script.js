// 1.
const listaSpesa = [
  "Carta Igienica",
   "Pane", 
   "Bottiglia di vino", 
   "Bottiglia di vino", 
   "Soppressata", 
   "Film di Mario Merola"
  ];

// 2.
const output = document.querySelector('p');

// 3.
let counterSpesa = 0;

// 4.
while (counterSpesa < listaSpesa.length) {

  item = listaSpesa[counterSpesa];

  counterSpesa++;

  console.log(item);

  output.innerHTML += `${item} `;

};