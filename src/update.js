function update(time) {
    if (gameState.gameOver || gameState.paused) {
        return;
    }

    gameState.baddies.children.iterate(function (baddie) {
        baddie.rotation += 0.01;
    });

    updateBaddies.call(this, time);

    if (gameState.baddies.getFirstAlive() === null) {
        return;
    }

    if (gameState.lastBulletSpawnTime !== 0 && time - gameState.lastBulletSpawnTime < gameState.shootTime) {
        return;
    }

    gameState.lastBulletSpawnTime = time;

    const bullet = gameState.bullets.create(960, 540, 'bullet');

    const baddieToShoot = getBaddieToShoot(gameState.baddies);

    const angle = Phaser.Math.Angle.Between(960, 540, baddieToShoot.x, baddieToShoot.y);
    bullet.setAngle(angle * 57.2958 + 90);

    gameState.pewpew.play();

    this.physics.moveTo(
        bullet,
        baddieToShoot.x,
        baddieToShoot.y,
        2000);

}
