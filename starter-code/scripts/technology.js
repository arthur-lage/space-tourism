const data = {
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

const chooseTechnologyButtons = document.querySelectorAll(".choose-technology");

const technologyName = document.querySelector("#technology-name");
const technologyDescription = document.querySelector("#technology-description");
const technologyImage = document.querySelector("#technology-image");

const infoWrapper = document.querySelector(".tech-information");

const chooseTechnology = (index) => {
  chooseTechnologyButtons.forEach((button) => {
    button.classList.remove("active");
  });

  infoWrapper.classList.add("anim");

  technologyName.innerHTML = data.technology[index].name;
  technologyDescription.innerHTML = data.technology[index].description;
  technologyImage.alt = data.technology[index].name;

  if (window.screen.width == 375 || window.screen.width == 768) {
    technologyImage.src = data.technology[index].images.landscape;
  } else {
    technologyImage.src = data.technology[index].images.portrait;
  }
};

infoWrapper.addEventListener("animationend", () => {
  infoWrapper.classList.remove("anim");
});

window.addEventListener("load", () => {
  technologyName.innerHTML = data.technology[0].name;
  technologyDescription.innerHTML = data.technology[0].description;
  technologyImage.alt = data.technology[0].name;

  if (window.screen.width == 375 || window.screen.width == 768) {
    technologyImage.src = data.technology[0].images.landscape;
  } else {
    technologyImage.src = data.technology[0].images.portrait;
  }
});

const makeActive = (e) => {
  e.classList.add("active");
};
