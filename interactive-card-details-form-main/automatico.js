document.addEventListener('DOMContentLoaded', function() {
    const cartaoInput = document.getElementById('cartao');
    const textoDinamico = document.getElementById('texto-dinamico');
    const textoDinamico1 = document.getElementById('texto-dinamico1');
    const textoDinamico2 = document.getElementById('texto-dinamico2');
    const textoDinamico3 = document.getElementById('texto-dinamico3');
    const textoDinamico4 = document.getElementById('texto-dinamico4');


    const imagemFrenteContainer = document.querySelector('.imagem-frente-container img');
    const nomeInput = document.getElementById('nome');
    const mesInput = document.getElementById('mes');
    const anoInput = document.getElementById('ano');
    const cvvInput = document.getElementById('cvv');
  
    // Atualizar o texto dinâmico com zeros
    atualizarTextoDinamico('0000 0000 0000 0000');
    atualizarNome('Name')  
    atualizarCVV('000')
    atualizarMes('MM')
    atualizarAno('YY')
    cartaoInput.addEventListener('input', function() {
      const numeroCartao = cartaoInput.value.trim(); // Remover espaços em branco
      const numeroFormatado = formatarNumeroCartao(numeroCartao);
      atualizarTextoDinamico(numeroFormatado);
    });
  
    nomeInput.addEventListener('input', function() {
      const nome = nomeInput.value.toUpperCase(); // Converte para maiúsculas
      atualizarNome(nome);
    });
  
    mesInput.addEventListener('input', function() {
      const mes = mesInput.value;
      atualizarMes(mes);
    });
  
    anoInput.addEventListener('input', function() {
      const ano = anoInput.value;
      atualizarAno(ano);
    });
  
    cvvInput.addEventListener('input', function() {
      const cvv = cvvInput.value;
      atualizarCVV(cvv);
    });
  
    function atualizarTextoDinamico(texto) {
      textoDinamico.textContent = texto;
  
      // Defina as coordenadas desejadas para o texto dinâmico
      const topCoord = 50; // Exemplo: 100 pixels do topo
      const leftCoord = -700; // Exemplo: 200 pixels da esquerda
  
      // Atualize o estilo do texto dinâmico
      textoDinamico.style.position = 'absolute';
      textoDinamico.style.top = topCoord + 'px';
      textoDinamico.style.left = leftCoord + 'px';
  
      // Estilize o texto dinâmico
      textoDinamico.style.fontSize = '30px'; // Tamanho da fonte
      textoDinamico.style.fontFamily = 'Space Grotesk, sans-serif';
      textoDinamico.style.color = 'white'; // Cor do texto
    }
  
    function formatarNumeroCartao(numero) {
      // Implemente a lógica para formatar o número do cartão
      // Aqui está um exemplo básico que adiciona espaços a cada 4 dígitos
      const partes = [];
      for (let i = 0; i < numero.length; i += 4) {
        partes.push(numero.slice(i, i + 4));
      }
      return partes.join(' ');
    }
  
    function atualizarNome(nome) {
      // Lógica para atualizar o nome na imagem do cartão
      // Aqui, você pode definir a posição e o estilo do nome
      textoDinamico1.textContent = nome;
  
      // Defina as coordenadas desejadas para o texto dinâmico
      const topCoord = 125; // Exemplo: 100 pixels do topo
      const leftCoord = -700; // Exemplo: 200 pixels da esquerda
  
      // Atualize o estilo do texto dinâmico
      textoDinamico1.style.position = 'absolute';
      textoDinamico1.style.top = topCoord + 'px';
      textoDinamico1.style.left = leftCoord + 'px';
  
      // Estilize o texto dinâmico
      textoDinamico1.style.fontSize = '15px'; // Tamanho da fonte
      textoDinamico1.style.fontFamily = 'Space Grotesk, sans-serif';
      textoDinamico1.style.color = 'white'; // Cor do texto
    }
  
    function atualizarMes(mes) {
        // Lógica para atualizar o nome na imagem do cartão
      // Aqui, você pode definir a posição e o estilo do nome
      textoDinamico2.textContent = mes;
  
      // Defina as coordenadas desejadas para o texto dinâmico
      const topCoord = 125; // Exemplo: 100 pixels do topo
      const leftCoord = -430; // Exemplo: 200 pixels da esquerda
  
      // Atualize o estilo do texto dinâmico
      textoDinamico2.style.position = 'absolute';
      textoDinamico2.style.top = topCoord + 'px';
      textoDinamico2.style.left = leftCoord + 'px';
  
      // Estilize o texto dinâmico
      textoDinamico2.style.fontSize = '15px'; // Tamanho da fonte
      textoDinamico2.style.fontFamily = 'Space Grotesk, sans-serif';
      textoDinamico2.style.color = 'white'; // Cor do texto
    }
  
    function atualizarAno(ano) {
        // Lógica para atualizar o nome na imagem do cartão
      // Aqui, você pode definir a posição e o estilo do nome
      textoDinamico3.textContent = ano;
  
      // Defina as coordenadas desejadas para o texto dinâmico
      const topCoord = 125; // Exemplo: 100 pixels do topo
      const leftCoord = -391; // Exemplo: 200 pixels da esquerda
  
      // Atualize o estilo do texto dinâmico
      textoDinamico3.style.position = 'absolute';
      textoDinamico3.style.top = topCoord + 'px';
      textoDinamico3.style.left = leftCoord + 'px';
  
      // Estilize o texto dinâmico
      textoDinamico3.style.fontSize = '15px'; // Tamanho da fonte
      textoDinamico3.style.fontFamily = 'Space Grotesk, sans-serif';
      textoDinamico3.style.color = 'white'; // Cor do texto
    }
  
    function atualizarCVV(cvv) {
        textoDinamico4.textContent = cvv;
  
        // Defina as coordenadas desejadas para o texto dinâmico
        const topCoord = 310; // Exemplo: 100 pixels do topo
        const leftCoord = -310; // Exemplo: 200 pixels da esquerda
    
        // Atualize o estilo do texto dinâmico
        textoDinamico4.style.position = 'absolute';
        textoDinamico4.style.top = topCoord + 'px';
        textoDinamico4.style.left = leftCoord + 'px';
    
        // Estilize o texto dinâmico
        textoDinamico4.style.fontSize = '22px'; // Tamanho da fonte
        textoDinamico4.style.fontFamily = 'Space Grotesk, sans-serif';
        textoDinamico4.style.color = 'white'; // Cor do texto
    }
  });
  