struct LinkedList<T> {
    value: T;
    next: Option<LinkedList<T>>;
}