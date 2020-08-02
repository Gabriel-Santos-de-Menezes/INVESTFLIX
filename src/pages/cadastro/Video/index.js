import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefult';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForme';
import FormField from '../../../components/FormField';
import videosRepository from '../../../reposirories/videos';
import categoriasRepository from '../../../reposirories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categorias: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Novo Vídeo</h1>

      <form onSubmit={(event) =>{
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log('Categoria escolhida', categoriaEscolhida);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            // Colocar um poup para falar que teve sucesso
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categorias"
          value={values.categorias}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>

      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
