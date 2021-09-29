
const panorama = new PANOLENS.ImagePanorama( '/assets/image/anh360/tesst.jpg' );

var container = document.querySelector('.video');


const viewer = new PANOLENS.Viewer({
    container: container,
    initialLookAt : new  THREE.Vector3(5000.00, 178.96, 1587.13),
    autoHideInfospot: false,
    cameraFov:60,
    indicatorSize:60,
    reverseDragging:false,
    viewIndicator:true,
    autoRotate:true,
    autoRotateSpeed:0.35,
    autoRotateActivationDuration:5000,
    dwellTime:1500,
    autoReticleSelect:true,
        
});

viewer.add(panorama);

