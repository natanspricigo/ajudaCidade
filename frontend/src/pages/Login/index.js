import React from 'react';
import { Link } from 'react-router-dom';

export default function NovoUsuario() {
    return (
        <div>
            <Link to={"/cadastro"}>
                Clique para cadastrar um novo usuario
            </Link>
        </div>
    );
}
