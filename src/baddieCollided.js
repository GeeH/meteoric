function baddieCollided(player, baddie) {

    const anim = this.add.sprite(baddie.x, baddie.y, 'collide')
        .play('collide');

    anim.once('animationcomplete', () => {
        anim.destroy();
    });

    baddie.destroy();
    gameState.collide.play();

    gameState.health -= 1;
    gameState.healthText.setText('health: ' + gameState.health);

    if (gameState.health < 1) {
        this.physics.pause();
        gameState.gameOver = true;
    }
}
