export const calcularRedes = (numRedes, oct1) => {

    let n = 0;
    let redesL = 0;
    let wclase = '';

    while (redesL <= numRedes) {
        n += 1;
        redesL = Math.pow(2, n);
        if (redesL >= numRedes) {
            break;
        }
    }

    (oct1 >= 1) && (oct1 <= 126) ? wclase = "A" : "";
    (oct1 >= 128) && (oct1 <= 191) ? wclase = "B" : "";
    (oct1 >= 192) && (oct1 <= 223) ? wclase = "C" : "";

    let count = 0;
    let binText = '';
    while(count <= 7){
        count++;
        if(count <= n){
            binText += '1';
        }else{
            binText += '0';
        }
    }
    
    let bitInicial = 128;
    let bitTotales = 0;
    let contBit = 0;
    while(contBit <= n-1){
        contBit++;
        bitTotales += bitInicial;
        bitInicial /= 2;
    }

    let salto = 256 - bitTotales;
    let potenciaHost = 0;
    switch (wclase) {
        case "A":
            potenciaHost = 24 - contBit;
            break;
        case "B":
            potenciaHost = 16 - contBit;
            break;
        case "C":
            potenciaHost = 8 - contBit;
            break;
    }

    let hosts = Math.pow(2, potenciaHost) - 2;
    /*  
    console.log(`El numero de hosts por subred es: ${hosts}`);
    console.log(`La nueva mascara de red es: ${bitTotales}`)
    console.log(`n es: ${n}`);
    console.log(`Cadena de binario segun el cuarteto de bits: ${binText}`);
    console.log(`Las redes solicitadas son: ${numRedes}`);
    console.log(`Las redes de resolucion son: ${redes}`)
    console.log(`Red de la clase: ${wclase}`) */

    return { wclase, n, binText, bitTotales, salto, hosts, redesL };

}

