class RingBuffer:

  def __init__(self, capacity):
    self.capacity = capacity
    self.current = 0
    self.storage = []

  def append(self, item):
    self.storage[self.current++] = item

    if self.current = self.capacity:
      self.current = 0

  def get():
    return self.storage