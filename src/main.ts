
  import { Loader, Application } from "./pixi"

  Loader.shared.add([
      
  ]).load(setup)

  function setup(){
      // const game = createGame()
      // app.stage.addChild( game )
      // app.render(app)
  }

  const app = new Application({resizeTo: window, backgroundColor: 0x000000});
  // document.body.appendChild(app.view);
  export default app

