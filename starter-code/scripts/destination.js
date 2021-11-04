const data = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
};

const chooseStarButton = document.querySelectorAll(".choose-star-button")

const starImage = document.querySelector("#star-image");
const starName = document.querySelector("#star-name");
const starDescription = document.querySelector("#star-description");
const starDistance = document.querySelector("#star-distance");
const starTravelTime = document.querySelector("#star-travel-time");

const infoWrapper = document.querySelector(".info-wrapper")

const chooseStar = (star) => {
  chooseStarButton.forEach(starButton => {
    starButton.classList.remove("active")
  })

  chooseStarButton.forEach(starButton => {
    if(starButton.innerHTML == star){
      starButton.classList.add("active")
    }
  })

  const starIndex = data.destinations.findIndex((item) => item.name == star);

  infoWrapper.classList.add("anim")

  starImage.src = data.destinations[starIndex].images.png;
  starImage.alt = data.destinations[starIndex].name;
  starName.innerHTML = data.destinations[starIndex].name;
  starDescription.innerHTML = data.destinations[starIndex].description;
  starDistance.innerHTML = data.destinations[starIndex].distance;
  starTravelTime.innerHTML = data.destinations[starIndex].travel;
};

infoWrapper.addEventListener("animationend", () => {
  infoWrapper.classList.remove("anim")
})

window.addEventListener("load", () => {
  chooseStarButton.forEach(starButton => {
    starButton.classList.remove("active")
  })

  chooseStarButton.forEach(starButton => {
    if(starButton.innerHTML == "Moon"){
      starButton.classList.add("active")
    }
  })

  starImage.src = data.destinations[0].images.png;
  starImage.alt = data.destinations[0].name;
  starName.innerHTML = data.destinations[0].name;
  starDescription.innerHTML = data.destinations[0].description;
  starDistance.innerHTML = data.destinations[0].distance;
  starTravelTime.innerHTML = data.destinations[0].travel;
})