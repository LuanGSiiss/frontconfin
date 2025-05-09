import React, { useEffect, useState } from "react";
import './estado-lista-styles.css';
import api from "../../services/api";

export default function Estados() {
    
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        api.get('Estado').then(
            response => {
                setEstados(response.data);
            }
        )
    })
    
    return(
        <div>
            <h1>Lista de Estados</h1>
            {
                estados.map(estado => (
                    <div>
                        {estado.sigla} . {estado.nome}<br/>
                    </div>
                ))
            }
        </div>
    );
}