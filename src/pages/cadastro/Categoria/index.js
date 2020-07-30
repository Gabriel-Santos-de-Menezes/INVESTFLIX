import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefult from "../../../components/PageDefult";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, //exemplo nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    //pega o evento target para economizar linha
    const { getAttribute, value } = infosDoEvento.target;
    setValue(getAttribute("name"), value);
  }

  return (
    <PageDefult>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        style={{ background: values.cor }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, //pegando todas as informações que já tinhha
            values, //pegando todas as informações que já tinhha
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

        <div>
          <label>
            Descrição
            <textarea
              type="text"
              name="cor"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>


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

        <button type="">Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
              {/* Renderiza na tela o atributo nome do obj categoria */}
            </li>
          );
        })}
      </ul>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefult>
  );
}

export default CadastroCategoria;
