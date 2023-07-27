# technical_test_Reecall

Ce projet est une API développée en TypeScript permettant d'interagir avec les contacts, les tickets, les compagnies et les transactions d'un compte HubSpot. L'API expose divers endpoints pour réaliser les différentes opérations.

## Fonctionnalités Implémentées

Voici la liste des fonctionnalités que j'ai implémentées dans mon projet :

1. Gestion des contacts :
   - Récupération de la liste des contacts
   - Récupération d'un contact spécifique par son ID
   - Création d'un nouveau contact
   - Mise à jour d'un contact existant
   - Suppression d'un contact

2. Gestion des compagnies :
   - Récupération de la liste des compagnies
   - Récupération d'une compagnie spécifique par son ID
   - Création d'une nouvelle compagnie
   - Mise à jour d'une compagnie existante
   - Suppression d'une compagnie

3. Gestion des tickets :
   - Récupération de la liste des tickets
   - Récupération d'un ticket spécifique par son ID
   - Création d'un nouveau ticket
   - Mise à jour d'un ticket existant
   - Suppression d'un ticket

4. Gestion des transactions :
   - Récupération de la liste des transactions
   - Récupération d'une transaction spécifique par son ID
   - Création d'une nouvelle transaction
   - Mise à jour d'une transaction existante
   - Suppression d'une transaction
## Architecture du Projet
Le projet est divisé en plusieurs parties.
- `src/contacts` : Contient toutes les fonctionnalités pour les contacts.
- `src/companies` : Contient toutes les fonctionnalités pour les compagnies.
- `src/tickets` : Contient toutes les fonctionnalités pour les tickets.
- `src/transactions` : Contient toutes les fonctionnalités pour les transactions.
- `tsconfig.json`: Qui est le fichier de configuration essentiel pour les projets TypeScript.
- `package.json`: Fichier utilisé pour définir les métadonnées et les dépendances du projet, ainsi que pour décrire les scripts d'exécution associés.
- `package-lock.json:` Fichier généré automatiquement qui enregistre les versions exactes des dépendances installées pour assurer une reproductibilité des installations.
- `node_modules`: Répertoire où sont stockées les dépendances externes téléchargées à partir du gestionnaire de paquets Node.js (NPM) pour être utilisées dans le projet.
## Installation et Utilisation

1. Clonez le référentiel depuis GitHub :
    git clone git@github.com:Patricklevyy/technical_test_Reecall.git
2. Assurez-vous d'avoir Node.js et NPM installés sur votre système.
3. Installez les dépendances du projet en exécutant la commande suivante :

    - npm install axios
    - npm init -y
    - npm install typescript ts-node express axios @types/express @types/axios
    - npm install express
    - npm install
    - npm install dotenv --save-dev


4. Configurez la clé API HubSpot dans le fichier .env

5. Lancez l'API en exécutant la commande suivante :

    npx ts-node src/index.ts

6. L'API sera accessible à l'adresse : http://localhost:3000
