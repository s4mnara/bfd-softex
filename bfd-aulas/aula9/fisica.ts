import { Pessoal } from "./pessoal.ts";

export class Fisica extends Pessoal {
  public cpf: string;
  public rg: number;
  public sexo: string;

  constructor(cpf: string, rg: number, sexo: string, id: number, nome: string, telefone: number, email: string, endereco: string) {
    super(id, nome, email, telefone, endereco);
    this.cpf = cpf;
    this.rg = rg;
    this.sexo = sexo;
  }

  validarCpf(): boolean {
    return /^\d{11}$/.test(this.cpf);
  }

  exibirInformacoes(): string {
    return `Nome: ${this.nome}
CPF: ${this.cpf}
RG: ${this.rg}
Sexo: ${this.sexo}
Email: ${this.email}
Telefone: ${this.telefone}
Endereço: ${this.endereco}`;
  }
}
