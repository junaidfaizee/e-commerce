import hero_img from "../assets/hero_img.png";
function Home() {
  return (
    <section className="container mt-2"><div
  className="row g-0 align-items-stretch"
  style={{ border: "1px solid #a0a1a2" }}
>
        <div className="col-md-6 d-flex align-items-center justify-content-center px-5">
            <div>
          <div className="d-flex align-items-center gap-2 mb-0">
            <span
              className="border-top border-dark"
              style={{width: "50px" , border: "1.5px solid #000"  }}>
            </span>
            <p className="mb-0 small text-uppercase" style={{
                  fontSize: "16px",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  color: "#414141",
                  lineHeight: "24px",
                }}>OUR BESTSELLER</p>
           
          </div>
          <h1 className="fw-normal mb-0 "
              style={{
                fontSize: "48px",
                fontFamily: "prata, serif",
                color: "#414141",
                fontWeight:400,
                lineHeight: "48 px",
              }}>Latest Arrivals</h1>

          <div className="d-flex align-items-center gap-2">
            <p className="mb-0 small text-uppercase"
            style={{fontSize: "16px",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  color: "#414141",
                  lineHeight: "24px",}}> SHOP NOW </p>
            <span
              className="border-top border-dark"
              style={{ width: "35px" }}
            ></span>
          </div>
        </div>
    </div>
        <div className="col-md-6 p-0">
          <img src={hero_img} alt="Fashion collection" className="img-fluid" style={{
      objectFit: "cover",
      display: "block",
    }}/>
        </div>
      </div>
    </section>
  );
}

export default Home;