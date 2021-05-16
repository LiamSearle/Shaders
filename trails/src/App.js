import "./styles.css";
import * as THREE from "three";
import { BasicThreeDemo } from "./BasicThreeDemo";
import { Road } from "./Road";
import { CarLights } from "./CarLights";
export class App extends BasicThreeDemo {
  constructor(container, options) {
    super(container);
    // this.camera.position.z = 50;
    // Dp stuff
    this.camera.position.z = -5;
    this.camera.position.y = 7;
    this.camera.position.x = 0;

    this.road = new Road(this, options);
    this.leftLights = new CarLights(this, options);
  }
  loadAssets() {
    return new Promise((resolve, reject) => {
      const manager = new THREE.LoadingManager(resolve);

      manager.itemStart("test");
      manager.itemEnd("test");
    });
  }
  init() {
    // this.scene.add(mesh);

    this.road.init();
    this.leftLights.init();

    this.tick();
  }
  update(delta) {}
  dispose() {}
}
