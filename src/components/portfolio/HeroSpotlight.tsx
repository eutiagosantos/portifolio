import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

const COLORS_MAP = "https://threejs.org/examples/textures/colors.png";
const LUCY_PLY = "https://threejs.org/examples/models/ply/binary/Lucy100k.ply";

const HeroSpotlight = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    camera.position.set(5.5, 3.2, 0.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1.2;
    controls.maxDistance = 6;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 1, 0);
    controls.update();

    const ambient = new THREE.HemisphereLight(0xffffff, 0x0a2e24, 0.25);
    scene.add(ambient);

    const textures: Record<string, THREE.Texture | null> = { none: null };
    const loader = new THREE.TextureLoader();
    const colors = loader.load(COLORS_MAP);
    colors.minFilter = THREE.LinearFilter;
    colors.magFilter = THREE.LinearFilter;
    colors.generateMipmaps = false;
    colors.colorSpace = THREE.SRGBColorSpace;
    textures["colors.png"] =  colors;

    const spotLight = new THREE.SpotLight(0x8df0cc, 80);
    spotLight.map = colors;
    spotLight.position.set(2.5, 5, 2.5);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.distance = 0;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.focus = 1;
    spotLight.shadow.bias = -0.003;
    scene.add(spotLight);

    const lightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(lightHelper);

    // Removido o plano do chão para manter o fundo transparente e deixar o gradiente do Hero aparecer

    const plyLoader = new PLYLoader();
    plyLoader.load(LUCY_PLY, (geometry) => {
      geometry.scale(0.0028, 0.0028, 0.0028);
      geometry.computeVertexNormals();
      const mat = new THREE.MeshLambertMaterial();
      const mesh = new THREE.Mesh(geometry, mat);
      mesh.rotation.y = -Math.PI / 2;
      mesh.position.y = 0.8;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
    });

    let rafId = 0;
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const animate = () => {
      const time = performance.now() / 1500; // velocidade 2x
      spotLight.position.x = Math.cos(time) * 2.5;
      spotLight.position.z = Math.sin(time) * 2.5;
      lightHelper.update();
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[320px] md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden bg-transparent" />
  );
};

export default HeroSpotlight;


