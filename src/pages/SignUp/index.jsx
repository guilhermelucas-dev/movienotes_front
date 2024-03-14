import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { LinkBack } from '../../components/LinkBack';

export function SignUp() {
  return (
    <Container>
      
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar" />

        <LinkBack href="/" title="Voltar para login"/>
      </Form>
      <BackgroundImg />
    </Container>
  );
}