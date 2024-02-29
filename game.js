//The game loop rendering

function preload()
{
    //Player and the opponent
    enemy_image=new Image;
    enemy_image.src="space.png";

    player_image= new Image;
    player_image.src="player.png";

    gem_image= new Image;
    gem_image.src="gem.png";
}
function init()
{
    //The object s athat ewe will have in th gaem,
    canvas=document.getElementById("mycanvas");
    console.log(canvas);
    W=700;
    H=400;
    canvas.width=W;
    canvas.height=H;

    pen=canvas.getContext('2d');
    console.log(pen)

     box ={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:10
    };

    e1={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:20,
    };

    e2={
        x:450,
        y:20,
        w:60,
        h:60,
        speed:40,
    };

    e3={
        x:300,
        y:150,
        w:60,
        h:60,
        speed:30,
    };

    enemy=[e1,e2,e3];

    player={
        x:20,
        y:H/2,
        w:60,
        h:50,
        speed:20,
        moving:"false",

    };

     gem={
        x:W-100,
        y:H/2,
        w:60,
        h:60,
    };


    canvas.addEventListener('mousedown',function(){
        console.log("Mouse Press baby");
        player.moving=true;
        if(player.x==W-100)
        {
            console.log("\nThe player Won the Match\n");
            document.getElementById("mycanvas").style.backgroundColor = "lightblue";
        }
    });

        canvas.addEventListener('mouseup',function(){
        console.log("Mouse Press baby");
        player.moving=false;
    });



}

function draw()
{
        pen.clearRect(0,0,W,H);

    pen.fillStyle="blue"
    // pen.drawImage(enemy_image,box.x,box.y,box.w,box.h);
    // pen.fillRect(box.x,box.y,box.w,box.h)
    pen.drawImage(player_image,player.x,player.h,player.w,player.h);
    pen.drawImage(gem_image,gem.x,gem.h,gem.w,gem.h);



    for(let i=0;i<enemy.length;i++)
    {
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }
}

function update()
{
    // box.y+=box.speed;
    // if(box.y>H || box.y<0)
    // {
    //     box.speed*=-1;
    // }
    if(player.moving==true)
    {
        if(player.x==W-100)
        {
            console.log("\nThe player Won the Match\n");
            document.getElementById("mycanvas").style.backgroundColor = "lightblue";
        }
        player.x+=player.speed;
    }
    for(let i=0;i<enemy.length;i++)
    {
        enemy[i].y+=enemy[i].speed;
        if(enemy[i].y>H-enemy[i].h || enemy[i].y<0)
    {
        enemy[i].speed*=-1;
    }

    }
}

function gameloop()
{
    draw();
    update();
    console.log("The game is running");
}

preload();
init();
var f= setInterval(gameloop,100);