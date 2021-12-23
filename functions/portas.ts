import PortaModelo from "../models/PortaModelo";

export function criarPortas(
    quantidade: number,
    portaComPresente: number
): PortaModelo[] {
    return Array.from({ length: quantidade }, (_, i) => {
        const portaNumero = i + 1;
        const temPresente = portaNumero === portaComPresente;
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
