import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModelo from "../models/PortaModelo";

export default function Home() {
    const [portas, setPortas] = useState(criarPortas(3, 2));

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

    return <div style={{ display: "flex" }}>{renderizarPortas()}</div>;
}
