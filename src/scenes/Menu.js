class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload(){
      this.load.audio('background', './assets/Blazer Rail.wav');
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
  }

  create(){
      //menu screen 
      let menuConfig = {
          fontFamily: 'Arial',
          fontSize: '30px',
          backgroundColor: '#f2307e',
          color: "#2f279c",
          align: 'right',
          padding: {top: 5, bottom: 5,},
          fixedWidth: 0
      }

      let centerX = game.config.width/2;
      let centerY = game.config.height/2;
      let textSpacer = 64;

      this.add.text(centerX, centerY - textSpacer, ' Rocket Patrol! ', menuConfig).setOrigin (0.5);

      menuConfig.backgroundColor = "#E4E7E9";
      menuConfig.color = "#2f279c";  

      this.add.text(centerX, centerY, ' press (A) for 2 player mode ', menuConfig).setOrigin (0.5);       
      this.add.text(centerX, centerY + textSpacer, ' or press (F) for single player mode ', menuConfig).setOrigin (0.5);
      

      //define play mode/level difficulty keys
      keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      
  }

  update(){
      if (Phaser.Input.Keyboard.JustDown(keyA)){
          this.sound.play('sfx_select');
          this.scene.start("menu2Scene");
      }
      if (Phaser.Input.Keyboard.JustDown(keyF)) {
          this.sound.play('sfx_select');
          this.scene.start("menu3Scene");
      }
  }   
}