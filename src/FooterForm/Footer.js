import React from 'react';
import '../Static/Styles/css/footer.min.css';

const footerComponent = () => {
  return (
    <footer className="footer-container">
      <div className="copyright-container">
        <p>Copyright: Antonio Miličić @FESB 2018-2019</p>
      </div>
      <button type="button" onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>Get me to top!</button>
    </footer>
  )
}

export default footerComponent;