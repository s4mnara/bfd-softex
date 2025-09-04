class Animal{
    public quantidadeDePatas : Number;
    public Voa : Boolean;
    public habitat : String;
    public temVeneno : Boolean;
    public Alimentacao : String; // carnivoro, herbivoro, onivoro
    public vertebrado : Boolean;

    constructor(quantidadeDePatas,Voa,habitat,temVeneno,Alimentacao,vertebrado){
        this.quantidadeDePatas = quantidadeDePatas;
        this.Voa=Voa;
        this.habitat=habitat;
        this.temVeneno=temVeneno;
        this.Alimentacao=Alimentacao;
        this.vertebrado=vertebrado;
    }
    emitirSom(){
        console.log("Animal emitindo som...")
    }
    comer(){
        console.log("Animal comendo...")
    }
    locomover(){
        console.log("Animal se locomovendo...")
    }
    dormir(){
        console.log("Animal dormindo...")
    }
    reproduzir() {
        console.log("Animal se reproduzindo...");
    }
    respirar() {
        console.log("Animal respirando...");
    }

    
}

const gato = new Animal(4,false,"casa",false,"carnivoro",true);
console.log(`Meu gato possui ${gato.quantidadeDePatas} patas`)
const cachorro = new Animal (4,false,"casa",false,"carnivoro",true);
console.log(`meu cachorro vive em ${cachorro.habitat}`)
const morcego = new Animal (2,true,"caverna",true,"carnivoro",true);
console.log(`morcego tem veneno? ${morcego.temVeneno}`)
console.log(cachorro.comer);
console.log(gato.emitirSom);




