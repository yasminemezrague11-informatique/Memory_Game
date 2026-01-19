# Memory Game

## Auteur : Yasmine MEZRAGUE 
 
## Description du projet

=> Memory Game est un jeu de mémoire interactif développé avec un frontend en React et un backend en Node.js / Express. 

=> Le joueur retourne des cartes pour former des paires, compte le nombre de coups effectués et peut sauvegarder son score dans une base de données MongoDB. 

=> Le projet permet de gérer la logique du jeu, la sauvegarde des scores et l'affichage des meilleurs scores.

---

## Technologies utilisées

- Frontend : React (Vite)
- Backend : Node.js, Express
- Base de données : MongoDB (locale)
- Outil de gestion de base de données : MongoDB Compass

---

## Structure du projet
memory-game/
│
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   ├── API.js
│   │   ├── styles.css
│   │   ├── Assets/             
│   │   │   └── jungle-bg.jpg   
│   │   └── components/
│   │       ├── Board.jsx
│   │       ├── Card.jsx
│   │       ├── GameOver.jsx
│   │       └── ScoreBoard.jsx
│
└── backend/
│    ├── package.json
│    ├── app.js
│    ├── models/
│    │   └── Score.js
│    ├── routes/
│    │   └── scores.js
│    └── config/
│        └── db.js
│
└── README.md

---

## Prérequis

- Node.js (version ≥ 18)
- npm (installé avec Node)
- MongoDB (local ou Atlas)
  

---

## Lancement du projet

Le projet est composé de deux parties :
- un backend
- un frontend

La base de données utilisée est une base MongoDB locale.

---

## Étape 1 : Lancer le backend (serveur + base de données)

1. Ouvrir un terminal (PowerShell)
2. Se placer dans le dossier backend :

cd backend

3. Installer les dépendances :

npm install

4. Lancer le serveur backend :

node app.js

À ce moment-là :
- le serveur backend est lancé
- MongoDB est connecté en local
- la base de données "MemoryGame" sera créée automatiquement lors du premier enregistrement d’un score

La base de données peut être visualisée avec MongoDB Compass.

---

## Étape 2 : Lancer le frontend (interface du jeu)

1. Ouvrir un deuxième terminal (le backend doit rester en cours d’exécution)
2. Se placer dans le dossier frontend :

cd frontend

3. Installer les dépendances :

npm install

4. Lancer le frontend :

npm run dev

5. Une URL apparaît dans le terminal, par exemple :

http://localhost:5173

Copier cette URL et la coller dans le navigateur pour accéder au jeu.

---

## Comment jouer

1. Une fois sur le jeu, choisir un niveau de difficulté :
- 12 cartes
- 16 cartes
- 20 cartes

2. Le jeu démarre immédiatement après la sélection.

3. Le nombre de coups est calculé automatiquement tout au long de la partie.

4. Une fois la partie gagnée :
- entrer un pseudo
- valider pour sauvegarder le score

5. Les cinq meilleurs scores sont affichés à l’écran.

---

## Base de données

- La base de données est locale
- Nom de la base de données : memoryGame
- Les scores sont enregistrés automatiquement
- Pour vérifier les données :
  - ouvrir MongoDB Compass
  - se connecter à la base locale
  - consulter la base memoryGame et la collection des scores

---

## Points importants 

- node_modules ne sont pas inclus dans le dépôt GitHub. Ils doivent être installés via "npm install" dans chaque  dossier.  
- Les fichiers React utilisent l’extension .jsx.  
- index.html lance l’application React.  
- API.js gère la communication front/back pour la sauvegarde et récupération des scores.  
- MongoDB contient les scores : pseudo, coups, date.  
- ScoreBoard.jsx affiche le nombre de coups en temps réel.  
- Board.jsx gère la logique du plateau et des cartes.  
- GameOver.jsx affiche le message de fin de partie et le tableau des meilleurs scores.
  
---

## Conclusion

Ce projet m’a permis de mieux explorer Node.js, React, Express et MongoDB, de comprendre les API REST et de manipuler des bases de données, tout en améliorant mes compétences en frontend et backend.






