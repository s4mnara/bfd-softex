class Animal {
    public nome: string;             // Nome ou espécie do animal
    public quantidadeDePatas: number;
    public voa: boolean;
    public habitat: string;
    public temVeneno: boolean;
    public alimentacao: string;      // carnivoro, herbivoro, onivoro
    public vertebrado: boolean;
    public som: string;              

    constructor(nome: string, quantidadeDePatas: number, voa: boolean, habitat: string, temVeneno: boolean, alimentacao: string, vertebrado: boolean, som: string) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.voa = voa;
        this.habitat = habitat;
        this.temVeneno = temVeneno;
        this.alimentacao = alimentacao;
        this.vertebrado = vertebrado;
        this.som = som;
    }

    emitirSom() {
        console.log(`${this.nome} faz: ${this.som}`);
    }

       comer() {
        console.log(`${this.nome} está comendo ${this.alimentacao}...`);
    }

    locomover() {
        if (this.voa) {
            console.log(`${this.nome} está voando pelo ${this.habitat}...`);
        } else {
            console.log(`${this.nome} está andando pelo ${this.habitat}...`);
        }
    }

    dormir() {
        console.log(`${this.nome} se acomodou e está dormindo... Zzz`);
    }

    reproduzir() {
        console.log(`${this.nome} está cuidando da reprodução...`);
    }

    respirar() {
        console.log(`${this.nome} está respirando normalmente...`);
    }

}

// Criando instâncias 
const gato = new Animal("Gato", 4, false, "casa", false, "carnivoro", true, "miau");
const cachorro = new Animal("Cachorro", 4, false, "casa", false, "carnivoro", true, "au au");
const morcego = new Animal("Morcego", 2, true, "caverna", true, "carnivoro", true, "ultrassom");

// Chamando métodos
gato.emitirSom();       
cachorro.emitirSom();  
morcego.emitirSom();    

gato.comer();           
cachorro.locomover();   
morcego.respirar();     




