const fs = require('fs');
let data = '';

let listarTabla = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error('La base no es un número');
    }

    if (!Number(limite)) {
        throw new Error('El limite no es un número');
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    return data;
};

let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) {
        throw new Error('No es un número');
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    let archivo = `tabla-${base}-al-${limite}.txt`;
    fs.writeFile(`tablas/${archivo}`, data, (err) => {

        if (err) {
            throw new Error('No se creó el archivo');
        }
    });

    return archivo
};

module.exports = {
    crearArchivo,
    listarTabla
};