import { useRouter, useRoute } from "@nuxtjs/composition-api";
import { ref } from "vue"

const movies = [
  {
    id: 1,
    title: "TOP GUN",
    description:
      "Jeune as du pilotage et tête brûlée d'une école réservée à l'élite de l'aéronavale US ('Top Gun'), Pete Mitchell, dit 'Maverick', tombe sous le charme d'une instructrice alors qu'il est en compétition pour le titre du meilleur pilote...",
    creation: "17 septembre 1986",
    genres: ["Action", "Drame", "Romance"],
    image:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/15/06/12/12/58/422779.jpg",
    favorited: false,
  },
  {
    id: 2,
    title: "Star Wars : Episode III - La Revanche des Sith",
    description:
      "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador. Les Seigneurs Sith s'unissent alors pour préparer leur revanche, qui commence par l'extermination des Jedi. Seuls rescapés du massacre, Yoda et Obi Wan se lancent à la poursuite des Sith. La traque se conclut par un spectaculaire combat au sabre entre Anakin et Obi Wan, qui décidera du sort de la galaxie.",
    creation: "18 mai 2005",
    genres: ["Aventure", "Action", "Science"],
    image:
      "http://fr.web.img4.acsta.net/c_215_290/medias/nmedia/18/35/53/23/18423997.jpg",
    favorited: false,
  },
];

const favorites = ref([])

export const useMovies = () => {

  const route = useRoute()
  const router = useRouter()

  const addFavorites = (id) => favorites.value.push(id)

  return {
    movies,
    route,
    router,
    favorites,
    addFavorites
  };
};
