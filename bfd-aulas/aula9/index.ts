import { Fisica } from "./fisica.ts";
import { Juridica } from "./juridica.ts";

const Joaozinho = new Fisica(
  "14253263070",              
  292893978,                  
  "masculino",
  1,
  "Joao",
  215456325,
  "joao@email.com",
  "Rua seila número 40"
);

const casasBahia = new Juridica(
  "74315522000119",           
  new Date(2006, 1, 23),
  2,
  "Casas Bahia",
  "casasbahia@email.com",
  347864633,
  "Rua vovozinha N50"
);

// Imprimindo as informações
console.log(Joaozinho.exibirInformacoes());
console.log(casasBahia.exibirInformacoes());

// Validando o CNPJ
console.log("CNPJ válido?", casasBahia.validarCnpj());
