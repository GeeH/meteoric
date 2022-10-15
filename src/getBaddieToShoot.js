function getBaddieToShoot(baddies) {
    return baddies.getFirstAlive();
    let closestBaddie = baddies.getFirstAlive();
    baddies.children.iterate(function (baddie) {
        if (!baddie.visible) {
            return;
        }

        if (Phaser.Math.Distance.Between(baddie.x, baddie.y, 960, 540)
            < Phaser.Math.Distance.Between(closestBaddie.x, closestBaddie.y, 960, 540)) {
            closestBaddie = baddie;
        }
    });

    return closestBaddie;
}
