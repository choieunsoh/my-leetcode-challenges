// 10007. Get Node Relationship
// https://leetcode.com/problems/get-node-relationship/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {Node} node1
 * @param {Node} node2
 * @return {"parent"|"child"|"sibling"|null}
 */
export const getNodeRelationship = (node1, node2) => {
  if (node1 === node2) return null;
  if (node1.parentNode === node2) return 'parent';
  if (node2.parentNode === node1) return 'child';
  if (node1.parentNode === node2.parentNode) return 'sibling';
  return null;
};
