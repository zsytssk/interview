type TreeNode = {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
};
/** 构建一个二分树 */
export function buildBinaryTree(arr: number[]) {
  if (arr.length === 1) {
    return { val: arr[0] };
  }
  let middle = Math.floor(arr.length / 2);
  const node: TreeNode = {
    val: arr[middle],
  };
  if (middle > 0) {
    node.left = buildBinaryTree(arr.slice(0, middle));
  }
  if (middle < arr.length - 1) {
    node.right = buildBinaryTree(arr.slice(middle + 1, arr.length));
  }

  return node;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`test:>`, buildBinaryTree(arr));
