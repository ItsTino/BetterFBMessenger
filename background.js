function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log(getElementByXpath('//*[@id="mount_0_0_bF"]/div/div/div/div[2]/div/div/div/div[1]/div[1]/div[1]/div/div[2]'));