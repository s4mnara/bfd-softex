export class Pessoal {
  private id: number;
  public nome: string;
  public email: string;
  public telefone: number;
  public endereco: string;

  constructor(id: number, nome: string, email: string, telefone: number, endereco: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }

  mudarEmail(novoEmail: string) {
    this.email = novoEmail;
  }

  mudarTelefone(novoTel: number) {
    this.telefone = novoTel;
  }

  mudarEndereco(novoEndereco: string) {
    this.endereco = novoEndereco;
  }
}
