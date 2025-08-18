import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const TROOPER_DAE = "https://threejs.org/examples/models/collada/stormtrooper/stormtrooper.dae";

const AboutTrooper = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(25, width / height, 1, 1000);
    camera.position.set(15, 10, -15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;
    controls.minDistance = 5;
    controls.maxDistance = 40;
    controls.target.set(0, 2, 0);
    controls.update();

    const clock = new THREE.Clock();
    let mixer: THREE.AnimationMixer | undefined;

    // Grid opcional para referência
    const gridHelper = new THREE.GridHelper(10, 20, 0xc1c1c1, 0x8d8d8d);
    scene.add(gridHelper);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1.5, 1, -1.5);
    scene.add(directionalLight);

    const loader = new ColladaLoader();
    loader.load(TROOPER_DAE, (collada) => {
      const avatar = collada.scene as THREE.Object3D;
      const animations = (avatar as any).animations as THREE.AnimationClip[];
      if (animations && animations.length > 0) {
        mixer = new THREE.AnimationMixer(avatar);
        mixer.clipAction(animations[0]).play();
      }
      scene.add(avatar);
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
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
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
    <div ref={containerRef} className="w-full h-96 rounded-2xl overflow-hidden bg-transparent" />
  );
};

export default AboutTrooper;


