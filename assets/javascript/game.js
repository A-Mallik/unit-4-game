

$( document ).ready(function() {



var ThorSound = new Audio('assets/audio/Thor.mp3');
var HulkSound = new Audio('assets/audio/Hulk.mp3');
var IronManSound = new Audio('assets/audio/Iron.mp3');
var Capt = new Audio('assets/audio/Capt.mp3');
var lifeCount = 0; // counter for how many characters have a health of 0, at 3 it will alert that you win and ask if you want to relaod page, used in the attack___ functions towards bottom of file



    $("p1").click(function(){
          $("p1").html(Hulk);
    }

  );


var Avengers = {

        CaptAmerica: {
            name: "Captain America",
            health : 120,
            baseAttack: 8,
            enemyAttackBack: 15,

        },

        Thor: {
            name: "Thor",
            health : 110,
            baseAttack: 14,
            enemyAttackBack: 5
        },

        IronMan: {
            name: "Iron Man",
            health : 150,
            baseAttack: 8,
            enemyAttackBack: 20
        },

        Hulk: {
            name: "Hulk",
            health : 180,
            baseAttack: 7,
            enemyAttackBack: 25
        },
  };  // -- end of object bracket

  var CaptAmerica = Avengers.CaptAmerica;
  var Thor = Avengers.Thor;
  var IronMan = Avengers.IronMan;
  var Hulk = Avengers.Hulk;
  var hpBar;
  var hpBarHulk = Hulk.health;          //seperate HP bars to control the HP that is shown conviniently
  var hpBarThor= Thor.health;
  var hpBarIronMan= IronMan.health;
  var hpBarCapt= CaptAmerica.health;
  var attckPower;

   // $("#Capt").data(CaptAmerica.name, CaptAmerica.health, CaptAmerica.baseAttack, CaptAmerica.enemyAttackBack);
   $("#Capt").data(CaptAmerica);
   $("#Thor").data(Thor);
   $("#IronMan").data(IronMan);
   $("#Hulk").data(Hulk);
  // $("#Thor").append(Princess.name, Princess.health, Princess.baseAttack, Princess.enemyAttackBack);
  // $("#IronMan").append(IronMan.name, IronMan.health, IronMan.baseAttack, IronMan.enemyAttackBack);
  // $("#Hulk").append(Hulk.name, Hulk.health, Hulk.baseAttack, Hulk.enemyAttackBack);


      // Logic for Hulk is applied to the other characters as well.
      $("#Hulk").click(function(){
            $("#message").html("You have chosen The Incredible Hulk!");
            HulkSound.play();
            $("#chosen").data(Hulk);     //chosen div gets data() of Hulk object

            hpBar = $("#chosen").data().health; // displays HP bar of chosen character
            attckPower = $("#chosen").data().baseAttack; //attack power of chosen character
          //  $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );  //Thor becomes enemy1
          //  $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );  // and so on
        //    $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack + "<br />" );
            $("#attckHulk").css("visibility","hidden");  //hide attack hulk button
            Hulk.health = 0;   // set health of actual hulk object to zero to prevent it from interfering from when we look for which characters have been defeated based on health stats
            //--------------------------
              $("#attckCapt").css("visibility", "visible");    //display button to attack the other characters
            //  $("#attckHulk").css("visibility", "visible");
              $("#attckThor").css("visibility", "visible");
              $("#attckIronMan").css("visibility", "visible");
            //-------------------------------------------------------------
             $("#chosen").animate({top:"-300px"},1000);    //where the animations are
             //-------------------------------------------------------------
                     setTimeout(function() {
             $("#chosen").animate({left:"-200px"},500);
             $( "#stats" ).fadeIn( "slow", function() {});  // stats displays the stats of the chosen character in larger format
             $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});  // append character object info into divs that contain them as enemies
             $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
             $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
             $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
              }, 2000 );
//-------------------------------------------------------------

              $(".enemies").animate({top:"-250px"},1000);
              $("#enemies2").animate({left:"150px"},1000);
               // $("#enemyStats1").animate({left:"720px", top:"500px"},1000);
               // $("#enemyStats2").animate({left:"720px"},1000);
               // $("#enemyStats3").animate({left:"720px"},1000);
              $("#stats").animate({left:"1170px"},1000);
              //-------------------------------------------------------------
            //-------------------------------------------------------------
            $("#enemies1").css("background-image", "url('assets/images/thor.png')");
            $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
            $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
            $("#enemies3").css("visibility","hidden");
            $("#chosen").css("background-image", "url('assets/images/hulk.png')");
          //  $("#Hulk").css("visibility", "hidden");
            //--------------------------
            $( "#Hulk" ).fadeOut( 200, function() {});
            $( "#Thor" ).fadeOut( 200, function() {});
            $( "#IronMan" ).fadeOut( 200, function() {});
          $( "#Capt" ).fadeOut( 200, function() {});


              // then appends data

        });
     //---------------------------------------------------------------------------

        $("#Thor").click(function(){

                 $("#message").html("You have chosen The Mighty Thor!");
               ThorSound.play();
                $("#chosen").data(Thor);
            //  $("#chosen").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
              hpBar = $("#chosen").data().health;
              attckPower = $("#chosen").data().baseAttack;


              //$("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />");
            //  $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
            //  $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
              //-----------
              $("#chosen").css("background-image", "url('assets/images/thor.png')");
              $("#enemies1").css("visibility","hidden");
              $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
              $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
              $("#enemies3").css("background-image", "url('assets/images/hulk.png')");
              //--------------------------
              $( "#Hulk" ).fadeOut( 200, function() {});
              $( "#Thor" ).fadeOut( 200, function() {});
              $( "#IronMan" ).fadeOut( 200, function() {});
              $( "#Capt" ).fadeOut( 200, function() {});
                $("#attckThor").css("visibility","hidden");
                  Thor.health = 0;
                  $("#attckCapt").css("visibility", "visible");
                  $("#attckHulk").css("visibility", "visible");
                  //$("#attckThor").css("visibility", "visible");
                  $("#attckIronMan").css("visibility", "visible");
                  //-------------------------------------------------------------
                   $("#chosen").animate({top:"-300px"},1000);
                   //-------------------------------------------------------------
                           setTimeout(function() {
                   $("#chosen").animate({left:"-200px"},500);
                   //$( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                   $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
                   $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                   $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Hulk.name + "<br /> HP: " + Hulk.health + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack)});
                   $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
                  // $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health)});
                    }, 2000 );

                    $(".enemies").animate({top:"-250px"},1000);
                    $("#enemies2").animate({right:"320px"},1000);
                    $("#enemies3").animate({right:"170px"},1000);
                    $("#enemyStats3").animate({left:"770px"},1000);
                    $("#enemyStats2").animate({left:"260px"},1000);
                      $("#stats").animate({left:"1170px"},1000);

          });
       //---------------------------------------------------------------------------
          $("#IronMan").click(function(){
                 $("#message").html("You have chosen The Billionaire Playboy Philantropist!");
                 IronManSound.play();
                $("#chosen").data(IronMan);
                //  $("#chosen").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
                hpBar = $("#chosen").data().health;
                attckPower = $("#chosen").data().baseAttack;
              //  $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
                  $("#enemies2").css("visibility","hidden");
              //  $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
              //  $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
                //-----------
                $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                $("#chosen").css("background-image", "url('assets/images/ironman.png')");
                $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
                $("#enemies3").css("background-image", "url('assets/images/hulk.png')");

                //--------------------------
                $( "#Hulk" ).fadeOut( 200, function() {});
                $( "#Thor" ).fadeOut( 200, function() {});
                $( "#IronMan" ).fadeOut( 200, function() {});
              $( "#Capt" ).fadeOut( 200, function() {});
                  $("#attckIronMan").css("visibility","hidden");
                        IronMan.health = 0;
                        $("#attckCapt").css("visibility", "visible");
                        $("#attckHulk").css("visibility", "visible");
                        $("#attckThor").css("visibility", "visible");
                      //  $("#attckIronMan").css("visibility", "visible");
                        //-------------------------------------------------------------
                         $("#chosen").animate({top:"-300px"},1000);
                         //-------------------------------------------------------------
                                 setTimeout(function() {
                         $("#chosen").animate({left:"-200px"},500);
                         $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                          $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                        //$( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health)});
                           $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Hulk.name + "<br /> HP: " + Hulk.health + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack)});
                          $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
                          }, 2000 );

                          $(".enemies").animate({top:"-250px"},1000);
                          $("#enemies2").animate({right:"320px"},1000);
                          $("#enemies3").animate({right:"170px"},1000);
                          $("#enemyStats3").animate({left:"770px"},1000);
                            $("#stats").animate({left:"1170px"},1000);
            });

          //---------------------------------------------------------------------------
            $("#Capt").click(function(){
                 $("#message").html("You have chosen Captain America!");
                  $("#chosen").data(CaptAmerica);
                   Capt.play();
                //  $("#chosen").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
                  hpBar = $("#chosen").data().health;
                  attckPower = $("#chosen").data().baseAttack;
                // $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
                //  $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
                //  $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
                    $("#enemies4").css("visibility","hidden");
                  //-----------
                  $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                  $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
                  $("#chosen").css("background-image", "url('assets/images/CaptAmerica.png')");
                  $("#enemies3").css("background-image", "url('assets/images/hulk.png')");
                  //--------------------------
                  $( "#Hulk" ).fadeOut( 200, function() {});
                  $( "#Thor" ).fadeOut( 200, function() {});
                  $( "#IronMan" ).fadeOut( 200, function() {});
                $( "#Capt" ).fadeOut( 200, function() {});
                $("#attckCapt").css("visibility","hidden");
                  hpBarCapt = 0;
                  //$("#attckCapt").css("visibility", "visible");
                  $("#attckHulk").css("visibility", "visible");
                  $("#attckThor").css("visibility", "visible");
                  $("#attckIronMan").css("visibility", "visible");
                  //-------------------------------------------------------------
                   $("#chosen").animate({top:"-300px"},1000);
                   //-------------------------------------------------------------
                   setTimeout(function() {
                   $("#chosen").animate({left:"-200px"},500);
                    $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                    $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                    $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
                     $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Hulk.name + "<br /> HP: " + Hulk.health + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack)});
              //  $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
      }, 2000 );
        //-------------------------------------------------------------

                        $(".enemies").animate({top:"-250px"},1000);
                        $("#enemies2").animate({left:"150px"},1000);
                        $("#enemies3").animate({left:"320px"},1000);
                        $("#enemyStats2").animate({left:"720px"},1000);
                        $("#enemyStats3").animate({left:"1270px"},1000);
                          $("#stats").animate({left:"1170px"},1000);
                        //-------------------------------------------------------------

              });


      //-------------------------

          $("#attckHulk").click(function(){
              $("#enemyBarHulk").css("visibility","visible");
              if($("#chosen").data().name == "Captain America"){

                $("#enemyBarHulk").animate({top:"470px"},300);
                $("#enemyBarHulk").animate({left:"950px"},300);
              }

              else{
                $("#enemyBarHulk").animate({top:"470px"},300);   // middle
                $("#enemyBarHulk").animate({left:"450px"},300);
              }
              hpBar = hpBar-$("#Hulk").data().enemyAttackBack;
              attckPower = attckPower+$("#chosen").data().baseAttack;
               hpBarHulk = hpBarHulk - attckPower;
              console.log("My HP: " + hpBar);
              console.log("Hulk HP: " + hpBarHulk);
              if(hpBar === 0 || hpBar < 0){
                     //setTimeout(function() {}, 20 );
              setTimeout(function(){  confirm("Oh No!You Lost! Play Again?");
                    if(confirm){
                      location.reload();}
                 }, 50);
               }
              else if(hpBarHulk <= 0){
                $("#enemyBarThor").css("visibility","hidden");
                lifeCount++;
                $("#enemies3").css("visibility","hidden");
                $("#attckHulk").css("visibility","hidden");
                $("#enemyStats3").css("visibility","hidden");
                if(lifeCount == 3){
                  confirm("You Won! Play Again?");
                  if(confirm){
                    location.reload();
                  }
                }
              }



              $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
              $("#enemyStats3").html(Hulk.name + "<br /> HP: " + hpBarHulk + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack);
               $("#attckHulkStats").html(Hulk.name + "<br /> HP: " + hpBarHulk + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack);

          });

      //-------------------------
          $("#attckThor").click(function(){
              $("#enemyBarThor").css("visibility","visible");
              $("#enemyBarThor").animate({top:"490px"},300);
              hpBar = hpBar-$("#Thor").data().enemyAttackBack;
              attckPower = attckPower+$("#chosen").data().baseAttack;
                hpBarThor = hpBarThor - attckPower;
                console.log("My HP: " + hpBar);
                console.log("Thor HP: " + hpBarThor);
              if(hpBarThor <= 0){
                lifeCount++;
                $("#enemyBarThor").css("visibility","hidden");


                    $("#attckThor").css("visibility","hidden");
                $("#enemies1").css("visibility","hidden");
                $("#enemyStats1").css("visibility","hidden");
                if(lifeCount == 3){
                  confirm("You Won! Play Again?");
                  if(confirm){
                    location.reload();
                  }
                }
              }

               else if(hpBar <= 0){
                 confirm("Oh No!You Lost! Play Again?");
                 if(confirm){
                   location.reload();}
              }


             $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
             $("#enemyStats1").html(Thor.name + "<br /> HP: " + hpBarThor + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack);
             $("#attckThorStats").html(Thor.name + "<br /> HP: " + hpBarThor + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack);
            // document.getElementById('enemyStats1').innerHTML = Thor.name + "<br /> HP: " + hpBarThor;

            });

         //-------------------------
         $("#attckCapt").click(function(){
             $("#enemyBarCapt").css("visibility","visible");
             $("#enemyBarCapt").animate({top:"430px"},300);
             $("#enemyBarCapt").animate({left:"950px"},300);

             hpBar = hpBar-$("#Capt").data().enemyAttackBack;
             attckPower = attckPower+$("#chosen").data().baseAttack;
               hpBarCapt = hpBarCapt - attckPower;
               console.log("My HP: " + hpBar);
               console.log("Capt HP: " + hpBarCapt);
             if(hpBarCapt <= 0){
              $("#enemyBarCapt").css("visibility","hidden");
               lifeCount++;

                  $("#attckCapt").css("visibility","hidden");
               $("#enemies4").css("visibility","hidden");
               $("#enemyStats4").css("visibility","hidden");
               if(lifeCount == 3){
                 confirm("You Won! Play Again?");
                 if(confirm){
                   location.reload();
                 }
               }
             }

             else if(hpBar <= 0){
                    //$("#message").html("You Lost!");
               confirm("Oh No!You Lost! Play Again?");
               if(confirm){
                 location.reload();}
            }

             $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
             $("#enemyStats4").html(CaptAmerica.name + "<br /> HP: " + hpBarCapt + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack);

             $("#attckCaptStats").html(CaptAmerica.name + "<br /> HP: " + hpBarCapt + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack);
       });

    //-------------------------
    $("#attckIronMan").click(function(){
          $("#enemyBarIronMan").css("visibility","visible");
      if($("#chosen").data().name == "Thor"){

        $("#enemyBarIronMan").animate({top:"450px"},300);
      }

      else{
        $("#enemyBarIronMan").animate({top:"450px"},300);   // middle
        $("#enemyBarIronMan").animate({left:"450px"},300);
      }

      hpBar = hpBar-$("#IronMan").data().enemyAttackBack;
      attckPower = attckPower+$("#chosen").data().baseAttack;
        hpBarIronMan = hpBarIronMan - attckPower;

        console.log("My HP: " + hpBar);
        console.log("Iron Man's HP: " + hpBarIronMan);

      if(hpBarIronMan <= 0){
            $("#enemyBarIronMan").css("visibility","hidden");

                 lifeCount++;

                $("#attckIronMan").css("visibility","hidden");
            $("#enemies2").css("visibility","hidden");
            $("#enemyStats1").css("visibility","hidden");
            if(lifeCount == 3){
              confirm("You Won! Play Again?");
              if(confirm){
                location.reload();
          }
        }
      }

      else if(hpBar <= 0){
              confirm("Oh No!You Lost! Play Again?");
              if(confirm){
                location.reload();}
     }
    $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
    $("#enemyStats2").html(IronMan.name + "<br /> HP: " + hpBarIronMan + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack);

         $("#attckIronManStats").html(IronMan.name + "<br /> HP: " + hpBarIronMan + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack);


 //-------------------------

          });

    var vid = document.getElementById("avengersVid");  // video controls
          function playVid() {
              vid.play();
          }
          function pauseVid() {
              vid.pause();
    }

    var x = document.getElementById("avengersThemeSong");  // audio controls

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}


$("#splash").hover(function(){
      $(this).css("background-image", "url('assets/images/splash2.png')");
      }, function(){
      $(this).css("background-image", "url('assets/images/splash1.png')");
      });

$("#splash").click(function(){
      vid.play();
        x.pause();

      $("#avengersThemeSong").fadeOut();

      setTimeout(function(){ pauseVid();
      }, 1000);
      $("#wrapper").css("visibility","visible");
      $("#avengersVid").css("visibility","visible");
      $("#splash").css("visibility","hidden");
      $("#message").css("visibility","hidden");
      $("#vidMessage").css("visibility","visible");
      $("#chosen").css("visibility","hidden");
});

function pauseVid(){
$("#avengersVid").click(function(){
  $("#avengersThemeSong").fadeIn();
  vid.pause();
  x.play();
  $("#message").css("visibility","visible");
  $("#avengersVid").css("display","none");
  $("#vidMessage").css("display","none");
  $("#chosen").css("visibility","visible");
});

};

});
