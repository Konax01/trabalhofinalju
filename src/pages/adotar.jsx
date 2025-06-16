import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  nome: "",
  nascimento: "",
  cpf: "",
  email: "",
  telefone: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  estado: "",
  cidade: ""
};

const estados = ["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "PE", "CE", "GO"];

function maskInput(name, value) {
  switch (name) {
    case "cpf":
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .slice(0, 14);
    case "telefone":
      return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15);
    case "cep":
      return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 9);
    case "nascimento":
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 10);
    default:
      return value;
  }
}

const Adotar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const buscarCep = async (cep) => {
    if (cep.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setForm(f => ({
            ...f,
            endereco: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || ""
          }));
        }
      } catch {}
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const maskedValue = maskInput(name, value);
    setForm({ ...form, [name]: maskedValue });
    if (name === "cep") {
      const cepLimpo = maskedValue.replace(/\D/g, "");
      if (cepLimpo.length === 8) buscarCep(cepLimpo);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const adotantes = JSON.parse(localStorage.getItem("adotantes") || "[]");
    adotantes.push(form);
    localStorage.setItem("adotantes", JSON.stringify(adotantes));
    alert("Solicitação enviada!");
    setForm(initialState);
    navigate("/animais");
  };

  return (
    <main>
      <h1 style={{ color: "#d72660", textAlign: "center", marginBottom: "2rem" }}>Formulário de Adoção</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffe4ec",
          padding: "2.5rem 2rem",
          borderRadius: "18px",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          boxShadow: "0 4px 24px 0 rgba(215,38,96,0.08)"
        }}
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: 2, minWidth: 220 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Nome completo</label>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Insira seu nome completo"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Data de nascimento</label>
            <input
              name="nascimento"
              value={form.nascimento}
              onChange={handleChange}
              placeholder="__/__/____"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 120 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>CPF</label>
            <input
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              placeholder="___.___.___-__"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
          <div style={{ flex: 2, minWidth: 220 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>E-mail</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Insira seu email"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Telefone</label>
            <input
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(__) _____-____"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 120 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>CEP</label>
            <input
              name="cep"
              value={form.cep}
              onChange={handleChange}
              placeholder="_____-___"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
              maxLength={9}
            />
          </div>
          <div style={{ flex: 3, minWidth: 220 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Endereço</label>
            <input
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              placeholder="Insira seu endereço"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 120 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Número</label>
            <input
              name="numero"
              value={form.numero}
              onChange={handleChange}
              placeholder="Insira o número"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
          <div style={{ flex: 2, minWidth: 160 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Complemento</label>
            <input
              name="complemento"
              value={form.complemento}
              onChange={handleChange}
              placeholder="Insira o complemento"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
            />
          </div>
          <div style={{ flex: 2, minWidth: 160 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Bairro</label>
            <input
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
              placeholder="Insira o bairro"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Estado</label>
            <input
              name="estado"
              value={form.estado}
              onChange={handleChange}
              placeholder="Estado"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
          <div style={{ flex: 2, minWidth: 220 }}>
            <label style={{ fontSize: "0.97rem", color: "#d72660" }}>Cidade</label>
            <input
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              placeholder="Cidade"
              style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "1.5px solid #d72660", fontSize: "1.1rem", background: "#fff" }}
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              flex: 1,
              background: "#fff",
              color: "#d72660",
              border: "2px solid #d72660",
              borderRadius: 12,
              padding: "1rem",
              fontWeight: "bold",
              fontSize: "1.3rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s"
            }}
          >
            &#8592; Voltar
          </button>
          <button
            type="submit"
            style={{
              flex: 1,
              background: "#d72660",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "1rem",
              fontWeight: "bold",
              fontSize: "1.3rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s"
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};

export default Adotar;