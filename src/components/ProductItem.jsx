function ProductItem({ image, name, price }) {
  return (
    <>
      <a href="#" className="text-decoration-none text-secondary">
        <header
          className="border rounded-3 p-4 shadow-sm overflow-hidden"
          style={{ height: "350px" }}>
          <img
            style={{
              objectFit: "cover",
            }}
            src={image}
            className="w-full mb-2 card-img-top product-image  rounded-3"
            alt={name}/>

          <div className="card-body">
            <h6
              className=" pt-3 pb-1 mb-0  "
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 400,
                color: "rgb(55,65,81)",
              }}>
              {name}
            </h6>

            <p
              className="  mb-0 "
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                color: "rgb(55,65,81)",
              }}>      
              ${price}
            </p>
          </div>
        </header>
      </a>
    </>
  );
}

export default ProductItem;