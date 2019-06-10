export function random(obj, length = ~~(Math.random() * 10)) {
  return Array.from({length}).map(() => Object.assign({}, JSON.parse(JSON.stringify(obj))));
}
