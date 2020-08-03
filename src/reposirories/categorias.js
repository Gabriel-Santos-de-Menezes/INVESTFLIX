import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados:(');
  });
}

export async function create(categoria) {
  try {
    const respostaDoServior = await URL_CATEGORIES.post(
      URL_CATEGORIES,
      categoria
    );
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}

export default {
  getAllWithVideos,
  getAll,
};
