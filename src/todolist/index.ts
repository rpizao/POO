const arrayValoresAlearorios = [ "A", "B", "Z", "X", 1 ];
// [0] = "A"
// Index = Valor no Array

/** <HTML>
    - Tarefa 1: Varrer a casa
    - Tarefa 2: Comprar pão (`click´) [INDEX]
    </HTML>
 */


// Solução 1
/* class Tarefa {
    constructor(texto: string){
        this.texto = texto;
    }

    texto?: string;
    concluida: boolean = false;
}

class TodoList {
    private tarefas: Tarefa[] = [];

    adicionarNovaTarefa(texto: string) {
        this.tarefas.push(new Tarefa(texto));
    }
} */

// Solução 2
class TodoList {
    static tarefas: TodoList[] = [];

    constructor(){
    }

    static adicionar(texto: string) {
        const nova = new TodoList();
        nova.texto = texto;
        TodoList.tarefas.push(nova);
    }

    texto?: string;
    concluida: boolean = false;
}

// Nova tarefa
let novaTarefa1 = new TodoList();
// novaTarefa1.adicionar("Fazer compras");
TodoList.adicionar("Fazer compras");

let novaTarefa2 = new TodoList();
TodoList.adicionar("Arrumar a casa");

console.log(novaTarefa1);
console.log(novaTarefa2);
console.log(TodoList.tarefas);