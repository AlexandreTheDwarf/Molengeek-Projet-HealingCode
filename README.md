# Projet HealingCode
 

Dans cet exercice, nous aurons des patients qui se rendront chez un docteur pour résoudre leurs problèmes de programmation.

Le docteur les diagnostiquera, leur prescrira un traitement, puis les patients iront à la pharmacie pour acheter leur remède et le prendre, ce qui les guérira.

 

## Description des patients
 

Les patients ont un nom, une maladie, de l'argent, une poche, un état de santé.

Ils savent se rendre à un endroit, prendre un médicament et payer.

Au début, les patients sont dans une salle d'attente. 

(Liste des patients que vous allez crée, avec leurs valeurs respectives)


```
| Nom      | Maladie        | Argent | Poche | État de Santé |
| -------- | -------------- | ------ | ----- | ------------- |
| Marcus   | mal indenté    | 100    | vide  | malade        |
| Optimus  | unsave         | 200    | vide  | malade        |
| Sangoku  | 404            | 80     | vide  | malade        |
| DarthVader | azmatique    | 110    | vide  | malade        |
| Semicolon  | syntaxError  | 60     | vide  | malade        |
```

## Description du docteur
 

Le docteur reçoit les patients dans son cabinet.

Il les diagnostique, se fait payer, puis prescrit un traitement.

Attention, le docteur fait sortir le patient de son cabinet avant de prendre le suivant.

Dans son cabinet, il y a son chat de race sphynx pour maintenir un environnement stérile.

Son chat miaule toutes les deux secondes dans la console (bonus).

La consultation coûte 50€. Les patients sont dans un état de traitement avant de sortir du cabinet.

 
```
| Nom         | Argent | Cabinet | Diagnostique | Patient In | Patient Out |
| ----------- | ------ | ------- | ------------ | ---------- | ----------- |
| Debugger    | 0      | [chat]  | -            | -          | -           |
```

## Grille des diagnostics 
 
```
| Maladie       | Traitement          |
| ------------- | ------------------- |
| mal indenté   | `ctrl+maj+f`        |
| unsave        | `saveOnFocusChange` |
| 404           | `CheckLinkRelation` |
| azmatique     | `Ventoline`         |
| syntaxError   | `f12+doc`           |
``` 

## La pharmacie 
 

La pharmacie dispose de traitement. 

Après le médecin, les patients se rendront à la pharmacie et recevront leur traitement s'ils ont assez d'argent.

A leur arrivé a la pharmacie, un message de bienvenu a la pharmacie s'affiche dans la console.

S'ils n'ont pas assez d'argent, ils seront considérés comme morts et devront être envoyé dans un cimetière.

 
## Tarif des traitements
 

Voici les objets traitement (médicaments) que les patients peuvent acheter a la pharmacie

```
| Traitement           | Prix  |
| -------------------- | ----- |
| `ctrl+maj+f`         | 60€   |
| `saveOnFocusChange`  | 100€  |
| `CheckLinkRelation`  | 35€   |
| `Ventoline`          | 40€   |
| `f12+doc`            | 20€   |
``` 

## Le cimetière
 

Les patients qui a après être passés a la pharmacie n'ont pas pu se procurer leur remède, meurt

 (un message triste du type annonces nécrologique, indique les détails du décès)

 
## Vérification
 

Suivez attentivement l'évolution de chacun de vos patients grâce à vos console.log.

Assurez vous qu'ils quittent chaque fois la salle d'attente  avant d'entrer dans le cabinet du médecin, et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entrer.

 