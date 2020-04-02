import React, { useState } from 'react';
import api from "../../services/api";
import { useHistory } from 'react-router-dom';
import './style.css';

export default function NovoUsuario() {

    const history = useHistory();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function salvar(e) {
        e.preventDefault();
        const usuario = { nome, email, password };

        try {
            await api.post("/usuario", usuario);
            alert("Usuario salvo com sucesso!");
            history.push("/");
        } catch (error) {
            alert(`Nao foi possivel salvar, erro: ${error.response.data.message}`);
        }
    }

    return (
        <div>
            <form onSubmit={salvar}>
                <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
