function pessoa(nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz ola");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function () {
        const novoSalario = _salario * 1.1;

        console.log(novoSalario)
        _salaio = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    pessoa.call(this, nome);
}

function Aprendiz(nome) {
    Funcionario.call(this, nome, "Aprendiz", 3000);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.00;
        this.setSalario(novoSalario);
    }
}

function Encarregado(nome) {
    Funcionario.call(this, nome, "Encarregado", 12000);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.05;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Paulo", "dev back end", 6000);
const funcionario2 = new Aprendiz("Gustavo");
const funcionario3 = new Encarregado("Fernanda");

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())
