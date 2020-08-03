/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefult from '../../../components/PageDefult';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForme';
import './Categoria.css';
import LogoEditar from '../../../assets/img/editar.png';
import LogoRemover from '../../../assets/img/excluir.png';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log('alo alo');

    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gaflix.herokuapp.com/categorias';
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefult link="/cadastro/video">
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <div>
        <form
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias, // pegando todas as informações que já tinhha
              values, // pegando todas as informações que já tinhha
            ]);

            clearForm();
          }}
        >
          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descricao"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        {categorias.length === 0 && <div>Loading...</div>}
      </div>
      {/* <table>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </table>
 */}
      <h1>Categorias Cadastradas</h1>
      <ul className="categorias">
        {categorias.map((categoria) => (
          <li
            style={{ color: `${categoria.cor}` }}
            key={`${categoria.titulo}`}
          >
            {categoria.titulo}
            {/* Renderiza na tela o atributo nome do obj categoria */}
          </li>
        ))}
      </ul>
    </PageDefult>
  );
}

export default CadastroCategoria;
