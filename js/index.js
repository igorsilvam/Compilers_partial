console.log("Olá sejá bem-vindo a calculadora de dois números!");
let numberOne = 33;
let numberTwo = 10;

function cal(one, two) {
  let sum = one + two;
  console.log(`O valor da soma é ${sum}`);

  let subtraction = one - two;
  console.log(`O valor da subtração é ${subtraction}`);

  let multiplication = one * two;
  console.log(`O valor da multiplicação é ${multiplication}`);

  let division = one / two;
  console.log(`O valor da divisão é ${division}`);

  let restDivision = one % two;
  console.log(`O valor do resto da divisão é ${restDivision}`);

  const parImpar = sum % 2;
  const difference = one == two;

  switch (parImpar) {
    case 1:
      console.log(`O número ${sum} é impar`);
      break;
    default:
      console.log(`O número ${sum} é par`);
  }

  switch (difference) {
    case true:
      console.log(`Os números ${one} e ${two} são iguais`);
      break;
    default:
      console.log(`Os números ${one} e ${two} são diferentes`);
  }

  return;
}

cal(numberOne, numberTwo);
