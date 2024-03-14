import { Animal } from "./animal";
import { Cachorro } from "./cachorro";
import { Gato } from "./gato";

const garfield = new Gato(10);
const bethoven = new Cachorro(15);

const animais: Animal[] = [garfield, bethoven];

console.log(animais);

console.log(`O Bethoven tem ${bethoven.calcularIdadeHumana()} anos em idade humana`);
console.log(`O Garfield tem ${garfield.calcularIdadeHumana()} anos em idade humana`);

bethoven.emitirSom();
garfield.emitirSom();