import PortaModelo from "../models/PortaModelo";
import styles from "../styles/Porta.module.css";
import Presente from "./Presente";

interface IPortaProps {
    porta: PortaModelo;
    quandoClicar: (novaPorta: PortaModelo) => void;
}

export default function Porta(props: IPortaProps) {
    const { porta } = props;
    const selecionada =
        porta.selecionada && !porta.aberta ? styles.selecionada : "";

    const alternarSelecao = () => props.quandoClicar(porta.alternarSelecao());

    const abrir = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        props.quandoClicar(porta.abrir());
    };

    const renderizarPorta = () => (
        <div className={styles.porta}>
            <div className={styles.numero}>{porta.numero}</div>
            <div className={styles.macaneta} onClick={abrir}></div>
        </div>
    );

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? (
                    renderizarPorta()
                ) : porta.temPresente ? (
                    <Presente />
                ) : (
                    false
                )}
            </div>
            <div className={styles.chao} />
        </div>
    );
}
