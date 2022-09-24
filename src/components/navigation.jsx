import img from '../icons/icon.jpg'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <img src={img} alt="Icon" width={50} height={50} />
          <a className='navbar-brand page-scroll' href='#page-top'>
            Ibraim
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Qualidades
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
               Sobre
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Produtos
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galeria
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Sensações
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Equipe
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
