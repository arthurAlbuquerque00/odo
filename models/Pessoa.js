class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

calculateIdade() {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        const diferencaMes = hoje.getMonth() - this.dataNascimento.getMonth();
        const aniversarioNaoChegou = diferencaMes < 0 || 
            (diferencaMes === 0 && hoje.getDate() < this.dataNascimento.getDate());        if (aniversarioNaoChegou) {
            idade--;
        }
        return idade;
    }

toJSON() {
        return {
            nome: this.nome,
            dataNascimento: this.dataNascimento.toISOString().split('T')[0],  
            idade: this.calculateIdade()
        };
    }
}

module.exports = Pessoa;