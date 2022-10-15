function updateBaddies(time) {
    if (gameState.lastBaddieSpawnTime !== 0 && time - gameState.lastBaddieSpawnTime < gameState.spawnTime) {
        return;
    }

    gameState.spawnTime -= 1;

    gameState.lastBaddieSpawnTime = time;

    let x = Math.floor(Math.random() * 1920);
    let y = Math.floor(Math.random() * 1080);

    const edge = Math.floor(Math.random() * 4);
    switch (edge) {
        case 0:
            x = 0;
            break;
        case 1:
            x = 1920;
            break;
        case 2:
            y = 0;
            break;
        default:
            y = 1080;
            break;
    }

    const baddie = gameState.baddies.create(x, y, 'baddie')
        .setSize(50, 50, true)
    this.physics.moveTo(baddie, 960, 540, Phaser.Math.Between(gameState.baddieSpeed - 50, gameState.baddieSpeed + 50));
}
