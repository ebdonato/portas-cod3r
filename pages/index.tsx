import { useState } from "react";
import Porta from "../components/Porta";
import PortaModelo from "../models/PortaModelo";

export default function Home() {
    const [p1, setP1] = useState(new PortaModelo(20));

    return (
        <div style={{ display: "flex" }}>
            <Porta porta={p1} quandoClicar={(novaPorta) => setP1(novaPorta)} />
        </div>
    );
}
