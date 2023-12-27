export const validateInputs = (objeto) =>{
  return Object.values(objeto).some(valor => valor === "" || valor === 0)
}