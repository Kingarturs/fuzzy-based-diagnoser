import variables from './variables.js'

export function InterseccionDifusa(ArrayUsuario, EnfermedadesSelected) {
  //Num Sintomas
  var Sintomas = 17

  //Array con datos del Usuario : Cambiar A datos Finales
  var ArrayUser = ArrayUsuario

  //Seleccion de Enfermedades a Evaluar
  var EnfermedadesSeleccionadas = EnfermedadesSelected

  //Array Datos Finales
  var ArrayIntersecciones = []

  //Enfermedades desde JSON
  var enfermedades = variables.data

  var Porcientaje = []
  var maximo = 0
  //Calculo de Intersecciones con Valores del Usuario
  var Interseccion = 0
  enfermedades.forEach((enfermedad, index) => {
    if (EnfermedadesSeleccionadas[index] == 0) {
      ArrayIntersecciones.push(Interseccion)
      Porcientaje.push((0 / maximo) * 100)
      return
    }
    for (let index = 0; index < Sintomas; index++) {
      var MinimoConjunto = Math.min(enfermedad.Array[index], ArrayUser[index])
      Interseccion += MinimoConjunto
      maximo += enfermedad.Array[index]
    }
    Porcientaje.push((Interseccion / maximo) * 100)
    ArrayIntersecciones.push(Interseccion)
    Interseccion = 0
    maximo = 0
  })

  //Determinación de Interseccion mayor
  var mayor = 0
  var indexM = 0
  ArrayIntersecciones.forEach((element, index) => {
    if (element > mayor) {
      indexM = index
      mayor = element
    }
  })

  if (Porcientaje[indexM] < 75) {
    var Respuesta = ['No existe Coincidencia', 'Coincidencias Menores al 75']
    return Respuesta
  }
  var confiabilidadText = Porcientaje[indexM].toString()
  var RespuestaPositiva = [enfermedades[indexM].Nombre, confiabilidadText]
  return RespuestaPositiva
}
