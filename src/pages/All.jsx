import React from "react";
import useFetch from "../Hooks/useFetch";
function All() {
  const { data, loading, error } = useFetch(
    "https://msshohruh.github.io/api-menu/db.json"
  );
  console.log(data);

  if (loading) {
    return (
      <div className="center">
        <span class="loader"></span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="center">
        <h1 className="error">{error}</h1>
      </div>
    );
  }

  return (
    <div className="section-center">
      {data &&
        data.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <div className="menu-item " key={item.id}>
              <img className="photo" src={img} alt={title} />
              <div className="item-info">
                <header>
                  <h5>{title}</h5>
                  <span className="item-price">${price}</span>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default All;
