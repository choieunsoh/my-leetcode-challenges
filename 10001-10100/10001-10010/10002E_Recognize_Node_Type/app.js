// 10002. Recognize Node Type
// https://leetcode.com/problems/recognize-node-type/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {Node} node
 * @return {string}
 */
export const recognizeNodeType = (node) => {
  const nodeType = node.nodeType;
  switch (nodeType) {
    case Node.ELEMENT_NODE:
      return 'ELEMENT_NODE';
    case Node.ATTRIBUTE_NODE:
      return 'ATTRIBUTE_NODE';
    case Node.TEXT_NODE:
      return 'TEXT_NODE';
    case Node.COMMENT_NODE:
      return 'COMMENT_NODE';
    case Node.DOCUMENT_NODE:
      return 'DOCUMENT_NODE';
  }
};
