// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
                    <input id=s1 value = "Green-Red-Blue" style="widht=400px"></input>`;
let resistor: any = [
  'Black',
  'Brown',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Violet',
  'Grey',
  'White'
];

function compare(orgval: any, s1: string) {
  var i: number;
  for (i = 0; i < orgval.length; i++) {
    if (orgval[i] == s1) {
      break;
    }
  }
  return i;
}

function main(orgval: any, s1: string) {
  let n1: number = null;
  let n2: number = null;

  console.log('S1 is: ' + s1);

  if (s1.slice('-')[2]) {
    console.log('Not permitted');
  }

  if (s1.slice('-')[0] && s1.split('-')[1]) {
    console.log('Fetch the codes');
    n1 = compare(orgval, s1.split('-')[0]);
    n2 = compare(orgval, s1.split('-')[1]);

    console.log('Code value is N1 ' + n1);
    console.log('Code value is N2 ' + n2);

    let n3: String = n1.toString().concat(n2.toString());
    console.log('Code value is ' + n3);
  }
}

let inputStr: String = s1.value;
console.log('Calling main ' + inputStr);
main(resistor, inputStr);
