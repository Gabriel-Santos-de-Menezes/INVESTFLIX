import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefult';
import {Input, Select, Textarea} from '../../../components/Form'
import Button from '../../../components/Button'

import './Form.css'

function useFormik({
  initialValues
}){
  console.log(initialValues);

  function handleChange(){

  }

  return{
    values: initialValues,
    handleChange
  }
}

function CadastroVideo() {
  const formik = useFormik({
    initialValues:{
      titulo: 'Eu sou Gabriel',
      link: 'google.com',
      linkImg: 'google.com',
      descricao: 'Ola',
      codigo: 2501
  
    }
  })

  return (
    <PageDefault>
      <h1>Novo Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

      <form>
        <div className="formField">  
          <Input type="text" placeholder="Titulo" name="titulo" value={formik.values.titulo} onChange={formik.handleChange} />
        </div>

        <div className="formField">  
          <Input type="text" placeholder="Link do vídeo" name="link" value={formik.values.link} onChange={formik.handleChange}/>
        </div>

        <div className="formField">  
          <Input type="text" name="linkImg" placeholder="Link da imagem do vídeo" value={formik.values.linkImg} onChange={formik.handleChange}/>
        </div>

        <div className="formField">  
          <Select>
            <option>Escolha uma categoria</option>
            <option value="...">...</option>
          </Select>
        </div>

        <div className="formField">  
          <Textarea rows="" cols="" value={formik.values.descricao} onChange={formik.handleChange} name="descricao" placeholder="Descrição"></Textarea>
        </div>

        <div className="formField">  
          <Input type="text" name="codigo" placeholder="Código de segurança" value={formik.values.codigo} onChange={formik.handleChange} />
        </div>

        <div className="Buttons">
          <Button className="ButtonSalvar">
            Salvar
          </Button>

          <Button className="ButtonLimpar">
            Limpar
          </Button>
        </div>
        


      </form>
    </PageDefault>
  )
}

export default CadastroVideo; 