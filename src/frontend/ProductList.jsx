import { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState();
  const fetchData = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {products &&
        products.map((item) => (
          <div key={item.id}>
            <h4>Title : {item.title}</h4>
            <p>author : {item.author}</p>
            <p>Price : {item.price}</p>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
    </>
  );
};
