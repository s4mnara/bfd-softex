class Celular {
    public modelo: string;
    public marca: string;
    public statusBateria: number; // %
    public SO: string;
    public armazenamento: number;
    public cor: string;

    constructor(modelo: string, marca: string, statusBateria: number, SO: string, armazenamento: number, cor: string) {
        this.modelo = modelo;
        this.marca = marca;
        this.statusBateria = statusBateria;
        this.SO = SO;
        this.armazenamento = armazenamento;
        this.cor = cor;
    }

    tirarFoto() {
        console.log(`${this.modelo} tirou uma foto com sucesso!`);
    }

    fazerLigacao() {
        console.log(`${this.modelo} está chamando... aguardando na linha`);
    }

    reproduzirMusica() {
        console.log(`${this.modelo} está reproduzindo música: Annie are you ok? rusbé`);
    }

    abrirNavegador() {
        console.log(`${this.modelo} abriu o navegador`);
    }

    conectarInternet() {
        console.log(`${this.modelo} conectou à internet`);
    }

    ligarBluetooth() {
        console.log(`${this.modelo} ativou o Bluetooth: sebrutius`);
    }
}

// Criando instâncias
const iphone = new Celular("iphone XR", "Apple", 100, "iOS", 64, "azul");
const motorola = new Celular("Moto 5", "Moto", 66, "Seinao", 128, "preto");
const nokia = new Celular("nokia 1200", "Nokia", 21, "Tijolão", 32, "branco");

// Usando atributos
console.log(`Meu iPhone tem a cor ${iphone.cor}`);
console.log(`Meu Nokia possui o sistema operacional ${nokia.SO}`);
console.log(`Meu Motorola está com bateria em ${motorola.statusBateria}%`);

// Chamando métodos
iphone.conectarInternet(); 
nokia.tirarFoto();
motorola.reproduzirMusica();
