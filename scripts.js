document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const respostasCorretas = {
      
      q1: "b",
      q2: "a",
      q3: "b",
      q4: "a",
      q5: "b",
      q6: "b",
      q7: "b"
    };
  
    let pontuacao = 0;
    let perguntasTotais = Object.keys(respostasCorretas).length;
  
    for (let i = 1; i <= perguntasTotais; i++) {
      const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);
      if (!respostaSelecionada) {
        alert(`Você deixou a pergunta ${i} sem resposta.`);
        return;
      }
  
      if (respostaSelecionada.value === respostasCorretas[`q${i}`]) {
        pontuacao++;
      }
    }
  
    let mensagem = "";
  
    if (pontuacao === perguntasTotais) {
      mensagem = "Incrível! Você acertou tudo! 🎉";
    } else if (pontuacao >= 5) {
      mensagem = "Muito bem! Você conhece bastante Brand New.";
    } else if (pontuacao >= 3) {
      mensagem = "Você conhece algumas coisas, mas dá pra melhorar!";
    } else {
      mensagem = "Tá na hora de ouvir mais Brand New! 😅";
    }
  
    document.getElementById("resultado").textContent = `Você acertou ${pontuacao} de ${perguntasTotais} perguntas. ${mensagem}`;
  });