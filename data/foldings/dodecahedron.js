// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'folding' + divNumber );
var renderer = foldingRenderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.insertBefore(renderer.domElement, container.childNodes[0]);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(zoom, rendererWidth/rendererHeight, 0.1, 1000);

   camera.position.set(0, 0, 5);
   camera.lookAt(0, 0, 0);
   camera.up.set(0, 1, 0);

   // class to allow move points together with labels and spheres
   var PMPoint = function (x,y,z) {
      this.vector = new THREE.Vector3(x,y,z);
      this.sprite = null;
      this.sphere = null;
   }
   PMPoint.prototype.makelabel = function(label) {
      this.sprite = textSprite( label );
      this.sprite.position.copy(this.vector);
   }
   PMPoint.prototype.makesphere = function(radius,material) {
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(radius), material);
      this.sphere.position.copy(this.vector);
   }

   PMPoint.prototype.setX = function(x) {
      this.vector.setX(x);
      if (this.sprite) {
         this.sprite.position.setX(x);
      }
      if (this.sphere) {
         this.sphere.position.setX(x);
      }
   };
   PMPoint.prototype.setY = function(y) {
      this.vector.setY(y);
      if (this.sprite) {
         this.sprite.position.setY(y);
      }
      if (this.sphere) {
         this.sphere.position.setY(y);
      }
   };
   PMPoint.prototype.setZ = function(z) {
      this.vector.setZ(z);
      if (this.sprite) {
         this.sprite.position.setZ(z);
      }
      if (this.sphere) {
         this.sphere.position.setZ(z);
      }
   };
   PMPoint.prototype.set = function(x,y,z) {
      this.vector.set(x,y,z);
      if (this.sprite) {
         this.sprite.position.set(x,y,z);
      }
      if (this.sphere) {
         this.sphere.position.set(x,y,z);
      }
   };
   PMPoint.prototype.add = function(o) {
      if (this.sprite) {
         o.add(this.sprite);
      }
      if (this.sphere) {
         o.add(this.sphere);
      }
   };


   var controls = new THREE.TrackballControls(camera, container);

   controls.noPan = controlsNoPan;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var axes = [[22,21],
      [15,14],
      [9,8],
      [10,9],
      [7,6],
      [6,5],
      [2,1],
      [3,2],
      [0,4],
      [4,3],
      [1,0]];

   var angles = [2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957,
      2.0344439357957];

   var subtrees = [[35,36,37],
      [32,33,34],
      [29,30,31],
      [26,27,28],
      [23,24,25],
      [20,21,22,35,36,37],
      [17,18,19],
      [14,15,16,32,33,34],
      [11,12,13],
      [8,9,10,26,27,28,29,30,31],
      [5,6,7,20,21,22,23,24,25,35,36,37]];

   var polytoperoot = [[0,0.35682208977309,-0.934172358962715],
      [1,6.55762197081071e-16,-1.61803398874989],
      [0.35682208977309,-1.2909944487358,0.220528179416535]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.713644, 0, 0));
   allpoints.push(new PMPoint(0.934172, 0.678716, 0));
   allpoints.push(new PMPoint(0.356822, 1.09819, 0));
   allpoints.push(new PMPoint(-0.220528, 0.678716, 0));
   allpoints.push(new PMPoint(-0.220528, -0.678716, 0));
   allpoints.push(new PMPoint(0.356822, -1.09819, 0));
   allpoints.push(new PMPoint(0.934172, -0.678716, 0));
   allpoints.push(new PMPoint(0.136294, 1.7769, 0));
   allpoints.push(new PMPoint(-0.57735, 1.7769, 0));
   allpoints.push(new PMPoint(-0.797878, 1.09819, 0));
   allpoints.push(new PMPoint(-0.934172, 0.678716, 0));
   allpoints.push(new PMPoint(-1.1547, 0, 0));
   allpoints.push(new PMPoint(-0.57735, -0.41947, 0));
   allpoints.push(new PMPoint(1.51152, 1.09819, 0));
   allpoints.push(new PMPoint(1.29099, 1.7769, 0));
   allpoints.push(new PMPoint(0.57735, 1.7769, 0));
   allpoints.push(new PMPoint(1.29099, -0.41947, 0));
   allpoints.push(new PMPoint(1.86834, 0, 0));
   allpoints.push(new PMPoint(1.64782, 0.678716, 0));
   allpoints.push(new PMPoint(-0.797878, -1.09819, 0));
   allpoints.push(new PMPoint(-0.57735, -1.7769, 0));
   allpoints.push(new PMPoint(0.136294, -1.7769, 0));
   allpoints.push(new PMPoint(0.57735, -1.7769, 0));
   allpoints.push(new PMPoint(1.29099, -1.7769, 0));
   allpoints.push(new PMPoint(1.51152, -1.09819, 0));
   allpoints.push(new PMPoint(-1.1547, 2.19637, 0));
   allpoints.push(new PMPoint(-1.73205, 1.7769, 0));
   allpoints.push(new PMPoint(-1.51152, 1.09819, 0));
   allpoints.push(new PMPoint(0.356822, 2.45562, 0));
   allpoints.push(new PMPoint(-0.220528, 2.87509, 0));
   allpoints.push(new PMPoint(-0.797878, 2.45562, 0));
   allpoints.push(new PMPoint(2.22517, 1.09819, 0));
   allpoints.push(new PMPoint(2.44569, 1.7769, 0));
   allpoints.push(new PMPoint(1.86834, 2.19637, 0));
   allpoints.push(new PMPoint(-0.797878, -2.45562, 0));
   allpoints.push(new PMPoint(-0.220528, -2.87509, 0));
   allpoints.push(new PMPoint(0.356822, -2.45562, 0));

   <!-- Vertex style -->
   var points_material = new THREE.MeshBasicMaterial ( {color: 0x000000, } );

   points_material.side = THREE.DoubleSide;

   <!-- POINTS -->
   allpoints[0].makesphere(0.02,points_material);
   allpoints[1].makesphere(0.02,points_material);
   allpoints[2].makesphere(0.02,points_material);
   allpoints[3].makesphere(0.02,points_material);
   allpoints[4].makesphere(0.02,points_material);
   allpoints[5].makesphere(0.02,points_material);
   allpoints[6].makesphere(0.02,points_material);
   allpoints[7].makesphere(0.02,points_material);
   allpoints[8].makesphere(0.02,points_material);
   allpoints[9].makesphere(0.02,points_material);
   allpoints[10].makesphere(0.02,points_material);
   allpoints[11].makesphere(0.02,points_material);
   allpoints[12].makesphere(0.02,points_material);
   allpoints[13].makesphere(0.02,points_material);
   allpoints[14].makesphere(0.02,points_material);
   allpoints[15].makesphere(0.02,points_material);
   allpoints[16].makesphere(0.02,points_material);
   allpoints[17].makesphere(0.02,points_material);
   allpoints[18].makesphere(0.02,points_material);
   allpoints[19].makesphere(0.02,points_material);
   allpoints[20].makesphere(0.02,points_material);
   allpoints[21].makesphere(0.02,points_material);
   allpoints[22].makesphere(0.02,points_material);
   allpoints[23].makesphere(0.02,points_material);
   allpoints[24].makesphere(0.02,points_material);
   allpoints[25].makesphere(0.02,points_material);
   allpoints[26].makesphere(0.02,points_material);
   allpoints[27].makesphere(0.02,points_material);
   allpoints[28].makesphere(0.02,points_material);
   allpoints[29].makesphere(0.02,points_material);
   allpoints[30].makesphere(0.02,points_material);
   allpoints[31].makesphere(0.02,points_material);
   allpoints[32].makesphere(0.02,points_material);
   allpoints[33].makesphere(0.02,points_material);
   allpoints[34].makesphere(0.02,points_material);
   allpoints[35].makesphere(0.02,points_material);
   allpoints[36].makesphere(0.02,points_material);
   allpoints[37].makesphere(0.02,points_material);

   for (index = 0; index < allpoints.length; ++index) {
      allpoints[index].add(obj);
   }
   var faces = new THREE.Geometry();

   <!-- VERTICES -->
   faces.vertices.push(allpoints[0].vector);
   faces.vertices.push(allpoints[1].vector);
   faces.vertices.push(allpoints[2].vector);
   faces.vertices.push(allpoints[3].vector);
   faces.vertices.push(allpoints[4].vector);
   faces.vertices.push(allpoints[5].vector);
   faces.vertices.push(allpoints[6].vector);
   faces.vertices.push(allpoints[7].vector);
   faces.vertices.push(allpoints[8].vector);
   faces.vertices.push(allpoints[9].vector);
   faces.vertices.push(allpoints[10].vector);
   faces.vertices.push(allpoints[11].vector);
   faces.vertices.push(allpoints[12].vector);
   faces.vertices.push(allpoints[13].vector);
   faces.vertices.push(allpoints[14].vector);
   faces.vertices.push(allpoints[15].vector);
   faces.vertices.push(allpoints[16].vector);
   faces.vertices.push(allpoints[17].vector);
   faces.vertices.push(allpoints[18].vector);
   faces.vertices.push(allpoints[19].vector);
   faces.vertices.push(allpoints[20].vector);
   faces.vertices.push(allpoints[21].vector);
   faces.vertices.push(allpoints[22].vector);
   faces.vertices.push(allpoints[23].vector);
   faces.vertices.push(allpoints[24].vector);
   faces.vertices.push(allpoints[25].vector);
   faces.vertices.push(allpoints[26].vector);
   faces.vertices.push(allpoints[27].vector);
   faces.vertices.push(allpoints[28].vector);
   faces.vertices.push(allpoints[29].vector);
   faces.vertices.push(allpoints[30].vector);
   faces.vertices.push(allpoints[31].vector);
   faces.vertices.push(allpoints[32].vector);
   faces.vertices.push(allpoints[33].vector);
   faces.vertices.push(allpoints[34].vector);
   faces.vertices.push(allpoints[35].vector);
   faces.vertices.push(allpoints[36].vector);
   faces.vertices.push(allpoints[37].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 8, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 9, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 20, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 22, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 22, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 21, 35, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 35, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 31, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 7, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 6, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 23, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 33, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 34, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 15, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 18, 19, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: foldingLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);	var render = function () {
		foldingRenderIds[divNumber]= requestAnimationFrame(render);
		controls.update();
		renderer.render(scene, camera);
	};


	render();

	function computeCentroid(geom) {
		centroid = new THREE.Vector3();
		geom.vertices.forEach(function(v) {
			centroid.add(v);			
		});
		centroid.divideScalar(geom.vertices.length);
		return centroid;
	}

	function explode(factor) {
		var obj, c;
		for (var i = 0; i< all_objects.length; ++i) {
			obj = all_objects[i];
			c = centroids[i];
	
			obj.position.set(c.x*factor, c.y*factor, c.z*factor);
		}	
	}

	var pos = 150* Math.PI;

	function updateFactor() {
		pos++;
		return Math.sin(.01*pos)+1;
	}

	function makelabel(message, x, y, z, params) {
		var spritey = textSprite( message, params );
		spritey.position.set(x, y, z);
		obj.add(spritey);
	}

	function textSprite(message, parameters)
	{
		if ( parameters === undefined ) parameters = {};

		var fontface = "Helvetica";

		var fontsize = parameters.hasOwnProperty("fontsize") ? 
			parameters["fontsize"] : 18;
		fontsize = fontsize*10;

		var canvas = document.createElement('canvas');
		var size = 1000;
		canvas.width = size;
		canvas.height = size;
		var context = canvas.getContext('2d');
		context.font = fontsize + "px " + fontface;

		// text color
		context.fillStyle = "rgba(0, 0, 0, 1.0)";

		context.fillText(message, size/2, size/2);

		// canvas contents will be used for a texture
		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		var spriteMaterial = new THREE.SpriteMaterial(
			{map: texture, useScreenCoordinates: false});
		var sprite = new THREE.Sprite(spriteMaterial);
		return sprite;
	}



   foldingSubtrees[divNumber] = subtrees;
   foldingAngles[divNumber] = angles;
   foldingAxes[divNumber] = axes;
   foldingAllpoints[divNumber] = allpoints;
   foldingObjects[divNumber] = obj;
   foldingControls[divNumber] = controls;
   foldingCameras[divNumber] = camera;
   foldingPolytopeRoots[divNumber] = polytoperoot;
});
appendFoldingScript();
