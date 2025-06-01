import React, { useCallback, useEffect, useState } from "react";
import './estado-alterar-styles.css';
import { FiCornerDownLeft, FiFileText } from "react-icons/fi";
import { Link, useParams } from "react-router";
import api from "../../services/api";

export default function AlterarEstado(){

    const {sigla} = useParams();
    const [nome,setNome] = useState('');
    const [load,setLoad] = useState(false);

    const loadEstado = useCallback(async () => {
        try{
            const response = await api.get('Estado/'+sigla);
            setNome(response.data.nome);
        }catch(error){
            alert("Erro ao carregar estado!");
        }
    },[sigla,setNome])

    useEffect(() => {
        if(!load){
            loadEstado();
            setLoad(true);
        }
    },[load,loadEstado,setLoad])

    async function putEstado() {
        try{
            const data = {
                sigla,
                nome
            }

            await api.put('Estado',data)
                .then(alert("Estado alterado"));

        }catch(error){
            alert("Erro ao alterar estado!");
        }
    }

    return(
        <div className="novo-estado-container">
            <div className="content">
                <section className="form">
                    <FiFileText size={105} color="#17202a" /> 
                    <h1>Alterar Estado</h1>
                    <Link className="back-link" to="/estados">
                        <FiCornerDownLeft size={105} color="#17202a" />
                    </Link>
                </section>
                <form onSubmit={putEstado}>
                    <input placeholder="Sigla" value={sigla}  readOnly/>
                    <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <button className="button" type="submit" >Salvar</button>
                </form>
            </div>
        </div>
    )
}