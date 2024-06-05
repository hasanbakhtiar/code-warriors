import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { useLayoutEffect } from 'react';

const ThreeModel = () => {
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    useLayoutEffect(()=>{
        loader.load( '../assets/model/car/scene.gltf', function ( gltf ) {

            scene.add( gltf.scene );
        
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );
    },[])
  return (
    <div>
        
        <div className="sketchfab-embed-wrapper"> <iframe width={700} height={700} title="Nissan Skyline GTR r35" frameBorder={0} allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7b142ea3376e4811a326256c59bbc7a2/embed"> </iframe> </div>

    </div>
  )
}

export default ThreeModel