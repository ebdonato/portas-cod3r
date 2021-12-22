import PortaModelo from "../models/PortaModelo";

export function criarPortas(
    quantidade: number,
    portaPresente: number
): PortaModelo[] {
    return Array.from({ length: quantidade }, (_, i) => {
        const portaNumero = i + 1;
        const temPresente = portaNumero === portaPresente;
        return new PortaModelo(portaNumero, temPresente);
    });
}

export function atualizarPortas(
    portas: PortaModelo[],
    portaModificada: PortaModelo
): PortaModelo[] {
    return portas.map((portaAtual) =>
        portaAtual.numero === portaModificada.numero
            ? portaModificada
            : portaModificada.aberta
            ? portaAtual
            : portaAtual.desselecionar()
    );
}
