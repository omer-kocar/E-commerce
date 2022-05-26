import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavbarMenu from "./NavbarMenu";
import BackButton from "./BackButton";
import { CardContext } from "../context/Context";
import axios from "axios";

function ProductDetails() {
  const [item, setItem] = useState([]);
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => allProducts.push(...json));

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setItem(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();
  const [product] = item.filter((el) => el.id === parseInt(id));

  console.log(product);

  return (
    <div>
      <NavbarMenu />
      <div className="container-fluid bg-success text-light p-4 d-flex h2">
        Olimpos
      </div>
      <div className=" container">
        <div className=" mt-3 row">
          {product ? (
            <>
              <div className=" col-md-3">
                <img src={product.image} alt="product" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}$</p>
                <CardContext.Consumer>
                  {(item) => (
                    <button
                      onClick={item.setShowCanvas}
                      className="btn btn-outline-success"
                    >
                      Sepete Ekle
                    </button>
                  )}
                </CardContext.Consumer>
                <div>
                  <BackButton />
                </div>
              </div>
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
