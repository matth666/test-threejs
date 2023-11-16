import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 30, 80);
controls.autoRotate = true;
controls.update();

const star = new THREE.SphereGeometry(6);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffea00 });
const sun = new THREE.Mesh(star, starMaterial);
sun.position.set(0, 0, 0);

const planetI = new THREE.SphereGeometry(0.5);
const planetIMaterial = new THREE.MeshBasicMaterial({ color: 0xffbe0b });
const mercury = new THREE.Mesh(planetI, planetIMaterial);
mercury.position.set(8, 0, 0);

const planetII = new THREE.SphereGeometry(0.7);
const planetIIMaterial = new THREE.MeshBasicMaterial({ color: 0xe85d04 });
const venus = new THREE.Mesh(planetII, planetIIMaterial);
venus.position.set(-10, 0, -3);

const earthAndMoon = new THREE.Group();
const planetIII = new THREE.SphereGeometry(0.7);
const planetIIIMaterial = new THREE.MeshBasicMaterial({ color: 0x00a8e8 });
const earth = new THREE.Mesh(planetIII, planetIIIMaterial);
earth.position.set(0, 0, 0);
const earthMoonA = new THREE.SphereGeometry(0.15);
const earthMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0xe7ecef });
const moon = new THREE.Mesh(earthMoonA, earthMoonAMaterial);
moon.position.set(0.5, 0, 1);
earthAndMoon.add(earth);
earthAndMoon.add(moon);
earthAndMoon.position.set(15, 0, 3);

const marsAndMoons = new THREE.Group();
const planetIV = new THREE.SphereGeometry(0.8);
const planetIVMaterial = new THREE.MeshBasicMaterial({ color: 0xad2831 });
const mars = new THREE.Mesh(planetIV, planetIVMaterial);
mars.position.set(0, 0, 0);
const marsMoonA = new THREE.SphereGeometry(0.1);
const marsMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0xe7ecef });
const phobos = new THREE.Mesh(marsMoonA, marsMoonAMaterial);
phobos.position.set(0.5, 0, 1);
const marsMoonB = new THREE.SphereGeometry(0.1);
const marsMoonBMaterial = new THREE.MeshBasicMaterial({ color: 0xe7ecef });
const deimos = new THREE.Mesh(marsMoonB, marsMoonBMaterial);
deimos.position.set(-0.5, 0, -1.2);
marsAndMoons.add(mars);
marsAndMoons.add(deimos);
marsAndMoons.add(phobos);
marsAndMoons.position.set(-20, 0, 0);

const jupiterAndMoons = new THREE.Group();
const planetV = new THREE.SphereGeometry(1.8);
const planetVMaterial = new THREE.MeshBasicMaterial({ color: 0xffbf69 });
const jupiter = new THREE.Mesh(planetV, planetVMaterial);
jupiter.position.set(0, 0, 0);
const jupiterMoonA = new THREE.SphereGeometry(0.2);
const jupiterMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0xfcca46 });
const io = new THREE.Mesh(jupiterMoonA, jupiterMoonAMaterial);
io.position.set(2.4, 0, 0);
const jupiterMoonB = new THREE.SphereGeometry(0.2);
const jupiterMoonBMaterial = new THREE.MeshBasicMaterial({ color: 0xcae9ff });
const europe = new THREE.Mesh(jupiterMoonB, jupiterMoonBMaterial);
europe.position.set(-2.8, 0, 0);
const jupiterMoonC = new THREE.SphereGeometry(0.2);
const jupiterMoonCMaterial = new THREE.MeshBasicMaterial({ color: 0xb49286 });
const ganymede = new THREE.Mesh(jupiterMoonC, jupiterMoonCMaterial);
ganymede.position.set(3.2, 0, -2);
const jupiterMoonD = new THREE.SphereGeometry(0.2);
const jupiterMoonDMaterial = new THREE.MeshBasicMaterial({ color: 0xee6c4d });
const callisto = new THREE.Mesh(jupiterMoonD, jupiterMoonDMaterial);
callisto.position.set(-1.4, 0, 4);
jupiterAndMoons.add(jupiter);
jupiterAndMoons.add(io);
jupiterAndMoons.add(europe);
jupiterAndMoons.add(ganymede);
jupiterAndMoons.add(callisto);
jupiterAndMoons.position.set(25, 0, 0);

const saturnAndMoons = new THREE.Group();
const planetVI = new THREE.SphereGeometry(1.5);
const planetVIMaterial = new THREE.MeshBasicMaterial({ color: 0xeed7c5 });
const saturn = new THREE.Mesh(planetVI, planetVIMaterial);
saturn.position.set(0, 0, 0);
const saturnMoonA = new THREE.SphereGeometry(0.13);
const saturnMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const thetys = new THREE.Mesh(saturnMoonA, saturnMoonAMaterial);
thetys.position.set(2, 0, 0);
const saturnMoonB = new THREE.SphereGeometry(0.13);
const saturnMoonBMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const dione = new THREE.Mesh(saturnMoonB, saturnMoonBMaterial);
dione.position.set(-1.7, 0, 1.2);
const saturnMoonC = new THREE.SphereGeometry(0.13);
const saturnMoonCMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const rhea = new THREE.Mesh(saturnMoonC, saturnMoonCMaterial);
rhea.position.set(1.3, 0, 2);
const saturnMoonD = new THREE.SphereGeometry(0.17);
const saturnMoonDMaterial = new THREE.MeshBasicMaterial({ color: 0xffc971 });
const titan = new THREE.Mesh(saturnMoonD, saturnMoonDMaterial);
titan.position.set(-1.8, 0, -1.3);
const saturnMoonE = new THREE.SphereGeometry(0.13);
const saturnMoonEMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const hyperion = new THREE.Mesh(saturnMoonE, saturnMoonEMaterial);
hyperion.position.set(0, 0, -2.5);
saturnAndMoons.add(saturn);
saturnAndMoons.add(thetys);
saturnAndMoons.add(dione);
saturnAndMoons.add(rhea);
saturnAndMoons.add(titan);
saturnAndMoons.add(hyperion);
saturnAndMoons.position.set(-30, 0, -7);

const uranusAndMoons = new THREE.Group();
const planetVII = new THREE.SphereGeometry(1);
const planetVIIMaterial = new THREE.MeshBasicMaterial({ color: 0x56cfe1 });
const uranus = new THREE.Mesh(planetVII, planetVIIMaterial);
uranus.position.set(0, 0, 0);
const uranusMoonA = new THREE.SphereGeometry(0.13);
const uranusMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const miranda = new THREE.Mesh(uranusMoonA, uranusMoonAMaterial);
miranda.position.set(1.7, 0, 0);
const uranusMoonB = new THREE.SphereGeometry(0.13);
const uranusMoonBMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const ariel = new THREE.Mesh(uranusMoonB, uranusMoonBMaterial);
ariel.position.set(-1.4, 0, 1.2);
const uranusMoonC = new THREE.SphereGeometry(0.13);
const uranusMoonCMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const umbriel = new THREE.Mesh(uranusMoonC, uranusMoonCMaterial);
umbriel.position.set(2, 0, 1.2);
const uranusMoonD = new THREE.SphereGeometry(0.13);
const uranusMoonDMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const titania = new THREE.Mesh(uranusMoonD, uranusMoonDMaterial);
titania.position.set(-1.8, 0, -1);
const uranusMoonE = new THREE.SphereGeometry(0.13);
const uranusMoonEMaterial = new THREE.MeshBasicMaterial({ color: 0x5f7470 });
const oberon = new THREE.Mesh(uranusMoonE, uranusMoonEMaterial);
oberon.position.set(0, 0, -2.2);
uranusAndMoons.add(uranus);
uranusAndMoons.add(miranda);
uranusAndMoons.add(ariel);
uranusAndMoons.add(umbriel);
uranusAndMoons.add(titania);
uranusAndMoons.add(oberon);
uranusAndMoons.position.set(35, 0, 8);

const neptuneAndMoon = new THREE.Group();
const planetVIII = new THREE.SphereGeometry(1);
const planetVIIIMaterial = new THREE.MeshBasicMaterial({ color: 0x4895ef });
const neptune = new THREE.Mesh(planetVIII, planetVIIIMaterial);
neptune.position.set(0, 0, 0);
const neptuneMoonA = new THREE.SphereGeometry(0.15);
const neptuneMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0xe2711d });
const triton = new THREE.Mesh(neptuneMoonA, neptuneMoonAMaterial);
triton.position.set(1.5, 0, 1);
neptuneAndMoon.add(neptune);
neptuneAndMoon.add(triton);
neptuneAndMoon.position.set(-40, 0, 0);

const plutonAndMoon = new THREE.Group();
const planetIX = new THREE.SphereGeometry(0.3);
const planetIXMaterial = new THREE.MeshBasicMaterial({ color: 0xffb563 });
const pluton = new THREE.Mesh(planetIX, planetIXMaterial);
pluton.position.set(0, 0, 0);
const plutonMoonA = new THREE.SphereGeometry(0.1);
const plutonMoonAMaterial = new THREE.MeshBasicMaterial({ color: 0x5c677d });
const charon = new THREE.Mesh(plutonMoonA, plutonMoonAMaterial);
charon.position.set(0.4, 0, 0.6);
plutonAndMoon.add(pluton);
plutonAndMoon.add(charon);
plutonAndMoon.position.set(45, 0, 0);

const sol = new THREE.Group();
sol.add(sun);
sol.add(mercury);
sol.add(venus);
sol.add(earthAndMoon);
sol.add(marsAndMoons);
sol.add(jupiterAndMoons);
sol.add(saturnAndMoons);
sol.add(uranusAndMoons);
sol.add(neptuneAndMoon);
//sol.add(plutonAndMoon);
scene.add(sol);

const planetsRotation = () => {
  mercury.rotation.x += 0.01;
  venus.rotation.x += 0.01;
  earth.rotation.x += 0.01;
  mars.rotation.x += 0.01;
  jupiter.rotation.x += 0.01;
  saturn.rotation.x += 0.01;
  uranus.rotation.x += 0.01;
  neptune.rotation.x += 0.01;
  pluton.rotation.x += 0.01;
};

const animate = () => {
  requestAnimationFrame(animate);
  planetsRotation();
  controls.update();
  renderer.render(scene, camera);
};
animate();
