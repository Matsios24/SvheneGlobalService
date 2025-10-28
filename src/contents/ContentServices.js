// Import des images
import imagePeinture from "../assets/peinture_image.jpg";
import imageCordiste from "../assets/cordiste_images.jpeg";
import imageElectricien from "../assets/electricien_image.jpg";
import imageplomberie from "../assets/plomberie_image.jpg";
import imageCalorifuge from "../assets/calorifugeage_image.jpg";
import imageSoudure from "../assets/soudure_image.jpg";
import imageFroid from "../assets/technicien-froid_image.jpg";
import imageTuyauterie from "../assets/tuyauterie_image.jpg";
import imageSablabge from "../assets/sablage_image.jpg";
import imageInstrumentation from "../assets/instrumentation_image.jpg";

// Image de la page Home
import imageHome_1 from "../assets/home_image/batiment_peinture.jpg";
import imageHome_2 from "../assets/home_image/creation_du_bac.jpg";
import imageHome_3 from "../assets/home_image/sodure-realisé.jpg";
// Image de la page About
import equipeProjet from "../assets/about_Image/equipe_projet.jpg";
import equipe2 from "../assets/about_Image/equipe2_image.jpg";
import projetRealisation from "../assets/about_Image/projet_realisation.jpg";
import sgsImage from "../assets/about_Image/sgs_image.jpg";

// Import des images

// Services
export const services = {
  // Dans la page Home

  homeProjet: [
    {
      image: imageHome_2,
      titre: "peint jaune",
      description: " la palaskd kdsjds jkdsjd",
    },
    {
      image: imageHome_1,
      titre: "Peinture bâtiment",
      description: "",
    },
    {
      image: imageHome_3,
      titre: "Soudure",
      description: "",
    },
  ],

  //   ###############################################
  // --------------------Bâtiment---------------------
  //   ###############################################

  batiment: [
    {
      image: imageFroid,
      icone: "",
      title: "Froid",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imagePeinture,
      icone: "",
      title: "Peinture",
      description:
        "Spécialisée dans la peinture et le traitement de tous les metaux, l'équuipe de SGS vous conseil et vous accompagne. Notre atelier dispose de l'équipement nécessaire à la prise en charge de tout type de pièces ",
    },
    {
      image: imageElectricien,
      icone: "",
      title: "Electricité",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageplomberie,
      icone: "",
      title: "Plomberie",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
  ],

  //   ###############################################
  // --------------------Services---------------------
  //   ###############################################

  industrie: [
    {
      image: imagePeinture,
      title: "Peinture",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageSablabge,
      title: "Sablage",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageInstrumentation,
      title: "Instrumentation",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageSoudure,
      title: "Soudure",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageTuyauterie,
      title: "Tuyauterie",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageCordiste,
      title: "Travaux en hauter (cordiste)",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
    {
      image: imageCalorifuge,
      title: "Calorifuge",
      icone: "",
      description:
        "Le froid est un domaine en pplein expansion au Congo Brazzavile.",
    },
  ],

  // Image Recupéré dans la page About
  aboutImage: [
    {
      image: equipeProjet,
    },
    {
      image: sgsImage,
    },

    {
      image: equipe2,
    },
    {
      image: projetRealisation,
    },
  ],
};
