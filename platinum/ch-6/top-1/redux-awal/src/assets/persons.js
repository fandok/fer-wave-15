// src/assets/persons.js
export default {
  /* Dummy data, Pura puranya seperti request ke API */ all: () =>
    Promise.resolve([
      {
        id: 1,
        name: "Ryan Gosling",
        address: "Los Feliz, California, U.S",
        phoneNumber: "+1-123-123",
        photo:
          "https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png",
      },
      {
        id: 2,
        name: "Robert Pattinson",
        address: "Orlando, Florida, U.S",
        phoneNumber: "+1-123-193",
        photo:
          "https://media.gettyimages.com/id/1446522971/photo/dior-fall-2023-menswear-collection-front-row.jpg?s=1024x1024&w=gi&k=20&c=uQVaRpWPzm4HArW5sS3yuSIoSf81Rwxv8cTh50RkK4c=",
      },
      {
        id: 3,
        name: "Christian Bale",
        address: "Toronto, Canada",
        phoneNumber: "+1-123-163",
        photo:
          "https://media.gettyimages.com/id/1404797416/photo/love-and-thunder-los-angeles-premiere.jpg?s=1024x1024&w=gi&k=20&c=04y1zsrKNugxQ4nAKhe-TCa1pEjlCbHM2P5nxSH905E=",
      },
    ]),
};
