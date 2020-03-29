import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import api from '../../services/api';


import './styles.css';

import logoImg from "../../assets/logo.svg";
const ongId = localStorage.getItem('ongId');

export default function NewIncident(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const history = useHistory();

     async function handleNewIncident(e){
        
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        }
        catch(err){
            alert('deu ruim');
        }
     }

    return(
        <div className="new-incident-container">
            <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastro</h1>
                <p>
                    Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
                    os casos da sua ONG
                </p>

                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para Home
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do Caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descricao" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em Reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}