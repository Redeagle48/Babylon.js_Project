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

    


    // Basic elements - Parameters are: name, diameter, thickness, tessellation (highly detailed or not), scene, updatable.

    // Character
    var head = BABYLON.Mesh.CreateBox("head", 6.0, scene);
    var body = BABYLON.Mesh.CreateBox("body", 12.0, scene);
    var feet1 = BABYLON.Mesh.CreateBox("feet1", 5.0, scene);
    var feet2 = BABYLON.Mesh.CreateBox("feet2", 5.0, scene);
    
    head.position = new BABYLON.Vector3(0,8,0);
    feet1.position = new BABYLON.Vector3(0,-8,4);
    feet2.position = new BABYLON.Vector3(0,-8,-4);
    
    head.parent = body;
    feet1.parent = body;
    feet2.parent = body;
    
    //Positioning the boxes
    body.position = new BABYLON.Vector3(0,11,0);
    
    // Scene
    var land = BABYLON.Mesh.CreatePlane("Land", 5000.0, scene);
    land.rotation.x = Math.PI/2;
    
    var landMaterial = new BABYLON.StandardMaterial("LandTexture", scene);
    land.material = landMaterial;
    landMaterial.alpha = 0.5;
    //materialSphere1.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.7);
    landMaterial.diffuseTexture = new BABYLON.Texture("grass_texture.jpg", scene);
    
    landMaterial.diffuseTexture.uOffset = 1.5;
	landMaterial.diffuseTexture.vOffset = 0.5;
	
	landMaterial.diffuseTexture.uScale = 125.0;
	landMaterial.diffuseTexture.vScale = 125.0;

    
    
    var animationBox = new BABYLON.Animation(
		"tutoAnimation",
		"position.x",
		30,
		BABYLON.Animation.ANIMATIONTYPE_FLOAT,
		BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	
		// An array with all animation keys
	var keys = [];  
	
	   //At the animation key 0, the value of scaling is "1"
	    keys.push({
	        frame: 0,
	        value: 0
	    });
	
	    //At the animation key 100, the value of scaling is "1"
	    keys.push({
	        frame: 100,
	        value: 40
	    });
	    
	    keys.push({
	        frame: 200,
	        value: 0
	    });
	    
	    
	animationBox.setKeys(keys);
	
	body.animations.push(animationBox);
	
	scene.beginAnimation(body, 0, 200, true);
	
	//Adding an Arc Rotate Camera
    //var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 200, new BABYLON.Vector3.Zero(), scene);
    var camera2 = new BABYLON.ArcRotateCamera("Camera2", 0, 0.8, 500, new BABYLON.Vector3.Zero(), scene);
    scene.activeCameras.push(camera);
	scene.activeCameras.push(camera2);
	camera.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 1.0);
	camera2.viewport = new BABYLON.Viewport(0, 0, 0.5, 1.0);
	
 return scene;
}
