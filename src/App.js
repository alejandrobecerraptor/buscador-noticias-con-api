import {Fragment,useState,useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias
  const [categoria,guardarCategoria] = useState('');
  const [noticias,guardarNoticias] = useState([]);

  //si detecta un cambio en la categoria se vuelve a ejecutar este conponente
  useEffect(() => {

    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=a0feade65c894aa097dca4de744db88e`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria])
  return (
    <Fragment>
      <Header
        titulo= "Buscador de Noticias React Con API"
      />
      <div className="container white">
        <Formulario
          guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias
          noticias = {noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
