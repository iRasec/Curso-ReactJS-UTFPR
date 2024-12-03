import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0); // Primeiro número
  const [num2, setNum2] = useState(0); // Segundo número
  const [result, setResult] = useState(0); // Resultado
  const [operation, setOperation] = useState("adicao"); // Operação selecionada

  // Função para calcular o resultado
  const calculate = () => {
    let calculatedResult;
    switch (operation) {
      case "adicao":
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case "subtracao":
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case "multiplicacao":
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case "divisao":
        calculatedResult =
          parseFloat(num2) !== 0
            ? parseFloat(num1) / parseFloat(num2)
            : "Erro: Divisão por zero";
        break;
      default:
        calculatedResult = "Operação inválida";
    }
    setResult(calculatedResult);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* Entrada para o primeiro número */}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Informe o primeiro número"
        />
        {/* Seleção de operação */}
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="adicao">+</option>
          <option value="subtracao">-</option>
          <option value="multiplicacao">×</option>
          <option value="divisao">÷</option>
        </select>
        {/* Entrada para o segundo número */}
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Informe o segundo número"
        />
        {/* Botão para calcular */}
        <button onClick={calculate}> Calcular </button>

        {/* Exibição do resultado */}
        <h2>O resultado é: {result}</h2>
      </div>
    </>
  );
}

export default App;

