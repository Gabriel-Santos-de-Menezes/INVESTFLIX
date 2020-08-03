import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import PageDefault from '../../components/PageDefult';
import categoriasRepository from '../../reposirories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault link="/cadastro/video" paddingAll={0}>

      {dadosIniciais.lengh === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Para várias pessoas, começar a investir não é tão fácil, até mesmo para aquelas que entendem o que deve ser feito. Isso acontece porque dificilmente você encontra por aí algum “passo a passo” prático do que deve ser feito. Geralmente o conteúdo de finanças você acaba vendo sem ter, necessariamente, um vídeo específico pra começar. Você vai vendo conforme as dúvidas vão surgindo sobre como juntar dinheiro, como investir no tesouro direto, como começar com pouco dinheiro..."
              />

              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return (<Carousel key={categoria.id} category={categoria} />);
      })}

    </PageDefault>
  );
}

export default Home;
