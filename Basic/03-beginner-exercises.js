// 1. Escribe un comentario en una linea
    // Este es un comentario en una sola linea.

// 2. Escribe un comentario en varias lineas
    /*Este es
    un comentario
    en varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    var datoTexto = "Este es un String"
    var datoNumerico = 15
    var datoBooleano = false
    /*Dato indefinido*/var undefinedValue
    /*Dato nulo*/ var nullValue = null
    var datoSimbolo = Symbol("Simbolo")
    var datoGraNumerico = (1231242154654756786586769645n)

// 4. Imprime por consola el valor de todas las variables
    console.log(datoTexto)
    console.log(datoNumerico)
    console.log(datoBooleano)
    console.log(undefinedValue)
    console.log(nullValue)
    console.log(datoSimbolo)
    console.log(datoGraNumerico)

// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof datoTexto)
    console.log(typeof datoNumerico)
    console.log(typeof datoBooleano)
    console.log(undefinedValue)
    console.log(nullValue)
    console.log(typeof datoSimbolo)
    console.log(typeof datoGraNumerico)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    datoTexto = "Correoprueba@gmail.com"
    console.log(datoTexto)

    datoNumerico = 56.7
    console.log(datoNumerico)

    datoBooleano = true
    console.log(datoBooleano)

    datoGraNumerico = (213212144444444412554.65546547000000000000)
    console.log(datoGraNumerico)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    datoTexto = nullValue
    console.log(datoTexto)

    datoNumerico = "Thechegor"
    console.log(datoNumerico)
    
    datoBooleano = undefinedValue
    console.log(datoBooleano)
    
    datoGraNumerico = Symbol("Holaxd")
    console.log(datoGraNumerico)

// 8. Declara constantes con valores asociados a todos los tipo de datos primitivos

    const datoTexto3 = "Correoprueba2@hotmail.com"
    const datoNumerico3 = 546.7
    const datoBooleano3 = false
    /*Dato indefinido*/ undefinedValue
    /*Dato nulo*/ nullValue
    const datoSimbolo3 = Symbol("Simbolo3")
    const datoGraNumerico3 = (1231242154654756786586769645555665767)

// 9. A continuación, modifica los valores de las constantes
    /*No se puede modificar el valor de una constante
    datoTexto3 = "Insective"
    datoNumerico3 = 79
    datoBooleano3 = true
    datoSimbolo3 = Symbol("lol")
    datoGraNumerico3 = (121432352353253253253242423)*/

// 10. Comenta lineas que produzcan algún tipo de error al ejecutarse

    /*datoTexto3 = "Insective"
    console.log(datoTexto3)

    datoNumerico3 = 79
    console.log(datoNumerico3)

    datoBooleano3 = true
    console.log(datoBooleano3)

    datoSimbolo3 = Symbol("lol")
    console.log(datoSimbolo3)

    datoGraNumerico3 = (121432352353253253253242423)
    console.log(datoGraNumerico3)*/
