import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  articles = [
    {
      id: 0,
      category: "Sport",
      title: "Roland-Garros : Ons Jabeur entra en lice demain",
      img: "https://www.tunisienumerique.com/wp-content/uploads/2020/10/ons-jabeur-roland-garros-2020.jpg",
      message: "Par | Il y a 4 heures La joueuse tunisienne de tennis Ons Jabeur débutera demain, mardi 1er juin 2021, une nouvelle aventure au tournoi de Roland Garros.Au premier tour, Jabeur, 26ème au classement WTA, sera opposée à la kazakhe Yulia Putintseva, 43ème joueuse mondiale. La rencontre devrait débuter à 10h00.L’année dernière, Ons Jabeur s’était arrêtée au stade des huitièmes de finale à Roland Garros."
    },
    {
      id: 1,
      category: "Art",
      title: "La Cinémathèque fait peau neuve avec Méliès",
      img: "https://www.lequotidiendelart.com/media/cache/article_card_thumb/shared/article-image/21674.jpg",
      message: "Le musée de la Cinémathèque française a fait l'objet d'une refonte complète de son parcours de visite. Il bénéficie désormais d'un nouveau fil conducteur, autour de la figure d'un des pionniers du septième art."
    },
    {
      id: 2,
      category: "culture",
      title: "Au festival Villette Sonique, 4 000 spectateurs ont retrouvé le plaisir de la musique live",
      img: "https://img.lemde.fr/2021/05/30/0/0/5472/3648/1328/0/45/0/cf1a2ac_430920509-hl-erichard-sonique-villette-j2-23.jpg",
      message: "Le premier festival du monde d’après. L’édition 2021 de Villette Sonique s’est vu attribuer la primeur de la saison estivale, et surtout, de l’ère post-Covid, avec une programmation dévoilée au début de mai au lendemain des annonces de déconfinement progressif du gouvernement. Gratuit, l’événement s’est déroulé, le week-end des 29 et 30 mai, sur deux scènes éphémères (Périphérique et Jardin des îles) installées sur les vastes pelouses du parc de la Villette."
    }
  ]
}
