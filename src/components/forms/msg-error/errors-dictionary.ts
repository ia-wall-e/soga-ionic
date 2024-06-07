interface ErrorsDictionary{
    [key:string]:string
}

export const errorsDictionary: ErrorsDictionary={
required:"El campo es obligatorio",
email:"Ingresa un email valido",
passwordEqual:"Las contraseñas no coinciden",
phoneLength:"Tu numero telefonico debe tener 10 digitos",
passLength:"Tu pin debe ser de 6 digitos",
passwordRegex:"Solo puede contener numeros"
}