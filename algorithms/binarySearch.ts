/** 二分查找 */
export const binarySearchBuilder = (arr: number[]) => {
  function binarySearch(target: any, start: number, end: number): number {
    if (start > end) {
      return -1;
    }
    let middle = Math.floor((start + end) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (target > arr[middle]) {
      return binarySearch(target, middle + 1, end);
    }
    return binarySearch(target, start, middle - 1);
  }

  return (target: number) => {
    return binarySearch(target, 0, arr.length - 1);
  };
};

export function findIndex() {
  const binarySearch = binarySearchBuilder([1, 2, 3, 4, 5, 6, 7]);
  let index = binarySearch(100);
  console.log(`test:>index`, index);
}

findIndex();
