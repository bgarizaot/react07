import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExperApp = () => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExperApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((categoria, i) => (
          <GifGrid key={i} category={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExperApp;
