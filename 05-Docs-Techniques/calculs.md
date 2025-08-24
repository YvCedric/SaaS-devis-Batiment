
# 📐 Détails des Formules de Calcul

Ce document regroupe l'ensemble des formules utilisées pour estimer les différents postes d'un devis de construction de maison en brique ou parpaing.

---

## 1. Murs Extérieurs

- **Périmètre de la maison**  
  \( P = 2 	imes (L + l) \)  
  où \( L \) = longueur, \( l \) = largeur.

- **Surface totale des murs**  
  \( S_{	ext{murs}} = P 	imes H 	imes N \)  
  où \( H \) = hauteur sous plafond, \( N \) = nombre d'étages.

- **Surface d'une brique/bloc**  
  \( S_{	ext{brique}} = L_b 	imes H_b \)  
  où \( L_b \), \( H_b \) dimensions de la brique.

- **Quantité de briques/blocs**  
  \( Q_{	ext{briques}} = \dfrac{S_{	ext{murs}}}{S_{	ext{brique}}} \)

- **Coût murs**  
  \( C_{	ext{murs}} = Q_{	ext{briques}} 	imes P_u + C_{	ext{mortier}} + C_{	ext{MO}} \)  
  où \( P_u \) = prix unitaire brique, \( C_{	ext{mortier}} \) coût total mortier, \( C_{	ext{MO}} \) main-d'œuvre.

---

## 2. Dalle Béton

- **Surface de la dalle**  
  \( S_{	ext{dalle}} = S_{	ext{habitable}} 	imes N \)

- **Volume béton**  
  \( V_{	ext{béton}} = S_{	ext{dalle}} 	imes e \)  
  où \( e \) = épaisseur de la dalle (en m).

- **Coût dalle**  
  \( C_{	ext{dalle}} = V_{	ext{béton}} 	imes P_{béton} + C_{	ext{MO}} \)

---

## 3. Toiture

- **Surface de toiture**  
  \( S_{	ext{toiture}} = S_{	ext{habitable}} 	imes k_p \)  
  où \( k_p = \dfrac{1}{\cos(lpha)} \) coefficient pente, \( lpha \) angle de la pente.

- **Coût toiture**  
  \( C_{	ext{toiture}} = S_{	ext{toiture}} 	imes P_{tuiles} + C_{	ext{pose}} \)

---

## 4. Finitions

- **Peinture**  
  \( C_{	ext{peinture}} = S_{	ext{murs-int}} 	imes P_{	ext{peinture}} \)  

- **Carrelage**  
  \( C_{	ext{carrelage}} = S_{	ext{sols}} 	imes P_{	ext{carrelage}} \)

---

## 5. Électricité et Plomberie (Forfait)

- **Électricité (forfait)**  
  \( C_{	ext{elec}} = F_{	ext{elec}} \)

- **Plomberie (forfait)**  
  \( C_{	ext{plomb}} = F_{	ext{plomb}} \)

---

## 6. Main-d'œuvre

- **Coefficient MO**  
  Appliquer un coefficient global ou un taux horaire :  
  \( C_{	ext{MO}} = T_h 	imes R_h \)  
  où \( T_h \) = temps estimé (h), \( R_h \) = taux horaire (€ / h).

---

## 7. Total du Devis

\[
	ext{Total} = C_{	ext{murs}} + C_{	ext{dalle}} + C_{	ext{toiture}} + C_{	ext{peinture}} + C_{	ext{carrelage}} + C_{	ext{elec}} + C_{	ext{plomb}}
\]

