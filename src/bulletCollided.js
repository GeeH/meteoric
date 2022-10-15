function bulletCollided(bullet, baddie) {
    if (!baddie.visible) {
        return;
    }

    const anim = this.add.sprite(baddie.x, baddie.y, 'explode')
        .setSize(1)
        .setDepth(-1)
        .play('explode');

    gameState.explode.play();

    anim.once('animationcomplete', () => {
        anim.destroy();
    });

    baddie.destroy();
    bullet.destroy();

    gameState.score += 1;
    gameState.scoreText.setText('score: ' + gameState.score);

    if (gameState.levelups.includes(gameState.score)) {
        this.physics.pause();
        gameState.paused = true;
        gameState.selecting = true;
        doSelectionProcess.call(this);
    }
}
