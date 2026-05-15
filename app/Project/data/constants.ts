export const whatsappNumber = "59169926759";
export const whatsappMessage = "¡Hola! Vengo de la página web y estoy interesado/a en comprar la gelatina funcional Inti.";
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const equipo = [
  { nombre: "Evangelina Katherin Guzman Andrade", rol: "Investigación y Desarrollo", instagram: "https://instagram.com/" },
  { nombre: "Brehidy Milenka Pinto Robles", rol: "Investigación y Desarrollo", instagram: "https://instagram.com/" },
  { nombre: "Nathaly Ribera Macedo", rol: "Investigación y Desarrollo", instagram: "https://instagram.com/" },
  { nombre: "Linnzy Valdez Rivero", rol: "Investigación y Desarrollo", instagram: "https://www.instagram.com/linnzy_y/" },
];

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
