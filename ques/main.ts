/** 1
 * 最长公共前缀
 * @param {string[]} strList
 * @return {string}
 */
function longestCommonPrefix(strList: string[]) {
  let result = strList.pop();
  if (!result?.length) {
    return "";
  }

  for (const item of strList) {
    for (let i = 0; i < result.length; i++) {
      const prefix = result.slice(0, i);

      if (item.indexOf(prefix) === -1) {
        result = result.slice(0, i - 1);
        break;
      }
    }
  }
  return result;
}

console.log(`1:`, longestCommonPrefix(["flower", "flow", "flight"]));

/** 2
 * @param {string} s
 * @return {number}
 * 无重复字符的最长子串
 */
function lengthOfLongestSubstring(s) {
  let num = 0;
  let cur_str = "";
  for (let char of s) {
    let index = cur_str.indexOf(char);
    if (index === -1) {
      cur_str += char;
    } else {
      if (cur_str.length > num) {
        num = cur_str.length;
      }
      cur_str = cur_str.slice(index + 1) + char;
    }
  }
  return num;
}

console.log(`2:`, lengthOfLongestSubstring("pwwkew"));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *  字符串的排列
 */
var checkInclusion = function (s1: string, s2: string) {
  let index = -1;
  for (let i = 0; i < s2.length; i++) {
    const s2_char = s2[i];
    if (index == -1) {
      const s1_index = s1.indexOf(s2_char);
      if (s1_index !== -1) {
        index = s1_index;
        continue;
      }
    } else {
      if (s1[index + 1] === s2_char) {
        index++;
        continue;
      } else {
        s1 = s1.slice(index);
        index = -1;
      }
    }
  }
  return index != -1;
};

console.log(`3:`, checkInclusion("eidabooo", "oooo"));

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 字符串相乘 ()
 */
var multiply = function (s1: string, s2: string) {
  return Number(s1) * Number(s2) + "";
};

console.log(`4:`, multiply("3", "4"));

/**
 * @param {string} s
 * @return {string}
 * 翻转字符串里的单词
 */
var reverseWords = function (s: string) {
  return s
    .split(" ")
    .filter((item) => {
      return item !== "";
    })
    .reverse()
    .join(" ");
};

console.log(`5:`, reverseWords("a good   example"));

/**
 * @param {string} path
 * @return {string}
 * 简化路径
 */
var simplifyPath = function (path: string) {
  const path_arr = path.split("/").filter((item) => {
    return item !== "";
  });

  let result_arr: string[] = [];
  for (let item of path_arr) {
    if (item === ".") {
      continue;
    } else if (item === "..") {
      result_arr.pop();
    } else {
      result_arr.push(item);
    }
  }
  return "/" + result_arr.join("/");
};

console.log(`6:`, simplifyPath(`\/a\/\/b\/\/\/\/c\/d\/\/.\/.\/\/..`));
console.log(`6:`, simplifyPath(`/a/../../b/../c//.//`));

/**
 * @param {string} s
 * @return {string[]}
 * 复原IP地址
 */
var restoreIpAddresses = function (s: string) {
  const s1 = s.slice(0, 3);
  const s2 = s.slice(3, 6);
  const s3 = s.slice(6, 9);
  const s4 = s.slice(9, 12);
  return [s1, s2, s3, s4].join(".");
};

console.log(`7:`, restoreIpAddresses(`25525511135`));

type TreeNode = {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
};

/** 二叉树 */
const input = [1, 2, 3, 4, 5, 6, 7];
const level = get2pow(input.length + 1);
let index: number = 0;
const node = createNode(level - 1);
printNode(node);

export function get2pow(num: number) {
  return Math.floor(Math.log2(num)) + 1;
}

function createNode(level: number): TreeNode {
  index++;
  const cur_node = { val: index } as TreeNode;
  if (level === 0) {
    return cur_node;
  }
  cur_node.left = createNode(level - 1);
  cur_node.right = createNode(level - 1);
  return cur_node;
}
function printNode(node: TreeNode, print_self = true) {
  const { val, left, right } = node;
  let left_val: number;
  let right_val: number;
  if (print_self) {
    console.log(val);
  }
  if (left) {
    left_val = left.val;
    console.log(left_val);
  }
  if (right) {
    right_val = right.val;
    console.log(right_val);
  }
  if (left) {
    printNode(left, false);
  }
  if (right) {
    printNode(right, false);
  }
}
