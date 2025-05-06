import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const aantalVissen = 30;
        const W = this.drawWidth;   // 1280
        const H = this.drawHeight;  // 720
      
        // kies willekeurig welke vis Jeroen wordt
        const jeroenIndex = Math.floor(Math.random() * aantalVissen);
      
        for (let i = 0; i < aantalVissen; i++) {
          const fish = new Actor({
            width: 64,
            height: 32
          });
      
          // als i === jeroenIndex: Jeroen, anders vis1 of vis2
          const spriteKey =
            i === jeroenIndex
              ? Resources.Jeroen
              : (i % 2 === 0 ? Resources.Fish : Resources.Fish2);
      
          fish.graphics.use(spriteKey.toSprite());
      
          // random start buiten rechts
          fish.pos = new Vector(
            W + Math.random() * 100,
            Math.random() * H
          );
      
          // random snelheid naar links met beetje y-variatie
          const minS = 50, maxS = 200;
          fish.vel = new Vector(
            - (minS + Math.random() * (maxS - minS)),
            (Math.random() - 0.5) * 50
          );
      
          // dezelfde handler voor alle actors (ook Jeroen!)
          fish.events.on("exitviewport", e => {
            // reset positie
            e.target.pos = new Vector(
              W + Math.random() * 100,
              Math.random() * H
            );
            // reset snelheid
            e.target.vel = new Vector(
              - (minS + Math.random() * (maxS - minS)),
              (Math.random() - 0.5) * 50
            );
          });
      
          this.add(fish);
        }
      }
      
      
      

    fishLeft(e) {
        e.target.pos = new Vector(1350, Math.random())
    }

    fish2Left(e) {
        e.target.pos = new Vector(1350, 300)
    }
}

new Game()
