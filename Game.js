class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,300);
    car2 = createSprite(100,500);
    car3 = createSprite(100,700);
    car4 = createSprite(100,900);
    Cars = [car1,car2,car3,car4];

  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      var index = 0;

      var x = 0;
      var y;
    
      for(var plr in allPlayers){
        if (plr === "player" + player.index){

        }
         
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
