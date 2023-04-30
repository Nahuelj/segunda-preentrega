

function introduccion() {
    alert("Hola, bienvenido al constultorio")
    menu();
}

// MENU

let opcion;
function menu() {

    do {
        opcion = prompt("Seleccione la accion que desea realizar \n 1-Registrar paciente \n 2-Realizar diagnostico de mci \n 3-Ver pacientes registrados" );

        if (isNaN(opcion)) {
            alert("Solo se aceptan numeros en este campo");
        }

    } while (opcion != 1 && opcion != 2 && opcion != 3);

    switch (opcion) {
        case "1":
            registrarse();
            break;

        case "2":
            calcular();
            break;
        case "3":
            verPacientes();
            break;
        default:
            break;
    }
}

// REGISTRO

const pacientes = [];

class Paciente {
    constructor(nombre, apellido, genero, peso, altura,) {
        this.nombre = nombre;
        this.apellido = apellido,
            this.genero = genero,
            this.peso = peso,
            this.altura = altura;
    }
}

let nombre, apellido, genero, peso, altura;

function registrarse() {

    do {
        nombre = prompt("Nombre");
        nombre = nombre.toLocaleLowerCase();
        if (!isNaN(nombre)) {
            alert("Ingrese su nombre por favor")
        }
    } while (!isNaN(nombre));



    do {
        apellido = prompt("Apellido");
        apellido = apellido.toLocaleLowerCase();
        if (!isNaN(apellido)) {
            alert("Ingrese su apellido por favor")
        }
    } while (!isNaN(apellido));


    do {
        genero = prompt("1-Masculino \n2-Femenino");

        if (isNaN(genero)) {
            alert("Seleccione una de las opciones indicadas");
        }
    } while (genero != 1 && genero != 2);

    switch (genero) {
        case "1":
            genero = "Masculino"
            break;

        case "2":
            genero = "Femenino"
            break;

        default:
            break;
    }


    do {
        peso = prompt("Peso en kg");

        if (isNaN(peso) || !peso) {
            alert("Ingrese su peso")
        }
    } while (isNaN(peso) || !peso);


    do {
        altura = prompt("Altura en cm");

        if (isNaN(altura) || !altura) {
            alert("Ingrese su peso")
        }
    } while (isNaN(altura) || !altura);

    console.log(pacientes)
    const NuevoPaciente = new Paciente(nombre, apellido, genero, peso, altura);

    let mci = NuevoPaciente.peso / ((NuevoPaciente.altura / 100) * (NuevoPaciente.altura / 100));

    NuevoPaciente.mci = mci;

    // PASAR NOMBRE Y APELLIDO A CAPITALETTER
    let name = NuevoPaciente.nombre;
    let primeraLetraName = name.charAt(0);
    let primeraLetraEnMayusculaName = primeraLetraName.toUpperCase();
    let nameCapitalizado = primeraLetraEnMayusculaName + name.slice(1);
    name = nameCapitalizado;

    let lastName = NuevoPaciente.apellido;
    let primeraLetraLastName = lastName.charAt(0);
    let primeraLetraEnMayusculaLastName = primeraLetraLastName.toUpperCase();
    let lastNameCapitalizado = primeraLetraEnMayusculaLastName + lastName.slice(1);
    lastName = lastNameCapitalizado;


    let confirmar = prompt(`Paciente registrado con exito, los datos del paciente son: \n Nombre completo: ${name} ${lastName} \n Genero: ${genero} \n Altura: ${altura}cm || Peso: ${peso}kg \n mci: ${mci} \n \n1-Si desea guardar los datos \n2-Si hubo un error y desea volver a registrar \n3-Volver al menu principal y descartar cambios.`);


    if (confirmar == 1) {
        pacientes.push(NuevoPaciente);

        alert(`los datos del paciente ${pacientes[pacientes.length - 1].nombre} fueron guardados con exito en la base de datos \n `)


        console.log(pacientes)
        console.log(pacientes[pacientes.length - 1])

        menu();
    } else if (confirmar == 2) {
        alert("vuelva a registrar su paciente")
        registrarse();
    } else {
        menu();
    }
}

function calcular() {
    let opcion = prompt("1-Si el paciente ya esta registrado \n2-Si el paciente no está registrado");

    if (opcion == 1) {

        let nombrePaciente = prompt("Ingrese el nombre del paciente");
        nombrePaciente = nombrePaciente.toLocaleLowerCase();

        let apellidoPaciente = prompt("Ingrese el apellido del paciente");
        apellidoPaciente = apellidoPaciente.toLocaleLowerCase();

        let paciente = pacientes.find(function (persona) {
            return persona.nombre == nombrePaciente && persona.apellido == apellidoPaciente;
        })

        if (paciente) {
            // PASAR NOMBRE Y APELLIDO A CAPITALETTER
            let name = paciente.nombre;
            let primeraLetraName = name.charAt(0);
            let primeraLetraEnMayusculaName = primeraLetraName.toUpperCase();
            let nameCapitalizado = primeraLetraEnMayusculaName + name.slice(1);
            name = nameCapitalizado;

            let lastName = paciente.apellido;
            let primeraLetraLastName = lastName.charAt(0);
            let primeraLetraEnMayusculaLastName = primeraLetraLastName.toUpperCase();
            let lastNameCapitalizado = primeraLetraEnMayusculaLastName + lastName.slice(1);
            lastName = lastNameCapitalizado;

            alert(`Paciente ${name} ${lastName} encontrad@, se procedera a realizar su diagnostico de mci`);


            switch (paciente.genero) {
                case "Masculino":
                    if (paciente.mci < 20) {
                        alert(`El paciente ${name} ${lastName} se encuentra en bajo peso, debería realizar un periodo de ganancia de masa corporal de forma saludable para estar en los parámetros correctos`);
                    } else if (paciente.mci >= 20 && paciente.mci < 24.9) {
                        alert(`El paciente ${name} ${lastName} se encuentra en su peso normal para su contextura corporal`);
                    } else if (paciente.mci >= 25 && paciente.mci < 29.9) {
                        alert(`El paciente ${name} ${lastName} se encuentra en obesidad leve, debería realizar un periodo de pérdida de masa corporal de forma saludable para estar en los parámetros correctos`);
                    } else if (paciente.mci >= 30 && paciente.mci < 40) {
                        alert(`El paciente ${name} ${lastName} se encuentra en obesidad severa, debería realizar un periodo de pérdida de masa corporal de forma saludable para estar en los parámetros correctos`);
                    } else if (paciente.mci >= 40) {
                        alert(`El paciente ${name} ${lastName} se encuentra en obesidad muy severa, debería realizar un periodo de pérdida de masa corporal urgente de forma saludable para estar en los parámetros correctos`);
                    }
                    break;

                case "Femenino":
                    if (paciente.mci < 20) {
                        alert(`La paciente ${name} ${lastName} se encuentra en bajo peso, debería realizar un periodo de ganancia de masa corporal de forma saludable para estar en los parámetros correctos`);
                    } else if (paciente.mci >= 20 && paciente.mci < 23.9) {
                        alert(`La paciente ${name} ${lastName} se encuentra en su peso normal para su contextura corporal`);
                    } else if (paciente.mci >= 24 && paciente.mci < 28.9) {
                        alert(`La paciente ${name} ${lastName} se encuentra en obesidad leve, debería realizar un periodo de pérdida de masa corporal de forma saludable para estar en los parámetros correctos`);
                    } else if (paciente.mci >= 29 && paciente.mci < 37) {
                        alert(`La paciente ${name} ${lastName} se encuentra en obesidad severa, debería realizar un periodo de pérdida de masa corporal de forma saludable para estar en los parámetros correctos`);
                    } else if (paciente.mci >= 37) {
                        alert(`La paciente ${name} ${lastName} se encuentra en obesidad muy severa, debería realizar un periodo de pérdida de masa corporal urgente de forma saludable para estar en los parámetros correctos`);
                    }
                    break;

                default:
                    break;
            }

            menu();


        } else {
            alert(`paciente no encontrado`);

            let opcion = prompt("1-Buscar nuevamente \n2-Registrar");

            if (opcion == 1) {
                calcular();
            } else {
                registrarse();
            }
        }

    } else {
        alert("Se procedera a registrar el paciente");
        registrarse();
    }
}


function verPacientes(){
    
    let imprimir = "";
    let e = 1;
    for(let i = 0; i < pacientes.length; i++) {
        imprimir += `\n${e} ${pacientes[i].nombre} ${pacientes[i].apellido}`
        e++;
    }
    console.log(imprimir);

    if(imprimir){

        let opcion = prompt(`Los pacientes registrados son:\n${imprimir} \n \n Ingrese el numero del paciente para ver sus datos`)

        alert(`Nombre: ${pacientes[opcion-1].nombre} ${pacientes[opcion-1].apellido} \nGenero: ${pacientes[opcion-1].genero} \nPeso: ${pacientes[opcion-1].peso}kg \nAltura: ${pacientes[opcion-1].altura}cm \nmci: ${pacientes[opcion-1].mci}`);
        menu();
    }else{
        alert(`No hay pacientes registrados.`)
        menu();
    }
    
}

setTimeout(introduccion, 4000);