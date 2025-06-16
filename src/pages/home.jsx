import React from "react";

const animaisDestaque = [
  {
    id: 1,
    nome: "Luna",
    idade: "2 anos",
    sexo: "Fêmea",
    porte: "Médio",
    foto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    nome: "Thor",
    idade: "1 ano",
    sexo: "Macho",
    porte: "Grande",
    foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    nome: "Mel",
    idade: "3 anos",
    sexo: "Fêmea",
    porte: "Pequeno",
    foto: "https://imgs.search.brave.com/0k_tRFl3EA3ICGDEhwZwyNY2coKKXQqoE9MrsmENW-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi81/MzU3MTMzLXJldHJh/dG8tZW5ncmFjYWRv/LWFycm9nYW50ZS1k/ZS1jYWJlbG8tY3Vy/dG8tZ2F0by1kb21l/c3RpY28tcmVsYXhh/bnRlLWVtLWNhc2Et/Z2F0aW5oby1hZG9y/YXZlbC1tZW1icm8t/ZGEtZmFtaWxpYS1i/cmluY2FuZG8tZGUt/Y3VpZGFkby1kZS1h/bmltYWwtZGUtaW50/ZXJpb3ItY29uY2Vp/dG8tZGUtc2F1ZGUt/ZS1hbmltYWwtZm90/by5qcGc"
  }
];

const Home = () => (
  <main>
    <h1>JR Adoções</h1>
    <p>
      Bem-vindo ao <strong>JR Adoções</strong>! Aqui você encontra animais esperando por um novo lar. Veja alguns dos nossos destaques:
    </p>
    <section className="animais-grid">
  {animaisDestaque.map(animal => (
    <div key={animal.id} style={{
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
    </div>
  ))}
</section>
  </main>
);

export default Home;