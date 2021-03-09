/**
 *
 * @param {Array} list List of links
 * @param {Number} startIndex the index from start dragging
 * @param {Number} endIndex the index drop
 * @returns Array on new sorted links by index
 */
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result.map((l, i) => ({ ...l, index: i }));
};
