import React from "react";
import { useNavigate } from "react-router-dom";

const CardAnimal = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#ffe4ec", 
      padding: "1rem",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem"
    }}>
      <img
        src={animal.foto}
        alt={animal.nome}
        style={{ width: "100%", maxWidth: 180, borderRadius: "8px", objectFit: "cover" }}
      />
      <h3 style={{ color: "#d72660" }}>{animal.nome}</h3>
      <p>Idade: {animal.idade}</p>
      <p>Sexo: {animal.sexo}</p>
      <p>Porte: {animal.porte}</p>
      <button
        style={{
          background: "#d72660",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => navigate(`/adotar/${animal.id}`)}
      >
        Quero Adotar
      </button>
    </div>
  );
};

export default CardAnimal;