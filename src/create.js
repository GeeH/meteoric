function create() {
    console.log(gameState);

    gameState.player = this.physics.add.staticGroup();
    gameState.player.create(960, 540, 'player').setDepth(1);

    gameState.baddies = this.physics.add.group();
    gameState.bullets = this.physics.add.group();

    this.physics.add.collider(gameState.player, gameState.baddies, baddieCollided, null, this);

    this.physics.add.collider(gameState.bullets, gameState.baddies, bulletCollided, null, this);

    gameState.healthText = this.add.text(16, 16, 'health: ' + gameState.health, {fontSize: '32px', fill: '#FFF'});
    gameState.scoreText = this.add.text(16, 64, 'score: ' + gameState.score, {fontSize: '32px', fill: '#FFF'});

    this.sound.pauseOnBlur = false;
    gameState.pewpew = this.sound.add('pewpew');
    gameState.explode = this.sound.add('explode');
    gameState.collide = this.sound.add('collide');

    this.anims.create({
        key: 'explode',
        frames: this.anims.generateFrameNumbers('explode'),
        frameRate: 32,
    });

    this.anims.create({
        key: 'collide',
        frames: this.anims.generateFrameNumbers('collide'),
        frameRate: 32,
    });

    this.input.keyboard.on('keydown-SPACE', function () {
        this.physics.paused = true;
    }, this);

    this.input.keyboard.on(Phaser.Input.Keyboard.Events.ANY_KEY_DOWN, (event) => {
        switch(event.code) {
            case 'Digit1':
            case 'Numpad1':
                handleSelectionProcess.call(this, 1);
                break;
            case 'Digit2':
            case 'Numpad2':
                handleSelectionProcess.call(this, 2);
                break;
            case 'Digit3':
            case 'Numpad3':
                handleSelectionProcess.call(this, 3);
                break;
        }
    });
}
