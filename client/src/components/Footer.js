import React from 'react';

const Footer = () => {

  return (
    <>
      <footer className="text-center">
        <div className="itemName mt-2">
          <p><span className="text-danger">(916) 666-6666</span></p>
          <h1>Follow Us On</h1>
        </div>
        <div className="row row-cols-auto mb-2 justify-content-center">
          <a href="#" className="link">
            <p className="icon col-12"><span className="fab fa-twitter"></span></p>
          </a>
          <a href="#" className="link">
            <p className="icon col-12"><span className="fab fa-facebook"></span></p>
          </a>
          <a href="#" className="link">
            <p className="icon col-12"><span className="fab fa-instagram "></span></p>
          </a>
        </div>
        <h4>&copy; Giant Pizza &#038; TLM MERN Class 2022 KTT</h4>
      </footer>
    </>
  )
}

export default Footer;