import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    type_toit: "2 pans",
    longueur: 10,
    largeur: 8,
    pente: 30,
    unite_pente: "deg",
    materiau: "tole",
    longueur_utile: 3,
    largeur_utile: 0.9,
    surface_unite: 0.04, // m² pour tuile
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculToiture = () => {
    let surface_au_sol = 0;
    if (["2 pans", "monopente", "4 pans"].includes(form.type_toit)) {
      surface_au_sol = form.longueur * form.largeur;
    }

    let facteur_pente = 1;
    if (form.unite_pente === "%") {
      facteur_pente = Math.sqrt(1 + Math.pow(form.pente / 100, 2));
    } else {
      facteur_pente = 1 / Math.cos((form.pente * Math.PI) / 180);
    }

    const surface_reelle = surface_au_sol * facteur_pente;

    let taux_perte = 0.1;
    if (form.materiau === "tuile") taux_perte = 0.15;
    if (form.materiau === "ardoise") taux_perte = 0.2;

    const surface_avec_perte = surface_reelle * (1 + taux_perte);

    let surface_unite_calc = 0;
    if (form.materiau === "tole") {
      surface_unite_calc = form.longueur_utile * form.largeur_utile;
    } else {
      surface_unite_calc = form.surface_unite;
    }

    const nb_unites = Math.ceil(surface_avec_perte / surface_unite_calc);

    setResult({
      surface_au_sol: surface_au_sol.toFixed(2),
      surface_reelle: surface_reelle.toFixed(2),
      surface_avec_perte: surface_avec_perte.toFixed(2),
      nb_unites,
    });
  };

  return (
    <div className="container">
      <h1>Calculateur de toiture</h1>

      <div className="form-grid">
        <label>
          Type de toit
          <select name="type_toit" value={form.type_toit} onChange={handleChange}>
            <option>2 pans</option>
            <option>monopente</option>
            <option>4 pans</option>
          </select>
        </label>

        <label>
          Longueur (m)
          <input
            type="number"
            name="longueur"
            value={form.longueur}
            onChange={handleChange}
          />
        </label>

        <label>
          Largeur (m)
          <input
            type="number"
            name="largeur"
            value={form.largeur}
            onChange={handleChange}
          />
        </label>

        <label>
          Pente
          <input
            type="number"
            name="pente"
            value={form.pente}
            onChange={handleChange}
          />
        </label>

        <label>
          Unité pente
          <select
            name="unite_pente"
            value={form.unite_pente}
            onChange={handleChange}
          >
            <option value="deg">Degrés</option>
            <option value="%">%</option>
          </select>
        </label>

        <label>
          Matériau
          <select
            name="materiau"
            value={form.materiau}
            onChange={handleChange}
          >
            <option value="tole">Tôle</option>
            <option value="tuile">Tuile</option>
            <option value="ardoise">Ardoise</option>
          </select>
        </label>

        {form.materiau === "tole" ? (
          <>
            <label>
              Longueur utile (m)
              <input
                type="number"
                name="longueur_utile"
                value={form.longueur_utile}
                onChange={handleChange}
              />
            </label>
            <label>
              Largeur utile (m)
              <input
                type="number"
                name="largeur_utile"
                value={form.largeur_utile}
                onChange={handleChange}
              />
            </label>
          </>
        ) : (
          <label className="span-2">
            Surface couverte par unité (m²)
            <input
              type="number"
              name="surface_unite"
              value={form.surface_unite}
              onChange={handleChange}
            />
          </label>
        )}
      </div>

      <button className="btn" onClick={calculToiture}>
        Calculer
      </button>

      {result && (
        <div className="result">
          <h2>Résultats :</h2>
          <p>Surface au sol : {result.surface_au_sol} m²</p>
          <p>Surface réelle : {result.surface_reelle} m²</p>
          <p>Surface avec pertes : {result.surface_avec_perte} m²</p>
          <p><strong>Nombre d’unités : {result.nb_unites}</strong></p>
        </div>
      )}
    </div>
  );
}
