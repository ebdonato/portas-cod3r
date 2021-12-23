import styles from "../styles/EntradaNumerica.module.css";

interface IEntradaNumericaProps {
    titulo: string;
    valor: number;
    quandoMudar: (novoValor: number) => void;
}

export default function EntradaNumerica(props: IEntradaNumericaProps) {
    const decrementar = () => props.quandoMudar(props.valor - 1);
    const incrementar = () => props.quandoMudar(props.valor + 1);

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.titulo}>{props.titulo}</span>
            <span className={styles.valor}>{props.valor}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={decrementar}>
                    -
                </button>
                <button className={styles.botao} onClick={incrementar}>
                    +
                </button>
            </div>
        </div>
    );
}
