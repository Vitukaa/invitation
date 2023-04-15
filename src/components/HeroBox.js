import React, { useState } from 'react';
import Container from './Container';
import '../styles/HeroBox.scss';

export default function HeroBox() {
  const [drake, setDrake] = useState(false);

  const shoesImages = [
    {
      id: 1,
      flipped: false,
      shoes:
        'https://www.bnnbloomberg.ca/polopoly_fs/1.1631718!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/crocs.jpg',
      alt: 'turtuolio batai',
      drake: 'https://i.ytimg.com/vi/wAbnNZDhYrA/maxresdefault.jpg',
      drakeAlt: 'big nono',
    },
    {
      id: 2,
      flipped: false,
      shoes:
        'https://i.pinimg.com/originals/4a/63/6c/4a636c3200bbba9fb2944bb33e3a2f75.jpg',
      alt: '"wanna be barbie" batai',
      drake: 'https://i.ytimg.com/vi/wAbnNZDhYrA/maxresdefault.jpg',
      drakeAlt: 'big nono',
    },
    {
      id: 3,
      flipped: false,
      shoes:
        'https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-0424-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
      alt: 'nemokamas batu perdazymas',
      drake: 'https://i.ytimg.com/vi/wAbnNZDhYrA/maxresdefault.jpg',
      drakeAlt: 'big nono',
    },
    {
      id: 4,
      flipped: false,
      shoes:
        'https://images.squarespace-cdn.com/content/v1/55bc0f3be4b07e0f753f5bd1/1540133117594-ULZEAOV2AMDR15BHOV6I/running+shoes+RIP',
      alt: 'patys nuostabiausi ir tinkamiausi batai',
      drake:
        'https://i.cbc.ca/1.3279853.1532811524!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/drake.jpg',
      drakeAlt: 'big yesyes',
    },
  ];

  const [list, setList] = useState(shoesImages);

  const flippedHandler = (id) => {
    setList((prevState) => {
      const updatedList = prevState.map((item) => {
        if (item.id === id) {
          const itemToUpdate = { ...item };
          itemToUpdate.flipped = !item.flipped;
          // const itemToUpdate = {...item, flipped: !item.flipped}
          return itemToUpdate;
        }
        return item;
      });
      return updatedList;
    });
  };

  return (
    <Container>
      <div className='herobox-wrapper'>
        <div className='main-title-wrapper'>
          <h1 className='main-title'>Šventę švęst</h1>
        </div>
        <div className='description-wrapper'>
          <h2 className='description-title'>Kviečiu pasibūti gryname ore!</h2>
          <p className='description'>
            Kad jau prasidėjo gražus oras, tai
            nusprendžiau, kad būtų smagu pasikrauti vitamino D, praventiliuot
            plaučius ir susivelt plaukus.
          </p>
          <p className='description'>
            Balandžio 22 d. (šeštadienis) 15 val. kviečiu į dažasvydį Gargžduose
            (Vyturių g. 29).
          </p>
          <p className='description'>
            Turėkit patogius batus ir aprangą. Apsauginiai kostiumai bus
            suteikti.
          </p>
        </div>
        <div className='all-shoes-wrapper'>
          <h2 className='shoes-title'>Pasitikrink, kurie batai tinkami:</h2>
          {list.map((image) => (
            <div
              className={`shoes-wrapper ${image.flipped ? '' : 'mystery'}`}
              key={image.id}
              onClick={() => flippedHandler(image.id)}
            >
              {image.flipped ? (
                <img
                  className={`shoes-image drake`}
                  src={image.drake}
                  alt={image.drakeAlt}
                ></img>
              ) : (
                <img
                  className={`shoes-image`}
                  src={image.shoes}
                  alt={image.alt}
                ></img>
              )}
            </div>
          ))}
        </div>
        <div className='description-wrapper'>
          <p className='description'>
            Po šaudynių keliausime į Pajudrio vilą, tad pasiimkite giliai
            spintoje įkištus ir pamirštus bikini. Taip pat, apsirenkite šilčiau, sėdėsime lauke. 🍖
          </p>
        </div>
        <div className='water-fun-wrapper'>
          <img
            className='bikini'
            src='https://img.buzzfeed.com/buzzfeed-static/static/2016-06/9/10/asset/buzzfeed-prod-web03/sub-buzz-19949-1465482448-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto'
          ></img>
          <img className='hot-tub' src='https://cdn-hkkjn.nitrocdn.com/bxkZGXQbtlrwRriinyThgKhHdUhEyEyt/assets/images/optimized/rev-595f272/images/storeimages/1347203838nice%20hot%20tub%20image.jpg'></img>
        </div>
      </div>
    </Container>
  );
}
