# Projet Dataviz - Journal de bord
projet-collectif-dataviz-ryo-taous-nadege created by GitHub Classroom

## Lundi 20 novembre - Jour 1
Recherche d'une idée de projet, suivi de tutos, consultation des ressources, discussions, brain storming, points forts et points faibles de chacun

## Mardi 21 novembre - jour 2
“Réaliser le projet météo en fixant des objectifs et les réaliser étape par étape.”

Pousser le projet sur GitHub.[check !]
Etablir le MVP = L'utilisateur peut taper une ville dans un input, et l'appli affiche la météo de la ville en question. [check !]

Options supplémentaires = 
1) Afficher le vent, le taux d'humidité, etc [check !]
2) Intégrer la date du jour !
3) Avoir une mini-animation de nuages, pluie, soleil, orage, en fonction du temps
4) Afficher une carte de France, pouvoir cliquer dessus et avoir la météo de la zone en question
5) Afficher des activités (à l'aide d'une seconde API) à faire en fonction de la météo

## Mercredi 22 novembre - jour 3
Ryo : recherche de la formule mathématique et codé la fonction pour transformer les degrés en fahrenheit. Il reste à l'intégrer à notre code.
Taous : recherche des API grtuites de sorties (propositions de sorties en fonction de la météo), malheureusement, il ne semble pas y en avoir.
Nadège : code d'une boucle switch-case pour afficher un icône en fonction de la météo annoncée (couvert === icône de nuages) avec ajout de classe CSS pour les images. Bug.
Entraide, partage des idées, problème de Git...

## Jeudi 23 novembre - jour 4
Résolution du bug d'affichage d'icônes par Ryo, travail sur Git et ses conflits ( >-<'), mise en place de la date du jour par Taous
(Recherche d'une API pour afficher des idées de sorties, toujours sans succés...) => Décision d'afficher des idées de sorties en dur.

## Lundi 27 novembre - jour 5
Ryo est absent car malade. Avancement sur l'affichage dans la matinée : manipulation de la date, recherche des idées de sorties, modification du switch-case avec intégration des idées de sorties en dures.
Tentative de l'intégration de l'animation pluie dans le switch-case mais pour l'instant, cela ne fonctionne pas.
Idée de Taous de rajouter des gifs à chaque météo différente. Implémentation de l'idée + ajout du CSS et des médias queries.

## Mardi 28 novembre - jour 6
Ryo est toujours absent et bien malade. Taous a l'idée de faire bouger des nuages à l'arrière plan.
On résoud le problème de l'animation de pluie qui fonctionne maintenant lorsque la météo est annoncée sur "pluie".
Modification du CSS et petites animations des blocs lors du chargement de la page, ainsi que modifications du style.
Code de l'animation nuages par Taous et implémentation dans notre code en mob-programming.

## Mercredi 29 novembre - jour 7
Ryo est toujours malade. L'après-midi est consacré à la finalisation du projet : point avec Ryo sur Slack pour échanger les dernières idées et parler des derniers bugs (notamment affichage de l'écran en CSS et fonction de la pluie). Puis, sur les conseils de Laïla, changement du fetch.then en async-await pour un code plus prore et moins indenté. Push sur Git à 16h10 !
