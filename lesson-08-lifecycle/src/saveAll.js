export function saveAll(storage, items) {
  items.forEach(item => {
    storage.save(item)
  });
  return items.length
}
