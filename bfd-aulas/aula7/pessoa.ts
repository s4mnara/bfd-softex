class Pessoa{
    public nome : String;
    public idade : Number;
    public corDaPele : String;
    public sexo : String;
    public altura : Number;
    public peso : Number;

    constructor(nome,idade,corDaPele,sexo,altura,peso){
        this.nome=nome;
        this.idade=idade;
        this.corDaPele=corDaPele;
        this.sexo=sexo;
        this.altura=altura;
        this.peso=peso;
    }
    nascer(nome){
        console.log(`nasceu ${nome}`)
    }
    crescer(idade,nome){
        console.log(`parabéns ${nome}!, você agora tem ${idade+1} anos!`)
    }
    reproduzir(nome,idade){
        if (idade>=18){
            console.log(`${nome}, acabou de ter um filho`)
        }
        else{
            console.log(`${nome} ainda não tem idade para reproduzir`)
        }
    }
    morrer(idade,nome){
        console.log(`morre aos ${idade} anos, ${nome}...Descanse em paz.`)

    }
    trabalhar(nome){
        console.log(`${nome} foi trabalhar`)
    }
    estudar(nome){
        console.log(`${nome} foi estudar`)
    }

}
const maria = new Pessoa("maria",18,"parda","feminino",160,60)
console.log(`maria tem ${maria.idade}`)
console.log(maria.morrer)
const jose = new Pessoa("jose",30,"branco","masculino",180,80)
const ivo = new Pessoa("ivo",22,"negro","masculino",170,70)
console.log(ivo.trabalhar)
console.log(jose.estudar)