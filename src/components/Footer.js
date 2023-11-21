// Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          <div className="mx-4 col-lg-2 col-sm-6 col-md-3 justify-content-center text-center">
            <h4>Column 1</h4>
            <p>about</p>
          </div>
          <div className="mx-2 col-lg-2 col-sm-6 col-md-3 justify-content-center text-center">
            <h4>Column 2</h4>
            <p>about</p><p>about</p><p>about</p><p>about</p> </div>
          <div className="mx-2 col-lg-2 col-sm-6 col-md-3 justify-content-center text-center">
            <h4>Column 3</h4>
            <p>about</p> <p>about</p><p>about</p><p>about</p> </div>
          <div className="mx-2 col-lg-2 col-sm-6 col-md-3 justify-content-center text-center">
            <h4>Column 4</h4>
            <p>Content for column 4 goes here.</p>
          </div>
          <div className="mx-2 col-lg-2 col-sm-6 col-md-3 justify-content-center text-center">
            <h4>Column 5</h4>
            <p>Content for column 5 goes here.</p>
          </div>
        </div>
        <br /><br />
        <div className="row">
          <div className=" col-lg-4 col-sm-12 col-md-4 justify-content-center text-center">
           
            <p>Content for column 1 goes here.</p>
          </div>
          <div className=" col-lg-4 col-sm-12 col-md-4 justify-content-center text-center">
            <p>Content for column 2 goes here.</p>
          </div>
          <div className=" col-lg-4 col-sm-12 col-md-4 justify-content-center text-center">
            <p>Content for column 3 goes here.</p>
          </div>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
