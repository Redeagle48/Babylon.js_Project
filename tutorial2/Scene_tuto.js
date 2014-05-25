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
    
    // Create a box
	var box = BABYLON.Mesh.CreateBox("Box", 6.0, scene);
	
	// Create a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
	
	// Create a plane
	var plan = BABYLON.Mesh.CreatePlane("Plane", 50.0, scene);
	
	// Create a cylinder
	var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, scene, false);

	// Create a torus
	var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);
 
 
 	box.position = new BABYLON.Vector3(-10,0,0);
 
 return scene;
}