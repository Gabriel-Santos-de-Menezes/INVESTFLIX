/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageDefult from '../../../components/PageDefult';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForme';
import './Categoria.css';
import { create } from '../../../reposirories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gaflix.herokuapp.com/categorias';
    // E a ju ama variáveis

    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefult link="/cadastro/video">
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>
      <div>
        <form
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();

            let errors = [];
            const chaves = Object.keys(values);

            errors = chaves.filter((chave) => !values[chave]);

            if (errors.length > 0) {
              errors.forEach((error) => {
                toast.error(`Campo ${error} precisa ser preenchido`);
              });

              return;
            }

            create({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
            })
              .then(() => {
                setCategorias([
                  ...categorias,
                  {
                    id: categorias.length + 1,
                    titulo: values.titulo,
                    descricao: values.descricao,
                    cor: values.cor,
                  },
                ]);
                toast.success('Categoria cadastrada com sucesso');
                clearForm(valoresIniciais);
              })
              .catch((erro) => {
                toast.error(
                  'Desculpe mas não foi possivél cadastrar a categoria',
                );
                toast.error(erro.message);
              });

            clearForm();
          }}
        >
          <FormField
            label="Título da categoria"
            type="text"
            name="titulo"
            value={values.titulo}
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
      <h1>Categorias Cadastradas</h1>
      <ul className="categorias">
        {categorias.map((categoria) => (
          <li style={{ color: `${categoria.cor}` }} key={`${categoria.titulo}`}>
            {categoria.titulo}
            {/* Renderiza na tela o atributo nome do obj categoria */}
          </li>
        ))}
      </ul>
    </PageDefult>
  );
}

export default CadastroCategoria;
