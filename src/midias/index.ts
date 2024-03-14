import { Filme } from "./filme";
import { Midia } from "./midia";
import { Musica } from "./musica";

const minhasMidiasFavoritas: Midia[] = 
    [
        new Filme("A outra face", ["Nicolas Cage", "John Travolta"]),
        new Filme("A Ilha do Medo", ["Leonardo DiCaprio", "Mark Ruffalo"]), 
        new Musica("One", "Metallica", "A música é baseada no romance de 1939 Johnny Vai à Guerra, de Dalton Trumbo, que narra a história de um soldado cujo corpo é severamente danificado depois que ele é atingido pela artilharia alemã durante a Primeira Guerra Mundial.")
    ];

for(const midia of minhasMidiasFavoritas){
    midia.reproduzir();
}