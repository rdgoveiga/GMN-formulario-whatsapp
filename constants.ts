
import { QuestionStep } from './types';

export const THEME = {
  primary: '#3B82F6',
  secondary: '#A020F0',
  cardBg: '#EFF6FF',
  textBlack: '#0B0B0B',
  textGray: '#6B6B6B',
  brandGradient: 'linear-gradient(to right, #3B82F6, #A020F0)',
};

export const STEPS: QuestionStep[] = [
  {
    id: 1,
    type: 'radio',
    progress: 10,
    title: 'Coloque sua empresa no topo do Google',
    description: 'Responda algumas perguntas rápidas para que eu entenda seu negócio e, ao final, você possa seguir para uma avaliação personalizada do seu projeto.',
    subtitle: 'Você já usa o Perfil de Empresa no Google?\n(Google Meu Negócio)',
    options: [
      { id: 'sim', label: '🙌 Sim!' },
      { id: 'nao', label: '😐 Ainda não' }
    ]
  },
  {
    id: 2,
    type: 'radio',
    progress: 20,
    title: 'Sua empresa aparece nas buscas do Google quando alguém procura pelo seu produto/serviço?',
    options: [
      { id: 'topo', label: '🙌 Sim, entre os primeiros resultados (no topo)' },
      { id: 'demora', label: '😐 Aparece, mas demora (precisa rolar e procurar meu nome)' },
      { id: 'nao_aparece', label: '😭 Não aparece' }
    ]
  },
  {
    id: 3,
    type: 'radio',
    progress: 30,
    title: 'Você tem atualizado e otimizado as informações do seu perfil com frequência?',
    gridCols: 2,
    options: [
      { id: 'nunca', label: '🤔 Nunca atualizei ou otimizei' },
      { id: 'sempre', label: '😉 Sempre que necessário' }
    ]
  },
  {
    id: 4,
    type: 'radio',
    progress: 40,
    title: 'Quantas avaliações sua empresa tem no Google atualmente?',
    options: [
      { id: 'nenhuma', label: 'Nenhuma' },
      { id: '1_10', label: 'De 1 a 10' },
      { id: '11_30', label: 'De 11 a 30' },
      { id: '30_mais', label: 'Mais de 30' }
    ]
  },
  {
    id: 0,
    type: 'intro',
    progress: 50,
    title: '91% das pessoas pesquisam antes de comprar ou contratar',
    description: 'Milhares de empresas já estão usando o Google para atrair clientes.',
    subtitle: 'Fonte: Think with Google Brasil',
  },
  {
    id: 5,
    type: 'radio',
    progress: 60,
    title: 'Você sente que já perdeu clientes por não aparecer no topo do Google?',
    gridCols: 2,
    options: [
      { id: 'perdeu_sim', label: '😭 Sim, com certeza' },
      { id: 'nunca_pensou', label: '🤯 Nunca parei para pensar nisso' }
    ]
  },
  {
    id: 6,
    type: 'checkbox',
    progress: 70,
    title: 'Quais desses problemas você já percebeu?',
    subtitle: 'Pode marcar mais de uma opção.',
    options: [
      { id: 'desatualizado', label: 'Perfil desatualizado e com poucas avaliações' },
      { id: 'nao_topo', label: 'Meu perfil não aparece no topo das buscas' },
      { id: 'concorrentes', label: 'Perco espaço para concorrentes' }
    ]
  },
  {
    id: 7,
    type: 'checkbox',
    progress: 80,
    title: 'Qual dessas metas você quer atingir ainda esse mês?',
    subtitle: 'Pode marcar mais de uma opção.',
    options: [
      { id: 'meta_topo', label: 'Subir minha empresa para o topo do Google' },
      { id: 'meta_avaliacoes', label: 'Conseguir pelo menos 20 avaliações 5 estrelas' },
      { id: 'meta_pacientes', label: 'Atrair mais clientes da minha cidade' },
      { id: 'meta_presenca', label: 'Melhorar minha presença online' }
    ]
  },
  {
    id: 8,
    type: 'grid',
    progress: 85,
    title: 'O quanto você entende sobre Google Meu Negócio e otimização local?',
    gridCols: 2,
    options: [
      { id: 'nerd', label: '🤓 Sei como otimizar' },
      { id: 'pouco', label: '🙂 Pouca coisa' },
      { id: 'tentou', label: '😏 Já tentei, mas não deu certo' },
      { id: 'nada', label: '🥺 Nada' }
    ]
  },
  {
    id: 9,
    type: 'radio',
    progress: 90,
    title: 'O que mais te impede hoje de melhorar seu posicionamento no Google?',
    options: [
      { id: 'tempo', label: 'Falta de tempo' },
      { id: 'comeco', label: 'Não sei por onde começar' },
      { id: 'conhecimento', label: 'Não sabia que isso era possível' }
    ]
  },
  {
    id: 10,
    type: 'info',
    progress: 100,
    title: 'Sua avaliação está pronta!',
    description: 'Com base nas suas respostas, vamos avaliar seu perfil no Google e identificar os ajustes necessários para que sua empresa se torne a primeira escolha dos clientes que já estão procurando exatamente pelos seus serviços.\n\nClique abaixo para avançar para a conversa de avaliação.'
  }
];
