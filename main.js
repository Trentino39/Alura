const botoes = document.querySelectorAll('.botao');
const titulo = document.getElementById('titulo');
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minEl = document.getElementById('min');
const segEl = document.getElementById('seg');
const finalizadoEl = document.getElementById('finalizado');

const objetivos = [
  {
    titulo: 'Estudar 4 cursos na Alura',
    data: new Date('2026-06-30T23:59:59')
  },
  {
    titulo: 'Criar 5 projetos em Javascript',
    data: new Date('2026-08-15T23:59:59')
  },
  {
    titulo: 'Criar um portfólio profissional',
    data: new Date('2026-09-30T23:59:59')
  },
  {
    titulo: 'Atualizar meu currículo',
    data: new Date('2026-04-10T23:59:59')
  }
];

let objetivoAtual = 0;

function atualizarAtivo(index) {
  botoes.forEach(btn => btn.classList.remove('ativo'));
  botoes[index].classList.add('ativo');
  titulo.textContent = objetivos[index].titulo;
  objetivoAtual = index;
  finalizadoEl.textContent = '';
}

botoes.forEach((btn, i) => {
  btn.addEventListener('click', () => atualizarAtivo(i));
});

function calcularTempo(dataAlvo) {
  const agora = new Date();
  let diff = dataAlvo - agora;

  if (diff <= 0) return null;

  let segundos = Math.floor(diff / 1000) % 60;
  let minutos = Math.floor(diff / (1000 * 60)) % 60;
  let horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  let dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}

function atualizarContador() {
  const tempo = calcularTempo(objetivos[objetivoAtual].data);

  if (!tempo) {
    diasEl.textContent = '0';
    horasEl.textContent = '0';
    minEl.textContent = '0';
    segEl.textContent = '0';
    finalizadoEl.textContent = 'Prazo finalizado';
    return;
  }

  diasEl.textContent = tempo.dias;
  horasEl.textContent = tempo.horas;
  minEl.textContent = tempo.minutos;
  segEl.textContent = tempo.segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();
