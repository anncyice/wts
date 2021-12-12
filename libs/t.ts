//const maindiv = "kanvas";

function init(kanvas) {
  var canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.id = "maincanvas";
  //var element = document.getElementById(maindiv);
  var element = kanvas.current;
  element.appendChild(canvas);

  var engine = new Engine(canvas, true);
  var scene = new Scene(engine);

  var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
  var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
  window.addEventListener("keydown", (ev) => {
    if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
      if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide();
      } else {
        scene.debugLayer.show();
      }
    }
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
}

export { init }
