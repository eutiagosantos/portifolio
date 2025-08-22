import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";

const MIXAMO_SRC = "https://threejs.org/examples/models/fbx/mixamo.fbx";
const READYPLAYER_GLTF = "https://threejs.org/examples/models/gltf/readyplayer.me.glb";

const AnimationRetargeting = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.25, 50);
    camera.position.set(0, 3, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0x311649, 0x0c5d68, 2.5);
    scene.add(hemi);
    const dirBack = new THREE.DirectionalLight(0xffffff, 3);
    dirBack.position.set(0, 5, -5);
    scene.add(dirBack);
    const dirKey = new THREE.DirectionalLight(0xfff9ea, 1.5);
    dirKey.position.set(3, 5, 3);
    scene.add(dirKey);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 12;
    controls.target.set(0, 1, 0);
    controls.maxPolarAngle = Math.PI / 2;

    const clock = new THREE.Clock();

    const fbxLoader = new FBXLoader();
    const gltfLoader = new GLTFLoader();

    let source: { clip: THREE.AnimationClip; skeleton: THREE.Skeleton; mixer: THREE.AnimationMixer } | undefined;
    let targetMixer: THREE.AnimationMixer | undefined;
    let disposeTarget: THREE.Object3D | undefined;

    const getSource = (sourceModel: any) => {
      const clip = sourceModel.animations[0] as THREE.AnimationClip;
      const helper = new THREE.SkeletonHelper(sourceModel);
      const skeleton = new THREE.Skeleton(helper.bones as any);
      const mixer = new THREE.AnimationMixer(sourceModel);
      mixer.clipAction(clip).play();
      return { clip, skeleton, mixer };
    };

    const retargetModel = (sourceModel: { clip: THREE.AnimationClip; skeleton: THREE.Skeleton }, targetModel: any) => {
      // Ajuste de escala: Mixamo em cm, three em m
      const targetScene: THREE.Object3D = targetModel.scene;
      const targetSkin = (targetScene.children[0] as any).children[1];

      const retargetOptions = {
        hip: "mixamorigHips",
        scale: 0.01,
        getBoneName: function (bone: any) {
          return "mixamorig" + bone.name;
        },
      } as any;

      const retargetedClip = (SkeletonUtils as any).retargetClip(
        targetSkin,
        sourceModel.skeleton,
        sourceModel.clip,
        retargetOptions
      );

      const mixer = new THREE.AnimationMixer(targetSkin);
      mixer.clipAction(retargetedClip).play();
      return { mixer, targetScene };
    };

    Promise.all([
      new Promise<any>((resolve, reject) => {
        fbxLoader.load(MIXAMO_SRC, resolve, undefined, reject);
      }),
      new Promise<any>((resolve, reject) => {
        gltfLoader.load(READYPLAYER_GLTF, resolve, undefined, reject);
      }),
    ]).then(([sourceModel, targetModel]) => {
      // posicionamento
      const sourceObj = sourceModel as THREE.Object3D as any;
      const targetObj = (targetModel as any).scene as THREE.Object3D;

      sourceObj.position.x -= 0.9;
      targetObj.position.x += 0.9;
      sourceObj.scale.setScalar(0.01);

      scene.add(sourceObj);
      scene.add(targetObj);

      source = getSource(sourceModel);
      const { mixer, targetScene } = retargetModel(source, targetModel);
      targetMixer = mixer;
      disposeTarget = targetScene;
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
      if (source) source.mixer.update(delta);
      if (targetMixer) targetMixer.update(delta);
      controls.update();
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
      if (disposeTarget) disposeTarget.traverse((obj: any) => {
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material as any;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[80vh] rounded-xl overflow-hidden bg-black/30 border border-white/10" />
  );
};

export default AnimationRetargeting;


