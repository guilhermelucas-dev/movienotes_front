import { Container, Content, NewMovie } from './styles';
import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header';
import { MovieNote } from '../../components/MovieNote';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
      <Content>
        <header>
          <h1>Meus Filmes</h1>
          <NewMovie to="/new">
            <div className='add-movie'>
              <FiPlus />Adicionar filme
            </div>
          </NewMovie>
        </header>
        <MovieNote data={{
          title: 'Interestellar',
          rating: 4,
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name:'Ficão Cientifica'},
            {id: '2', name:'Drama'},
            {id: '3', name:'Família'},
          ]
          }} />

        <MovieNote data={{
          title: 'Interestellar',
          rating: 4,
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name:'Ficão Cientifica'},
            {id: '2', name:'Drama'},
            {id: '3', name:'Família'},
          ]
          }} />

        <MovieNote data={{
          title: 'Interestellar',
          rating: 4,
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name:'Ficão Cientifica'},
            {id: '2', name:'Drama'},
            {id: '3', name:'Família'},
          ]
          }} />
      </Content>
      </main>
    </Container>
  );
}