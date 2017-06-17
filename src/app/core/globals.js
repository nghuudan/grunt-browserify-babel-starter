import PIXI from 'phaser/build/pixi';
import p2 from 'phaser/build/p2';

global.PIXI = PIXI; // Required by Phaser
global.p2 = p2; // Required by Phaser

export default { PIXI, p2 };
