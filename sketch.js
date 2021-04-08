//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dogImg = loadImage ("images/dogImg.png");
  dogImg1 = loadImage ("images/dogImg1.png");
}

function setup() 
{
	createCanvas(800, 700);
  dog(dogImg);  
  happyDog(dogImg1);
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() 
{  
  background(46,139,87)
  
  if (keyWentDown(UP_AROOW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();

  //add styles here
  print ("Note: Press up arrow key to feed dog milk.")
  textSize(30);
  fill('white');
}

function readStock (data)
{
  foodS = data.val();
}

function writeStock (x)
{
  if (x<=0)
  {
    x=0;
  }else 
  {
    x=x-1;
  }
  database.ref ('/').update({
    food:x
  })
}

