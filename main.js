var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry( 10, 10, 10);
var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 105;
function render() {
    requestAnimationFrame( render );
    cube.rotation.x =60;
    cube.rotation.y =45; 
    cube.position.x+=0.1;
  renderer.render( scene, camera );
}
render();

function update() {
    arr = getTimeNow()
    console.log(arr)
    string = ""
    for (i = 0; i < (arr.length); i++) {
        if(arr[i]<10)
        {
            arr[i]="0"+arr[i]
        }
        string += arr[i] + ":"
    }
    console.log(string)
    string = string.slice(0, -1);
    clock.innerHTML = string;
}

function getTimeNow() {
    let date = new Date();
    arr = [date.getHours(), date.getMinutes(), date.getSeconds()];
    return arr;
}
setInterval(update, 1000);