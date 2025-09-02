import { useState } from 'react'
import './App.css'

export default function App() {
  const [form, setForm] = useState({
    longueurMur: "",
    hauteurMur: "",
    largeurOuverture: "",
    hauteurOuverture: "",
    nombreOuverture: "",
    typeBloc: "parpaing", // valeur par défaut
    blocLongueur: 0.5,
    blocHauteur: 0.2,
  });

  // valeurs par défaut selon le matériau choisi
  const materiaux = {
    parpaing: { blocLongueur: 0.5, blocHauteur: 0.2 }, // 50 x 20 cm
    brique: { blocLongueur: 0.24, blocHauteur: 0.07 }, // 24 x 7 cm
    btc: { blocLongueur: 0.29, blocHauteur: 0.09 }, // 29 x 9 cm
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "typeBloc") {
      // si on change le type, on met à jour dimensions auto
      setForm({
        ...form,
        typeBloc: value,
        blocLongueur: materiaux[value].blocLongueur,
        blocHauteur: materiaux[value].blocHauteur,
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const calculerMateriaux = () => {
    const longueur = parseFloat(form.longueurMur);
    const hauteur = parseFloat(form.hauteurMur);
    const largeurOuverture = parseFloat(form.largeurOuverture) || 0;
    const hauteurOuverture = parseFloat(form.hauteurOuverture) || 0;
    const nombreOuverture = parseFloat(form.nombreOuverture) || 0;

    const blocLongueur = parseFloat(form.blocLongueur);
    const blocHauteur = parseFloat(form.blocHauteur);

    if (!longueur || !hauteur) return null;

    // Aire nette du mur
    const aireMur = longueur * hauteur;
    const aireOuverture = largeurOuverture * hauteurOuverture * nombreOuverture;
    const aireNette = aireMur - aireOuverture;

    // Nombre de blocs nécessaires
    const surfaceBloc = blocLongueur * blocHauteur;
    const nbBlocs = Math.ceil((aireNette / surfaceBloc) * 1.05); // +5% pertes

    // Mortier
    const volumeMortier = aireNette * 0.03; // m³
    const cimentKg = volumeMortier * 350; // 350 kg par m³
    const sacsCiment = Math.ceil(cimentKg / 50);
    const volumeSable = volumeMortier * (4 / 5);
    const eauLitres = volumeMortier * 180;

    return {
      aireMur,
      aireOuverture,
      aireNette,
      nbBlocs,
      sacsCiment,
      volumeSable,
      eauLitres,
    };
  };

  const resultats = calculerMateriaux();

  return (
    <div className="container">
      <h1>🧱 Calcul Matériaux Mur</h1>

      <label>Longueur du mur (m):</label>
      <input
        type="number"
        step="0.01"
        name="longueurMur"
        value={form.longueurMur}
        onChange={handleChange}
      />

      <label>Hauteur du mur (m):</label>
      <input
        type="number"
        step="0.01"
        name="hauteurMur"
        value={form.hauteurMur}
        onChange={handleChange}
      />

      <label>Largeur ouverture (m):</label>
      <input
        type="number"
        step="0.01"
        name="largeurOuverture"
        value={form.largeurOuverture}
        onChange={handleChange}
      />

      <label>Hauteur ouverture (m):</label>
      <input
        type="number"
        step="0.01"
        name="hauteurOuverture"
        value={form.hauteurOuverture}
        onChange={handleChange}
      />

      <label>Nombre d'ouverture :</label>
      <input
        type="number"
        step="0.01"
        name="nombreOuverture"
        value={form.nombreOuverture}
        onChange={handleChange}
      />

      <label>Type de matériau :</label>
      <select name="typeBloc" value={form.typeBloc} onChange={handleChange}>
        <option value="parpaing">Parpaing (50 × 20 cm)</option>
        <option value="brique">Brique (24 × 7 cm)</option>
        <option value="btc">BTC (29 × 9 cm)</option>
      </select>

      <h2>Résultats :</h2>
      {resultats ? (
        <ul>
          <li>Aire brute mur : {resultats.aireMur.toFixed(2)} m²</li>
          <li>Aire ouvertures : {resultats.aireOuverture.toFixed(2)} m²</li>
          <li>Aire nette : {resultats.aireNette.toFixed(2)} m²</li>
          <li>
            Nombre de {form.typeBloc}s : {resultats.nbBlocs}
          </li>
          <li>Sac de ciment : {resultats.sacsCiment.toFixed(2)} sacs</li>
          <li>Volume de sable : {resultats.volumeSable.toFixed(2)} m³</li>
          <li>Volume d'eau : {resultats.eauLitres.toFixed(2)} L</li>
        </ul>
      ) : (
        <p>Entrez les dimensions pour calculer.</p>
      )}
    </div>
  );
}


