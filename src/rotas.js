import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Estados from "./components/estado_lista";
import NovoEstado from "./components/estado_novo";
import ExcluirEstado from "./components/estado_exclui";
import AlterarEstado from "./components/estado_altera";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <h1>Confin - Controle Financeiro</h1>
                        <Link className="button" to="estados">Estados</Link>
                    </div>
                }/>
                <Route path="/estados" element={<Estados />}/>
                <Route path="/estados/novo" element={<NovoEstado />}/>
                <Route  path="/estados/excluir/:sigla" element={<ExcluirEstado />} />
                <Route  path="/estados/alterar/:sigla" element={<AlterarEstado />} />
            </Routes>
        </BrowserRouter>
    );
}
