## STACK
    Framework : Express JS
    ORM: Sequelize

## SQL create table in DB
### database records example in ./data.json
    CREATE TABLE articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titre VARCHAR(255) NOT NULL,
        description TEXT,
        date DATE
    )

## insert data in DB

    INSERT INTO articles (titre, description, date) VALUES ?

## DOCKERISATION : 
    - 1: Construire une image BDD (Sql, mongo etc...)
    - 2: Initialisation des données (création table Article, insert)
    - 3: Lancer un container 
    - 4: vérifier sa bonne éxécution
    - 5: revoir le dockerfile du backend pour que la connexion à la BDD (container) puisse se faire 
    - 6: créer un docker compose pour orchestrer le build des images et le run des containers
    - 7: containeriser le front