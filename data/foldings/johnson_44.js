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

   var axes = [[27,19],
      [16,24],
      [22,21],
      [20,13],
      [11,19],
      [18,9],
      [9,17],
      [16,8],
      [6,15],
      [14,6],
      [5,13],
      [11,5],
      [10,9],
      [9,4],
      [4,8],
      [6,3],
      [0,6],
      [5,2],
      [3,5],
      [1,4],
      [4,0],
      [2,1],
      [0,3],
      [3,2],
      [1,0]];

   var angles = [2.18627603546528,
      2.18627603546528,
      2.18627603546528,
      2.53460014971513,
      2.68143728041918,
      2.95708007963545,
      2.53460014971513,
      2.95708007963545,
      2.95708007963545,
      2.68143728041918,
      2.68143728041918,
      2.53460014971513,
      2.18627603546528,
      2.68143728041918,
      2.53460014971513,
      2.53460014971513,
      2.53460014971513,
      2.18627603546528,
      2.95708007963545,
      2.18627603546528,
      2.95708007963545,
      2.18627603546528,
      2.68143728041918,
      2.18627603546528,
      2.18627603546528];

   var subtrees = [[33],
      [31,32],
      [30],
      [29],
      [27,28,33],
      [26],
      [25],
      [24,31,32],
      [23],
      [21,22,30],
      [20,29],
      [19,27,28,33],
      [18,26],
      [17,25],
      [16,24,31,32],
      [15,23],
      [14,21,22,30],
      [12,13,20,29],
      [11,19,27,28,33],
      [9,10,17,18,25,26],
      [8,16,24,31,32],
      [7],
      [6,14,15,21,22,23,30],
      [5,11,12,13,19,20,27,28,29,33],
      [4,8,9,10,16,17,18,24,25,26,31,32]];

   var polytoperoot = [[0.208898154817458,-0.389154767789723,0.806951077424639],
      [0,0,1],
      [-0.598052922607181,0.598052922607181,0]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.845775, 0, 0));
   allpoints.push(new PMPoint(0.845775, 0.845775, 0));
   allpoints.push(new PMPoint(0, 0.845775, 0));
   allpoints.push(new PMPoint(0.422887, -0.732462, 0));
   allpoints.push(new PMPoint(0.422887, 1.57824, 0));
   allpoints.push(new PMPoint(-0.732462, 0.422887, 0));
   allpoints.push(new PMPoint(1.57824, 0.422887, 0));
   allpoints.push(new PMPoint(-0.422887, -0.732462, 0));
   allpoints.push(new PMPoint(1.15535, -1.15535, 0));
   allpoints.push(new PMPoint(1.57824, -0.422887, 0));
   allpoints.push(new PMPoint(-0.422887, 1.57824, 0));
   allpoints.push(new PMPoint(1.57824, 1.26866, 0));
   allpoints.push(new PMPoint(1.15535, 2.00112, 0));
   allpoints.push(new PMPoint(-0.732462, -0.422887, 0));
   allpoints.push(new PMPoint(-0.732462, 1.26866, 0));
   allpoints.push(new PMPoint(0, -1.46492, 0));
   allpoints.push(new PMPoint(0.422887, -1.57824, 0));
   allpoints.push(new PMPoint(2.00112, -1.15535, 0));
   allpoints.push(new PMPoint(0, 2.3107, 0));
   allpoints.push(new PMPoint(0.422887, 2.42401, 0));
   allpoints.push(new PMPoint(-1.57824, 0.422887, 0));
   allpoints.push(new PMPoint(-1.57824, -0.422887, 0));
   allpoints.push(new PMPoint(-1.46492, 0.845775, 0));
   allpoints.push(new PMPoint(-0.845775, -1.46492, 0));
   allpoints.push(new PMPoint(1.15535, -2.00112, 0));
   allpoints.push(new PMPoint(1.57824, -1.88781, 0));
   allpoints.push(new PMPoint(-0.732462, 2.73359, 0));
   allpoints.push(new PMPoint(-1.15535, 2.00112, 0));
   allpoints.push(new PMPoint(1.15535, 2.8469, 0));
   allpoints.push(new PMPoint(-2.3107, 0, 0));
   allpoints.push(new PMPoint(-0.845775, -2.3107, 0));
   allpoints.push(new PMPoint(0, -2.3107, 0));
   allpoints.push(new PMPoint(0, 3.15647, 0));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 1, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 4, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 8, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 6, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 6, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 21, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 5, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 5, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 19, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 27, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 15, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 3, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 21, 30, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 33, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 13, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 13, 29, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 24, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 16, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 24, 31, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 9, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 17, 25, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 4, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 9, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 12, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 13, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 1, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(10, 4, 9, undefined, undefined, 0));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
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
