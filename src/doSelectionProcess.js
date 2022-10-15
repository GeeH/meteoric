function doSelectionProcess() {

    gameState.boxes.c1 = this.add.rectangle(500, 500, 300, 400, 0x555555);
    gameState.boxes.c1.setStrokeStyle(4, 0xffffff);

    gameState.boxes.t1 = this.add.text(370, 320, choices[0].title, {fontSize: '28px', fill: '#FFF'});
    gameState.boxes.t2 = this.add.text(460, 550, '1', {fontSize: '128px', fill: '#FF0000'});
    gameState.boxes.t3 = this.make.text({
        x: 370,
        y: 420,
        text: choices[0].desc,
        style: {
            font: 'bold 25px Arial',
            fill: 'white',
            wordWrap: {width: 280}
        }
    });

    gameState.boxes.c2 = this.add.rectangle(960, 500, 300, 400, 0x555555)
        .setDepth(2);
    gameState.boxes.c2.setStrokeStyle(4, 0xffffff);

    gameState.boxes.t4 = this.add.text(960 - 130, 500 - 180, choices[1].title, {fontSize: '28px', fill: '#FFF'})
        .setDepth(2);
    gameState.boxes.t5 = this.add.text(960 - 40, 500 + 50, '2', {fontSize: '128px', fill: '#FF0000'})
        .setDepth(2);
    gameState.boxes.t6 = this.make.text({
        x: 960 - 130,
        y: 500 - 80,
        text: choices[1].desc,
        style: {
            font: 'bold 25px Arial',
            fill: 'white',
            wordWrap: {width: 280}
        }
    })
        .setDepth(2);


    gameState.boxes.c3 = this.add.rectangle(1420, 500, 300, 400, 0x555555)
        .setDepth(2);
    gameState.boxes.c3.setStrokeStyle(4, 0xffffff);

    gameState.boxes.t7 = this.add.text(1420 - 130, 500 - 180, choices[2].title, {fontSize: '24px', fill: '#FFF'})
        .setDepth(2);
    gameState.boxes.t8 = this.add.text(1420 - 40, 500 + 50, '3', {fontSize: '128px', fill: '#FF0000'})
        .setDepth(2);
    gameState.boxes.t9 = this.make.text({
        x: 1420 - 130,
        y: 500 - 80,
        text: choices[2].desc,
        style: {
            font: 'bold 25px Arial',
            fill: 'white',
            wordWrap: {width: 280}
        }
    })
        .setDepth(2);

}

function handleSelectionProcess(keypressed) {
    if (!gameState.selecting) {
        return;
    }
    gameState.selecting = false;
    const selected = choices[keypressed - 1];

    if (selected.effect.do === 'multiply') {
        gameState[selected.effect.stat] = gameState[selected.effect.stat] * selected.effect.amount;
    }

    if (selected.effect.do === 'add') {
        gameState[selected.effect.stat] = gameState[selected.effect.stat] + selected.effect.amount;
    }

    if (typeof gameState[selected.effect.stat + 'Text'] === 'object') {
        gameState[selected.effect.stat + 'Text'].setText(selected.effect.stat + ': ' + gameState[selected.effect.stat]);
    }

    gameState.boxes.c1.destroy();
    gameState.boxes.c2.destroy();
    gameState.boxes.c3.destroy();

    gameState.boxes.t1.destroy();
    gameState.boxes.t2.destroy();
    gameState.boxes.t3.destroy();
    gameState.boxes.t4.destroy();
    gameState.boxes.t5.destroy();
    gameState.boxes.t6.destroy();
    gameState.boxes.t7.destroy();
    gameState.boxes.t8.destroy();
    gameState.boxes.t9.destroy();

    gameState.paused = false;
    this.physics.resume();
}
