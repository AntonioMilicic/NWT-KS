import React from 'react';
import '../Static/Styles/css/about.min.css';

const about = () => {
  return (
    <div className="about-form">
      <h1 className="about-title">
        More about us and this web page
      </h1>
      <p className="about">
        This website was developed with general intent of improving user experience while buying, selling or trading goods and services.
        All it takes is just one click of a mouse and you can find all the information you need on category of your choice.
        Here you will find that shopping and getting to repair guy can take the same effort and have even more reward with our priviliged system.
      </p>
      <ol type='1'>
        <h2 className="about-link-title">There are 6 major site links.</h2>
        <li>Home, which lead to homepage (this page) where you can find general information and help you need.</li>
        <li>Blog, where you can exchange your experiences, talk about curtain topics and lot more.</li>
        <li>Category, which is main focus, and it will lead you to items you want with search option.</li>
        <li>Log In, allows for a quick logging to your account</li>
        <li>Sign Up, signing up grants you acess to more options, once you have joined us.</li>
        <li>Cart, where you will find items you chose to buy.</li>
      </ol>
      <h1>Example of usage</h1>
      <p>
        Lets start from the beginning.<br/><br/>
        You are curently on the "home" link of this website.<br/> 
        By clicking on the "blog" link, which is contained on the top of the page, you will be redirected to blog page.<br/>
        All the basic information can be found on regular blog cards.
        <br/><img src="/images/Home/about/about-blog.png" alt="about"/><br/>
        Each blog has its own extended version, which you can acess by clicking on the "Expand" button.<br/>
        If you find yourself wanting to move one step back, you can use "Back to blog" button.
        <br/><img src="/images/Home/about/about-blog-expand.png" alt="about"/><br/>
        Diam in arcu cursus euismod. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Vitae purus faucibus ornare suspendisse sed nisi. Scelerisque eu ultrices vitae auctor. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
        <br/><img src="/images/Home/about/about-products.png" alt="about"/><br/>
        Sit amet consectetur adipiscing elit. Malesuada bibendum arcu vitae elementum curabitur. Dictum non consectetur a erat nam at lectus urna duis. Sit amet porttitor eget dolor morbi non arcu. Enim nunc faucibus a pellentesque. Ullamcorper a lacus vestibulum sed. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Sed nisi lacus sed viverra. Lobortis elementum nibh tellus molestie. Fringilla est ullamcorper eget nulla facilisi etiam.
        <br/><img src="/images/Home/about/about-cart.png" alt="about"/><br/>
      </p>
    </div>  
  );
}

export default about;