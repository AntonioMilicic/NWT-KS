import React from 'react';
import '../Static/Styles/css/about.min.css';

const about = () => {
  return (
    <div className="about-form">
      <h1 className="about-title">
        More about us and this web page
      </h1>
      <p>
        This website was developed with general intent of improving user experience while buying, selling or trading goods and services.
        All it takes is just one click of a mouse and you can find all the information you need on category of your choice.
        Here you will find that shopping and getting to repair guy can take the same effort and have even more reward with our priviliged system.
        Sign up
      </p>
      <ol type='1'>
        <h2 className="about-link-title">There are 6 major site links.</h2>
        <li>Home, which lead to homepage (this page) where you can find general information and help you need.</li>
        <li>Blog, where you can exchange your experiences, talk about curtain topics and lot more.</li>
        <li>Category, which is main focus, and it will lead you to items you want with search option.</li>
        <li>Sign Up, signing up grants you acess to more options, once you have joined us.</li>
        <li>Cart, where you will find items you chose to buy.</li>
      </ol>
      <h1>Example:</h1>
      <p>
        Lets start from the beggining. Click on the...
      </p>
    </div>  
  );
}

export default about;