
# DATAVIZ
Dataviz est votre compagnon météo, guidant vos aventures en fonction des prévisions en temps réel. Explorez des activités adaptées à chaque condition, vous assurant de profiter au maximum de chaque jour.

## Authors

-@npelcat https://github.com/npelcat

-@ryorafael https://github.com/ryorafael

-@Taoushimmi https://github.com/Taoushimmi

## Demo

Voir la vidéo de démo:
https://vimeo.com/908601904?share=copy

## Documentation

Construction d'un site qui donne la météo avec l'utilisation de deux API (Open Weather) : géolocalisation & météo. Traitement et affichage des données en JavaScript (Icônes et propositions d'activités en fonction du temps qu'il fait)

## API Reference

https://open-meteo.com/



## Roadmap

- Recherche d'une idée de projet : suivi de tutos, consultation des ressources, discussions, brain storming

- Choix du projet météo en fixant des objectifs, puis les réaliser étape par étape.

Pousser le projet sur GitHub.
Etablir le MVP : L'utilisateur peut taper une ville dans un input, et l'appli affiche la météo de la ville en question.
Options supplémentaires :

Afficher le vent, le taux d'humidité, etc
Intégrer la date du jour !
Avoir une mini-animation de nuages, pluie, soleil, orage, en fonction du temps
Afficher une carte de France, pouvoir cliquer dessus et avoir la météo de la zone en question
Afficher des activités (à l'aide d'une seconde API) à faire en fonction de la météo

- Recherche de la formule mathématique et code la fonction pour transformer les degrés en fahrenheit. Il reste à l'intégrer à notre code. Recherche des API grtuites de sorties en France. 
Code d'une boucle switch-case pour afficher un icône en fonction de la météo annoncée (couvert === icône de nuages) avec ajout de classe CSS pour les images.

- Résolution du bug d'affichage d'icônes Long travail sur Git et ses conflits. Mise en place de la date du jour.

- Avancement sur l'affichage dans la matinée : manipulation de la date, recherche des idées de sorties, modification du switch-case avec intégration des idées de sorties en dures. Tentative de l'intégration de l'animation pluie dans le switch-case mais pour l'instant => bug. Idée de Taous : rajouter des gifs à chaque météo différente. Implémentation de l'idée + ajout du CSS et des médias queries (site responsive).

- Faire bouger des nuages en arrière-plan. Résolution du problème de l'animation de pluie avec Stéphane. Modification du CSS et petites animations des blocs lors du chargement de la page à l'aide la bibliothèque CSS "Animate", ainsi que modification du style des blocs. Code de l'animation nuages par Taous et implémentation dans notre code en mob-programming.


- La finalisation du projet : changement des nombreux ".then" en async-await pour un code plus propre et moins indenté. Push sur Git à 16h10 !
