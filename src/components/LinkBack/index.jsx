import { RiArrowLeftLine} from 'react-icons/ri';

import { Container } from "./styles";

export function LinkBack({title, href, ...rest}) {
  return (
    <Container href={href}>
      <RiArrowLeftLine />{title}
    </Container>
  );
}