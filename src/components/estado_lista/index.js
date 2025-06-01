import React, { useEffect, useState } from "react";
import './estado-lista-styles.css';
import api from "../../services/api";
import logoEstado from '../../assets/estado.png';
import {FiEdit, FiTrash } from "react-icons/fi"
import { Link } from "react-router";

export default function Estados() {
    
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        if(estados.length <= 0) {
            api.get('Estado').then(
                response => {
                    setEstados(response.data);
                }
            )
        }
    })
    
    return(
        <div className="estado-container">
            <header>
                <img src={logoEstado} alt="Logo Estado" />
            </header>
            <h1>Lista de Estados</h1>
            <Link className="button" to="novo">Novo Estado</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Nome</th>
                        <th className="thOpcoes">Opções</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        estados.map(estado => (
                            <tr>
                                <td>{estado.sigla}</td>
                                <td>{estado.nome}</td>
                                <td className="tdOpcoes">
                                    <Link to={`alterar/${estado.sigla}`}>
                                        <button type="button">
                                            <FiEdit size="25" color="#17202a" />
                                        </button>
                                    </Link>
                                    <Link to={`excluir/${estado.sigla}`}>
                                        <button type="button">
                                            <FiTrash size="25" color="#FF5555" />
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            
            </table>
            
        </div>
    );
}