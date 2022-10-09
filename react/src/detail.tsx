import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const {id} = useParams();

  return (
    <>
      <h1 className="heading">Details Id: {id}</h1>

      <Link className="linkbutton" to="/list">
        Back to list page
      </Link>
    </>
  );
};
