## 防抖和节流

防抖（Debounce）+ 节流（Throttle）

```ts
// Debounce
export function debounceFn(fn: (...args: any[]) => void, time: number) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, time);
  };
}

// Throttle
export function throttleFn(fn: (...args: any[]) => void, time: number) {
  let space = Date.now();
  return (...args) => {
    let now = Date.now();
    if (now - space < time) {
      return;
    }
    space = now;
    fn(...args);
  };
}
```

## 如何实现一个简单的 promise

```ts
type PromiseLite = {};

type Fn<T> = (data: any) => void;
type ProFn<T> = (resolve: Fn<T>, reject: Fn<T>) => void;
type Status = "PENDING" | "RESOLVE" | "REJECT";
// 缺少状态
class Pro<T> {
  private status: Status;
  private value: T;
  private reason: Error;
  private resolveFns: Fn<T>[];
  private rejectFns: Fn<T>[];
  constructor(fn: ProFn<T>) {
    this.status = "PENDING";
    let resolve = (data: T) => {
      this.status = "RESOLVE";
      this.value = data;
      for (const fn of this.resolveFns) {
        fn(data);
      }
    };
    let reject = (err: Error) => {
      this.status = "REJECT";
      this.reason = err;
      for (const fn of this.rejectFns) {
        fn(err);
      }
    };
    fn(resolve, reject);
  }
  public then(fn: Fn<T>) {
    if (this.status === "RESOLVE") {
      fn(this.value);
      return;
    }
    this.resolveFns.push(fn);
  }
  public catch(fn: (error: Error) => void) {
    if (this.status === "REJECT") {
      fn(this.reason);
      return;
    }
    this.rejectFns.push(fn);
  }
}
```

## bind | apply

都可以改写函数的绑定的`this`对象

```ts
function fn(...args: any[]) {
  console.log(`test:>params`, this);
  console.log(`test:>params`, args);
}

fn(1, 2, 3);

fn.bind("zsy", 1, 2, 3);
fn.apply("zsy", [1, 2, 3]);
```

## 如何实现 compose 函数，进行函数合成

```ts
function compose(...fnArgs: any[]) {
  return (arg: any) => {
    let res = arg;
    for (const itemFn of fnArgs.reverse()) {
      console.log(`test:>itemFn`, res);
      res = itemFn(res);
    }
    return res;
  };
}

const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

// (10 + 100) * 10 + 10 = 1110
let res = compose(add10, mul10, add100)(10);
console.log(`test:>`, res);
```

## deepClone

```ts
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
```
