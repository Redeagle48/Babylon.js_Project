/**
 * This file is all about our scene. It is about to become our main JS file,
 * where we are going to create all of our objects, so keep an eye on this file!
 * As we saw in our previous JS file, we are loading a function named “createSceneTuto” to render the scene,
 * so let’s see what’s inside.
 */

function createSceneTuto(engine) {
    //Creation of the scene
    var scene = new BABYLON.Scene(engine);

    //Adding the light to the scene
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);


    // Basic elements - Parameters are: name, diameter, thickness, tessellation (highly detailed or not), scene, updatable.

    //Creation of 3 boxes and 2 spheres
    var box1 = BABYLON.Mesh.CreateBox("Box1", 6.0, scene);
    var box2 = BABYLON.Mesh.CreateBox("Box2", 6.0, scene);
    var box3 = BABYLON.Mesh.CreateBox("Box3", 6.0, scene);
    var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 6.0, 3.0, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 6.0, 3.0, scene);

    //Positioning the boxes
    box1.position = new BABYLON.Vector3(-20,0,0);
    box2.position.x = -10; // same as: box2.position = new BABYLON.Vector3(-20,0,0);
    box3.position.x = 0;

    //Rotate the box around the x axis
    box1.rotation.x = Math.PI/4; // or box1.rotation = new BABYLON.Vector3(Math.PI/4,0,0);

    //Rotate the box around the y axis
    box2.rotation.y = Math.PI/6;

    //Scaling of 2x on the x axis
    box3.scaling.x = 2;

    //Positioning box3 relative to box1
    box3.parent = box1;
    box3.position.z = -10;

 return scene;
}
