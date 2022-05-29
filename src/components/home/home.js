import React, { useState, useEffect } from 'react';
import * as THREE from 'three/build/three.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import mineTheme from '../../media/images/mine-theme.jpg';
import './home.sass';

let obj, scene, camera, renderer, mixer, clock, cameraElemennt;

const Home = () => {
    const [objectScene, setScene] = useState(null);

    const checkMousemove = (event) => {
        if (obj) {
            // obj.scene.rotation.y = (event.clientX - (window.innerWidth / 2)) / 1000 - 3.15;
        }
    }

    const setAvailableMousMove = () => {
        cameraElemennt = document.getElementById('3d');
        cameraElemennt.addEventListener('mousemove', checkMousemove);
    }

    const animate = () => {
        requestAnimationFrame(animate);

        if (obj) {
            let delta = clock.getDelta();
  
        if (mixer) mixer.update( delta )
            renderer.render(scene, camera);
        }
    }

    const set3DObject = () => {
        scene = new THREE.Scene();
        clock = new THREE.Clock();
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.z = 7;

        renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
        renderer.setClearColor( 0x000000, 0);
        renderer.setSize( window.innerWidth / 1.5, 200 );
        document.getElementById('3d').appendChild( renderer.domElement );

        const aLight = new THREE.AmbientLight(0x404040, 1.2);
        scene.add(aLight);

        const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
        pLight.position.set(7, 7, 7);
        scene.add(pLight);

        let loader = new GLTFLoader();

        loader.load('/3d/scene.gltf', function(gltf) {
            mixer = new THREE.AnimationMixer(gltf.scene)
            mixer.clipAction(gltf.animations[3]).play();
            obj = gltf;
            obj.scene.rotation.y = 2;
            obj.scene.position.x = 5;
            obj.scene.position.y = -4;
            obj.scene.scale.set(1, 2, 1);
            scene.add(obj.scene);
            setScene(obj);
            
            setAvailableMousMove();
            animate();
        })
    }

    useEffect(() => {
        set3DObject();
    }, [])
    return(
        <section className="home">
            <h1 className="home__head">Добро пожаловать, мы рады каждому игроку!</h1>
            <div className="home__img-container">
                <img className="home__img" src={mineTheme}/>
                <div className="home__canvas" id="3d">

                </div>
            </div>
            <div className="home__info">
                Здесь будет информация о том, какие моды присутствуют на сервере и другая полезная информация.
            </div>
        </section>
    )
}

export default Home;
