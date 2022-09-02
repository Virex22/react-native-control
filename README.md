# Controle React Native
## Information

la liste des fonctionnalité de l'application afin de réalisé les tests pour la note sont disponible sur l'application elle-même, sur l'icone en forme de point d'interrogation en haut à droite de l'écran. directement sur la première page de l'application.

## Installation

installer toutes les dépendances avec la commande suivante
```bash
npm i
```
allez dans le dossier server (`cd server`) et installer les dépendances en executant là même commande puis executez la commande suivante
```bash
node .\dataFixtures.js
```

ouvrez le fichier .\server\config.js et modifier les paramètres de la base de données et du secret du token jwt
```javascript
const config = {
    db: {
      host: "localhost",
      user: "root",
      password: "",
      database: "ContactCloud",
    },
    jwt: {
      secret: "MY_SUPER_SECRET_KEY_53483548",
    }
  };
```

revenez à la racine du projet et modifier le fichier config pour liée l'ip du serveur à l'application mobile
```javascript
export const IP_SERVER = "http://192.168.1.44"; 
export const PORT_SERVER = "3000"; 
```

## Lancement

pour lancer l'application il faut lancer le serveur avec la commande suivante (en ettant à la racine du projet)

```bash
nodemon .\server\index.js
```

puis lancer l'application avec la commande suivante

```bash
npm run android
```
