interface ErrorsDictionary{
    [key:string]:string
}

export const errorsDictionary: ErrorsDictionary={
required:"El campo es obligatorio",
email:"Ingresa un email valido",
phoneLength:"Tu numero telefonico debe tener 10 digitos",
phoneRegex:"No puede contener simbolos ni letras",
passLength:"Debe tener mas de 6 caracteres",
passMatch:"Las contraseñas no coinciden",
passRegex: "Solo contener letras y numeros"
}