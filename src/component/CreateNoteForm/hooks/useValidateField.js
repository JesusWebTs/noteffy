import { useState } from "react";

export const useValidateField = ({
  field,
  regExp,
  minSize,
  maxSize,
  example,
  text,
}) => {
  const [error, setError] = useState("");
  console.log(text)
  const validField = () => {
    if (!text) {
      return setError(`El campo "${field}" no puede estar vacio.`);
    } else if (regExp && !regExp.test(text)) {
      return setError(
        `El campo "${field}" no cumple con las validaciones necesarias. Ejemplo: ${example}.`
      );
    } else if (minSize && text.length < minSize) {
      return setError(
        `El campo "${field}" debe tener al menos ${minSize} caracteres.`
      );
    } else if (maxSize && text.length > maxSize) {
      return setError(
        `El campo "${field}" debe tener un maximo de ${maxSize} caracteres.`
      );
    } else {
      return setError("");
    }
  };

  return [error, validField, setError];
};
