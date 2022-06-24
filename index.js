function alunos(nome, qtdFaltas, notas) {
  return {
      nome: nome,
      qtFaltas: qtdFaltas,
      notas: notas,
      calcularMedia() {
          let media = 0;
          for (let i = 0; i < this.notas.length; i++) {
              media += this.notas[i];
          }
          return media / this.notas.length;
      },
      faltas() {
          this.qtdFaltas += 1;
      },
  };
}

let aluno0 = new alunos('jose', 2, [8, 5, 9, 6]);
let aluno1 = new alunos('maria', 1, [10, 8, 7, 3]);
let aluno2 = new alunos('rafael', 1, [0, 5, 2, 10]);
let aluno3 = new alunos('amanda', 0, [9, 6, 10, 9]);
let aluno4 = new alunos('bruna', 6, [7, 7, 9, 8]);


let curso = {
  nomeCurso: 'ciencias da computação',
  notaAprovacao: 7,
  maxFaltas: 5,
  listaEstudantes: [aluno0, aluno1, aluno2, aluno3, aluno4],

  alunoNovo(aluno) {
      this.listaEstudantes.push(aluno);
  },
  aprovacao(nAluno) {
      if (nAluno > this.listaEstudantes.length - 1) return 'Numero invalido';
      let aluno = this.listaEstudantes[nAluno];
      return aluno.qtFaltas < this.maxFaltas && aluno.calcularMedia() >= this.notaAprovacao
          ? true
          : aluno.calcularMedia() >= this.notaAprovacao * 1.1
          ? true
          : false;
  },
  listaAprovacao() {
      let aprovacao = [];
      for (let i = 0; i < this.listaEstudantes.length; i++) {
          aprovacao.push(this.aprovacao(i));
      }
      return aprovacao;
  },
};


let aluno5 = new alunos('marcela', 0, [8, 5, 0, 9]);
curso.alunoNovo(aluno5);

console.log(curso.listaAprovacao());
console.log(listaEstudantes)