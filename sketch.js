
var colori=[100,120,150];
var coloreRandom=0;
var raggio=12.5;
var tempoCambiamento=5;

function setup() {
  createCanvas(500,500);
  coloreRandom=floor(random(colori.length));
  console.log(coloreRandom);
  

  
}



function draw() {
  background(100);
  noStroke();
  for(var x=raggio;x<width;x+=raggio*2)
  {
    for(var y=raggio;y<height;y+=raggio*2)
    {
      
      var colore=colori[coloreRandom];
      colore=lerp(100,150,abs(sin(frameCount*.05)))
    
    var distanzaMouseX=((mouseX-x)/x*raggio);
    if(distanzaMouseX>raggio)
    distanzaMouseX=raggio;
    else
    if(distanzaMouseX<-raggio)
    distanzaMouseX=-raggio;
    
     var distanzaMouseY=((mouseY-y)/y*raggio);
    if(distanzaMouseY>raggio)
    distanzaMouseY=raggio;
    else
    if(distanzaMouseY<-raggio)
    distanzaMouseY=-raggio;
    
    if(mouseX>x-raggio && mouseX<x+raggio && mouseY>y-raggio && mouseY<y+raggio)
    colore=170;
  
    if(!(mouseX>x-raggio && mouseX<x+raggio && mouseY>y-raggio && mouseY<y+raggio) && (mouseX>x-raggio*3 && mouseX<x+raggio*3 && mouseY>y-raggio*3 && mouseY<y+raggio*3))
    colore=150;
  
    if(!(mouseX>x-raggio && mouseX<x+raggio && mouseY>y-raggio && mouseY<y+raggio) && !(mouseX>x-raggio*3 && mouseX<x+raggio*3 && mouseY>y-raggio*3 && mouseY<y+raggio*3) && (mouseX>x-raggio*5 && mouseX<x+raggio*5 && mouseY>y-raggio*5 && mouseY<y+raggio*5))
    colore=130;
  
  fill(colore-10);
  triangle(x+distanzaMouseX,y+distanzaMouseY,x-raggio,y-raggio,x-raggio,y+raggio);
  fill(colore+10);
   triangle(x+distanzaMouseX,y+distanzaMouseY,x-raggio,y-raggio,x+raggio,y-raggio);
  fill(colore-20);
  triangle(x+distanzaMouseX,y+distanzaMouseY,x+raggio,y-raggio,x+raggio,y+raggio);
   fill(colore-35);
     triangle(x+distanzaMouseX,y+distanzaMouseY,x-raggio,y+raggio,x+raggio,y+raggio);
    }
  }
  

  for(var j=raggio;j<width;j+=raggio*2)
  {
    for(var k=raggio;k<height;k+=raggio*2)
    {
      fill(200,200,200,30);
      ellipse(j,k,raggio*2);
       ellipse(j,k,raggio*1.5);
       
    }
  }
   
}


