scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest0, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f 5 5 f f . . . . . 
    . . . . . f 2 2 2 2 f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f f e 1 e e 1 e f f . . . 
    . . . f f e e e e e e f f . . . 
    . . f f f f . e e . f f f f . . 
    . . . f f . e 2 2 e . f f . . . 
    . . . f . . e 2 2 e . . f . . . 
    . . . . . . e 8 8 e . . . . . . 
    . . . . . . e . . e . . . . . . 
    . . . . . . e . . e . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(0)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level_0`)
info.startCountdown(20)
