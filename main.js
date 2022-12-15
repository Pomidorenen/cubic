var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry( 10, 10, 10);
var group = new THREE.Object3D();
var group2 = new THREE.Object3D();
var group3 = new THREE.Object3D();
var group4 = new THREE.Object3D();
var light= new THREE.DirectionalLight(0xffffff,1)
light.position.x=100
light.position.y=100
light.position.z=100
ao=new THREE.AmbientLight(0xffffff,0.5)
group.receiveShadow = true
scene.background = new THREE.Color(0xf2af02);
cubic(group)
cubic(group2)
cubic(group3)
cubic(group4)
group2.position.x=75
group3.position.x=-75
group4.position.x=-150
plane = new THREE.Mesh(new THREE.BoxGeometry( 300, 300, 300), new THREE.MeshPhongMaterial({ color: 0xfff}));
plane.position.x=0
plane.rotation.x = - Math.PI / 2
plane.receiveShadow = true
scene.add(plane);
scene.add( group2 );
scene.add( group );
scene.add( group3 );
scene.add( group4 );
scene.add(ao)
scene.add(light)
camera.position.z = 105;
i=0
function render() {
    requestAnimationFrame( render );
    // i+=20
    // ai=i/Math.PI
    // ai=Math.cos(ai)
    // for(i=0;i<27;i++)
    // {
    //         group.children[i].rotation.z+=ai

    // }
    group2.rotation.x-=0.001
    group2.rotation.y-=0.003
    group.rotation.x+=0.001
    group.rotation.y+=0.003
    group3.rotation.z+=0.001
    group3.rotation.y+=0.003
    group4.rotation.x-=0.001
    group4.rotation.z-=0.003
  renderer.render( scene, camera );
}
render();
function cubic(gr)
{
    for(j=0;j<3;j++)
{
    for(i=0;i<9;i++)
    {   
        color= 0xffffff
        if(((i+(j))%2))
        {
            color= 0x01010
        }
        var material = new THREE.MeshBasicMaterial( { color: color } );
        var cube = new THREE.Mesh( geometry, material );
        r=((i))%3
        c=((i-r))/3
        cube.position.z=j*10;
        cube.position.x=10*c;
        cube.position.y=10*r;
        gr.add(cube)
    }
}

}
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