export const getElementHight = (contentclass, index) => {
    const targetElementArray = getElementsByclassName(`${contentclass}`);
    const targetElementHeights = targetElementArray.map(getBoundingClientRect().height);
    const targetElementHeight = targetElementHeights[`${index}`];
};
