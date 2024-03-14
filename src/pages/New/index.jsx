import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { LinkBack } from '../../components/LinkBack';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { MovieGener } from '../../components/MovieGener';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <LinkBack href="/" title="Voltar"/>
            <h1>Novo Filme</h1>
          </header>
          <div className='wrapper'>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className='tags'>
            <MovieGener value="Ficção Científica" />
            <MovieGener isNew placeholder="Novo marcador" />
          </div>
          <div className='buttons'>
          <Button className='button-delete' title="Excluir filme"/>
          <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}