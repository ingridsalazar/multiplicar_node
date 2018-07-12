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

    fs.writeFileSync(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        let archivo = `tabla-${base}-al-${limite}.txt`;

        if (err) {
            throw new Error('No se creó el archivo');
        } else {
            return archivo;
        }
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};