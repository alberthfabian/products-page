import React from 'react';
import '../assets/styles/components/Modal.scss';

class Modal extends React.Component {
  render() {
    return (
      <div className='modalPrincipal'>
        <input type='checkbox' id='btn-modal' />
        <label for='btn-modal' className='lbl-modal'>Abril Modal</label>
        <div className='modal'>
          <div className='contenedor'>
            <header>Welcome</header>
            <label for="btn-modal">X</label>
            <div className='contenido'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas cum vitae. Temporibus corrupti ratione, repudiandae consectetur dolore consequuntur. Libero quasi autem tenetur ex voluptate nihil consectetur vero sint assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
