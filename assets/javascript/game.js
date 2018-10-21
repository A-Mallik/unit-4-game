var Thor = new Audio('assets/audio/Thor.mp3');
var Hulk = new Audio('assets/audio/Hulk.mp3');
var IronMan = new Audio('assets/audio/Iron.mp3');
var Capt = new Audio('assets/audio/Capt.mp3');



    $("p1").click(function(){

          $("p1").html(Yoda);

    }

  );


var swChars = {

        ObiWan: {
            name: "Captain America",
            health : 120,
            baseAttack: 8,
            enemyAttackBack: 15,

        },

        Leia: {
            name: "Thor",
            health : 100,
            baseAttack: 14,
            enemyAttackBack: 5
        },

        Vader: {
            name: "Iron Man",
            health : 150,
            baseAttack: 8,
            enemyAttackBack: 20
        },

        Yoda: {
            name: "Hulk",
            health : 180,
            baseAttack: 7,
            enemyAttackBack: 25
        },







  };  // -- end of object bracket

  var ObiWan = swChars.ObiWan;
  var Leia = swChars.Leia;
  var Vader = swChars.Vader;
  var Yoda = swChars.Yoda;
  var hpBar;
  var hpBarYoda = Yoda.health;
  var hpBarLeia= Leia.health;
  var hpBarVader= Vader.health;
  var hpBarObi= ObiWan.health;
  var attckPower;

   // $("#Obi").data(ObiWan.name, ObiWan.health, ObiWan.baseAttack, ObiWan.enemyAttackBack);
   $("#Obi").data(ObiWan);
   $("#Leia").data(Leia);
   $("#Vader").data(Vader);
   $("#Yoda").data(Yoda);
  // $("#Leia").append(Princess.name, Princess.health, Princess.baseAttack, Princess.enemyAttackBack);
  // $("#Vader").append(Vader.name, Vader.health, Vader.baseAttack, Vader.enemyAttackBack);
  // $("#Yoda").append(Yoda.name, Yoda.health, Yoda.baseAttack, Yoda.enemyAttackBack);
  console.log($("#Yoda").data());
  console.log($("#Obi").data());



    // $("#Obi").click(function(){
    //
    //      console.log($(this).data());
    //
    // });




   // sendToContainer();
   //  function sendToContainer(){
   //    $("#Yoda").click(function(){
   //
   //        if( $('#chosen').is('') ) {
   //          $("#chosen").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack); }
   //    });
   //
   //  }


      $("#Yoda").click(function(){
          if( $('#chosen').html() == false ) {  //checks if Div is empty
            Hulk.play();
            $("#chosen").data(Yoda);
            //$("#chosen").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );
            hpBar = $("#chosen").data().health;
            attckPower = $("#chosen").data().baseAttack;
            console.log(hpBar);
            // $("#enemies1").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
            // $("#enemies2").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
            // $("#enemies4").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack + "<br />" );
            $("#attckYoda").css("visibility","hidden");
            Yoda.health = 0;
            //--------------------------
              $("#attckObi").css("visibility", "visible");
            //  $("#attckYoda").css("visibility", "visible");
              $("#attckLeia").css("visibility", "visible");
              $("#attckVader").css("visibility", "visible");
            //-------------------------------------------------------------
             $("#chosen").animate({top:"-300px"},1000);
             //-------------------------------------------------------------
                               setTimeout(function() {
                       $("#chosen").animate({left:"-200px"},500);
                       $( "#stats" ).fadeIn( "slow", function() {});
                       $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                       $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack)});
                       $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                       $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
              }, 2000 );
//-------------------------------------------------------------

              $(".enemies").animate({top:"-250px"},1000);
              $("#enemies2").animate({left:"150px"},1000);
              $("#enemyStats2").animate({left:"720px"},1000);
              $("#stats").animate({left:"970px"},1000);
              //-------------------------------------------------------------
            //-------------------------------------------------------------
            $("#enemies1").css("background-image", "url('assets/images/thor.png')");
            $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
            $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
            $("#enemies3").css("visibility","hidden");
            $("#chosen").css("background-image", "url('assets/images/hulk.png')");
          //  $("#Yoda").css("visibility", "hidden");
            //--------------------------
            $( "#Yoda" ).fadeOut( 200, function() {});
            $( "#Leia" ).fadeOut( 200, function() {});
            $( "#Vader" ).fadeOut( 200, function() {});
          $( "#Obi" ).fadeOut( 200, function() {});

            }
              // then appends data

          else{

            $( "#chosen" ).empty();      // elsewise empties the div
            $("#chosen").data(Yoda);

             hpBar = $("#chosen").data().health;
             attckPower = $("#chosen").data().baseAttack;
             console.log(hpBar);
            $( "#enemies1,#enemies2,#enemies3" ).empty();      // elsewise empties the div
            $("#chosen").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );    //then appends data

            // $("#enemies1").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
            // $("#enemies2").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
             $("#enemies3").css("visibility","hidden");
            // $("#enemies4").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack + "<br />" );
            $("#Yoda").css("visibility", "hidden");

            //-----------
            $("#enemies1").css("background-image", "url('assets/images/thor.png')");
            $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
            $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
            $("#chosen").css("background-image", "url('assets/images/hulk.png')");
            //--------------------------
            $( "#Yoda" ).fadeOut( 200, function() {});
            $( "#Leia" ).fadeOut( 200, function() {});
            $( "#Vader" ).fadeOut( 200, function() {});
          $( "#Obi" ).fadeOut( 200, function() {});
            $("#attckYoda").css("visibility","hidden");
            Yoda.health = 0;
            //-------------------------------------------------------------
             $("#chosen").animate({top:"-300px"},1000);
             //-------------------------------------------------------------
                               setTimeout(function() {
                       $("#chosen").animate({left:"-200px"},500);
                       $( "#stats" ).fadeIn( "slow", function() {});
                       $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                       $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack)});
                       $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                       $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
              }, 2000 );
//-------------------------------------------------------------

              $(".enemies").animate({top:"-250px"},1000);
              $("#enemies2").animate({left:"150px"},1000);
              $("#enemyStats2").animate({left:"700px"},1000);
              $("#stats").animate({left:"970px"},1000);
              //-------------------------------------------------------------
            }
        });
     //---------------------------------------------------------------------------

        $("#Leia").click(function(){

            if( $('#chosen').html() == false ) {
               Thor.play();
                $("#chosen").data(Leia);
            //  $("#chosen").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
              hpBar = $("#chosen").data().health;
              attckPower = $("#chosen").data().baseAttack;
              console.log(hpBar);

            //  $("#enemies3").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />");
            //  $("#enemies2").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
            //  $("#enemies4").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack+ "<br />" );
              //-----------
              $("#chosen").css("background-image", "url('assets/images/thor.png')");
                $("#enemies1").css("visibility","hidden");
              $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
              $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
              $("#enemies3").css("background-image", "url('assets/images/hulk.png')");
              //--------------------------
              $( "#Yoda" ).fadeOut( 200, function() {});
              $( "#Leia" ).fadeOut( 200, function() {});
              $( "#Vader" ).fadeOut( 200, function() {});
            $( "#Obi" ).fadeOut( 200, function() {});
                $("#attckLeia").css("visibility","hidden");
                  Leia.health = 0;
                  $("#attckObi").css("visibility", "visible");
                  $("#attckYoda").css("visibility", "visible");
                  //$("#attckLeia").css("visibility", "visible");
                  $("#attckVader").css("visibility", "visible");
                  //-------------------------------------------------------------
                   $("#chosen").animate({top:"-300px"},1000);
                   //-------------------------------------------------------------
                                     setTimeout(function() {
                             $("#chosen").animate({left:"-200px"},500);
                             //$( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                             $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack)});
                             $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                             $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Yoda.name + "<br /> HP: " + Yoda.health + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack)});
                             $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
                            // $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health)});
                    }, 2000 );
    //-------------------------------------------------------------

                    $(".enemies").animate({top:"-250px"},1000);
                    $("#enemies2").animate({right:"320px"},1000);
                    $("#enemies3").animate({right:"170px"},1000);
                    $("#enemyStats3").animate({left:"770px"},1000);
                    $("#enemyStats2").animate({left:"260px"},1000);
                      $("#stats").animate({left:"970px"},1000);
                    //-------------------------------------------------------------
            }

            else{

              $( "#chosen" ).empty();
              $("#chosen").data(Leia);
              hpBar = $("#chosen").data().health;
              attckPower = $("#chosen").data().baseAttack;
              console.log(hpBar);
            $( "#enemies1,#enemies2,#enemies3" ).empty();
              $("#chosen").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );

            //  $("#enemies1").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );
          //    $("#enemies2").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
            //  $("#enemies3").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack+ "<br />" );
              //-----------
              $("#chosen").css("background-image", "url('assets/images/thor.png')");
              $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
              $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
              $("#enemies3").css("background-image", "url('assets/images/Hulk.jpg')");
                $("#enemies1").css("visibility","hidden");
                //--------------------------
                $( "#Yoda" ).fadeOut( 200, function() {});
                $( "#Leia" ).fadeOut( 200, function() {});
                $( "#Vader" ).fadeOut( 200, function() {});
              $( "#Obi" ).fadeOut( 200, function() {});
                $("#attckLeia").css("visibility","hidden");
                //-------------------------------------------------------------
                 $("#chosen").animate({top:"-300px"},1000);
                 //-------------------------------------------------------------
                                   setTimeout(function() {
                           $("#chosen").animate({left:"-200px"},500);
                           //$( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                           $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Vader.name + "<br /> HP: " + Vader.health + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack)});
                           $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                           $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Yoda.name + "<br /> HP: " + Yoda.health + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack)});
                           $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
                          // $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health)});
                  }, 2000 );
  //-------------------------------------------------------------

                  $(".enemies").animate({top:"-250px"},1000);
                  $("#enemies2").animate({right:"320px"},1000);
                  $("#enemies3").animate({right:"170px"},1000);
                  $("#enemyStats3").animate({left:"770px"},1000);
                  $("#enemyStats1").animate({left:"250px"},1000);
                    $("#stats").animate({left:"970px"},1000);
                  //-------------------------------------------------------------
            }
          });
       //---------------------------------------------------------------------------
          $("#Vader").click(function(){

              if( $('#chosen').html() == false ) {
                 IronMan.play();
                $("#chosen").data(Vader);


              //  $("#chosen").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
                hpBar = $("#chosen").data().health;
                attckPower = $("#chosen").data().baseAttack;

              //  $("#enemies1").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
                  $("#enemies2").css("visibility","hidden");
              //  $("#enemies3").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );
              //  $("#enemies4").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack+ "<br />" );
                //-----------
                $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                $("#chosen").css("background-image", "url('assets/images/ironman.png')");
                $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
                $("#enemies3").css("background-image", "url('assets/images/hulk.png')");

                //--------------------------
                $( "#Yoda" ).fadeOut( 200, function() {});
                $( "#Leia" ).fadeOut( 200, function() {});
                $( "#Vader" ).fadeOut( 200, function() {});
              $( "#Obi" ).fadeOut( 200, function() {});
                  $("#attckVader").css("visibility","hidden");
                        Vader.health = 0;
                        $("#attckObi").css("visibility", "visible");
                        $("#attckYoda").css("visibility", "visible");
                        $("#attckLeia").css("visibility", "visible");
                      //  $("#attckVader").css("visibility", "visible");
                        //-------------------------------------------------------------
                         $("#chosen").animate({top:"-300px"},1000);
                         //-------------------------------------------------------------
                                           setTimeout(function() {
                                   $("#chosen").animate({left:"-200px"},500);
                                   $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                                    $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                                  //$( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health)});
                                     $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Yoda.name + "<br /> HP: " + Yoda.health + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack)});
                                    $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
                          }, 2000 );

          //-------------------------------------------------------------

                          $(".enemies").animate({top:"-250px"},1000);
                          $("#enemies2").animate({right:"320px"},1000);
                          $("#enemies3").animate({right:"170px"},1000);
                          $("#enemyStats3").animate({left:"770px"},1000);
                            $("#stats").animate({left:"970px"},1000);
                          //-------------------------------------------------------------
              }

              else{
                  Vader.health = 0;
                $( "#chosen" ).empty();
                $("#chosen").data(Vader);
                hpBar = $("#chosen").data().health;
                attckPower = $("#chosen").data().baseAttack;

                $( "#enemies1,#enemies2,#enemies3" ).empty();
                $("#chosen").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );

                $("#enemies1").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
                $("#enemies2").css("visibility","hidden");
                $("#enemies3").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );
                $("#enemies4").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack+ "<br />" );
                //-----------
                $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                $("#chosen").css("background-image", "url('assets/images/ironman.png')");
                $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
                $("#enemies3").css("background-image", "url('assets/images/hulk.png')");
                $("#Vader").css("visibility", "hidden");
                //--------------------------
                $( "#Yoda" ).fadeOut( 200, function() {});
                $( "#Leia" ).fadeOut( 200, function() {});
                $( "#Vader" ).fadeOut( 200, function() {});
              $( "#Obi" ).fadeOut( 200, function() {});
                  $("#attckVader").css("visibility","hidden");
                        Vader.health = 0;
                        //-------------------------------------------------------------
                         $("#chosen").animate({top:"-300px"},1000);
                         //-------------------------------------------------------------
                                           setTimeout(function() {
                                   $("#chosen").animate({left:"-200px"},500);
                                    $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                                    $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                                  //$( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health)});
                                     $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Yoda.name + "<br /> HP: " + Yoda.health + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack)});
                                    $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
                          }, 2000 );

          //-------------------------------------------------------------

                          $(".enemies").animate({top:"-250px"},1000);
                          $("#enemies2").animate({right:"320px"},1000);
                          $("#enemies3").animate({right:"170px"},1000);
                          $("#enemyStats3").animate({left:"770px"},1000);
                            $("#stats").animate({left:"970px"},1000);
                          //-------------------------------------------------------------
              }
            });

          //---------------------------------------------------------------------------
            $("#Obi").click(function(){

                if( $('#chosen').html() == false ) {

                  $("#chosen").data(ObiWan);
                   Capt.play();
                //  $("#chosen").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack+ "<br />" );
                  hpBar = $("#chosen").data().health;
                  attckPower = $("#chosen").data().baseAttack;

                //  $("#enemies2").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
                //  $("#enemies1").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
                //  $("#enemies3").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );
                    $("#enemies4").css("visibility","hidden");
                  //-----------
                  $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                  $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
                  $("#chosen").css("background-image", "url('assets/images/CaptAmerica.png')");
                  $("#enemies3").css("background-image", "url('assets/images/hulk.png')");
                  //--------------------------
                  $( "#Yoda" ).fadeOut( 200, function() {});
                  $( "#Leia" ).fadeOut( 200, function() {});
                  $( "#Vader" ).fadeOut( 200, function() {});
                $( "#Obi" ).fadeOut( 200, function() {});
                    $("#attckObi").css("visibility","hidden");
                      hpBarObi = 0;
                      //$("#attckObi").css("visibility", "visible");
                      $("#attckYoda").css("visibility", "visible");
                      $("#attckLeia").css("visibility", "visible");
                      $("#attckVader").css("visibility", "visible");
                      //-------------------------------------------------------------
                       $("#chosen").animate({top:"-300px"},1000);
                       //-------------------------------------------------------------
                       setTimeout(function() {
               $("#chosen").animate({left:"-200px"},500);
                $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack)});
                 $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Yoda.name + "<br /> HP: " + Yoda.health + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack)});
              //  $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
      }, 2000 );
        //-------------------------------------------------------------

                        $(".enemies").animate({top:"-250px"},1000);
                        $("#enemies2").animate({left:"150px"},1000);
                        $("#enemies3").animate({left:"320px"},1000);
                        $("#enemyStats2").animate({left:"720px"},1000);
                        $("#enemyStats3").animate({left:"1270px"},1000);
                          $("#stats").animate({left:"970px"},1000);
                        //-------------------------------------------------------------
                }

                else{
                  hpBarObi = 0;
                  $( "#chosen" ).empty();
                    $("#chosen").data(ObiWan);

                $( "#enemies1,#enemies2,#enemies3" ).empty();
                  $("#chosen").append(ObiWan.name + "<br />" + ObiWan.health + " " + ObiWan.baseAttack + " " + ObiWan.enemyAttackBack+ "<br />" );
                  hpBar = $("#chosen").data().health;
                  attckPower = $("#chosen").data().baseAttack;

                  $("#enemies1").append(Vader.name + "<br />" + Vader.health + " " + Vader.baseAttack + " " + Vader.enemyAttackBack+ "<br />" );
                  $("#enemies2").append(Leia.name + "<br />" + Leia.health + " " + Leia.baseAttack + " " + Leia.enemyAttackBack+ "<br />" );
                  $("#enemies3").append(Yoda.name + "<br />" + Yoda.health + " " + Yoda.baseAttack + " " + Yoda.enemyAttackBack+ "<br />" );
                    $("#enemies4").css("visibility","hidden");
                  //-----------
                  $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                  $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
                  $("#chosen").css("background-image", "url('assets/images/CaptAmerica.png')");
                  $("#enemies3").css("background-image", "url('assets/images/hulk.png')");

                  //--------------------------
                  $( "#Yoda" ).fadeOut( 200, function() {});
                  $( "#Leia" ).fadeOut( 200, function() {});
                  $( "#Vader" ).fadeOut( 200, function() {});
                $( "#Obi" ).fadeOut( 200, function() {});
                    $("#attckObi").css("visibility","hidden");
                      hpBarObi = 0;
                      //-------------------------------------------------------------
                       $("#chosen").animate({top:"-300px"},1000);
                       //-------------------------------------------------------------
                       setTimeout(function() {
               $("#chosen").animate({left:"-200px"},500);
                $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Leia.name + "<br /> HP: " + Leia.health + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack)});
                $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(Vader.name + "<br /> HP: " + Vader.health + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack)});
                 $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Yoda.name + "<br /> HP: " + Yoda.health + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack)});
              //  $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(ObiWan.name + "<br /> HP: " + ObiWan.health + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack)});
      }, 2000 );
        //-------------------------------------------------------------

                        $(".enemies").animate({top:"-250px"},1000);
                        $("#enemies2").animate({left:"150px"},1000);
                        $("#enemies3").animate({left:"320px"},1000);
                        $("#enemyStats2").animate({left:"770px"},1000);
                        $("#enemyStats3").animate({left:"1270px"},1000);
                          $("#stats").animate({left:"970px"},1000);
                        //-------------------------------------------------------------
                }
              });


//-----------
         var lifeCount = 0;

          $(document).ready(function() {
      //-------------------------

          $("#attckYoda").click(function(){
            hpBar = hpBar-$("#Yoda").data().enemyAttackBack;
            attckPower = attckPower+$("#chosen").data().baseAttack;
             hpBarYoda = hpBarYoda - attckPower;

            if(hpBarYoda <= 0){
              lifeCount++;



              $("#enemies3").css("visibility","hidden");
              $("#attckYoda").css("visibility","hidden");
              $("#enemyStats3").css("visibility","hidden");
              if(lifeCount == 3){
                alert("you winssss");
              }
            }

             else if(hpBar <= 0){
              alert("you lost!");
            }

            $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
            $("#enemyStats3").html(Yoda.name + "<br /> HP: " + hpBarYoda + "<br /> Base Attack: " + Yoda.baseAttack + "<br /> Counter: " + Yoda.enemyAttackBack);
          console.log("Yoda's HP: " + hpBarYoda);
          });

      //-------------------------
          $("#attckLeia").click(function(){
            hpBar = hpBar-$("#Leia").data().enemyAttackBack;
            attckPower = attckPower+$("#chosen").data().baseAttack;
              hpBarLeia = hpBarLeia - attckPower;

            if(hpBarLeia <= 0){
              lifeCount++;

                  $("#attckLeia").css("visibility","hidden");
              $("#enemies1").css("visibility","hidden");
              $("#enemyStats1").css("visibility","hidden");
              if(lifeCount == 3){
                alert("you winssss");
              }
            }

             else if(hpBar <= 0){
              alert("you lost!");
            }

           $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
           $("#enemyStats1").html(Leia.name + "<br /> HP: " + hpBarLeia + "<br /> Base Attack: " + Leia.baseAttack + "<br /> Counter: " + Leia.enemyAttackBack);
          // document.getElementById('enemyStats1').innerHTML = Leia.name + "<br /> HP: " + hpBarLeia;
            console.log("Leia's HP: " + hpBarLeia);
          });

       //-------------------------
       $("#attckObi").click(function(){

         hpBar = hpBar-$("#Obi").data().enemyAttackBack;
         attckPower = attckPower+$("#chosen").data().baseAttack;
           hpBarObi = hpBarObi - attckPower;

         if(hpBarObi <= 0){

           lifeCount++;

              $("#attckObi").css("visibility","hidden");
           $("#enemies4").css("visibility","hidden");
           $("#enemyStats4").css("visibility","hidden");
           if(lifeCount == 3){
             alert("you winssss");
           }
         }

           else if(hpBar <= 0){
           alert("you lost!");
         }

         $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
         $("#enemyStats4").html(ObiWan.name + "<br /> HP: " + hpBarObi + "<br /> Base Attack: " + ObiWan.baseAttack + "<br /> Counter: " + ObiWan.enemyAttackBack);
         console.log("Obi's HP: " + hpBarObi);
       });

    //-------------------------
    $("#attckVader").click(function(){

      hpBar = hpBar-$("#Vader").data().enemyAttackBack;
      attckPower = attckPower+$("#chosen").data().baseAttack;
        hpBarVader = hpBarVader - attckPower;

      if(hpBarVader <= 0){
             lifeCount++;

            $("#attckVader").css("visibility","hidden");
        $("#enemies2").css("visibility","hidden");
        $("#enemyStats1").css("visibility","hidden");
        if(lifeCount == 3){
          alert("you winssss");
        }
      }

        if(hpBar === 0){
        alert("you lost!");
      }


      else if(hpBar <= 0){
      alert("you lost!");
    }
    $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
    $("#enemyStats2").html(Vader.name + "<br /> HP: " + hpBarVader + "<br /> Base Attack: " + Vader.baseAttack + "<br /> Counter: " + Vader.enemyAttackBack);
      console.log("Vader's HP: " + hpBarVader);
    });

 //-------------------------
 $("#reloadBtn").click(function(){
    location.reload();
 });




 //-------------------------



          });

          var vid = document.getElementById("myVideo");

          function playVid() {
              vid.play();
          }

          function pauseVid() {
              vid.pause();
          }


          $("#splash").hover(function(){
$(this).css("background-image", "url('assets/images/splash2.png')");
}, function(){
$(this).css("background-image", "url('assets/images/splash1.png')");
});

$("#splash").click(function(){
//vid.play();
//setTimeout(function(){ pauseVid();
//}, 1000);
$("#wrapper").css("visibility","visible");
//$("#myVideo").css("visibility","visible");
$("#splash").css("visibility","hidden");

});

// function pauseVid(){
// $("#myVideo").click(function(){
//   vid.pause();
//   $("#myVideo").css("display","none");
// });
//
// };
