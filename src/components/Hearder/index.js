import React, { Component } from 'react';

import './style.css';

class Hearder extends Component
{
  render()
  {
    return(
        <div className="row">
          <div className="col-md-12" id="Hearder">
            <h2 align="center">Deputados</h2>
          </div>
          <div className="col-md-12" id="Hearder2">
            <h4 align="center"></h4>
          </div>
        </div>
    );
  }
}

export default Hearder;
