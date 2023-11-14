type TreeNode = {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
};

function addNode(node: TreeNode, val: number) {
  if (node.val < val) {
    if (node.right === undefined) {
      node.right = { val };
      return;
    }
    return addNode(node.right, val);
  }

  if (node.left === undefined) {
    node.left = { val };
    return;
  }
  return addNode(node.left, val);
}

function parseNode(node: TreeNode, arr = [] as number[]) {
  if (node.left !== undefined) {
    parseNode(node.left, arr);
  }
  arr.push(node.val);

  if (node.right !== undefined) {
    parseNode(node.right, arr);
  }

  return arr;
}

/** 二分法排序 */
export function quickSort(arr: number[]) {
  let top_node: TreeNode | undefined;
  for (let item of arr) {
    if (!top_node) {
      top_node = { val: item };
      continue;
    }
    addNode(top_node, item);
  }

  return parseNode(top_node as TreeNode);
}

const arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(`test:>`, quickSort(arr).length);
