// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'poly' + divNumber );
var renderer = renderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.appendChild(renderer.domElement);

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
controls.noZoom = controlsNoZoom;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 1.09848, 0.125461));
   allpoints.push(new PMPoint(0.447738, 0.927455, 0.402178));
   allpoints.push(new PMPoint(-0.447738, 0.927455, 0.402178));
   allpoints.push(new PMPoint(0.447738, 0.927455, -0.151257));
   allpoints.push(new PMPoint(0.276717, 0.650738, 0.849916));
   allpoints.push(new PMPoint(-0.447738, 0.927455, -0.151257));
   allpoints.push(new PMPoint(-0.276717, 0.650738, 0.849916));
   allpoints.push(new PMPoint(0.276717, 0.650738, -0.598995));
   allpoints.push(new PMPoint(0.724456, 0.479717, 0.573199));
   allpoints.push(new PMPoint(-0.276717, 0.650738, -0.598995));
   allpoints.push(new PMPoint(0.724456, 0.479717, -0.322278));
   allpoints.push(new PMPoint(-0.724456, 0.479717, 0.573199));
   allpoints.push(new PMPoint(0.895477, 0.203, 0.125461));
   allpoints.push(new PMPoint(-0.724456, 0.479717, -0.322278));
   allpoints.push(new PMPoint(0, 0.203, 1.02094));
   allpoints.push(new PMPoint(-0.895477, 0.203, 0.125461));
   allpoints.push(new PMPoint(0.724456, -0.0737179, 0.573199));
   allpoints.push(new PMPoint(0.276717, -0.244739, 0.849916));
   allpoints.push(new PMPoint(-0.724456, -0.0737179, 0.573199));
   allpoints.push(new PMPoint(-0.276717, -0.244739, 0.849916));
   allpoints.push(new PMPoint(0, 0.26778, -0.887199));
   allpoints.push(new PMPoint(-0.526348, 0.177869, -0.74172));
   allpoints.push(new PMPoint(0.526348, 0.177869, -0.74172));
   allpoints.push(new PMPoint(0.851649, -0.0575206, -0.360851));
   allpoints.push(new PMPoint(-0.851649, -0.0575206, -0.360851));
   allpoints.push(new PMPoint(-0.851649, -0.348479, 0.109929));
   allpoints.push(new PMPoint(0.851649, -0.348479, 0.109929));
   allpoints.push(new PMPoint(0.526348, -0.583869, 0.490798));
   allpoints.push(new PMPoint(-0.526348, -0.583869, 0.490798));
   allpoints.push(new PMPoint(0, -0.673779, 0.636277));
   allpoints.push(new PMPoint(0.616259, -0.368079, -0.753833));
   allpoints.push(new PMPoint(0.616259, -0.838859, 0.00790465));
   allpoints.push(new PMPoint(-0.23539, -0.984338, 0.243295));
   allpoints.push(new PMPoint(-0.761738, -0.603469, -0.372964));
   allpoints.push(new PMPoint(-0.23539, -0.2226, -0.989223));
   allpoints.push(new PMPoint(0.47078, -0.850973, -0.52593));
   allpoints.push(new PMPoint(0.145479, -1.08636, -0.145061));
   allpoints.push(new PMPoint(-0.380869, -0.996452, -0.29054));
   allpoints.push(new PMPoint(-0.380869, -0.705494, -0.76132));
   allpoints.push(new PMPoint(0.145479, -0.615583, -0.906799));

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
   allpoints[38].makesphere(0.02,points_material);
   allpoints[39].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[38].vector);
   faces.vertices.push(allpoints[39].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(30, 23, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 26, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 31, 35, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 23, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 22, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 8, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 4, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 14, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 27, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 29, 32, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(31, 32, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 31, 36, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 27, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 0, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 2, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 6, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 3, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 4, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 14, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 17, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(36, 32, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 34, 21, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 21, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 29, 28, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 29, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(32, 28, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 25, 33, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(32, 33, 37, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 9, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 21, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 37, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 13, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 15, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 11, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 24, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 11, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 18, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(33, 25, 24, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 25, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 24, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 28, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 19, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(6, 2, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(38, 33, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 24, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(38, 21, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 6, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 11, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(14, 18, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 5, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(39, 38, 34, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 20, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 7, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 9, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 5, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 38, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 20, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 35, 39, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(30, 39, 34, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 34, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(30, 20, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 10, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 22, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(31, 26, 27, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 12, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 12, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 23, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 23, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 10, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 3, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 1, 8, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[33].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[31].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
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



   polytopeObjects[divNumber] = obj;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
