import { Container, Profile } from './styles';
import { Input } from '../Input';


export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile to="/profile">
        <div>
          <strong>Guilherme Lucas</strong>
          <a>
           Sair
          </a>
        </div>
        <img src="https://github.com/guilhermelucas-dev.png" alt="Foto do usuário"/>
      </Profile>
    </Container>
  );
}