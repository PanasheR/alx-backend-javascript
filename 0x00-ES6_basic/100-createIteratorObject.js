export default function createIteratorObject(report) {
  let arrList = [];
  for (const value of Object.values(report.allEmployees)) {
    arrList = [...arrList, ...value];
  }

  return arrList;
}
