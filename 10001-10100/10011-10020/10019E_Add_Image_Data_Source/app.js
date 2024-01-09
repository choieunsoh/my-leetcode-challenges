// 10019. Add Image Data Source
// https://leetcode.com/problems/add-image-data-source/description/
/**
 * @param {HTMLElement} root
 * @return {void}
 */
export const addImgDataSrc = (root) => {
  const imageElements = root.querySelectorAll('img[data-src]:not([src])');
  for (const node of imageElements) {
    const dataSrc = node.getAttribute('data-src');
    node.setAttribute('src', dataSrc);
  }
};
