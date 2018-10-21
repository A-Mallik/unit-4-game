var ThorSound = new Audio('assets/audio/thor.mp3');
var HulkSound = new Audio('assets/audio/Hulk.mp3');
var IronManSound = new Audio('assets/audio/Iron.mp3');
var Capt = new Audio('assets/audio/Capt.mp3');



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
            health : 100,
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
  var hpBarHulk = Hulk.health;
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
  console.log($("#Hulk").data());
  console.log($("#Capt").data());



    // $("#Capt").click(function(){
    //
    //      console.log($(this).data());
    //
    // });




   // sendToContainer();
   //  function sendToContainer(){
   //    $("#Hulk").click(function(){
   //
   //        if( $('#chosen').is('') ) {
   //          $("#chosen").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack); }
   //    });
   //
   //  }


      $("#Hulk").click(function(){
          if( $('#chosen').html() == false ) {  //checks if Div is empty
            HulkSound.play();
            $("#chosen").data(Hulk);
            //$("#chosen").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
            hpBar = $("#chosen").data().health;
            attckPower = $("#chosen").data().baseAttack;
            console.log(hpBar);
             $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
            $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
             $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack + "<br />" );
            $("#attckHulk").css("visibility","hidden");
            Hulk.health = 0;
            //--------------------------
              $("#attckCapt").css("visibility", "visible");
            //  $("#attckHulk").css("visibility", "visible");
              $("#attckThor").css("visibility", "visible");
              $("#attckIronMan").css("visibility", "visible");
            //-------------------------------------------------------------
             $("#chosen").animate({top:"-300px"},1000);
             //-------------------------------------------------------------
                               setTimeout(function() {
                       $("#chosen").animate({left:"-200px"},500);
                       $( "#stats" ).fadeIn( "slow", function() {});
                       $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                       $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
                       $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " <br /> Counter: " + $("#chosen").data().enemyAttackBack)});
                       $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
              }, 2000 );
//-------------------------------------------------------------

              $(".enemies").animate({top:"-250px"},1000);
              $("#enemies2").animate({left:"150px"},1000);
               $("#enemyStats1").animate({left:"720px", top:"500px"},1000);
               $("#enemyStats2").animate({left:"720px"},1000);
               $("#enemyStats3").animate({left:"720px"},1000);
              $("#stats").animate({left:"1370px"},1000);
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

            }
              // then appends data

          else{

            $( "#chosen" ).empty();      // elsewise empties the div
            $("#chosen").data(Hulk);

             hpBar = $("#chosen").data().health;
             attckPower = $("#chosen").data().baseAttack;
             console.log(hpBar);
            $( "#enemies1,#enemies2,#enemies3" ).empty();      // elsewise empties the div
            $("#chosen").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );    //then appends data

             $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
             $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
             $("#enemies3").css("visibility","hidden");
             $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack + "<br />" );
            $("#Hulk").css("visibility", "hidden");

            //-----------
            $("#enemies1").css("background-image", "url('assets/images/thor.png')");
            $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
            $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
            $("#chosen").css("background-image", "url('assets/images/hulk.png')");
            //--------------------------
            $( "#Hulk" ).fadeOut( 200, function() {});
            $( "#Thor" ).fadeOut( 200, function() {});
            $( "#IronMan" ).fadeOut( 200, function() {});
          $( "#Capt" ).fadeOut( 200, function() {});
            $("#attckHulk").css("visibility","hidden");
            Hulk.health = 0;
            //-------------------------------------------------------------
             $("#chosen").animate({top:"-300px"},1000);
             //-------------------------------------------------------------
                               setTimeout(function() {
                       $("#chosen").animate({left:"-200px"},500);
                       $( "#stats" ).fadeIn( "slow", function() {});
                       $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                       $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
                       $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                       $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
              }, 2000 );
//-------------------------------------------------------------

              $(".enemies").animate({top:"-250px"},1000);
              $("#enemies2").animate({left:"150px"},1000);
              $("#enemyStats2").animate({left:"700px"},1000);
              $("#stats").animate({left:"1370px"},1000);
              //-------------------------------------------------------------
            }
        });
     //---------------------------------------------------------------------------

        $("#Thor").click(function(){

            if( $('#chosen').html() == false ) {
               ThorSound.play();
                $("#chosen").data(Thor);
            //  $("#chosen").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
              hpBar = $("#chosen").data().health;
              attckPower = $("#chosen").data().baseAttack;
              console.log(hpBar);

              $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />");
              $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
              $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
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
    //-------------------------------------------------------------

                    $(".enemies").animate({top:"-250px"},1000);
                    $("#enemies2").animate({right:"320px"},1000);
                    $("#enemies3").animate({right:"170px"},1000);
                    $("#enemyStats3").animate({left:"770px"},1000);
                    $("#enemyStats2").animate({left:"260px"},1000);
                      $("#stats").animate({left:"1370px"},1000);
                    //-------------------------------------------------------------
            }

            else{

              $( "#chosen" ).empty();
              $("#chosen").data(Thor);
              hpBar = $("#chosen").data().health;
              attckPower = $("#chosen").data().baseAttack;
              console.log(hpBar);
            $( "#enemies1,#enemies2,#enemies3" ).empty();
              $("#chosen").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );

            //  $("#enemies1").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
          //    $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
            //  $("#enemies3").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
              //-----------
              $("#chosen").css("background-image", "url('assets/images/thor.png')");
              $("#enemies2").css("background-image", "url('assets/images/ironman.png')");
              $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
              $("#enemies3").css("background-image", "url('assets/images/Hulk.jpg')");
                $("#enemies1").css("visibility","hidden");
                //--------------------------
                $( "#Hulk" ).fadeOut( 200, function() {});
                $( "#Thor" ).fadeOut( 200, function() {});
                $( "#IronMan" ).fadeOut( 200, function() {});
              $( "#Capt" ).fadeOut( 200, function() {});
                $("#attckThor").css("visibility","hidden");
                //-------------------------------------------------------------
                 $("#chosen").animate({top:"-300px"},1000);
                 //-------------------------------------------------------------
                                   setTimeout(function() {
                           $("#chosen").animate({left:"-200px"},500);
                           //$( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                           $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
                           $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                           $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Hulk.name + "<br /> HP: " + Hulk.health + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack)});
                           $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
                          // $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health)});
                  }, 2000 );
  //-------------------------------------------------------------

                  $(".enemies").animate({top:"-250px"},1000);
                  $("#enemies2").animate({right:"320px"},1000);
                  $("#enemies3").animate({right:"170px"},1000);
                  $("#enemyStats3").animate({left:"770px"},1000);
                  $("#enemyStats1").animate({left:"250px"},1000);
                    $("#stats").animate({left:"1370px"},1000);
                  //-------------------------------------------------------------
            }
          });
       //---------------------------------------------------------------------------
          $("#IronMan").click(function(){

              if( $('#chosen').html() == false ) {
                 IronManSound.play();
                $("#chosen").data(IronMan);


              //  $("#chosen").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
                hpBar = $("#chosen").data().health;
                attckPower = $("#chosen").data().baseAttack;

                $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
                  $("#enemies2").css("visibility","hidden");
                $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
                $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
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

          //-------------------------------------------------------------

                          $(".enemies").animate({top:"-250px"},1000);
                          $("#enemies2").animate({right:"320px"},1000);
                          $("#enemies3").animate({right:"170px"},1000);
                          $("#enemyStats3").animate({left:"770px"},1000);
                            $("#stats").animate({left:"1370px"},1000);
                          //-------------------------------------------------------------
              }

              else{
                  IronMan.health = 0;
                $( "#chosen" ).empty();
                $("#chosen").data(IronMan);
                hpBar = $("#chosen").data().health;
                attckPower = $("#chosen").data().baseAttack;

                $( "#enemies1,#enemies2,#enemies3" ).empty();
                $("#chosen").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );

                $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
                $("#enemies2").css("visibility","hidden");
                $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
                $("#enemies4").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
                //-----------
                $("#enemies1").css("background-image", "url('assets/images/thor.png')");
                $("#chosen").css("background-image", "url('assets/images/ironman.png')");
                $("#enemies4").css("background-image", "url('assets/images/CaptAmerica.png')");
                $("#enemies3").css("background-image", "url('assets/images/hulk.png')");
                $("#IronMan").css("visibility", "hidden");
                //--------------------------
                $( "#Hulk" ).fadeOut( 200, function() {});
                $( "#Thor" ).fadeOut( 200, function() {});
                $( "#IronMan" ).fadeOut( 200, function() {});
              $( "#Capt" ).fadeOut( 200, function() {});
                  $("#attckIronMan").css("visibility","hidden");
                        IronMan.health = 0;
                        //-------------------------------------------------------------
                         $("#chosen").animate({top:"-300px"},1000);
                         //-------------------------------------------------------------
                                           setTimeout(function() {
                                   $("#chosen").animate({left:"-200px"},500);
                                    $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                                    $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                                  //$( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health)});
                                     $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Hulk.name + "<br /> HP: " + Hulk.health + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack)});
                                    $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
                          }, 2000 );

          //-------------------------------------------------------------

                          $(".enemies").animate({top:"-250px"},1000);
                          $("#enemies2").animate({right:"320px"},1000);
                          $("#enemies3").animate({right:"170px"},1000);
                          $("#enemyStats3").animate({left:"770px"},1000);
                            $("#stats").animate({left:"1370px"},1000);
                          //-------------------------------------------------------------
              }
            });

          //---------------------------------------------------------------------------
            $("#Capt").click(function(){

                if( $('#chosen').html() == false ) {

                  $("#chosen").data(CaptAmerica);
                   Capt.play();
                //  $("#chosen").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
                  hpBar = $("#chosen").data().health;
                  attckPower = $("#chosen").data().baseAttack;

                  $("#enemies2").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
                  $("#enemies1").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
                  $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
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
                          $("#stats").animate({left:"1370px"},1000);
                        //-------------------------------------------------------------
                }

                else{
                  hpBarCapt = 0;
                  $( "#chosen" ).empty();
                    $("#chosen").data(CaptAmerica);

                $( "#enemies1,#enemies2,#enemies3" ).empty();
                  $("#chosen").append(CaptAmerica.name + "<br />" + CaptAmerica.health + " " + CaptAmerica.baseAttack + " " + CaptAmerica.enemyAttackBack+ "<br />" );
                  hpBar = $("#chosen").data().health;
                  attckPower = $("#chosen").data().baseAttack;

                  $("#enemies1").append(IronMan.name + "<br />" + IronMan.health + " " + IronMan.baseAttack + " " + IronMan.enemyAttackBack+ "<br />" );
                  $("#enemies2").append(Thor.name + "<br />" + Thor.health + " " + Thor.baseAttack + " " + Thor.enemyAttackBack+ "<br />" );
                  $("#enemies3").append(Hulk.name + "<br />" + Hulk.health + " " + Hulk.baseAttack + " " + Hulk.enemyAttackBack+ "<br />" );
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
                      //-------------------------------------------------------------
                       $("#chosen").animate({top:"-300px"},1000);
                       //-------------------------------------------------------------
                       setTimeout(function() {
               $("#chosen").animate({left:"-200px"},500);
                $( "#stats" ).fadeIn( "slow", function() {$("#stats").append( " HP: " + $("#chosen").data().health + " <br /> Base Attack: " + $("#chosen").data().baseAttack + " Counter: " + $("#chosen").data().enemyAttackBack)});
                $( "#enemyStats1" ).fadeIn( "slow", function() {$("#enemyStats1").append(Thor.name + "<br /> HP: " + Thor.health + "<br /> Base Attack: " + Thor.baseAttack + "<br /> Counter: " + Thor.enemyAttackBack)});
                $( "#enemyStats2" ).fadeIn( "slow", function() {$("#enemyStats2").append(IronMan.name + "<br /> HP: " + IronMan.health + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack)});
                 $( "#enemyStats3" ).fadeIn( "slow", function() {$("#enemyStats3").append(Hulk.name + "<br /> HP: " + Hulk.health + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack)});
              //  $( "#enemyStats4" ).fadeIn( "slow", function() {$("#enemyStats4").append(CaptAmerica.name + "<br /> HP: " + CaptAmerica.health + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack)});
      }, 2000 );
        //-------------------------------------------------------------

                        $(".enemies").animate({top:"-250px"},1000);
                        $("#enemies2").animate({left:"150px"},1000);
                        $("#enemies3").animate({left:"320px"},1000);
                        $("#enemyStats2").animate({left:"770px"},1000);
                        $("#enemyStats3").animate({left:"1270px"},1000);
                          $("#stats").animate({left:"1370px"},1000);
                        //-------------------------------------------------------------
                }
              });


//-----------
         var lifeCount = 0;

          $(document).ready(function() {
      //-------------------------

          $("#attckHulk").click(function(){
            hpBar = hpBar-$("#Hulk").data().enemyAttackBack;
            attckPower = attckPower+$("#chosen").data().baseAttack;
             hpBarHulk = hpBarHulk - attckPower;

            if(hpBarHulk <= 0){
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

            else if(hpBar <= 0){
              confirm("Oh No!You Lost! Play Again?");
              if(confirm){
                location.reload();}
           }

            $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
            $("#enemyStats3").html(Hulk.name + "<br /> HP: " + hpBarHulk + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack);
             $("#attckHulkStats").html(Hulk.name + "<br /> HP: " + hpBarHulk + "<br /> Base Attack: " + Hulk.baseAttack + "<br /> Counter: " + Hulk.enemyAttackBack);
          console.log("Hulk's HP: " + hpBarHulk);
          });

      //-------------------------
          $("#attckThor").click(function(){
            hpBar = hpBar-$("#Thor").data().enemyAttackBack;
            attckPower = attckPower+$("#chosen").data().baseAttack;
              hpBarThor = hpBarThor - attckPower;

            if(hpBarThor <= 0){
              lifeCount++;

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
            console.log("Thor's HP: " + hpBarThor);
          });

       //-------------------------
       $("#attckCapt").click(function(){

         hpBar = hpBar-$("#Capt").data().enemyAttackBack;
         attckPower = attckPower+$("#chosen").data().baseAttack;
           hpBarCapt = hpBarCapt - attckPower;

         if(hpBarCapt <= 0){

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
           confirm("Oh No!You Lost! Play Again?");
           if(confirm){
             location.reload();}
        }

         $("#stats").html($("#chosen").data().name + '<br />' + 'My HP Bar: ' + hpBar + "<br />" + "My Attack Power:" + attckPower );
         $("#enemyStats4").html(CaptAmerica.name + "<br /> HP: " + hpBarCapt + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack);
         console.log("Capt's HP: " + hpBarCapt);
         $("#attckCaptStats").html(CaptAmerica.name + "<br /> HP: " + hpBarCapt + "<br /> Base Attack: " + CaptAmerica.baseAttack + "<br /> Counter: " + CaptAmerica.enemyAttackBack);
       });

    //-------------------------
    $("#attckIronMan").click(function(){

      hpBar = hpBar-$("#IronMan").data().enemyAttackBack;
      attckPower = attckPower+$("#chosen").data().baseAttack;
        hpBarIronMan = hpBarIronMan - attckPower;

      if(hpBarIronMan <= 0){
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
      console.log("IronMan's HP: " + hpBarIronMan);
         $("#attckIronManStats").html(IronMan.name + "<br /> HP: " + hpBarIronMan + "<br /> Base Attack: " + IronMan.baseAttack + "<br /> Counter: " + IronMan.enemyAttackBack);
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
$("#message").css("visibility","visible");

});

// function pauseVid(){
// $("#myVideo").click(function(){
//   vid.pause();
//   $("#myVideo").css("display","none");
// });
//
// };
