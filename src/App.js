import React from 'react';

function Food ({name, picture}) {
  return( 
    <div>
      <h1>i LIKE {name}!!!!!!!!!!! </h1>
      <img src={picture}/>
  </div>
  );
}




const foodIlike = [
  {
    name: 'kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2960002%2Fimages%2Fo-DEFAULT-facebook.jpg&f=1&nofb=1'
  },
  {
    name: 'Samgyopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2FFbMetaImage%2F201809%2F25a532e9-a644-4a99-a5ed-fc588e5e8e2d.jpg&f=1&nofb=1'
  },
  {
    name: 'bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fct4iN3%2FbtquYY5YOhr%2Fv5uxQBU8yj2XdzRDkQSfEK%2Fimg.jpg&f=1&nofb=1'
  },
  {
    name: 'doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fthumb%2FR1280x0.fjpg%2F%3Ffname%3Dhttp%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F3acD%2Fimage%2FSKsjpw3oIvlW058vB5DOfaeIUOQ.jpg&f=1&nofb=1'
  },
  {
    name: 'kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe.ezmember.co.kr%2Fcache%2Frecipe%2F2017%2F04%2F19%2F48c8f73132c461844807c276e6aebde51.jpg&f=1&nofb=1'
  }
];

const renderfood =dish => <Food key={dish.name} name={dish.name} picture={dish.image} />


function App() {
  console.log(foodIlike.map(renderfood));
  return (
    <div>
     {foodIlike.map (renderfood)}
     </div>
  );
}

export default App;
