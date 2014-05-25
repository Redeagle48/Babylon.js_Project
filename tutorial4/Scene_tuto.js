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
	
	//Creation of spheres
    var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 10.0, 6.0, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 2.0, 7.0, scene);
    var sphere3 = BABYLON.Mesh.CreateSphere("Sphere3", 10.0, 8.0, scene);
    
    //Positioning the meshes
    sphere1.position.x = -40;
    sphere2.position.x = -30;
    
    var materialSphere1 = new BABYLON.StandardMaterial("texture1", scene);
    sphere1.material = materialSphere1;
    materialSphere1.alpha = 0.5;
    materialSphere1.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.7);
    //materialSphere1.diffuseTexture = new BABYLON.Texture("grass_texture.jpg", scene);

    
    //materialSphere1.diffuseTexture.uOffset = 1.5;
	//materialSphere1.diffuseTexture.vOffset = 0.5;
	
	//materialSphere1.diffuseTexture.uScale = 5.0;
	//materialSphere1.diffuseTexture.vScale = 5.0;
	
	//materialSphere1.diffuseTexture.hasAlpha = true;
	
	//materialSphere1.emissiveColor = new BABYLON.Color3(1, .2, .7);
	// materialSphere1.emissiveTexture = new BABYLON.Texture("grass.png", scene); - USE TEXTURE AS EMISSIVE COLOR
	
	//materialSphere1.ambientColor = new BABYLON.Color3(1, 0.2, 0.7);
	//materialSphere1.ambientTexture = new BABYLON.Texture("grass.png", scene); - USE TEXTURE AS AMBIENT COLOR
	
	//materialSphere1.specularColor = new BABYLON.Color3(1.0, 0.2, 0.7);
	//materialSphere1.specularTexture = new BABYLON.Texture("grass.png", scene); - USE TEXTURE AS SPECULAR COLOR
	//materialSphere1.specularPower = 32;
    
    materialSphere1.backFaceCulling = false;
	
	materialSphere1.wireframe = true;

 return scene;
}
