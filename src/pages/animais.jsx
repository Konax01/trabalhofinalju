import React from "react";
import CardAnimal from "../components/cardAnimal";

const listaAnimais = [
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
  },
  {
    id: 4,
    nome: "Bob",
    idade: "4 anos",
    sexo: "Macho",
    porte: "Médio",
    foto: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    nome: "Nina",
    idade: "2 anos",
    sexo: "Fêmea",
    porte: "Pequeno",
    foto: "https://imgs.search.brave.com/z7sWOXGUoxDTGT28CjAEpKNvwnqCDTo4mXSit5FvS_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cHJpbWVyLWRpc3Bh/cm8tdmVydGljYWwt/bGluZG8tZ2F0by1l/dXJvcGVvLXBlbG8t/Y29ydG9fMTgxNjI0/LTM0NTg3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA"
  },
  {
    id: 6,
    nome: "Max",
    idade: "5 anos",
    sexo: "Macho",
    porte: "Grande",
    foto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    nome: "Lola",
    idade: "1 ano",
    sexo: "Fêmea",
    porte: "Médio",
    foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    nome: "Fred",
    idade: "3 anos",
    sexo: "Macho",
    porte: "Grande",
    foto: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    nome: "Bela",
    idade: "2 anos",
    sexo: "Fêmea",
    porte: "Pequeno",
    foto: "https://imgs.search.brave.com/Dugyq7NXtUaP53DWnyqCDcQDlBoQPxhsXGKPHPGhQ60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDMv/NDEzLzM1NS9zbWFs/bC9mbHVmZnktZmF0/LWN1dGUtY2F0LW9u/LW9yYW5nZS1iYWNr/Z3JvdW5kLXdhcm0t/bGlnaHQtZnJlZS1w/aG90by5qcGc"
  }
];

const Animais = () => (
  <main>
    <h1 style={{ maxWidth: "1200px", margin: "2rem auto", padding: "2rem 1rem" }}>
      Animais para Adoção
    </h1>
    <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.15rem" }}>
      Estes animais estão disponíveis para adoção e aguardam por um novo lar cheio de amor. Escolha seu novo amigo e transforme uma vida!
    </p>
    <section className="animais-grid">
      {listaAnimais.map(animal => (
        <CardAnimal key={animal.id} animal={animal} />
      ))}
    </section>
  </main>
);

export default Animais;