import React from 'react';
import '../assets/styles/components/Card.scss';

class Card extends React.Component {

  render() {

  return (

    <div className='card'>

      <section className='they'>
        <article className='they__one'>
          <figure className='they__persona'>
            <img src='../../public/images/avatar-anisha.png' alt='Imagen de Anisha' />
          </figure>
          <h3>Anisha Li</h3> 
          <p> “Manage has supercharged our team’s workflow. The ability to maintain 
            visibility on larger milestones at all times keeps everyone motivated.”
          </p>
        </article>

        <article className='they__two'>
          <figure className='they__persona'>
            <img src='../../public/images/avatar-ali.png' alt='Imagen de Anisha' />
          </figure>
          <h3>Ali Bravo</h3> 
          <p> “We have been able to cancel so many other subscriptions since using 
          Manage. There is no more cross-channel confusion and everyone is much 
          more focused.”
          </p>
        </article>
          
        <article className='they__three'>
          <figure className='they__persona'>
            <img src='../../public/images/avatar-richard.png' alt='Imagen de Anisha' />
          </figure>
          <h3>Richard Watts</h3> 
          <p>
          “Manage allows us to provide structure and process. It keeps us organized 
          and focused. I can’t stop recommending them to everyone I talk to!”
          </p>
        </article>

        <article className='they__four'>
          <figure className='they__persona'>
            <img src='../../public/images/avatar-shanai.png' alt='Imagen de Anisha' />
          </figure>
          <h3>Richard Watts</h3> 
          <p>
          “Manage allows us to provide structure and process. It keeps us organized 
          and focused. I can’t stop recommending them to everyone I talk to!”
          </p>
        </article>

      </section>

    </div>

    );
  }
}

export default Card;