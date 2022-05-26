import { useState } from "react";
import { Col, Button } from "react-bootstrap";
import style from "./style.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function HomeBody() {
  let allProducts = [];
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      allProducts.push(...json);
      //   console.log(allProducts);
    });

  const [items, setItems] = useState(allProducts);
  const [filtered, setFiltered] = useState(allProducts);

  const allCategories = (e) => {
    const allCategories = items.map((item) => {
      return {
        ...item,
        category: "allProducts",
      };
    });
    setFiltered(allCategories);
  };

  const electronics = (e) => {
    e.preventDefault();
    // console.log(items)
    const newData = items
      .filter((item) => item.category === "electronics")
      .map((filtered) => {
        return {
          ...filtered,
        };
      });
    setFiltered(newData);
  };

  const womansClothing = (e) => {
    e.preventDefault();

    const newData = items
      .filter((item) => item.category === "women's clothing")
      .map((filtered) => {
        return {
          ...filtered,
        };
      });
    setFiltered(newData);
  };

  const mensClothing = (e) => {
    e.preventDefault();
    const newData = items
      .filter((item) => item.category === "men's clothing")
      .map((filtered) => {
        return {
          ...filtered,
        };
      });
    setFiltered(newData);
  };
  const jewelery = (e) => {
    e.preventDefault();
    // console.log(items)
    const newData = items
      .filter((item) => item.category === "jewelery")
      .map((filtered) => {
        return {
          ...filtered,
        };
      });
    setFiltered(newData);
  };

  const mouseOver = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.transition = "all 0.5s";
  };
  const mouseOut = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "all 0.5s";
  };

  return (
    <div>
      <div className=" bg-success text-light p-4 h2">
        <div className=" container d-flex "> Olimpos</div>
      </div>

      <div className="container bg-light">
        <div className={"buttons"}>
          <button
            onClick={allCategories}
            className="btn m-2 btn-outline-primary rounded "
          >
            Tüm Ürünler
          </button>
          <button
            onClick={electronics}
            className="  btn m-2 btn-outline-primary rounded "
          >
            Elektronik
          </button>

          <button
            onClick={womansClothing}
            className=" btn m-2 btn-outline-primary rounded  "
          >
            Kadın giyim
          </button>
          <button
            onClick={mensClothing}
            className="btn m-2 btn-outline-primary rounded "
          >
            Erkek giyim
          </button>
          <button
            onClick={jewelery}
            className="btn m-2 btn-outline-primary rounded "
          >
            Takı
          </button>
          <button className="  btn m-2 btn-outline-primary rounded ">
            Sport
          </button>
        </div>
        <div className="container mt-3">
          <div className="row">
            {filtered.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-md-3 p-2 d-flex justify-content-center"
                >
                  <Card className="p-2 w-100 shadow-sm ">
                    <Card.Img
                      onMouseOut={mouseOut}
                      onMouseOver={mouseOver}
                      variant="top"
                      className="d-flex align-self-center"
                      style={{ width: "10rem" }}
                      src={product.image}
                    />
                    <Card.Body className="">
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>Price: {product.price}$</Card.Text>
                      <Link to={`/product/${product.id}`}>
                        <Button className=" w-50 pb-2" variant="primary">
                          Details
                        </Button>
                      </Link>
                      {/* <div>
                        <Button className="w-50 m-2 " variant="primary">
                            Sepete Ekle
                        </Button>
                      </div> */}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
