var playerIMG, playerAn, player, moveNum;
var moveSpeed = 0;
var maxSpeed = 0;
var normalAcceleration = 0.3;
var boostAcceleration = 0.43;
var friction = 0.2;
var inCar=false;
var carType="player"
var Gear="P"
var Fuel=100
var FuelLoss=0.005
var isBoosting = false;
var trafficTime=0, Time=1
var wantedStatus="Innocent"
var speedx, speedy
//make them all false after done making them 
var g1Key, g2Key, g3Key,g4Key, g5Key, g6Key, g7Key
var gas1Key,gas2Key,gas3Key,gas4Key,gas5Key,gas6Key,gas7Key,
gas8Key,gas9Key,gas10Key,gas11Key,gas12Key,gas13Key,gas14Key
function preload() {
  playerIMG = loadImage("./Images/player.png");
  playerAn = loadAnimation("./Images/playerMove1.png", "./Images/playerMove2.png");
  
  //Special Cars in garage
  LaFerrariIMG=loadImage("./Images/LaFerrari.png")
  LamboAventadorIMG=loadImage("./Images/LamboAventador.png")
  Porsche911IMG=loadImage("./Images/Porsche911.png")
  BugattiChironIMG=loadImage("./Images/BugattiChiron.png")
  McLarenW1IMG=loadImage("./Images/McLarenW1.png")
  KoenigseggJeskoIMG=loadImage("./Images/KoenigseggJesko.png")
  PaganiHuayraIMG=loadImage("./Images/PaganiHuayra.png")

  GWagonIMG=loadImage("./Images/GWagon.png")
  CorvetteC8IMG=loadImage("./Images/CorvetteC8.png")
  LamboCountachIMG=loadImage("./Images/LamboCountach.png") 
  FerrariSF90IMG=loadImage("./Images/FerrariSF90.png")
  Porsche918IMG=loadImage("./Images/Porsche918.png")

  PoliceIMG=loadImage("./Images/Police.png")
  PStationIMG=loadImage("./Images/PStation.png")

  GreenLight=loadImage("./Images/GreenLight.png")
  RedLight=loadImage("./Images/RedLight.png")

  streetTexture=loadImage("./Images/StreetTexture.png")


  Garage=loadImage("./Images/Garage.png")

  GasStation=loadImage("./Images/GasStation.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

myButton = createButton("RESTART");
myButton.position(-220, 350);
myButton.mousePressed(reset);

//sidewalk
  JumSide=createSprite(0,200,20100, 400);
  ZayedSide=createSprite(-15000,2500,50100,500);
  EmiratesSide=createSprite(-15000,7850,50100,500);
  SweihanSide=createSprite(-40150, -6000, 400, 28200);
  SultanSide=createSprite(-24850, -6000, 400, 28200);
  street1Side=createSprite(-9900, 10050, 300, 20100);
  street2Side=createSprite(-7700, 10050, 300, 20100);
  street3Side=createSprite(-5500, 10050, 300, 20100);
  street4Side=createSprite(-3300, 10050, 300, 20100);
  street5Side=createSprite(-1100, 10050, 300, 20100);
  street6Side=createSprite(1100,  10050,  300, 20100);
  street7Side=createSprite(3300,  10050,  300, 20100);
  street8Side=createSprite(5500,  10050,  300, 20100);
  street9Side=createSprite(7700,  10050,  300, 20100);
  street10Side=createSprite(9900, 10050, 300, 20100);
  street11Side=createSprite(-32500, -20000, 15700, 400);
  street12Side=createSprite(-32500, -17000, 15700, 400);
  street13Side=createSprite(-32500, -14000, 15700, 400);
  street14Side=createSprite(-32500, -11000, 15700, 400);
  street15Side=createSprite(-32500, -8000, 15700, 400);
  street16Side=createSprite(-32500, -5000, 15700, 400);
  street17Side=createSprite(-32500, -2000, 15700, 400);
  street18Side=createSprite(-32500, 1000, 15700, 400);
  street19Side=createSprite(-32500, -6000, 400, 28200);
  street20Side=createSprite(0, 19950, 20100, 400)
  street21Side=createSprite(0, 13950, 20100, 400)
  street22Side=createSprite(-32500, 5500, 15700, 400);
  street23Side=createSprite(5300,-2000,60100, 400)
  street24Side=createSprite(5300,-20000,60100, 400)
  street25Side=createSprite(-9850,-10000,400, 20200)
  street26Side=createSprite(9850,-10000,400, 20200)
  street27Side=createSprite(5300, -11000, 60100, 400)
  street28Side=createSprite(0,-11000,400, 18100)
  street29Side=createSprite(5000, -11000, 400, 18100)
  street30Side=createSprite(-5000, -11000, 400, 18100)
  street31Side=createSprite(15000, -11000, 400, 18100)
  street32Side=createSprite(20000, -11000, 400, 18100)
  street33Side=createSprite(25000, -11000, 400, 18100)
  street34Side=createSprite(30000, -11000, 400, 18100)
  street35Side=createSprite(35150, -11000, 400, 18100)
  street36Side=createSprite(12650, -15500, 45100,400)
  street37Side=createSprite(12650, -6500, 45100, 400)


  JumRoad=createSprite(0, 200, 20000, 300);
  ZayedRoad=createSprite(-15000,2500,50000, 400);
  EmiratesRoad=createSprite(-15000,7850,50000, 400);

  //DUbai Streets
  //vertical
  street1=createSprite(-9900, 10050, 200, 20000);
  street2=createSprite(-7700, 10050, 200, 20000);
  street3=createSprite(-5500, 10050, 200, 20000);
  street4=createSprite(-3300, 10050, 200, 20000);
  street5=createSprite(-1100, 10050, 200, 20000);
  street6=createSprite(1100,  10050,  200, 20000);
  street7=createSprite(3300,  10050,  200, 20000);
  street8=createSprite(5500,  10050,  200, 20000);
  street9=createSprite(7700,  10050,  200, 20000);
  street10=createSprite(9900, 10050, 200, 20000);
  //Horizontal
  street20=createSprite(0, 19950, 20000, 300)
  street21=createSprite(0, 13950, 20000, 300)

  //Abu Dhabi
  SweihanRoad=createSprite(-40150, -6000, 300, 28100);
  SultanRoad=createSprite(-24850, -6000, 300, 28100);

  //Abu Dhabi Streets
  //horizontal
  street11=createSprite(-32500, -20000, 15600, 300);
  street12=createSprite(-32500, -17000, 15600, 300);
  street13=createSprite(-32500, -14000, 15600, 300);
  street14=createSprite(-32500, -11000, 15600, 300);
  street15=createSprite(-32500, -8000, 15600, 300);
  street16=createSprite(-32500, -5000, 15600, 300);
  street17=createSprite(-32500, -2000, 15600, 300);
  street18=createSprite(-32500, 1000, 15600, 300);
  street22=createSprite(-32500, 5500, 15600, 300);
  //vertical
  street19=createSprite(-32500, -6000, 300, 28100);

  //rich city 
  // horzitonal
  street23=createSprite(5300,-2000,60000, 300)
  street24=createSprite(5300,-20000,60000, 300)
  street27=createSprite(5300, -11000, 60000, 300)
  street36=createSprite(12650, -15500, 45000,300)
  street37=createSprite(12650, -6500, 45000, 300)

  //vertical
  street25=createSprite(-9850,-10000,300, 20100)
  street26=createSprite(9850,-10000,300, 20100)
  street28=createSprite(0,-11000,300, 18000)
  street29=createSprite(5000, -11000, 300, 18000)
  street30=createSprite(-5000, -11000, 300, 18000)
  street31=createSprite(15000, -11000, 300, 18000)
  street32=createSprite(20000, -11000, 300, 18000)
  street33=createSprite(25000, -11000, 300, 18000)
  street34=createSprite(30000, -11000, 300, 18000)
  street35=createSprite(35150, -11000, 300, 18000)

  //Gas Stations
  Gas1=createSprite(840,510,10,10);
  Gas1.addImage(GasStation)
  Gas1.scale=0.5

  Gas2=createSprite(-25160,2140,10,10);
  Gas2.addImage(GasStation)
  Gas2.scale=0.5

  Gas3=createSprite(-32810,-19690,10,10);
  Gas3.addImage(GasStation)
  Gas3.scale=0.5

  Gas4=createSprite(-39840,-10690,10,10);
  Gas4.addImage(GasStation)
  Gas4.scale=0.5
  
  Gas5=createSprite(-9640,2140,10,10);
  Gas5.addImage(GasStation)
  Gas5.scale=0.5

  Gas6=createSprite(7440,2860,10,10);
  Gas6.addImage(GasStation)
  Gas6.scale=0.5

  Gas7=createSprite(-7960,8210,10,10);
  Gas7.addImage(GasStation)
  Gas7.scale=0.5

  Gas8=createSprite(7960,19640,10,10);
  Gas8.addImage(GasStation)
  Gas8.scale=0.5

  Gas9=createSprite(5240,13640,10,10);
  Gas9.addImage(GasStation)
  Gas9.scale=0.5

  Gas10=createSprite(-39840,7490,10,10);
  Gas10.addImage(GasStation)
  Gas10.scale=0.5

  Gas11=createSprite(-9540,-2310,10,10);
  Gas11.addImage(GasStation)
  Gas11.scale=0.5

  Gas12=createSprite(310,-19690,10,10);
  Gas12.addImage(GasStation)
  Gas12.scale=0.5

  Gas13=createSprite(10160,-10690,10,10);
  Gas13.addImage(GasStation)
  Gas13.scale=0.5

  Gas14=createSprite(25310,-15190,10,10);
  Gas14.addImage(GasStation)
  Gas14.scale=0.5

  Garages=new Group()

  //Porsche Garage
  Garage1=createSprite(200,550,10,10)
  Garage1.addImage(Garage)
  Garage1.scale=0.27
  Garages.add(Garage1)

  //Ferrari Garage
  Garage2=createSprite(-39800,-19650,10,10)
  Garage2.addImage(Garage)
  Garage2.scale=0.27
  Garage2.rotation=-90
  Garages.add(Garage2)

  //Lambo Garage
  Garage3=createSprite(9600, 19600,10,10)
  Garage3.addImage(Garage)
  Garage3.scale=0.27
  Garage3.rotation=180
  Garages.add(Garage3)

  //McLaren Garage
  Garage4=createSprite(-39800,-11350,10,10)
  Garage4.addImage(Garage)
  Garage4.scale=0.27
  Garage4.rotation=-90
  Garages.add(Garage4)

//Koeinsegg Jesko
  Garage5=createSprite(-39800,5850,10,10)
  Garage5.addImage(Garage)
  Garage5.scale=0.27
  Garage5.rotation=-90
  Garages.add(Garage5)

  //Bugatti Garage
  Garage6=createSprite(-25200,1350,10,10)
  Garage6.addImage(Garage)
  Garage6.scale=0.27
  Garage6.rotation=90
  Garages.add(Garage6)

  //Pagani Garage
  Garage7=createSprite(-7400,8250,10,10)
  Garage7.addImage(Garage)
  Garage7.scale=0.27
  Garage7.rotation=0
  Garages.add(Garage7)


//police Stations
  PStations=new Group()

  pStation1=createSprite(-1000,-200,10,10)
  pStation1.addImage(PStationIMG)
  pStation1.rotation=0
  pStation1.scale=0.35
  PStations.add(pStation1)

  //Cars
  laFerrari=createSprite(-39800,-19650,10,10);
  laFerrari.addImage(LaFerrariIMG);
  laFerrari.rotation=-90;
  laFerrari.scale=0.2;

  lamboAventador=createSprite(9600,19600,10,10);
  lamboAventador.addImage(LamboAventadorIMG);
  lamboAventador.rotation=180;
  lamboAventador.scale=0.23;

  porsche911=createSprite(200,550, 10,10);
  porsche911.addImage(Porsche911IMG);
  porsche911.rotation=0;
  porsche911.scale=0.2;

  bugattiChiron=createSprite(-25200,1350,10,10);
  bugattiChiron.addImage(BugattiChironIMG);
  bugattiChiron.rotation=90;
  bugattiChiron.scale=0.25;

  mcLarenW1=createSprite(-39800,-11350,10,10);
  mcLarenW1.addImage(McLarenW1IMG);
  mcLarenW1.rotation=-90;
  mcLarenW1.scale=0.57;

  koenigseggJesko=createSprite(-39800,5850,10,10);
  koenigseggJesko.addImage(KoenigseggJeskoIMG);
  koenigseggJesko.rotation=-90;
  koenigseggJesko.scale=0.23;

  paganiHuayra=createSprite(-7400,8250,10,10);
  paganiHuayra.addImage(PaganiHuayraIMG);
  paganiHuayra.rotation=0;
  paganiHuayra.scale=0.28;

  gWagon=createSprite(600,80,10,10);
  gWagon.addImage(GWagonIMG);
  gWagon.rotation=-90;
  gWagon.scale=0.22;

  corvetteC8=createSprite(200,80,10,10);
  corvetteC8.addImage(CorvetteC8IMG);
  corvetteC8.rotation=-90;
  corvetteC8.scale=0.23;

  lamboCountach=createSprite(400,80,10,10);
  lamboCountach.addImage(LamboCountachIMG);
  lamboCountach.rotation=-90;
  lamboCountach.scale=0.24;

  ferrariSF90=createSprite(800,80,10,10);
  ferrariSF90.addImage(FerrariSF90IMG);
  ferrariSF90.rotation=-90;
  ferrariSF90.scale=0.3;

  porsche918=createSprite(0,80,10,10);
  porsche918.addImage(Porsche918IMG);
  porsche918.rotation=-90;
  porsche918.scale=0.23;

  t1=createSprite(1100,400,10,10)
  t1.addImage("Red",RedLight)
  t1.addImage("Green",GreenLight)
  t1.scale=0.5

  t2=createSprite(950,200,10,10)
  t2.addImage("Red",RedLight)
  t2.addImage("Green",GreenLight)
  t2.rotation=90
  t2.scale=0.4

  t3=createSprite(1250,200,10,10)
  t3.addImage("Red",RedLight)
  t3.addImage("Green",GreenLight)
  t3.rotation=-90
  t3.scale=0.4

  Intersections=new Group()
  i1=createSprite(1100,150, 20,200)
  Intersections.add(i1)

  police1=createSprite(-1000,200,10,10);
  police1.addImage(PoliceIMG)
  police1.rotation=90;
  police1.scale=0.29
  police1.speedx = 5;
  police1.speedy = 0;

  // Creating the player
  player = createSprite(300, 500, 20, 20);
  player.addImage("standing", playerIMG);
  player.addAnimation("walking", playerAn);
  player.scale = 0.7;

  allObjects = [
  laFerrari, lamboAventador,porsche911, bugattiChiron, 
  mcLarenW1, koenigseggJesko, paganiHuayra,gWagon, corvetteC8, lamboCountach, 
  ferrariSF90, porsche918,police1,JumSide, ZayedSide, EmiratesSide, street1Side,street2Side,
  street3Side,street4Side, street5Side, street6Side,street7Side,street8Side,
  street9Side, street10Side, street11Side,street12Side,
  street13Side,street14Side, street15Side, street16Side,street17Side,street18Side,
  street19Side, street20Side,street21Side,street22Side,
  street23Side,street24Side, street25Side, street26Side,street27Side,street28Side,
  street29Side, street30Side,street31Side,street32Side,
  street33Side,street34Side, street35Side, street36Side,street37Side,
  JumRoad, ZayedRoad, EmiratesRoad, SweihanRoad, SultanRoad,
  street1, street2, street3, street4, street5, street6,
  street7, street8, street9, street10, street11, street12,
  street13, street14, street15, street16, street17, street18,
  street19, street20, street21, street22, street23, street24,
  street25,street26, street27, street28, street29, street30, 
  street31, street32, street33, street34, street35, street36, 
  street37, Gas1, Gas2,Gas3, Gas4, Gas5, Gas6, Gas7, Gas8, Gas9, 
  Gas10, Gas11,Gas12, Gas13,Gas14,Garage1, Garage2,Garage3, Garage4,
  Garage5, Garage6,Garage7,t1,t2,t3, i1, pStation1
];

Roads=[JumRoad, ZayedRoad, EmiratesRoad, 
  SweihanRoad, SultanRoad, street1, street2, street3, street4, 
  street5, street6, street7, street8, street9, street10, street11, 
  street12,street13, street14, street15, street16, street17, street18,
  street19, street20, street21, street22, street23, street24, street25, 
  street26, street27, street28, street29, street30, street31, street32,
  street33, street34, street35, street36, street37]

Cars=[laFerrari, lamboAventador,porsche911, bugattiChiron, mcLarenW1, 
  koenigseggJesko, paganiHuayra, gWagon, corvetteC8, lamboCountach, 
  ferrariSF90, porsche918, police1]

  Police=[police1]


for (let obj of allObjects) {
  obj.originalX = obj.x;
  obj.originalY = obj.y;
}

for (let r of Roads){
  r.shapeColor="#47484C"
}

}

function draw() {
  background("#c2b280");

//Speed and car type
  textSize(20)
  fill("black")

  player.x=250;
  player.y=550;

  isBoosting = keyDown("shift");
  
// Direction keys being pressed?
let moving =
  keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) ||
  keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) ||
  keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83);

if (inCar && carType === "Ferrari LaFerrari") {
  CarFunction(laFerrari);
}

  if (player.collide(laFerrari)){
      carType="Ferrari LaFerrari"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }


if (inCar && carType === "Lamborghini Aventador") {
CarFunction(lamboAventador);
}
  if (player.collide(lamboAventador)){
      carType="Lamborghini Aventador"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

if (inCar && carType === "Porsche 911") {
CarFunction(porsche911);
}
  if (player.collide(porsche911)){
      carType="Porsche 911"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

    if (inCar && carType === "Bugatti Chiron") {
  CarFunction(bugattiChiron);
}
  if (player.collide(bugattiChiron)){
      carType="Bugatti Chiron"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

     if (inCar && carType === "McLaren W1") {
  CarFunction(mcLarenW1);
}
  if (player.collide(mcLarenW1)){
      carType="McLaren W1"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

     if (inCar && carType === "Koenigsegg Jesko") {
  CarFunction(koenigseggJesko);
}
  if (player.collide(koenigseggJesko)){
      carType="Koenigsegg Jesko"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

 if (inCar && carType === "Pagani Huayra") {
  CarFunction(paganiHuayra);
}
  if (player.collide(paganiHuayra)){
      carType="Pagani Huayra"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

  if (inCar && carType === "G Wagon") {
  CarFunction(gWagon);
}
  if (player.collide(gWagon)){
      carType="G Wagon"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

  if (inCar && carType === "Corvette C8") {
  CarFunction(corvetteC8);
}
  if (player.collide(corvetteC8)){
      carType="Corvette C8"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

  if (inCar && carType === "Lamborghini Countach") {
  CarFunction(lamboCountach);
}
  if (player.collide(lamboCountach)){
      carType="Lamborghini Countach"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

  if (inCar && carType === "Ferrari SF90") {
  CarFunction(ferrariSF90);
}
  if (player.collide(ferrariSF90)){
      carType="Ferrari SF90"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

      if (inCar && carType === "Porsche 918 Spyder") {
  CarFunction(porsche918);
}
  if (player.collide(porsche918)){
      carType="Porsche 918 Spyder"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

  if (inCar && carType === "Police 1") {
  CarFunction(police1);
}
  if (player.collide(police1)){
      carType="Police 1"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }

if (inCar) {
  if (Gas1.isTouching(Cars)){
    Fuel=100
  }
  if (Gas2.isTouching(Cars)){
    Fuel=100
  }
  if (Gas3.isTouching(Cars)){
    Fuel=100
  }
  if (Gas4.isTouching(Cars)){
    Fuel=100
  }
  if (Gas5.isTouching(Cars)){
    Fuel=100
  }
  if (Gas6.isTouching(Cars)){
    Fuel=100
  }
  if (Gas7.isTouching(Cars)){
    Fuel=100
  }
  if (Gas8.isTouching(Cars)){
    Fuel=100
  }
  if (Gas9.isTouching(Cars)){
    Fuel=100
  }
  if (Gas10.isTouching(Cars)){
    Fuel=100
  }
  if (Gas11.isTouching(Cars)){
    Fuel=100
  }
  if (Gas12.isTouching(Cars)){
    Fuel=100
  }
   if (Gas13.isTouching(Cars)){
    Fuel=100
  }
  if (Gas14.isTouching(Cars)){
    Fuel=100
  }
  
 Fuel=Fuel-FuelLoss

 if (Fuel<=0){
      //GameOver send back to spawn/Garage
      moveSpeed=0
      moveNum=0
      FuelLoss=0
      Fuel=0
      myButton.position(500,500)
      Gear="P"
    }

  if (moving) {
    // Accelerate when moving
    if (moveNum*4<200){
      Fuel=Fuel-FuelLoss*5
    }else if (moveNum*4>200){
      Fuel=Fuel-FuelLoss*7
    }

    moveSpeed += isBoosting ? boostAcceleration : normalAcceleration;
    moveSpeed = min(moveSpeed, maxSpeed);
  } else {
    // Brake faster when no movement keys pressed
    moveSpeed -= 20 * friction;
    if (moveSpeed < 0.5) moveSpeed = 0; // snap to 0 if too small
  }

  moveNum = moveSpeed;
} else {
  moveNum = keyDown("shift") ? 10 : 5;
}

    if (inCar===true&&keyDown("y")){
      inCar=false;
      player.visible=true
      player.x=150;
      player.y=360;
    }


  // Animation switching
  if (keyDown("up") || keyDown("down") || keyDown("right") || keyDown("left") || keyDown("w") || keyDown("a") || keyDown("s") || keyDown("d")) {
    player.changeAnimation("walking");
    if (keyDown("right") || keyDown("d")) {
      player.rotation = 90; 
      moveWorld(-moveNum, 0);
    } else if (keyDown("left") || keyDown("a")) {
      player.rotation = -90; 
      moveWorld(moveNum, 0);
    } else if (keyDown("up") || keyDown("w")) {
      player.rotation = 0;  
      moveWorld(0, moveNum);
    } else if (keyDown("down") || keyDown("s")) {
      player.rotation = 180; 
      moveWorld(0, -moveNum);
    }
  } else {
    player.changeAnimation("standing");
  }

trafficTime+=Time

trafficG=[t1]
trafficR=[t2,t3]

if (trafficTime>0&&trafficTime<300){
  for (let x of trafficG){
    x.changeAnimation("Red")
    x.scale=0.3
  }
  for (let e of trafficR){
  e.changeAnimation("Green")
  e.scale=0.6
  }
}
if (trafficTime>300){
  for (let b of trafficG){
    b.changeAnimation("Green")
    b.scale=0.5
  }
  for (let f of trafficR){
    f.changeAnimation("Red")
    f.scale=0.4
  }
}
if (trafficTime>450){
    trafficTime=0
}

Intersect(police1,speedx,speedy)

  drawSprites();

text(wantedStatus, 500, windowHeight-100)
 
if (inCar){
  fill("black")
  stroke("white")
  ellipse((windowWidth/2)-100,windowHeight-150,130,130)
  ellipse((windowWidth/2)+100,windowHeight-150,130,130)
  textSize(50)
  fill("white")
  stroke("white")
  text(Gear, (windowWidth/2)+85, windowHeight-130)
  text(round(moveNum)*4,(windowWidth/2)-145, windowHeight-130)
  textSize(20)
  text("kmh",(windowWidth/2)-120,windowHeight-100)
  fill("black")
  stroke("red")
  rect((windowWidth/2)-100,windowHeight-40,200,20)
  fill("red")
  rect((windowWidth/2)-100,windowHeight-40,Fuel*2,20)
  text(round(Fuel)+" Liters", (windowWidth/2)-100, windowHeight-50)
  fill("blue")
  stroke("blue")
  text(carType, (windowWidth/2)-100, windowHeight-70)

} else{
  carType="player"
  text(round(moveNum)*4+"km/h",20, windowHeight-20)
  text(carType, 20, windowHeight-50)
  text(Gear, 150, windowHeight-50)
  text(round(Fuel)+" Liters", 150,windowHeight-20)
}
if (keyDown("m")){
  drawMiniMap(moveNum);
}
}





function Intersect(sprite,speedx,speedy){
  if (player.isTouching(Police)){
    sprite.speedx=0;
    sprite.speedy=0;
  }else{
    for (let p of Police){
       if (p.isTouching(allObjects)){
          sprite.x += sprite.speedx;
          sprite.y += sprite.speedy;
     }else{
      sprite.x=200
      sprite.y=200
      changeDirection(sprite)
     }
     if (p.isTouching(Cars)){
      p.bounceOff(Cars)
      changeDirection(sprite)
     }
    }



  // Only change direction when touching a zone and timer is 0
  if (sprite.overlap(Intersections)) {
    changeDirection(sprite);
  }


  }

}

function changeDirection(sprite){
  let dir = random(['up', 'down', 'left', 'right']);
  if (dir === 'up') {
    sprite.speedx = 0;
    sprite.speedy = -5;
    sprite.rotation=0
  } else if (dir === 'down') {
    sprite.speedx = 0;
    sprite.speedy = 5;
    sprite.rotation=180
  } else if (dir === 'left') {
    sprite.speedx = -5;
    sprite.speedy = 0;
    sprite.rotation=-90
  } else if (dir === 'right') {
    sprite.speedx = 5;
    sprite.speedy = 0;
    sprite.rotation=90
  }
}










function reset() {
  myButton.position(-500, 500);
  Fuel = 100;
  FuelLoss = 0.005;
  moveSpeed = 0;
  maxSpeed = 0;

  // Reset car + player
  laFerrari.rotation = 0;
  lamboAventador.rotation=0
  porsche911.rotation=0
  bugattiChiron.rotation=0
  mcLarenW1.rotation=0
  koenigseggJesko.rotation=0
  paganiHuayra.rotation=0
  gWagon.rotation=0
  corvetteC8.rotation=0
  lamboCountach.rotation=0
  ferrariSF90.rotation=0
  porsche918.rotation=0
  police1.rotation=0
  player.rotation = 0;
  player.visible = true;
  inCar = false;
  Gear = "P";
  
  // Reset all positions
  for (let obj of allObjects) {
    obj.x = obj.originalX;
    obj.y = obj.originalY;
  }
}



function moveWorld(dx, dy) {
  for (let a of allObjects){
    a.x+=dx
    a.y+=dy
  }
}

function CarFunction(car){
if (car.isTouching(Cars)){
  car.bounceOff(Cars)
  car.x=car.x+200
   inCar=false;
    player.visible=true
    player.x=150;
    player.y=360;
}

if (trafficTime>0&&trafficTime<300){
  for (let x of trafficG){
    x.changeAnimation("Red")
    x.scale=0.3
  }
  for (let e of trafficR){
  e.changeAnimation("Green")
  e.scale=0.6
  }
}
if (trafficTime>300){
  for (let b of trafficG){
    b.changeAnimation("Green")
    b.scale=0.5
  }
  for (let f of trafficR){
    f.changeAnimation("Red")
    f.scale=0.4
  }
}
if (trafficTime>450){
    trafficTime=0
}


  if (inCar){
     if (car.isTouching(Garages)){
    FuelLoss=0
  }else{
    FuelLoss=0.005
  }
   if (car.isTouching(Roads)){
    if (isBoosting){
    maxSpeed=75
    boostAcceleration=1
    Gear="B"
  }else{
    maxSpeed=10
    Gear="1"
    if (keyDown("1")){
    maxSpeed=10
    Gear="1"
    FuelLoss=0.005
  }else if (keyDown("2")){
    maxSpeed=20
    Gear="2"
    FuelLoss=0.005
  }else if (keyDown("3")){
    maxSpeed=30
    Gear="3"
    FuelLoss=0.005
  }else if (keyDown("4")){
    maxSpeed=40
    Gear="4"
    FuelLoss=0.005
  }else if (keyDown("5")){
    maxSpeed=50
    Gear="5"
    FuelLoss=0.005
  }else if (keyDown("6")){
    maxSpeed=60
    Gear="6"
    FuelLoss=0.005
  }else if (keyDown("7")){
    maxSpeed=70
    Gear="7"
    FuelLoss=0.005
  }else if(keyDown("P")){
    Gear="P"
    maxSpeed=0
    FuelLoss=0
  }
}
  }else{
  maxSpeed=3
  Gear="1"
}
   
  }

   if (keyDown("right") || keyDown("d")) {
      player.rotation = 90; 
      moveWorld(-moveNum, 0);
      if (inCar===true){
        car.x=player.x
        car.rotation=90
      }
    } else if (keyDown("left") || keyDown("a")) {
      player.rotation = -90; 
      moveWorld(moveNum, 0);
      if (inCar===true){
        car.x=player.x
        car.rotation=-90
      } 
    } else if (keyDown("up") || keyDown("w")) {
      player.rotation = 0;  
      moveWorld(0, moveNum);
      if (inCar===true){
        car.y=player.y
        car.rotation=0
      }
    } else if (keyDown("down") || keyDown("s")) {
      player.rotation = 180; 
      moveWorld(0, -moveNum);
      if (inCar===true){
        car.y=player.y
        car.rotation=180
      }
    }
}

function drawMiniMap() {
  // Mini-map dimensions and position
  let mapWidth = 300; // Width of the mini-map
  let mapHeight = 225; // Height of the mini-map
  let mapX = width - mapWidth - 20; // Mini-map's top-left X position
  let mapY = height - mapHeight - 20; // Mini-map's top-left Y position

  // Scaling factors to fit the real-world map into the mini-map
  let scaleX = mapWidth / 24250; // Scale for X axis based on world width
  let scaleY = mapHeight / 15000; // Scale for Y axis based on world height

  // Draw roads on the mini-map
  drawMini(JumRoad, mapX-22.5, mapY+75, scaleX, scaleY, "black");
  drawMini(ZayedRoad, mapX-209, mapY+75, scaleX, scaleY, "black");
  drawMini(EmiratesRoad, mapX-209, mapY+75, scaleX, scaleY, "black");
  drawMini(SweihanRoad, mapX+100, mapY-133, scaleX, scaleY, "black");
  drawMini(SultanRoad, mapX+100, mapY-133, scaleX, scaleY, "black");

  // Dubai Streets
  for (let vDubaiRoad of [street1, street2, street3, street4, street5, street6, street7, street8, street9, street10]) {
    drawMini(vDubaiRoad, mapX+100, mapY-72.5, scaleX, scaleY, "black");
  }
  for (let hDubaiRoad of [street20, street21]) {
    drawMini(hDubaiRoad, mapX-22.5, mapY+76, scaleX, scaleY, "black");
  }

  //Abu DHabi horizontal
  for (let hAbuRoad of [street11, street12, street13, street14, street15, street16, street17, street18, street22]) {
    drawMini(hAbuRoad, mapX+5.5, mapY+75, scaleX, scaleY, "black");
  }

  //veritical
  for (let vAbuRoad of [street19]){
    drawMini(vAbuRoad, mapX+100, mapY-133, scaleX, scaleY, "black");
  }

  for (let hnewCity of [street23, street24, street27]) {
    drawMini(hnewCity, mapX-270, mapY+75, scaleX, scaleY, "black");
  }

    //veritical
  for (let vnewCity of [street25, street26]){
    drawMini(vnewCity, mapX+99, mapY-70, scaleX, scaleY, "black");
  }

   for (let vnewCity of [street36, street37]){
    drawMini(vnewCity, mapX-175, mapY+75, scaleX, scaleY, "black");
  }

  for (let vnewyCity of [street28,street29, street30, street31, street32, street33, street34, street35]){
    drawMini(vnewyCity, mapX+99, mapY-59, scaleX, scaleY, "black");
  }

  


  //Gas Stations
  fill("Red");
  stroke("Red")
  if (player.isTouching(Gas1)){
gas1Key=true
}
if (player.isTouching(Gas2)){  
gas2Key=true
}
if (player.isTouching(Gas3)){
gas3Key=true
}
if (player.isTouching(Gas4)){
gas4Key=true
}
if (player.isTouching(Gas5)){
gas5Key=true
}
if (player.isTouching(Gas6)){
gas6Key=true
}
if (player.isTouching(Gas7)){
gas7Key=true
}
if (player.isTouching(Gas8)){
gas8Key=true
}
if (player.isTouching(Gas9)){
gas9Key=true
}
if (player.isTouching(Gas10)){
gas10Key=true
}
if (player.isTouching(Gas11)){
gas11Key=true
}
if (player.isTouching(Gas12)){
gas12Key=true
}
if (player.isTouching(Gas13)){
gas13Key=true
}
if (player.isTouching(Gas14)){
gas14Key=true
}
if (gas1Key===true){
  let Gas1MiniX = mapX+94 + Gas1.x * scaleX;
  let Gas1MiniY = mapY+77 +  Gas1.y * scaleY;
  rect(Gas1MiniX, Gas1MiniY, 7, 7); 
}
if (gas2Key===true){
  let Gas2MiniX = mapX+95 + Gas2.x * scaleX;
  let Gas2MiniY = mapY+72 +  Gas2.y * scaleY;
  rect(Gas2MiniX, Gas2MiniY, 7, 7); 
}
if (gas3Key===true){
  let Gas3MiniX = mapX+95 + Gas3.x * scaleX;
  let Gas3MiniY = mapY+76 +  Gas3.y * scaleY;
  rect(Gas3MiniX, Gas3MiniY, 7, 7); 
}
if (gas4Key===true){
  let Gas4MiniX = mapX+100 + Gas4.x * scaleX;
  let Gas4MiniY = mapY+76 +  Gas4.y * scaleY;
  rect(Gas4MiniX, Gas4MiniY, 7, 7); 
}
if (gas5Key===true){
  let Gas5MiniX = mapX+101 + Gas5.x * scaleX;
  let Gas5MiniY = mapY+73 +  Gas5.y * scaleY;
  rect(Gas5MiniX, Gas5MiniY, 7, 7); 
}
if (gas6Key===true){
   let Gas6MiniX = mapX+95 + Gas6.x * scaleX;
  let Gas6MiniY = mapY+75 +  Gas6.y * scaleY;
  rect(Gas6MiniX, Gas6MiniY, 7, 7); 
}
if (gas7Key===true){
  let Gas7MiniX = mapX+95 + Gas7.x * scaleX;
  let Gas7MiniY = mapY+76 +  Gas7.y * scaleY;
  rect(Gas7MiniX, Gas7MiniY, 7, 7); 
}
if (gas8Key===true){
  let Gas8MiniX = mapX+100 + Gas8.x * scaleX;
  let Gas8MiniY = mapY+73 +  Gas8.y * scaleY;
  rect(Gas8MiniX, Gas8MiniY, 7, 7); 
}
if (gas9Key===true){
  let Gas9MiniX = mapX+94 + Gas9.x * scaleX;
  let Gas9MiniY = mapY+73 +  Gas9.y * scaleY;
  rect(Gas9MiniX, Gas9MiniY, 7, 7); 
}
if (gas10Key===true){
  let Gas10MiniX = mapX+100 + Gas10.x * scaleX;
  let Gas10MiniY = mapY+73 +  Gas10.y * scaleY;
  rect(Gas10MiniX, Gas10MiniY, 7, 7); 
}
if (gas11Key===true){
  let Gas11MiniX = mapX+100 + Gas11.x * scaleX;
  let Gas11MiniY = mapY+71 +  Gas11.y * scaleY;
  rect(Gas11MiniX, Gas11MiniY, 7, 7); 
}
if (gas12Key===true){
  let Gas12MiniX = mapX+100 + Gas12.x * scaleX;
  let Gas12MiniY = mapY+76 +  Gas12.y * scaleY;
  rect(Gas12MiniX, Gas12MiniY, 7, 7); 
}
if (gas13Key===true){
  let Gas13MiniX = mapX+100 + Gas13.x * scaleX;
  let Gas13MiniY = mapY+76 +  Gas13.y * scaleY;
  rect(Gas13MiniX, Gas13MiniY, 7, 7); 
}
if (gas14Key===true){
  let Gas14MiniX = mapX+100 + Gas14.x * scaleX;
  let Gas14MiniY = mapY+76 +  Gas14.y * scaleY;
  rect(Gas14MiniX, Gas14MiniY, 7, 7); 
}


  //Garages
  fill("white");
  stroke("white");
if (player.isTouching(Garage1)){
g1Key=true
}
if (player.isTouching(Garage2)){
g2Key=true
}
if (player.isTouching(Garage3)){
g3Key=true
}
if (player.isTouching(Garage4)){
g4Key=true
}
if (player.isTouching(Garage5)){
g5Key=true
}
if (player.isTouching(Garage6)){
g6Key=true
}
if (player.isTouching(Garage7)){
g7Key=true
}
if (g1Key===true){
  let Garage1MiniX = mapX+92 + Garage1.x * scaleX;
  let Garage1MiniY = mapY+77 +  Garage1.y * scaleY;
  rect(Garage1MiniX, Garage1MiniY, 7, 7); 
}
if (g2Key===true){
  let Garage2MiniX = mapX+100 + Garage2.x * scaleX;
  let Garage2MiniY = mapY+77 +  Garage2.y * scaleY;
  rect(Garage2MiniX, Garage2MiniY, 7, 7); 
}
if (g3Key===true){
  let Garage3MiniX = mapX+95 + Garage3.x * scaleX;
  let Garage3MiniY = mapY+72 +  Garage3.y * scaleY;
  rect(Garage3MiniX, Garage3MiniY, 7, 7); 
} 
if (g4Key===true){
  let Garage4MiniX = mapX+99 + Garage4.x * scaleX;
  let Garage4MiniY = mapY+72 + Garage4.y * scaleY;
  rect(Garage4MiniX, Garage4MiniY, 7, 7);
}
if (g5Key===true){
  let Garage5MiniX = mapX+101 + Garage5.x * scaleX;
  let Garage5MiniY = mapY+76 + Garage5.y * scaleY;
  rect(Garage5MiniX, Garage5MiniY, 7, 7);
}
if (g6Key===true){
  let Garage6MiniX = mapX+95 + Garage6.x * scaleX;
  let Garage6MiniY = mapY+76 + Garage6.y * scaleY;
  rect(Garage6MiniX, Garage6MiniY, 7, 7);
}
if (g7Key===true){
  let Garage7MiniX = mapX+100 + Garage7.x * scaleX;
  let Garage7MiniY = mapY+75 + Garage7.y * scaleY;
  rect(Garage7MiniX, Garage7MiniY, 7, 7);
}

  fill("blue");
  stroke("blue");

  let pStation1MiniX = mapX+100 + pStation1.x * scaleX;
  let pStation1MiniY = mapY+75 + pStation1.y * scaleY;
  rect(pStation1MiniX, pStation1MiniY, 7, 7);

  // Draw the player on the mini-map
  fill(0, 0, 255);
  stroke(0,0,255)
  let playerMiniX = mapX+100 + player.x * scaleX;
  let playerMiniY = mapY+77  + player.y * scaleY;
  ellipse(playerMiniX, playerMiniY, 5, 5); 

  fill(255, 0, 0);
  stroke(255,0,0)
  let laFerrariMiniX = mapX+102 + laFerrari.x * scaleX;
  let laFerrariMiniY = mapY+77 + laFerrari.y * scaleY;
  ellipse(laFerrariMiniX, laFerrariMiniY, 5, 5);

   fill("blue");
  stroke("blue")
  let lamboAventadorMiniX = mapX+98 + lamboAventador.x * scaleX;
  let lamboAventadorMiniY = mapY+75 + lamboAventador.y * scaleY;
  ellipse(lamboAventadorMiniX, lamboAventadorMiniY, 5, 5);


fill("red");
  stroke("red")
  let porsche911MiniX = mapX+98 + porsche911.x * scaleX;
  let porsche911MiniY = mapY+77 + porsche911.y * scaleY;
  ellipse(porsche911MiniX, porsche911MiniY, 5, 5);


 fill("darkblue");
  stroke("darkblue")
  let bugattiChironMiniX = mapX+99 + bugattiChiron.x * scaleX;
  let bugattiChironMiniY = mapY+77 + bugattiChiron.y * scaleY;
  ellipse(bugattiChironMiniX, bugattiChironMiniY, 5, 5);

   fill("gold");
  stroke("gold")
  let mcLarenW1MiniX = mapX+101 + mcLarenW1.x * scaleX;
  let mcLarenW1MiniY = mapY+77 + mcLarenW1.y * scaleY;
  ellipse(mcLarenW1MiniX, mcLarenW1MiniY, 5, 5);

  fill("white");
  stroke("white")
  let koenigseggJeskoMiniX = mapX+99 + koenigseggJesko.x * scaleX;
  let koenigseggJeskoMiniY = mapY+77 + koenigseggJesko.y * scaleY;
  ellipse(koenigseggJeskoMiniX,koenigseggJeskoMiniY, 5, 5);

  fill("white");
  stroke("white")
  let paganiHuayraMiniX = mapX+99 + paganiHuayra.x * scaleX;
  let paganiHuayraMiniY = mapY+77 + paganiHuayra.y * scaleY;
  ellipse(paganiHuayraMiniX,paganiHuayraMiniY, 5, 5);

  fill("gray");
  stroke("gray")
  let gWagonMiniX = mapX+99 + gWagon.x * scaleX;
  let gWagonMiniY = mapY+77 + gWagon.y * scaleY;
  ellipse(gWagonMiniX,gWagonMiniY, 5, 5);

  fill("orange");
  stroke("orange")
  let corvetteC8MiniX = mapX+99 + corvetteC8.x * scaleX;
  let corvetteC8MiniY = mapY+77 + corvetteC8.y * scaleY;
  ellipse(corvetteC8MiniX,corvetteC8MiniY, 5, 5);

  fill("red");
  stroke("red")
  let lamboCountachMiniX = mapX+99 + lamboCountach.x * scaleX;
  let lamboCountachMiniY = mapY+77 + lamboCountach.y * scaleY;
  ellipse(lamboCountachMiniX,lamboCountachMiniY, 5, 5);

  fill("red");
  stroke("red")
  let ferrariSF90MiniX = mapX+99 + ferrariSF90.x * scaleX;
  let ferrariSF90MiniY = mapY+77 + ferrariSF90.y * scaleY;
  ellipse(ferrariSF90MiniX,ferrariSF90MiniY, 5, 5);

  fill("red");
  stroke("red")
  let porsche918MiniX = mapX+99 + porsche918.x * scaleX;
  let porsche918MiniY = mapY+77 + porsche918.y * scaleY;
  ellipse(porsche918MiniX,porsche918MiniY, 5, 5);
}

// Helper function to draw roads on the mini-map
function drawMini(object, mapX, mapY, scaleX, scaleY, colour) {
  let MiniX = mapX + object.x * scaleX;
  let MiniY = mapY + object.y * scaleY;
  let MiniWidth = object.width * scaleX;
  let MiniHeight = object.height * scaleY;

  fill(colour)
  stroke(colour)
  rect(MiniX, MiniY, MiniWidth, MiniHeight);
  
}
