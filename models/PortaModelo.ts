export default class PortaModelo {
    #numero: number;
    #temPresente: boolean;
    #selecionada: boolean;
    #aberta: boolean;

    constructor(
        numero: number,
        temPresente = false,
        selecionada = false,
        aberta = false
    ) {
        this.#numero = numero;
        this.#temPresente = temPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }

    get numero() {
        return this.#numero;
    }

    get temPresente() {
        return this.#temPresente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta() {
        return this.#aberta;
    }

    alternarSelecao() {
        const selecionada = !this.selecionada;

        return new PortaModelo(
            this.numero,
            this.temPresente,
            selecionada,
            this.aberta
        );
    }

    abrir() {
        const aberta = true;

        return new PortaModelo(
            this.numero,
            this.temPresente,
            this.selecionada,
            aberta
        );
    }

    desselecionar() {
        const selecionada = false;

        return new PortaModelo(
            this.numero,
            this.temPresente,
            selecionada,
            this.aberta
        );
    }
}