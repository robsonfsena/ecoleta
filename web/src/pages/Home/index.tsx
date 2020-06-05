import React from 'react'; // Sempre importar
import {FiLogIn} from 'react-icons/fi'; // Imagem como componente
import {Link} from "react-router-dom"; // Importante para SPA

import './styles.css';

import logo from '../../assets/logo.svg'; // Atribuindo imagem

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" /> 
                </header>
                <main>

                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pesoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>

                </main>
            </div>
        </div>
    );
}

export default Home;