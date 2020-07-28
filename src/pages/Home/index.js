import React from 'react';
import styled from 'styled-components'
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: #141414;
`;

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Para várias pessoas, começar a investir não é tão fácil, até mesmo para aquelas que entendem o que deve ser feito. Isso acontece porque dificilmente você encontra por aí algum “passo a passo” prático do que deve ser feito. Geralmente o conteúdo de finanças você acaba vendo sem ter, necessariamente, um vídeo específico pra começar. Você vai vendo conforme as dúvidas vão surgindo sobre como juntar dinheiro, como investir no tesouro direto, como começar com pouco dinheiro..."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Caro usel
        category={dadosIniciais.categorias[3]}
      /> 

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

          

           

      <Footer />
    </div>
  );
}

export default Home;