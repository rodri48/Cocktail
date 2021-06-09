import React, { useState, useContext } from "react";
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
    return drink.idDrink === id;
  });
  const [state, setstate] = useState(context[id1]);
  return (
    <div
      style={{
        backgroundColor: " 	rgb(255, 160, 122)",
        display: "flex",
        height: " calc(100vh - 80px) ",
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
        <h1>{state.strDrink} </h1>

        <img src={state.strDrinkThumb} style={{ width: "500px" }} alt=""></img>
      </motion.div>

      <div style={{ marginRight: "150px" }}>
        <h1> Instructions</h1>

        <h4> {state.strInstructions}</h4>
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
              <td>{state.strIngredient1}</td>
              <td>{state.strMeasure1}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{state.strIngredient2}</td>
              <td>{state.strMeasure2}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{state.strIngredient3}</td>
              <td>{state.strMeasure3}</td>
            </tr>

            {state.strMeasure4 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>4</td>
                <td>{state.strIngredient4}</td>
                <td>{state.strMeasure4}</td>
              </tr>
            )}

            {state.strMeasure5 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>5</td>
                <td>{state.strIngredient5}</td>
                <td>{state.strMeasure5}</td>
              </tr>
            )}

            {state.strMeasure6 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>6</td>
                <td>{state.strIngredient6}</td>
                <td>{state.strMeasure6}</td>
              </tr>
            )}
            {state.strMeasure7 === null ? (
              <div> </div>
            ) : (
              <tr>
                <td>7</td>
                <td>{state.strIngredient7}</td>
                <td>{state.strMeasure7}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CocktailDetails;
