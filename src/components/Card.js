import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./NewProvider";
import { Link } from "react-router-dom";

export default function Card1() {
  const context = useContext(Context);

  return (
    <div
      data={context}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {context.map((post2) => {
        return (
          <div key={post2.idDrink}>
            <Card style={{ width: "18rem", marginLeft: "20px" }}>
              <Card.Img variant="top" src={post2.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{post2.strDrink}</Card.Title>
                <Card.Text>
                  <b>Category:</b> {post2.strCategory}
                </Card.Text>
                {/* <Button variant="primary" onClick={handleUrl}>
                  Go to cocktail
                </Button> */}

                <Link
                  style={{ fontSize: "20px" }}
                  to={`/CocktailDetails/${post2.idDrink}`}
                >
                  view more
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
