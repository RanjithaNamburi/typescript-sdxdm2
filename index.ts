// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>
                    `;
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

function twoFer(name: string) {
  return 'one for ' + name + ' one for me';
}

console.log('Ranjitha Learning Typescript');

console.log(twoFer('Ranjitha'));

console.log(resistor[4]);
