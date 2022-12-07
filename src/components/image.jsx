export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
      <a className="whatapp-link" href="https://web.whatsapp.com/send?phone=55984426076" target="_blank" rel="noreferrer">
      <i className="fa fa-whatsapp"></i>
      </a>
      
    </div>
  )
}