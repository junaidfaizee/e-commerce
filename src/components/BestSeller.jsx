import Title2 from "./Title2";
import ProductItem from "./ProductItem";

import product1 from "../assets/product-img/p_img1.png";
import product2 from "../assets/product-img/p_img2.png";
import product3 from "../assets/product-img/p_img3.png";   
import product4 from "../assets/product-img/p_img4.png";
import product5 from "../assets/product-img/p_img5.png";

function BestSeller() {
    const products = [
        {id:1, name:"women Round Neck Cotton Top", price:100, image:product1},
        {id:2, name:"Men Round Neck Pure Cotton T-shirt", price:200, image:product2},
        {id:3, name:"Girls Round Neck Cotton Top", price:220, image:product3}, 
        {id:4, name:"Men Round Neck Pure Cotton T-shirt", price:110, image:product4},
        {id:5, name:"Women Round Neck Cotton Top", price:130, image:product5}, 
    ];

    return (
        <section className="container my-5">
            <div className="d-flex flex-column align-items-center gap-3 mb-4">
                <Title2 className="mb-3" />
                <p
                    className=" text-xs"
                    style={{
                        fontSize: "16px",
                        fontFamily: "Outfit, sans-serif",
                        fontWeight: 400,
                        color: "rgb(75,85,99)",
                        lineHeight: "24px",
                    }}>
                    Our best-selling products that our customers can not get enough of.
          Shop the most popular items from our store.
                </p>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
                {products.map((item) => (
                    <div className="col text-center" key={item.id}> 
                        <ProductItem 
                        image={item.image}
                        name={item.name}
                        price={item.price} />
                    </div>
                ))}

            </div>
        </section>
    );

}

export default BestSeller;