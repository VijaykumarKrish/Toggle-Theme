                    var b = "black";

            $(".fa-circle").click(function () {
                if (b == "black") {
                    $("body").css({"background-color": b,
                        "transition":"0.2s linear"
                    });
                    $(".fa-circle").css({
                        "transform": "translateX(40px)",
                        "transition": "0.3s linear",
                        "color":"white"
                    });
                    $("h2").css("color","white");
                    $("#toggle").css("border","2px solid white");
                        b = "white";
                }
                else{
                    $("body").css({"background-color": b,
                    "transition":"0.2s linear"
                    });
                    $(".fa-circle").css({
                        "transform": "translateX(0px)",
                        "color":"black"
                    });
                    $("h2").css("color","black");
                    $("#toggle").css("border","2px solid black");
                    b = "black";
                }
                });