import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/form";
import Activities from "../../components/Activities/activities";

const FormPage = () => {
  return (
    <div>
      <Activities />
      <Link to={"/home"}>
        <button>Atras</button>
      </Link>
      <h1>CREATE A NEW ACTIVITY</h1>
      <Form />
    </div>
  );
};

export default FormPage;
