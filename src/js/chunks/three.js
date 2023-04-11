import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const three = {
	main: function () {
		// scene
		const scene = new THREE.Scene();

		// shape
		const geometry = new THREE.SphereGeometry(3, 64, 64);
		const material = new THREE.MeshStandardMaterial({
			color: '#ffffff',
		});
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		// light
		const light = new THREE.PointLight(0xffffff, 1, 100);
		light.position.set(0, 10, 10);
		scene.add(light);

		// sizes
		const size = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		// camera
		const camera = new THREE.PerspectiveCamera(45, size.width / size.height);
		camera.position.z = 20;
		scene.add(camera);

		// rendering
		const canvas = document.querySelector('.canvas');
		const renderer = new THREE.WebGLRenderer({
			canvas,
		});
		renderer.setSize(size.width, size.height);
		renderer.render(scene, camera);

		// controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.enablePan = false;
		controls.enableZoom = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 5;

		// window resize
		window.addEventListener('resize', () => {
			size.width = window.innerWidth;
			size.height = window.innerHeight;
			renderer.setSize(size.width, size.height);
			camera.aspect = size.width / size.height;
			camera.updateProjectionMatrix();
		});

		const loop = () => {
			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(loop);
		};
		loop();
	},
};

export default three;
