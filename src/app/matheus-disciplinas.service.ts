import { Injectable } from '@angular/core';

interface Disciplina {
  codigo: string;
  materia: string;
  dia: string;
  horario: string;
  ementa: string;
  objetivos: string;
}

@Injectable()
export class MatheusDisciplinasService {
  lista: Array<Disciplina> = [
    {
      codigo: 'AGM004',
      materia: 'Negócios e Marketing e Eletrônicos',
      dia: 'Quarta-Feira',
      horario: '19:00 - 22:30',
      ementa:
        'Conceitos de marketing e de marketing digital. O comportamento do consumidor on-line. Marketing de conteúdo. Marketing nas mídias sociais. E-mail marketing. Marketing viral. Publicidade on-line. Pesquisa de marketing on-line. Marketing e os negócios na Internet. Estudos de caso.',
      objetivos:
        'Apresentar e discutir as questões do marketing na era da Internet. Abordar as principais estratégias, ações, ferramentas e mídias presentes na Web. Objetivos específicos. Compreender e utilizar a Internet para os negócios e implementar ações de marketing, comunicação e publicidade on-line.',
    },
    {
      codigo: 'IDS002',
      materia: 'Desenvolvimento para Servidores II',
      dia: 'Quinta-Feira',
      horario: '19:00 - 22:30',
      ementa:
        'Conceitos e evolução das tecnologias de programação de servidores. Recursos da linguagem escolhida para servidores na Internet. Padrões de projetos. Integração com sistemas (Google Maps API, Twitter, entre outros.',
      objetivos:
        'Desenvolver um site completo de e-commerce ou outro tipo de negócio na Internet usando uma linguagem apropriada a servidores, banco de dados e padrões de projeto. Objetivos específicos. Implementar softwares do lado servidor e com uso de uma linguagem de programação e de padrões de projetos mais usuais como MVC, DAO, Composite, Singleton, entre outros.',
    },
    {
      codigo: 'ING011',
      materia: 'Inglês V',
      dia: 'Terça-Feira',
      horario: '19:00 - 20:40',
      ementa:
        'Aprofundamento da compreensão e produção oral e escrita por meio da integração das habilidades linguístico-comunicativas. Ênfase na oralidade, atendendo às especificidades acadêmico-profissionais da área e abordando aspectos socioculturais da língua inglesa.',
      objetivos:
        'Apresentar os recursos do idioma necessários à compreensão e produção oral e escrita por meio da integração das habilidades linguístico-comunicativas. Apoiar as demais atividades dos estudantes na criação de sítios Internet. Objetivos específicos. O aluno deverá ser capaz de fazer uso das habilidades linguístico-comunicativas, em contextos acadêmico-profissionais, com maior espontaneidade e confiança; aperfeiçoar as estratégias argumentativas; escrever relatórios; preparar-se para conduzir reuniões; comparar metas e objetivos alcançados; organizar eventos; ler textos técnicos específicos da área; entender diferenças de pronúncia.',
    },
    {
      codigo: 'ISW011',
      materia: 'Projeto de Prototipagem e Testes de Usabilidade',
      dia: 'Sábado',
      horario: '8:00 - 11:30',
      ementa:
        'Conceitos, métodos de prototipagem e ferramentas de teste de protótipos. Conceitos de usabilidade e estratégias de design. Métodos de teste de usabilidade. Planejamento de teste de usabilidade. Recrutamento. Projeto de usabilidade. Plano de teste. Sessão de teste de usabilidade. Análise de dados. Comunicação dos resultados. Variação de técnicas.',
      objetivos:
        'Aprofundar os conceitos de design da usabilidade  e métodos de ensaio para mídia interativa. Usabilidade baseada na adaptação de design de interface para uma experiência do usuário mais eficaz.  Apresentar e usar diferentes métodos e ferramentas de prototipagem para explorar com os colegas de equipe ou clientes: conceitos de design, comunicação e testes de usabilidade. Objetivos específicos. Os estudantes serão capazes de criar uma série de protótipos para aplicações Web hipotéticas Criar um protótipo interativo baseando-se no protótipo de papel. Revisar protótipo. Projetar, conduzir e analisar testes de usabilidade com base: nos princípios estabelecidos, nos resultados de pesquisa com o protótipo e na teoria.  Desenvolver um plano de teste de usabilidade, recrutar os usuários apropriados, criar cenários robustos de tarefas, facilitar os testes,  analisar e comunicar os resultados do teste.',
    },
    {
      codigo: 'ISW012',
      materia: 'Desenvolvimento para Dispositivos Móveis I',
      dia: 'Segunda-Feira',
      horario: '19:00 - 22:30',
      ementa:
        'Introdução e conceitos. Recursos disponíveis para dispositivos móveis na linguagem de marcação de textos. Uso de algum ambiente de desenvolvimento: configuração do ambiente, emulação de dispositivos móveis nos computadores pessoais, interface gráfica, serviços disponíveis, banco de dados nos dispositivos. Desenvolvimento de aplicações que utilizam dados de geolocalização. Integração entre sistemas remotos.',
      objetivos:
        'Apresentar as tecnologias de desenvolvimento de aplicativos para dispositivos móveis. Objetivos específicos.  Desenvolver aplicações para dispositivos móveis de plataformas não proprietárias.',
    },
    {
      codigo: 'ITE004',
      materia: 'Tópicos Especiais em Sistemas para Internet II',
      dia: 'Sexta-Feira',
      horario: '19:00 - 22:30',
      ementa: 'Recursos e aplicações da tecnologia escolhida.',
      objetivos:
        'Apresentar tecnologias ainda não estudadas ou aprofundar algum tema já visto definido pela coordenadoria do curso em cada unidade. Objetivos específicos. Estudar e aplicar tecnologias de uso corrente na região na qual o curso de insere ou de interesse para o desenvolvimento profissional dos estudantes ou desenvolver temas que aprofundem algum conhecimento já estudado.',
    },
    {
      codigo: 'TES006',
      materia: 'Estágio Supervisionado em Sistemas para Internet',
      dia: '',
      horario: '',
      ementa:
        'Atividades de caráter prático, realizadas em organizações de qualquer natureza (indústria).',
      objetivos:
        'Possibilitar aos estudantes uma experiência prática em um ambiente profissional, e a oportunidade de desenvolvimento profissional em  Sistemas para Internet. Objetivos específicos. Desenvolver competências relacionadas com a experiência de trabalho prático em ambiente profissional real.',
    },
    {
      codigo: 'TTG401',
      materia: 'Projeto de Trabalho de Graduação em Sistemas para Internet I ',
      dia: 'Sábado',
      horario: '11:30 - 13:10',
      ementa:
        'Conceito de portfólio no âmbito da educação superior. Planejamento e organização de portfólios.',
      objetivos:
        'Apoiar o estudante na organização de seu portfólio de projetos desenvolvidos ao longo do curso. Objetivos específicos. Os estudantes devem ser capazes de organizar o portfólio individual dos projetos desenvolvidos ao longo do curso. Devem ser capazes de redigir resumos, artigos e relatórios técnicos dos trabalhos em linguagem apropriada e na forma culta. Deve demonstrar independência de pensamento e autonomia para pesquisa.',
    },
  ];

  constructor() {}

  getLista() {
    return this.lista;
  }
  setLista(
    codigo: string,
    materia: string,
    dia: string,
    horario: string,
    ementa: string,
    objetivos: string
  ) {
    this.lista.push({ codigo, materia, dia, horario, ementa, objetivos });
  }
  deleteItem(index) {
    this.lista.splice(index, 1);
  }
}
