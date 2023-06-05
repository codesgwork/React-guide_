import React, { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import { media } from '../../data/vifrm';
import './vifrm.css';

export const Vifrm = () => {
  const [videoUrl, setVideoUrl] = useState(media[0].url);

  function handleLinkClick(newUrl) {
    setVideoUrl(newUrl);
  }
  return (
    <div className='current-player'>
      <div className='ifrm'>
        <iframe
          src={videoUrl}
          className='ifrm-play'
          style={{
            border: 0,
            height: '480px',
            width: '853px',
            maxWidth: '100%',
          }}
          title=' dev audio ops video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
      <div className='vlinks-section'>
        {media.map((play) => {
          const filmIc = `${sprite}#icon-film`;
          const { url, listNo, title, duration, id } = play;
          return (
            <section
              key={id}
              onClick={() => handleLinkClick(url)}
              className='vlinks'
            >
              <div className='vtitle'>
                <li className='li1'>{listNo}</li>
                <li className='li2'>{title}</li>
              </div>
              <div className='vicon'>
                <svg className='svg-icon svg-icon-film svg'>
                  <use xlinkHref={filmIc} />
                </svg>
                <li className='li1'>{duration}</li>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
