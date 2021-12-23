import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
    const [quantidadePortas, setQuantidadePortas] = useState(3);
    const [portaComPresente, setPortaComPresente] = useState(2);

    return (
        <div className={styles.formulario}>
            <div>
                <Cartao corFundo="#c0392c">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica
                        titulo="Quantidade de Portas"
                        valor={quantidadePortas}
                        quandoMudar={(novoValor) =>
                            setQuantidadePortas(novoValor)
                        }
                    />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica
                        titulo="Porta com Presente"
                        valor={portaComPresente}
                        quandoMudar={(novoValor) =>
                            setPortaComPresente(novoValor)
                        }
                    />
                </Cartao>
                <Cartao corFundo="#28a085">
                    <Link
                        href={`/${quantidadePortas}/${portaComPresente}/jogo`}
                        passHref
                    >
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    );
}
