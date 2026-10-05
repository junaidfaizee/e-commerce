import React from "react"
import logo from "../assets/logo.png"
function Footer(){
    return(
            <footer className="container mt-5 pt-5">


      <div className="row g-5 py-4" style={{fontFamily:"Outfit, sans-serif", fontWeight:400, lineHeight:"20px", fontSize:"14px"}}>

        <div className="col-12 col-sm-6 col-lg-6">
          <img
            src={logo}
            alt="Logo"
            className="mb-4"
            style={{ width: "128px" }}
          />

          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            libero excepturi reiciendis alias inventore soluta qui molestiae
            eveniet doloribus molestias laboriosam enim porro non, suscipit
            architecto earum, voluptatem omnis fugiat?
          </p>
        </div>

        <div className="col-6 col-sm-3 col-lg-3">
          <p className="fs-5 fw-medium mb-4">
            COMPANY
          </p>

          <div className="d-flex flex-column gap-2" style={{ color: "rgb(75,85,99)" }}>
            <a href="#home" className="text-secondary text-decoration-none">
              Home
            </a>

            <a href="#about" className="text-secondary text-decoration-none">
              About Us
            </a>

            <a href="#" className="text-secondary text-decoration-none">
              Delivery
            </a>

            <a href="#" className="text-secondary text-decoration-none">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="col-6 col-sm-3 col-lg-3">
          <p className="fs-5 fw-medium mb-4">
            GET IN TOUCH
          </p>

          <div className="d-flex flex-column gap-2" style={{ color: "rgb(75,85,99)" }}>
            <p className="mb-0">
              
              +1-646-260-8685
            </p>

            <p className="mb-0">
              contact@ecommerce.com
            </p>
          </div>
        </div>

      </div>

      
      <div className="border-top">
        <p className="py-4 mb-0 text-center text-dark">
          Copyright 2024-25 @Forever.com -All rights reserved.
        </p>
      </div>

    </footer>
    );
}   

export default Footer;