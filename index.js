const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const canvasCantext = canvas.getContext('2d');

const Player = () => {
   const img = new Image();
   img.src = './img/naveOne.png';
   img.width = 150;
   img.height = 150;

   const position = {
      x: (canvas.width / 2) - (img.width / 2) ,
      y: (canvas.height - 90) - (img.height / 2)
   }

   const velocity = {
      x: 0.015,
      y: 0.015
   }

   const move = (direction) => {
      if(direction == 'ArrowRight' && position.x < innerWidth - 140) {
         position.x += velocity.x;
      };

      if(direction == 'ArrowLeft' && position.x > 0){
         position.x -= velocity.x;
      };
   }

   const draw = () => {
      canvasCantext.drawImage(img, position.x, position.y, img.width, img.height)
   }

   return {
      position,
      velocity,
      draw,
      move
   }
}

const player = Player()


const render = () => {
   canvasCantext.fillRect(0, 0, canvas.width, canvas.height);
   player.draw();

   addEventListener('keydown', (event) => {
         const keydown = event.key;
         player.move(keydown);
      }
   )
   requestAnimationFrame(render);
}
render()






