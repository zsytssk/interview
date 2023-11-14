const arr = [1, 2, 3, 4, 5, 6, 7];
export function binarySearch(target: any, start: number, end: number) {
  if (start > end) {
    throw new Error(`not found`);
  }
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  }
  if (arr[middle] < target) {
    return binarySearch(target, middle, end);
  }
  return binarySearch(target, start, middle);
}

export function findIndex() {
  let index = binarySearch(6, 0, arr.length - 1);
  console.log(`test:>index`, index);
}

findIndex();
