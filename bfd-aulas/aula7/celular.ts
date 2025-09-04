class Celular{
    public modelo : String;
    public marca : String;
    public statusBateria: Number; //%
    public SO : String;
    public armazenamento : Number;
    public cor : String;

    constructor(modelo,marca,statusBateria,SO,armazenamento,cor){
        this.modelo=modelo;
        this.marca=marca;
        this.statusBateria=statusBateria;
        this.SO=SO;
        this.armazenamento=armazenamento;
        this.cor=cor;
    }
   tirarFoto(){
    console.log("foto tirada com sucesso")
   }
   fazerLigacao(){
    console.log("chamando... aguardando na linha")
   }
   reproduzirMusica(){
    console.log("Annie are you ok? rusbé")
   }
   abrirNavegador(){
   console.log("Navegador aberto")
   }
   conectarInternet(){
    console.log("Rede conectada")
   }
   ligarBluetooth(){
    console.log("sebrutius")
   }

}

const iphone = new Celular("XR","Apple",100,"IOS",64,"azul");
const motorola = new Celular("5","moto",66,"seinao",128,"preto")
const nokia = new Celular ("12","nokia",21,"tijolao",32,"branco")
console.log(`meu iphone tem a cor ${iphone.cor}`)
console.log(`meu nokia é possui o sistema operacional ${nokia.SO} `)
console.log(`meu motorola está com bateria em ${motorola.statusBateria}`)
console.log(nokia.conectarInternet)