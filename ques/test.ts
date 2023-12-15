function deepClone(object: any) {
  if (isPrim(object)) {
    return object;
  }
  if (Array.isArray(object)) {
    let res: any[] = [];
    for (let item of object) {
      let copy_item = deepClone(item);
      res.push(copy_item);
    }

    return res;
  }
  if (Array.isArray(object)) {
    let res: any[] = [];
    for (let item of object) {
      let copy_item = deepClone(item);
      res.push(copy_item);
    }

    return res;
  }

  if (object.constructor.name === "Object") {
    let res = {};
    for (let key in object) {
      res[key] = deepClone(object[key]);
    }

    return res;
  }

  throw Error(`cant clone ${object}`);
}

function isPrim(val: any) {
  let type_val = typeof val;
  if (val === null) {
    return true;
  }
  return type_val !== "function" && type_val !== "object";
}

let a = { x: 1, y: [1, 2, 3, 4] };

console.log(`test:>`, deepClone(a));
