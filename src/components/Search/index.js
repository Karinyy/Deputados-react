import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class Search extends Component
{

    state = {
        filmes: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`deputados/`);

        const { docs } = response.data.dados;

        console.log(response.data.dados);
        this.setState({ filmes: response.data.dados });
    }
  


    render()
    {   
        const {filmes} = this.state;
        
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div>
            {
                filmes.map((filme, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={`${filme.urlFoto}`} id="img" />
                        </div>
                        <div className="col-md-7">
                            <h5>Deputado: { filme.nome }</h5>
                            <p><b>Partido:</b> { filme.siglaUf} - { filme.siglaPartido}</p>
                            <p><b>Email:</b> { filme.email }</p>
                            <a href={`${filme.uri}`}>Ver Gastos</a>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
