import exchange_icon from "../assets/exchange_icon.png";
import quality_icon from "../assets/quality_icon.png";
import support_img from "../assets/support_img.png";    


function OurPolicy(){
    return(
      <section className="container py-5 text-center ">
      <div className="row justify-content-around g-5">
        <div className="col-12 col-sm-4">
          <img src={exchange_icon} alt="Easy Returns" className="w-12 m-auto mb-5"/>
          <p className="fw-semibold mb-1" style={{fontSize:"16px", fontFamily:"Outfit, sans-serif", fontWeight:600, color:"rgb(55,65,81)", lineHeight:"24px"
          }}>Easy Returns</p>
          <p class="text-secondary mb-0" style={{fontWeight:400 , fontFamily:"Outfit, sans-serif"}}>We offer hassle free exchange policy</p>
        </div>
        <div className="col-12 col-sm-4">
          <img src={quality_icon} alt="7 Days Returns" className="w-12 m-auto mb-5"/>
          <p className="fw-semibold mb-1" style={{fontSize:"16px", fontFamily:"Outfit, sans-serif", fontWeight:600, color:"rgb(55,65,81)", lineHeight:"24px"
          }}>7 Days Return Policy</p>
          <p className="text-secondary mb-0" style={{fontWeight:400 , fontFamily:"Outfit, sans-serif"}}>We provides 7 days free return</p>
        </div>
        <div className="col-12 col-sm-4">
          <img src={support_img} alt="24/7 Customer Support"  className="w-12 m-auto mb-5"/>
          <p className="fw-semibold mb-1" style={{fontSize:"16px", fontFamily:"Outfit, sans-serif", fontWeight:600, color:"rgb(55,65,81)", lineHeight:"24px"
          }}>Best Customer Support</p>
          <p className="text-secondary mb-0" style={{fontWeight:400 , fontFamily:"Outfit, sans-serif"}}>We provide 24x7 customer support</p>
        </div>
      </div>
    </section>
  );
}

export default OurPolicy;