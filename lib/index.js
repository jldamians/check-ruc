// https://es.stackoverflow.com/questions/42957/c%C3%B3mo-validar-un-ruc-de-per%C3%BA
// https://es.wikipedia.org/wiki/C%C3%B3digo_de_control#M.C3.B3dulo_11
function getChecksum(digits = []) {
  // factores de chequeo ponderado para cada uno
  // de los primeros diez (10) dígitos del número de ruc
  const checkFactors = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  // multiplicamos cada uno de los primeros diez (10) dígitos
  // por su factor de chequeo asignado
  const checksum = digits.reduce(function(previous, current, index) {
    return previous + (current * checkFactors[index]);
  }, 0);

  // al resultado de la suma de todas las multiplicaciones,
  // se le calcula el modulo 11, es decir, el resto de la división entre once (11)
  const module11 = checksum % 11;

  // al número once (11) le restamos el resultado del módulo once (11) calculado
  const complement = 11 - module11;

  // calculamos el modulo 10
  const module10 = complement % 10;

  return module10;
}

function isOk(ruc) {
  const regexp = /^(10|15|16|17|20)[0-9]{9}$/;

  if (!regexp.test(ruc)) {
    return false;
  }

  // obtenemos el dígito de verificación del número de ruc (último dígito)
  const checkDigit = Number.parseInt(ruc.substr(10, 1));

  // obtenemos los primeros 10 dígitos del número de ruc
  const firstTenDigits = Array.from(ruc.substr(0, 10));

  // calculamos la suma de verificación
  const checksum = getChecksum(firstTenDigits);

  // validamos que el digito de verificación del número de ruc,
  // sea igual al resultado de la suma de verificación realizada
  return checkDigit === checksum;
}

exports = module.exports = isOk;

exports.isOk = isOk;