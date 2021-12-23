import styles from "../../../styles/Jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Porta from "../../../components/Porta";

export default function Home() {
    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState([]);

    const router = useRouter();

    useEffect(() => {
        const { quantidadePortas, portaComPresente } = router.query;

        const quantidadePortasEhValido =
            +quantidadePortas >= 3 && +quantidadePortas <= 100;
        const portaComPresenteEhValido =
            +portaComPresente >= 1 && +portaComPresente <= +quantidadePortas;

        setValido(quantidadePortasEhValido && portaComPresenteEhValido);
    }, [router.query]);

    useEffect(() => {
        const { quantidadePortas, portaComPresente } = router.query;
        setPortas(criarPortas(+quantidadePortas, +portaComPresente));
    }, [router?.query]);

    function renderizarPortas() {
        return portas.map((porta) => (
            <Porta
                key={porta.numero}
                porta={porta}
                quandoClicar={(novaPorta) =>
                    setPortas(atualizarPortas(portas, novaPorta))
                }
            />
        ));
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h1>Valores inválidos</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>Reiniciar</button>
                </Link>
            </div>
        </div>
    );
}
