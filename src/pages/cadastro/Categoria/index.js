/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefult from '../../../components/PageDefult';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForme';

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
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefult>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

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

        {/*

         */}

        <Button type="submit">Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            {/* Renderiza na tela o atributo nome do obj categoria */}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefult>
  );
}

export default CadastroCategoria;
