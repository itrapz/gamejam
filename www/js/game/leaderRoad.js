'use strict'

class LeaderRoad {
   constructor(game, coords) {
      const height = 380.0;
      const width = 800.0;
      let u = game.add.sprite(0, 0, 'road2');
      u.scale.x = width / u.width;
      u.scale.y = height / u.height;
      u.x = 0;
      let v = game.add.sprite(0, 0, 'road2');
      v.scale.x = width / v.width;
      v.scale.y = height / v.height;
      u.x = v.width;

      this.cropRect = new Phaser.Rectangle(0, 0, 200, height);



      this.sprites = [u, v];
      //this.cropRect = new Phaser.Rectangle(0, 0, 400, v.height);
;
      //console.log(cropRect, v.height);
      //atari1 = game.add.sprite(50, 50, 'atari');

     // var cropU = new Phaser.Rectangle(0, 0, 0, height);
     // var cropV = new Phaser.Rectangle(0, 0, 0, height);

      //console.log(cropU, cropV);

      // Here we'll tween the crop rect, from a width of zero to full width, and back again
      //var tween = game.add.tween(cropU).to( { width: width }, 3000, Phaser.Easing.Bounce.Out, false, 0, 1000, true);

      //u.crop(cropU);

      //tween.start();

   }

   update(speed) {
      let u = this.sprites[0];
      let v = this.sprites[1];

      //u.updateCrop();
      //v.updateCrop();
     // u.updateCrop();
    //  v.updateCrop();

      //u.mask = this.graphics;
      if (v.x <= 0) {
         u.x = v.x + u.width;
         this.sprites[0] = v;
         this.sprites[1] = u;
      }
      //u.crop(this.cropRect);
      //v.crop(this.cropRect);


      u.x -= speed;
      v.x -= speed;
   }
}
