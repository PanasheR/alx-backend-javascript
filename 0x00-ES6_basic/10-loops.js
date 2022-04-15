export default function appendToEachArrayValue(array, appendString) {
  const arry = array;
  for (const value of array) {
    const index = array.indexOf(value);
    arry[index] = appendString + value;
  }

  return arry;
}
