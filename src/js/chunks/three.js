import * as THREE from 'three';

const three = {
	init: function () {
		const scene = new THREE.Scene();
		const axes = new THREE.AxesHelper(5);
		scene.add(axes);

		const geometry = new THREE.SphereGeometry(3, 64, 64);
		const material = new THREE.MeshStandardMaterial({
			color: '#00ff83',
		});
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const light = new THREE.PointLight(0xffffff, 1, 100);
		light.position.set(0, 10, 10);
		scene.add(light);

		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
		camera.position.z = 20;
		scene.add(camera);

		const canvas = document.querySelector('.canvas');
		const renderer = new THREE.WebGLRenderer({
			canvas,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	},
};

export default three;
