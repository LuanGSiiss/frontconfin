import React from "react";
import './estado-excluir-styles.css';
import { FiCornerDownLeft, FiFileMinus } from "react-icons/fi";
import { Link, useParams } from "react-router";
import api from "../../services/api";

export default function ExcluirEstado(){

    const {sigla} = useParams();

    async function deleteEstado() {
        try{
            //await api.delete(`Estado/${sigla}`)
            await api.delete('Estado/'+sigla)
                     .then(alert("Estado excluído!"));
        }catch(error){
            alert("Erro ao excluir estado!");
        }
    }

    return(
        <div className="novo-estado-container">
            <div className="content">
                <section className="form">
                    <FiFileMinus size={105} color="#17202a" /> 
                    <h1>Excluir Estado</h1>
                    <Link className="back-link" to="/estados">
                        <FiCornerDownLeft size={105} color="#17202a" />
                    </Link>
                </section>
                <div className="formExibir">
                    <h1>Sigla: {sigla}</h1>
                    <button className="button" onClick={deleteEstado}>Excluir</button>
                </div>
            </div>
        </div>
    )
}