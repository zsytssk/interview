/**
 * add | remove
 */

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

class LinkedList<T> {
  private first: Node<T>;
  private len: number;
  public length() {}
  public get(index: number): Node<T> | undefined {
    let cur_node: Node<T> | undefined;
    let local_index = index;
    while (local_index >= 0) {
      if (!cur_node) {
        if (local_index === index) {
          cur_node = this.first;
        }
        break;
      } else {
        cur_node = cur_node.next;
      }

      local_index--;
    }

    return cur_node;
  }
  public insert(index: number, item: Node<T>) {}
  public remove(index: number) {}
}
