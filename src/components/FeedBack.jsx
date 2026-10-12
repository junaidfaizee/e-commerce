import React from 'react'

function FeedBack() {
  return (
    <section className="container py-5 text-center">
        
            <h3 className=" fw-medium text-dark mb-2" style={{ fontWeight: 500, fontSize: "30px", fontFamily:"Outfit, sans-serif",color:"rgb(31,41,55)",lineHeight:"32px" }}>Subscribe us & get 20% off</h3>
            <p className="text-secondary mt-3" style={{ fontWeight: 400, fontFamily:"Outfit, sans-serif",color:"rgb(156,163,175)",lineHeight:"24px",fontSize:"16px" }}>
                Lorem Ipsum is simple dummy text of the printing and typography Industry
            </p>
            <form className="input-group  mx-auto"
                style={{ maxWidth: "700px",height:"50px" }}
            >
                <input type="email" placeholder="Enter your email" className="form-control rounded-0" required/>
                <button type="submit" className="btn btn-dark rounded-0">Subscribe</button>
            </form>
        
    </section>
  )
}

export default FeedBack;