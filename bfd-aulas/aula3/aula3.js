
function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite sua ${i + 1}ª nota:`));
            if (isNaN(nota)) {
                alert("Por favor, digite um número válido.");
                return;}
            soma += nota;
            }

    let media = soma / 4;
    document.getElementById("resultado").textContent = `Sua média é: ${media.toFixed(2)}`;
        }
    document.getElementById("calcular").addEventListener("click", calcularMedia);

    
function calcularBhaskara() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const saida = document.getElementById("saida");
        if (a === 0) {
            saida.textContent = "O valor de 'a' não pode ser zero.";
            return;}
    const delta = b * b - 4 * a * c;
        if (delta < 0) {
            saida.textContent = "Sem raízes reais (Δ < 0).";
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            saida.textContent = `Δ = ${delta} → x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
            }
        }
        