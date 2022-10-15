function preload() {
    this.load.image('player', 'assets/PNG/ufoGreen.png');
    this.load.image('baddie', 'assets/PNG/Meteors/meteorBrown_big1.png');
    this.load.image('bullet', 'assets/PNG/Lasers/laserBlue01.png');
    this.load.spritesheet('explode', 'assets/PNG/explosionframes.png',
        {frameWidth: 128, frameHeight: 128});
    this.load.spritesheet('collide', 'assets/PNG/ImpactMetal8Generic.png',
        {frameWidth: 192, frameHeight: 192});

    this.load.audio('pewpew', 'assets/Audio/laserLarge_003.ogg');
    this.load.audio('explode', 'assets/Audio/lowFrequency_explosion_000.ogg');
    this.load.audio('collide', 'assets/Audio/explosionCrunch_000.ogg');
}
