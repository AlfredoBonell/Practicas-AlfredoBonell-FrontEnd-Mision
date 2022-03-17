$(function(){

    let timeout;

    const colors = {
        fire: '#FFA05D',
        grass: '#8FD594',
        electric: '#FFE43B',
        water: '#7E97C0',
        ground: '#CAAC4D',
        rock: '#90642D',
        poison: '#9D5B9B',
        bug: '#EAFD71',
        dragon: '#97b3e6',
        psychic: '#FF96B5',
        flying: '#CDCDCD',
        fighting: '#FF5D5D',
        normal: '#FFFFFF'
    }

    const main_types = Object.keys(colors);
    
    function peticionAjax(url){
        return new Promise((resolve, reject) => {
            let req = $.ajax({
                method: "GET",
                url: url,
                beforeSend: function(){
                    $(".overlay").show();
                },
            });

            req.done(function (data){
                resolve(data);
            });

            req.fail(function(jqXHR, textStatus, errorThrown){
                switch(jqXHR.status){
                    case 404:    
                        mostrarMensajeAdvertencia();
                        break;
                    default:
                        mostrarMensajeError();
                        break;
                }
            });

            req.always(function(){
                ocultarMensajesAlertas();
            });
        });
    }

    function mostrarMensajeExito(){
        timeout = setTimeout(function(){
            $("div.alert-success").css("display", "block");
        }, 300);
        $("div.main").css("display", "block");
    }
    
    function mostrarMensajeAdvertencia(){
        mostrarDittoError();
        timeout = setTimeout(function(){
            $("div.alert-warning").css("display", "block");
        }, 300);
        $("div.main").css("display", "block");
    }

    function mostrarMensajeError(){
        mostrarDittoError();
        timeout = setTimeout(function(){
            $("div.alert-danger").css("display", "block");
        }, 300);
        $("div.main").css("display", "block");
    }

    function mostrarDittoError(){       
        let append = ''; 
        $("div.card-body").empty();
        $("div.card-body").css("background", "#FFF");
        append += `
            <img class="card-img-top" src="https://user-images.githubusercontent.com/99234057/158533034-1597452c-3ceb-4fb1-a36d-f4ab32104301.gif"  alt="Imagen Pokemón" style="width: auto;">
        `;
        $("div.card-body").append(append);
    }
    function ocultarMensajesAlertas(){
        timeout = setTimeout(function() {
            $("div.alert-success").css("display", "none");
            $("div.alert-warning").css("display", "none");
            $("div.alert-danger").css("display", "none");
        }, 5000);
    }

    $("input#buscar-pokemon").on('keypress', function(e){
        if($(this).val()!=''){
            if(e.which == 13){
                e.preventDefault();
                let append = '';
                //Validar que no ingresen vacío
                let valorPokemon = $("#buscar-pokemon").val().toLowerCase();
                // console.log(valorPokemon);
                peticionAjax(`https://pokeapi.co/api/v2/pokemon/${valorPokemon}`)
                    .then((data) => {
                        if(data){
                            mostrarMensajeExito();
                            $("div.card-body").empty();
                            // console.log(data);
                            let imagenPokemon = data['sprites'].front_shiny;
                            let tipo = data.types.map(type => type.type.name).join(', ');
                            let habilidad = data.abilities.map(type => type.ability.name).join(', ');
                            let movimientos = data.moves.slice(0, 3).map(type => type.move.name).join(', ');
                            let type = main_types.find(type => tipo.indexOf(type) > -1);
                            let nombrePokemon = data.name[0].toUpperCase() + data.name.slice(1);
                            let color = colors[type];
                            console.log(color);
                            append += `
                                <img class="card-img-top" src="${imagenPokemon}"  alt="Imagen Pokemón" style="width: auto;">
                                <h5 class="card-title">${nombrePokemon} 
                                    <span class="number">#${data.id.toString().padStart(3, '0')}</span>
                                </h5>
                                <small class="type">Tipo: <a href="#" class="badge badge-primary">${tipo}</a></small><br>
                                <small class="type">Debilidad: <a href="#" class="badge badge-info">${habilidad}</a></small><br>
                                <small class="type">Movimientos: <a href="#" class="badge badge-success">${movimientos}</a></small><br><br>
                            `;
                            //Se saca la información del pokemón, atk, hp, etc.
                            $.each(data['stats'], function(index, value){
                                // console.log(index, value);
                                append += `
                                <div style="display: flex; justify-content: space-between; align-content: space-between; padding: 5px; font-size: 18px;">
                                    <p>${value['stat'].name[0].toUpperCase() + value['stat'].name.slice(1)}</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: ${value.base_stat}%;" aria-valuenow="${value.base_stat}" aria-valuemin="0" aria-valuemax="100">${value.base_stat}%</div>
                                </div>
                                `;
                            })
                            $("div.card-body").css("background", color);
                            $("div.card-body").append(append);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    });

    $("input#buscar-pokemon").on('change', function(){
        if ($(this).val() == '') {
            $("#contenedor-pokemones").empty();
            $("div.card-body").css("background", "#FFF");
            $("div.main").css("display", "block");
        }
    });
});