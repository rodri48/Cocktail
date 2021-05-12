import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

import Context from "./NewProvider";

const CocktailDetails = () => {
  const context = useContext(Context);
  console.log(context, "here data");

  const { id } = useParams();

  const id1 = context.findIndex((drink) => {
    /*     console.log(drink.idDrink);
    console.log(id); */
    return drink.idDrink === id;
  });

  console.log(context[id1]);

  return (
    <div
      style={{
        backgroundColor: " 	rgb(255, 160, 122)",
        display: "flex",
      }}
    >
      <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ marginLeft: "200px" }}
      >
        <h1>{context[id1].strDrink} </h1>

        <img
          src={context[id1].strDrinkThumb}
          style={{ width: "500px" }}
          alt=""
        ></img>
      </motion.div>

      <div style={{ marginRight: "150px" }}>
        <h1> Instructions</h1>

        <h4> {context[id1].strInstructions}</h4>
        <>
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
        </>
      </div>

      <div style={{ marginRight: "150px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ingredients</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td>{context[id1].strIngredient1}</td>
              <td>{context[id1].strMeasure1}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{context[id1].strIngredient2}</td>
              <td>{context[id1].strMeasure2}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{context[id1].strIngredient3}</td>
              <td>{context[id1].strMeasure3}</td>
            </tr>

            {context[id1].strMeasure4 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>4</td>
                <td>{context[id1].strIngredient4}</td>
                <td>{context[id1].strMeasure4}</td>
              </tr>
            )}

            {context[id1].strMeasure5 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>5</td>
                <td>{context[id1].strIngredient5}</td>
                <td>{context[id1].strMeasure5}</td>
              </tr>
            )}

            {context[id1].strMeasure6 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>6</td>
                <td>{context[id1].strIngredient6}</td>
                <td>{context[id1].strMeasure6}</td>
              </tr>
            )}
            {context[id1].strMeasure7 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>7</td>
                <td>{context[id1].strIngredient7}</td>
                <td>{context[id1].strMeasure7}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CocktailDetails;
