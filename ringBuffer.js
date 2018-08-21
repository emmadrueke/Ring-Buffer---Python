class Buffer {
  constructor(capacity) {
    this.capacity = capacity,
    this.storage = [],
    this.current = 0   
  }
  append(item) {
    this.storage[this.current++] = item
    if (this.current === this.capacity) {
      this.current = 0
    }
  }
  get(item) {
    return this.storage
  }
}