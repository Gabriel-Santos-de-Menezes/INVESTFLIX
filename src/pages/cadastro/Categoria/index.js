import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefult from '../../../components/PageDefult';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // exemplo nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // pega o evento target para economizar linha
    // const { getAttribute, value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('alo alo');

    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias, // pegando todas as informações que já tinhha
        {
          categorias: [
            {
              id: 1,
              nome: 'Front End',
              descricao: 'Uma categoria show',
              cor: '#cbd1ff',
            },
            {
              id: 2,
              nome: 'Back End',
              descricao: 'Uma categoria legal',
              cor: '#cbd1ff',
            },
          ],
        }, // pegando todas as informações que já tinhha
      ]);
    }, 4 * 1000); */
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

          setValues(valoresIniciais);
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

        <Button type="">Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.name}`}>
            {categoria.nome}
            {/* Renderiza na tela o atributo nome do obj categoria */}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefult>
  );
}

export default CadastroCategoria;
