let gameState = {
    lastBaddieSpawnTime: 0,
    lastBulletSpawnTime: 0,
    health: 11,
    player: null,
    baddies: null,
    healthText: null,
    scoreText: null,
    score: 0,
    gameOver: false,
    bullets: null,
    pewpew: null,
    explode: null,
    collide: null,
    paused: false,
    spawnTime: 500,
    shootTime: 600,
    baddieSpeed: 100,
    selecting: true,
    boxes: {},
    levelups: [10, 20, 50, 100, 200, 500],
};

const choices = [
    {
        title: "Pew Pew Pew",
        desc: "Increase shot speed by 10%",
        effect: {stat: 'shootTime', amount: 0.9, do: 'multiply'}
    },
    {
        title: "Carry on Doctor",
        desc: "Plus 15 health",
        effect: {stat: 'health', amount: 15, do: 'add'}
    },
    {
        title: "Sleeping Policemen",
        desc: "Enemies move 10% slower",
        effect: {stat: 'baddieSpeed', amount: 0.9, do: 'multiply'}
    },
];
