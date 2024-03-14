import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';


export function MovieNote({data, ...rest}) {
  const ratingStars =  [];

  for (let i = 1; (i <= data.rating); i++) {
    ratingStars.push( <IoMdStar />);          
  }

  if (data.rating < 5) {
    const ratingStarOutline = 5 - ratingStars.length;
    for (let i = 1; (i <= ratingStarOutline); i++ ) {
      ratingStars.push( <IoMdStarOutline /> ); 
    }
  }

  console.log(ratingStars);

  return (
    <Container>
      <h1>{data.title}</h1>
     
      {
        data.rating &&
        <div className='raitng-star'> 
        {
          ratingStars.map(star => star)
        }
        </div>
      }

      <p>{data.content}</p>
      
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}