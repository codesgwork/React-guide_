import React, { useState } from 'react';

import classes from './vifrm.module.css';
import sprite from '../assets/icons/sprite.svg';
import { media } from '../data/media';
import { vifrmActions } from '../store/Vifrm';

const Vifrm = () => {
  const [videoUrl, setVideoUrl] = useState(media[0].url);

  function handleLinkClick(newUrl) {
    setVideoUrl(newUrl);
  }

  return (
    <>
      <div className={classes.vtitle}>
        <p>Current Section: Financial Information co.</p>
      </div>

      <section className={classes.vlearn}>
        <iframe
          className={classes.vifrm}
          // src={videoUrl}
          src={videoUrl}
          title=' dev audio ops video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>

        <section className={classes.vlinks}>
          {media.map((play) => {
            const { url, listNo, title, duration, id } = play;
            return (
              <a
                className={classes.plink}
                href='#'
                onClick={() => handleLinkClick(url)}
                key={id}
              >
                <div className={classes.linkNo}>
                  <li>{listNo}</li>
                  <li>{title}</li>
                </div>
                <div className={classes.linkIcon}>
                  <svg className={classes.svgicon}>
                    <use xlinkHref={`${sprite}#icon-layers`} />
                  </svg>
                  <li>{duration}</li>
                </div>
              </a>
            );
          })}
        </section>
      </section>
    </>
  );
};
export default Vifrm;
