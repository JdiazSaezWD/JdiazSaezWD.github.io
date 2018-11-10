var ayudaAbierto = false;
var time;
var tarjetaTrabajos = true;

var m_app = b4w.require("app");
var m_data = b4w.require("data");
var m_anchors = b4w.require("anchors");
var m_scenes = b4w.require("scenes");

m_app.init({
    canvas_container_id: "container",
    callback: load_cb,
    track_container_position: true,
})
/*Anclas*/
function load_cb(canvas_elem) {
    var cyl_text = document.createElement("div");
    cyl_text.id = "alonso";
    cyl_text.style.position = "absolute";
    cyl_text.style.zIndex = "9";
    cyl_text.style.width = "30px";
    cyl_text.style.borderRadius = "30px";
    cyl_text.style.height = "30px";
    cyl_text.style.display = "none";
    document.body.appendChild(cyl_text);

    var cyl_text = document.createElement("div");
    cyl_text.id = "graphic";
    cyl_text.style.position = "absolute";
    cyl_text.style.zIndex = "9";
    cyl_text.style.width = "30px";
    cyl_text.style.borderRadius = "30px";
    cyl_text.style.height = "30px";
    cyl_text.style.display = "none";
    document.body.appendChild(cyl_text);

    var cyl_text = document.createElement("div");
    cyl_text.id = "alfredo";
    cyl_text.style.position = "absolute";
    cyl_text.style.zIndex = "9";
    cyl_text.style.display = "none";
    cyl_text.style.width = "30px";
    cyl_text.style.height = "30px";
    cyl_text.style.borderRadius = "30px";
    document.body.appendChild(cyl_text);

    canvas_elem.addEventListener("mousedown", main_canvas_click, false);
    m_data.load("json/todo.json", loaded_cb);


}
/*dof*/
var dof = true;

function setDOF() {
    if (dof) {
        m_scenes.set_dof_params({
            dof_distance: 5
        });
        $("#alfredo").css("display", "none");
        $("#alonso").css("display", "none");
        $("#graphic").css("display", "none");
        $("#coln_3").css("bottom", "-500px", 500);
        $("#animacion-grafico1").css("bottom", "-500px", 100);
        $("#animacion-grafico2").css("bottom", "-400px", 100);
        $("#animacion-grafico3").css("bottom", "-400px", 100);
        $("#animacion-grafico4").css("bottom", "-350px", 100);
        $("#animacion-grafico5").css("bottom", "-300px", 100);
        $("#cartel_imac").css("bottom", "-350px", 100);
        $("#valle_largo").css("bottom", "-300px", 100);
        $("#edificio").css("bottom", "-400px", 100);
        $("#cartel3d").css("bottom", "-350px", 100);
        dof = false;
    } else {
        m_scenes.set_dof_params({
            dof_distance: 16
        });
        $("#alfredo").css("display", "block");
        $("#alonso").css("display", "block");
        $("#graphic").css("display", "block");
        dof = true;
    }
}

var trabajosWeb = true;

function set_trabajosWeb() {
    if (trabajosWeb) {
        $("#web_container").animate({
            left: "0px"
        }, 1000);
        trabajosWeb = false;
    } else {
        $("#web_container").animate({
            left: "-35%"
        }, 1000);
        $("#tarjetas_trabajos").animate({
            right: "-610px"
        }, 700);
        $("#informacion_trabajo").animate({
            bottom: "-370px"
        }, 1500);
        tarjetaTrabajos = true;
        trabajosWeb = true;
    }
}

var trabajosGrafico = true;

function set_trabajosGrafico() {
    if (trabajosGrafico) {
        $("#graphic_container").animate({
            left: "0px"
        }, 1000);
        trabajosGrafico = false;
    } else {
        $("#graphic_container").animate({
            left: "-35%"
        }, 1000);
        tarjetaTrabajos = true;
        $("#tarjetas_trabajos_grph").animate({
            right: "-610px"
        }, 700);
        $("#informacion_trabajo_grph").animate({
            bottom: "-370px"
        }, 1000);
        trabajosGrafico = true
    }
}

var trabajos3D = true;

function set_trabajos3D() {
    if (trabajos3D) {

        $("#3D_container").animate({
            left: "0px"
        }, 1000);
        trabajos3D = false;
    } else {
        $("#3D_container").animate({
            left: "-35%"
        }, 1000);
        $("#tarjetas_trabajos_3D").animate({
            right: "-610px"
        }, 700);
        $("#informacion_trabajo_3D").animate({
            bottom: "-370px"
        }, 1000);
        trabajos3D = true
    }
}

/*Click planetas*/
function main_canvas_click(e) {
    if (e.preventDefault) e.preventDefault();

    var x = e.clientX;
    var y = e.clientY;

    var obj = m_scenes.pick_object(x, y);

    if (obj) {
        console.log("Nombre del objeto seleccionado: " + obj.name + ", X: " + x + ", Y: " + y);
        switch (obj.name) {
            case 'planeta vegeta':
                setDOF();
                set_trabajosWeb()
                break;
            case '3':
                setDOF();
                set_trabajos3D();
                break;
            case '4':
                setDOF();
                set_trabajosGrafico()
                break;
        }
    }
}

/*animaciones*/
function loaded_cb() {
    $("#alonso").hover(function () {

        $("#animacion-grafico1").css("bottom", "0px", 300);
        $("#valle_largo").css("bottom", "-50px", 600);
        $("#coln_3").css("bottom", "-40px", 500);
        $("#animacion-grafico4").css("bottom", "-50px", 500);
        $("#cartel_imac").css("bottom", "70px", 600);
        $("#animacion-grafico2").css("bottom", "-50px", 500);
        /* esconder */
        $("#animacion-grafico3").css("bottom", "-400px", 100);
        $("#animacion-grafico5").css("bottom", "-350px", 100);
        $("#cartel3d").css("bottom", "-400px", 100);
        $("#edificio").css("bottom", "-400px", 100);
        clearTimeout(time);
        time = setTimeout(function () {
            $("#coln_3").css("bottom", "-500px", 100);
            $("#animacion-grafico1").css("bottom", "-500px", 100);
            $("#animacion-grafico2").css("bottom", "-400px", 100);
            $("#animacion-grafico3").css("bottom", "-400px", 100);
            $("#animacion-grafico4").css("bottom", "-350px", 100);
            $("#animacion-grafico5").css("bottom", "-300px", 100);
            $("#cartel_imac").css("bottom", "-350px", 100);
            $("#valle_largo").css("bottom", "-300px", 100);
            $("#edificio").css("bottom", "-400px", 100);
            $("#cartel3d").css("bottom", "-350px", 100);
        }, 3500);
    });


    $("#graphic").hover(function () {

        $("#animacion-grafico1").css("bottom", "0px", 300);
        $("#animacion-grafico2").css("bottom", "-50px", 700);
        $("#animacion-grafico3").css("bottom", "-40px", 800);
        $("#animacion-grafico4").css("bottom", "-50px", 800);
        $("#animacion-grafico5").css("bottom", "70px", 500);
        /* esconder */
        $("#valle_largo").css("bottom", "-300px", 100);
        $("#edificio").css("bottom", "-400px", 100);
        $("#cartel3d").css("bottom", "-350px", 100);
        $("#coln_3").css("bottom", "-400px", 100);
        $("#cartel_imac").css("bottom", "-350px", 100);
        clearTimeout(time);
        time = setTimeout(function () {
            $("#coln_3").css("bottom", "-500px", 500);
            $("#animacion-grafico1").css("bottom", "-500px", 100);
            $("#animacion-grafico2").css("bottom", "-400px", 100);
            $("#animacion-grafico3").css("bottom", "-400px", 100);
            $("#animacion-grafico4").css("bottom", "-350px", 100);
            $("#animacion-grafico5").css("bottom", "-300px", 100);
            $("#cartel_imac").css("bottom", "-350px", 100);
            $("#valle_largo").css("bottom", "-300px", 100);
            $("#edificio").css("bottom", "-400px", 100);
            $("#cartel3d").css("bottom", "-350px", 100);
        }, 3500);

    });

    $("#alfredo").hover(function () {
        clearTimeout(time);
        $("#animacion-grafico1").css("bottom", "0px", 300);
        $("#valle_largo").css("bottom", "-50px", 400);
        $("#edificio").css("bottom", "-40px", 600);
        $("#cartel3d").css("bottom", "70px", 400);
        /* esconder */
        $("#coln_3").css("bottom", "-500px", 500);
        $("#animacion-grafico2").css("bottom", "-400px", 100);
        $("#animacion-grafico3").css("bottom", "-400px", 100);
        $("#animacion-grafico4").css("bottom", "-350px", 100);
        $("#animacion-grafico5").css("bottom", "-300px", 100);
        $("#cartel_imac").css("bottom", "-350px", 100);
        time = setTimeout(function () {
            $("#coln_3").css("bottom", "-500px", 100);
            $("#animacion-grafico1").css("bottom", "-500px", 100);
            $("#animacion-grafico2").css("bottom", "-400px", 100);
            $("#animacion-grafico3").css("bottom", "-400px", 100);
            $("#animacion-grafico4").css("bottom", "-350px", 100);
            $("#animacion-grafico5").css("bottom", "-300px", 100);
            $("#cartel_imac").css("bottom", "-350px", 100);
            $("#valle_largo").css("bottom", "-300px", 100);
            $("#edificio").css("bottom", "-400px", 100);
            $("#cartel3d").css("bottom", "-350px", 100);
        }, 3500);
    });

}


/*function loaded_cb() {
    $("#alfredo").click(function(){
    $("#animacion-grafico1").css("bottom", "-500px",500);
    $$("#valle_largo").css("bottom", "-300px",500); 
    $("#edificio").css("bottom", "-400px",500); 
    $("#cartel3d").css("bottom", "-350px",500);
    $("#animacion-grafico5").css("bottom", "-350px",500);
        });
    } 

    

   

    function loaded_cb() {
    $("#alonso").click(function(){
    $("#animacion-grafico1").css("bottom", "-500px",500);
    $("#animacion-grafico2").css("bottom", "-400px",500); 
    $("#animacion-grafico3").css("bottom", "-400px",500); 
    $("#animacion-grafico4").css("bottom", "-350px",500);
    $("#animacion-grafico5").css("bottom", "-300px",500);
        });
    } */









var frases = [
        'hello :D', 'Bye :D', 'Moshimoshi :D', 'Hola :D', 'Welcome :D', 'heeeey :D', 'you are amazing!', 'im a marvel fan', 'I like dragons so much', 'i love lowpoly <3', 'i love cats ^^', 'i like my desktop clean but im so disordered D:', 'i love anime too :D', 'Looking for a place in sweden ^^'

    ];

var frase = Math.floor(Math.random(0, frases.length - 1) * 10);
console.log('random: ' + frase + ' esta es la frase ' + frases[frase]);

$(window).load(function () {
    $('#main-container').delay(2300).animate({
            top: "-900%"
        },
        6000,
        'easeInOutBack',
        function () {
            $("#instrucciones").css("opacity", "1");
            $('#conatiner').css("display", "none");
            $("#barra-abajo").animate({
                right: "160px"
            }, 1000, 'easeInQuart');
            $("#barra-arriba").animate({
                right: "160px"
            }, 1000, 'easeInQuart');
            $("#about").animate({
                right: "30px"
            }, 1300, 'easeInQuart', function () {
                $("#alonso").css("display", "block", "width", "300px");
                $("#graphic").css("display", "block");
                $("#alfredo").css("display", "block");
            });
        });

});
$(document).ready(function () {
    $('#sorpresa').html(frases[frase]);

});


$(document).ready(function () {
    $("#about").click(function () {
        $('#about').delay(200).css("display", "none");
        $('#close').delay(200).css("display", "block");
        $('#photo').css("display", "block").delay(500).animate({
            marginRight: "70%"
        }, 1200, 'easeOutQuint');
        $('#text-contact').css("display", "block").animate({
            marginLeft: "100%"
        }, 1000, 'easeOutBack');
        $('#gift-abajo-texto').delay(750).css("background-image", "url(/../multimedia/gif-flores-texto-2.gif)");
        $('#gif-arriba-texto').delay(700).css("background-image", "url(/../multimedia/gif-flores-texto-1.gif)");
        $('#correo').delay(100).animate({
            bottom: "15%"
        }, 800);
        $('#rress').delay(200).animate({
            bottom: "10%"
        }, 800);
        $('#conatiner').css("display", "none");
        $('#barra-arriba').toggleClass("mini-barra-arriba-2");
        $('#barra-abajo').toggleClass("mini-barra-abajo-2");
        $('#ancla-foto-contacto').delay(5000).toggleClass("ancla-foto-contacto-recto", 1000, 'easeInOutBack');
        $("#animacion-grafico1").css("bottom", "-500px", 100);
        $("#animacion-grafico2").css("bottom", "-400px", 100);
        $("#animacion-grafico3").css("bottom", "-400px", 100);
        $("#animacion-grafico4").css("bottom", "-350px", 100);
        $("#animacion-grafico5").css("bottom", "-300px", 100);
        $("#cartel_imac").css("bottom", "-350px", 100);
        $("#valle_largo").css("bottom", "-300px", 100);
        $("#edificio").css("bottom", "-400px", 100);
        $("#cartel3d").css("bottom", "-350px", 100);
    });
});


$(document).ready(function () {
    $("#close").click(function () {
        $('#gift-abajo-texto').css("background-image", "url(/../multimedia/gif_vuelta_abajo.gif)");
        $('#gif-arriba-texto').css("background-image", "url(/../multimedia/gif_vuelta_arriba.gif)");
        $('#close').delay(500).css("display", "none");
        $('#about').delay(500).css("display", "block");
        $('#rress').delay(100).animate({
            bottom: "-50px"
        }, 800);
        $('#correo').delay(500).animate({
            bottom: "-50px"
        }, 800);
        $('#photo').animate({
            marginRight: "0px"
        }, 1000, 'easeInQuint');
        $('#text-contact').delay(400).animate({
            marginLeft: "0px"
        }, 1000, 'easeInCirc');
        $('#barra-arriba').toggleClass("mini-barra-arriba-2");
        $('#barra-abajo').toggleClass("mini-barra-abajo-2");
        $('#conatiner').css("display", "block");
        $('#ancla-foto-contacto').toggleClass("ancla-foto-contacto-recto");
    });
});

$(document).ready(function () {

    $("#next-instruction").click(function () {
        $("#slider-instrucciones").animate({
            left: "-460px"
        }, 1000);
        $("#next-instruction").css("display", "none");
        $("#next-next-instruction").css("display", "block");
    });

    $("#next-next-instruction").click(function () {
        $("#slider-instrucciones").animate({
            left: "-920px"
        }, 1000);
        $("#next-next-instruction").css("display", "none");
        $("#close-instrucciones").css("display", "block");
    });

    $("#close-instrucciones").click(function () {
        $("#instrucciones").css("display", "none");
        $("#slider-instrucciones").animate({
            left: "0px"
        }, 1000);
        $("#next-instruction").css("display", "block");
        $('#conatiner').css("display", "block");
        $("#ayuda").css("display", "block");
        $("#close-instrucciones").css("display", "none");

    });

    $("#ayuda").click(function () {
        if (!ayudaAbierto) {
            $("#punto-i").toggleClass("punto-barra");
            $("#barra-i").toggleClass("barra-barra");
            $("#instrucciones").css("display", "block");
            ayudaAbierto = true;
        } else {
            ayudaAbierto = false;
            $("#punto-i").toggleClass("punto-barra");
            $("#barra-i").toggleClass("barra-barra");
            $("#instrucciones").css("display", "none");
        }

    });



});

$(document).ready(function () {
    /*trabajo 1*/
    $("#trabajo_web_1").click(function () {
        if (tarjetaTrabajos) {
            tarjetaTrabajos = false;
            $("#tarjetas_trabajos").animate({
                right: "10px"
            }, 700);
            $("#informacion_trabajo").animate({
                bottom: "50px"
            }, 1000);
        } else {
            tarjetaTrabajos = true;
            $("#tarjetas_trabajos").animate({
                right: "-610px"
            }, 700);
            $("#informacion_trabajo").animate({
                bottom: "-370px"
            }, 1000);
        }
    });

    $("#trabajo_3D_1").click(function () {
        if (tarjetaTrabajos) {
            tarjetaTrabajos = false;
            $("#tarjetas_trabajos_3D").animate({
                right: "10px"
            }, 700);
            $("#informacion_trabajo_3D").animate({
                bottom: "50px"
            }, 1000);
        } else {
            tarjetaTrabajos = true;
            $("#tarjetas_trabajos_3D").animate({
                right: "-610px"
            }, 700);
            $("#informacion_trabajo_3D").animate({
                bottom: "-370px"
            }, 1000);
        }
    });


    $("#trabajo_grph_1").click(function () {
        if (tarjetaTrabajos) {
            tarjetaTrabajos = false;
            $("#tarjetas_trabajos_grph").animate({
                right: "10px"
            }, 700);
            $("#informacion_trabajo_grph").animate({
                bottom: "50px"
            }, 1000);
        } else {
            tarjetaTrabajos = true;
            $("#tarjetas_trabajos_grph").animate({
                right: "-610px"
            }, 700);
            $("#informacion_trabajo_grph").animate({
                bottom: "-370px"
            }, 1000);
        }
    });





});
