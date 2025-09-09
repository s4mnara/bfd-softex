import { Pessoal } from "./pessoal.ts";

export class Juridica extends Pessoal {
  public cnpj: string;
  public dataAbertura: Date;

  constructor(cnpj: string, dataAbertura: Date, id: number, nome: string, email: string, telefone: number, endereco: string) {
    super(id, nome, email, telefone, endereco);
    this.cnpj = cnpj;
    this.dataAbertura = dataAbertura;
  }

  validarCnpj(): boolean {
    return /^\d{14}$/.test(this.cnpj);
  }

  exibirInformacoes(): string {
    return `Nome: ${this.nome}
CNPJ: ${this.cnpj}
Data de Abertura: ${this.dataAbertura.toLocaleDateString()}
Email: ${this.email}
Telefone: ${this.telefone}
Endereço: ${this.endereco}`;
  }
}
