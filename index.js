/*Es importante tener en cuenta que las distancias reales de cada planeta son muy grandes,
 por lo que para poder visualizarlos en la pantalla, se ha reducido la escala de las órbitas. 
 Por ejemplo, la órbita de la Tierra tiene un semieje mayor de aproximadamente 149.60 millones de kilómetros,
  pero en el código se ha reducido a 149.60 píxeles. Esto significa que cada píxel representa un millón de kilómetros.
   Por lo tanto, si la Tierra está a 100 píxeles del Sol, en realidad está a 100 millones de kilómetros del Sol.

  Mercurio:

Semieje Mayor: alrededor de 57.91 millones de kilómetros.
Semieje Menor: alrededor de 54.66 millones de kilómetros.
  Venus:

Semieje Mayor: aproximadamente 108.21 millones de kilómetros.
Semieje Menor: aproximadamente 107.48 millones de kilómetros.
  Tierra:

Semieje Mayor: aproximadamente 149.60 millones de kilómetros.
Semieje Menor: aproximadamente 149.58 millones de kilómetros.
  Marte:

Semieje Mayor: alrededor de 227.92 millones de kilómetros.
Semieje Menor: aproximadamente 227.38 millones de kilómetros.
  Júpiter:

Semieje Mayor: aproximadamente 778.57 millones de kilómetros.
Semieje Menor: aproximadamente 777.47 millones de kilómetros.
  Saturno:

Semieje Mayor: alrededor de 1.42 mil millones de kilómetros.
Semieje Menor: aproximadamente 1.41 mil millones de kilómetros.
  Urano:

Semieje Mayor: aproximadamente 2.87 mil millones de kilómetros.
Semieje Menor: aproximadamente 2.86 mil millones de kilómetros.
  Neptuno:

Semieje Mayor: alrededor de 4.50 mil millones de kilómetros.
Semieje Menor: aproximadamente 4.49 mil millones de kilómetros.

Estos valores son aproximados y pueden variar debido a las excentricidades orbitales de los planetas, que afectan la forma exacta de sus órbitas elípticas.*/

const planets = [
  {
    majorSemiaxis: 158,
    minorSemiaxis: 155,
    initialPosX: 0,
    initialPosY: 0,
    duration: 2.88,
    element: document.querySelector("#mercury"),
  },
  {
    majorSemiaxis: 158 * 1.9,
    minorSemiaxis: 158 * 1.8,
    initialPosX: 0,
    initialPosY: 0,
    duration: 7.44,
    element: document.querySelector("#venus"),
  },
  {
    majorSemiaxis: 158 * 2.9,
    minorSemiaxis: 158 * 2.7,
    initialPosX: 0,
    initialPosY: 0,
    duration: 12,
    element: document.querySelector("#earth"),
  },
  {
    majorSemiaxis: 158 * 3.9,
    minorSemiaxis: 158 * 3.6,
    initialPosX: 0,
    initialPosY: 0,
    duration: 22.56,
    element: document.querySelector("#mars"),
  },
  {
    majorSemiaxis: 158 * 4.9,
    minorSemiaxis: 158 * 4.5,
    initialPosX: 0,
    initialPosY: 0,
    duration: 142.32,
    element: document.querySelector("#jupiter"),
  },
  {
    majorSemiaxis: 158 * 6.7,
    minorSemiaxis: 158 * 6.3,
    initialPosX: 0,
    initialPosY: 0,
    duration: 353.52,
    element: document.querySelector("#saturn"),
  },
  {
    majorSemiaxis: 158 * 9.9,
    minorSemiaxis: 158 * 8.2,
    initialPosX: 0,
    initialPosY: 0,
    duration: 1008.12,
    element: document.querySelector("#uranus"),
  },
  {},
];

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.transform = "scale(0.38)";
});

let isKid = true;

function age() {
  isKid = isKid ? false : true;
}

const sun = document.querySelector("#sun");
sun.addEventListener("click", () => {
  const urlSol = "https://spaceplace.nasa.gov/menu/sun/";
  const urlSolnotKid = "https://en.wikipedia.org/wiki/Sun";

  window.open(isKid ? urlSol : urlSolnotKid);
});

const mercury = document.querySelector("#mercury");
mercury.addEventListener("click", () => {
  const urlMercury = "https://spaceplace.nasa.gov/all-about-mercury/en/";
  const urlMercurynotKid = "https://en.wikipedia.org/wiki/Mercury_(planet)";
  window.open(isKid ? urlMercury : urlMercurynotKid);
});

const venus = document.querySelector("#venus");
venus.addEventListener("click", () => {
  const urlVenus = "https://spaceplace.nasa.gov/all-about-venus/en/";
  const urlVenusnotKid = "https://en.wikipedia.org/wiki/Venus";
  window.open(isKid ? urlVenus : urlVenusnotKid);
});

const earth = document.querySelector("#earth");
earth.addEventListener("click", () => {
  const urlEarth = "https://spaceplace.nasa.gov/all-about-earth/en/";
  const urlEarthnotKid = "https://en.wikipedia.org/wiki/Earth";
  window.open(isKid ? urlEarth : urlEarthnotKid);
});

const jupiter = document.querySelector("#jupiter");
jupiter.addEventListener("click", () => {
  const urlJupiter = "https://spaceplace.nasa.gov/all-about-jupiter/en/";
  const urlJupiternotKid = "https://en.wikipedia.org/wiki/Jupiter";
  window.open(isKid ? urlJupiter : urlJupiternotKid);
});

const saturn = document.querySelector("#saturn");
saturn.addEventListener("click", () => {
  const urlSaturn = "https://spaceplace.nasa.gov/all-about-saturn/en/";
  const urlSaturnnotKid = "https://en.wikipedia.org/wiki/Saturn";
  window.open(isKid ? urlSaturn : urlSaturnnotKid);
});

const uranus = document.querySelector("#uranus");
uranus.addEventListener("click", () => {
  const urlUranus = "https://spaceplace.nasa.gov/all-about-uranus/en/";
  const urlUranusnotKid = "https://en.wikipedia.org/wiki/Uranus";
  window.open(isKid ? urlUranus : urlUranusnotKid);
});

const mars = document.querySelector("#mars");
mars.addEventListener("click", () => {
  const urlMars = "https://spaceplace.nasa.gov/all-about-mars/en/";
  const urlMarsnotKid = "https://en.wikipedia.org/wiki/Mars";
  window.open(isKid ? urlMars : urlMarsnotKid);
});

function ellipseCoodinatesCalculation(majorSemiaxis, minorSemiaxis, ix, iy, t) {
  const positionX = ix + majorSemiaxis * Math.cos(t);
  const positionY = iy + minorSemiaxis * Math.sin(t);

  return { positionX, positionY };
}

function planetAnimation(
  majorSemiaxis,
  minorSemiaxis,
  initialPosX,
  initialPosY,
  duration,
  element
) {
  let startTime;

  function animacionLoop(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }

    let timeMultiplier = 1000;
    const progress = (currentTime - startTime) / (duration * timeMultiplier);

    if (progress <= 1) {
      const t = progress * 2 * Math.PI + Math.PI / 6;
      const { positionX, positionY } = ellipseCoodinatesCalculation(
        majorSemiaxis,
        minorSemiaxis,
        initialPosX,
        initialPosY,
        t
      );

      element.style.transform = `translate(${positionX}px, ${positionY}px)`;
      requestAnimationFrame(animacionLoop);
    } else {
      startTime = 0;
      planetAnimation(
        majorSemiaxis,
        minorSemiaxis,
        initialPosX,
        initialPosY,
        duration,
        element
      );
    }
  }
  requestAnimationFrame(animacionLoop);
}
for (const planet of planets) {
  planetAnimation(
    planet.majorSemiaxis,
    planet.minorSemiaxis,
    planet.initialPosX,
    planet.initialPosY,
    planet.duration,
    planet.element
  );
}
