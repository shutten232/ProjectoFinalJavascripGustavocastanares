const data = {
    misiones: [
        { id: 'facil', nombre: 'Patrulla (Bichos)', puntos: 100 },
        { id: 'medio', nombre: 'Asalto (Ciborgs)', puntos: 150 },
        { id: 'dificil', nombre: 'Asedio (Iluminados)', puntos: 200 }
    ],
    armas: [
        { id: 'Liberador', nombre: 'Liberador', puntos: 20 },
        { id: 'Justiciero', nombre: 'Justiciero', puntos: 30 },
        { id: 'Defensor', nombre: 'Defensor', puntos: 40 }
    ],
    armaduras: [
        { id: 'Estandar', nombre: 'Estandar', puntos: 20 },
        { id: 'Pesada', nombre: 'Pesada', puntos: 40 },
        { id: 'Sigilo', nombre: 'Sigilo', puntos: 30 }
    ],
    beneficios: [
        { id: 'Municion Extra', nombre: 'Municion Extra', puntos: 10 },
        { id: 'Recarga Rapida', nombre: 'Recarga Rapida', puntos: 15 },
        { id: 'Salud Aumentada', nombre: 'Salud Aumentada', puntos: 25 }
    ]
};

const inicializarApp = () => {
    inicializarSelectores(data);
};

function inicializarSelectores(data) {
    const selectMision = document.getElementById('mision');
    const selectArma = document.getElementById('arma');
    const selectArmadura = document.getElementById('armadura');
    const selectBeneficio = document.getElementById('beneficio');

    const agregarOpciones = (selector, items) => {
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = `${item.nombre} - ${item.puntos} pts`;
            selector.appendChild(option);
        });
    };

    agregarOpciones(selectMision, misiones);
    agregarOpciones(selectArma, armas);
    agregarOpciones(selectArmadura, armaduras);
    agregarOpciones(selectBeneficio, beneficios);
}

document.getElementById('formularioLoadout').addEventListener('submit', function(e) {
    e.preventDefault();
    const armaSeleccionada = document.getElementById('arma').value;
    const armaduraSeleccionada = document.getElementById('armadura').value;
    const beneficioSeleccionado = document.getElementById('beneficio').value;
    const salida = document.getElementById('salidaLoadout');
    
    salida.innerHTML = `Loadout guardado con exito:<br>Arma: ${armaSeleccionada}, Armadura: ${armaduraSeleccionada}, Beneficio: ${beneficioSeleccionado}`;
});

document.addEventListener('DOMContentLoaded', inicializarApp);
