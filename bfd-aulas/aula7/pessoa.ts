class Pessoa {
    public nome: string;
    public idade: number;
    public corDaPele: string;
    public sexo: string;
    public altura: number;
    public profissao : string;

    constructor(nome: string, idade: number, corDaPele: string, sexo: string, altura: number, profissao : string) {
        this.nome = nome;
        this.idade = idade;
        this.corDaPele = corDaPele;
        this.sexo = sexo;
        this.altura = altura;
        this.profissao = profissao;
    }

    nascer(): string {
        return `Nasceu ${this.nome}`;
    }

    crescer(): string {
        this.idade += 1;
        return `Parabéns ${this.nome}! Você agora tem ${this.idade} anos!`;
    }

    reproduzir(): string {
        if (this.idade >= 18) {
            return `${this.nome} acabou de ter um filho aos ${this.idade} anos!`;
        } else {
            return `${this.nome} ainda não tem idade para reproduzir, espere até os 18 anos!`;
        }
    }

    morrer(): string {
        return `${this.nome} morreu aos ${this.idade} anos... Descanse em paz.`;
    }
    
    trabalhar(): string {
        if (this.idade>=18){
        return `${this.nome} foi trabalhar, ele é ${this.profissao}.`;
        }
        else{
            return `${this.nome} não pode trabalhar, ainda é de menor idade`
        }
    }

    estudar(): string {
        return `${this.nome} foi estudar.`;
    }
}

// Criando instâncias
const maria = new Pessoa("Maria", 18, "parda", "feminino", 160,"médica");
console.log(`Maria tem ${maria.idade} anos`);
console.log(maria.morrer()); 
const jose = new Pessoa("Jose", 30, "branco", "masculino", 180, "programador");
const ivo = new Pessoa("Ivo", 22, "negro", "masculino", 170, "professor");

console.log(ivo.trabalhar()); 
console.log(jose.estudar());
console.log(`jose possui ${jose.idade} anos`);  
console.log(jose.crescer());