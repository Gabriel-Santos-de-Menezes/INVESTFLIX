import React from 'react'
import { Link } from 'react-router-dom'
import PageDefult from '../../../components/PageDefult'


function CadastroCategoria(){
    return(

        <PageDefult>
            <h1>Cadastro de Categoria</h1>

            <Link to="/cadastro/categoria">
              Cadastrar Categoria
            </Link>
        </PageDefult>
    )
  }

  export default CadastroCategoria;