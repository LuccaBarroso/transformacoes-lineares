export default function mul(matriz, vector) {
  let vectorFinal = [0, 0, 0];
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      vectorFinal[linha] += matriz[linha][coluna] * vector[coluna];
    }
  }
  //   vectorFinal[0] = (
  //     vector[0] * matriz[0][0] +
  //     vector[1] * matriz[0][1]
  //   ).toFixed(2);
  //   vectorFinal[1] = (
  //     vector[0] * matriz[1][0] +
  //     vector[1] * matriz[1][1]
  //   ).toFixed(2);
  console.log(vectorFinal);
  return vectorFinal.map((x) => x.toFixed(2));
}
