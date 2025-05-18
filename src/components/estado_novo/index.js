import React, { useState } from "react";
import './estado-novo-styles.css';
import { FiCornerDownLeft, FiFilePlus } from "react-icons/fi";
import { Link } from "react-router";
import api from "../../services/api";

export default function NovoEstado() {

    const [sigla, setSigla] = useState('');
    const [nome,setNome] = useState('');

    async function postEstado(event) {
        try {
            const data = {
                sigla,
                nome
            }
            await api
                .post('Estado', data)
                .then(alert('Estado cadastrado'));
        } catch(error) {
            alert('Erro ao salvar estado ' + error);
        }
    }

    return (
        <div className="novo-estado-container">
            <div className="content">
                <section className="form">
                    <FiFilePlus size={105} color="#17202a" />
                    <h1>Novo Estado</h1>
                    <Link className="back-list" to="/estados">
                        <FiCornerDownLeft size={105} color="#17202a" />
                    </Link>
                </section>
                <form onSubmit={postEstado}>
                    <input placeholder="Sigla" maxLength={2} onChange={e => setSigla(e.target.value)} />
                    <input placeholder="Nome" onChange={e => setNome(e.target.value)} />
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    )
}

