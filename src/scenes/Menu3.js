//Single Player - Difficulty Menu
class Menu3 extends Phaser.Scene {
    constructor() {
        super("menu3Scene");
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
            fontSize: '28px',
            backgroundColor: '#f2307e',
            color: "#2f279c",
            align: 'right',
            padding: {top: 5, bottom: 5,},
            fixedWidth: 0
        }

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer, ' Single Player Mode! ', menuConfig).setOrigin (0.5);
        //this.add.text(centerX, centerY, 'Use <--> arrows to move & (F) to Fire', menuConfig).setOrigin (0.5);
        this.add.text(centerX, centerY, ' Use <--> Arrows to Move & (F) to Fire ', menuConfig).setOrigin (0.5);
        menuConfig.backgroundColor = "#b830f2";
        menuConfig.color = "#000";        
        this.add.text(centerX, centerY + textSpacer, ' press <- for EASY or -> for HARD ', menuConfig).setOrigin (0.5);

        //define play mode/level difficulty keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //easy mode
            game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000}
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //hard mode
            game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000}
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }   
}