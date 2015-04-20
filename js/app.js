/**
 * Oskar Sajdak, oskar.sajdak@gmail.com, 1429546419 (04/20/2015 @ 4:13pm (UTC))
 */

/**
 * Your task is to implement (create) class "Layer" and update HTML code where it is needed.
 *
 * This class has to show/hide animated object (eg. .gif) in the centre of selected layer.
 * Below animated object you have to insert transparent dynamic layer to cover source layer.
 * The reason is that you have to avoid clicking on the layer's objects until we hide
 * the animated object again.
 *
 * Please remember:
 * - Animated objects and additional layers can't be added as static html code to the index.html file.
 * - You can't use fixed values. You have to evaluate them.
 *
 * In this task you can use jQuery (without additional plugins or jQuery UI) if it helps you.
 */

/**
 * Sample code execution - do not change code below 
 */
(function(){
    var l1, l2, l3;

    l1 = new Layer("#layer1");
    l1.showLoader();

    setTimeout(function(){
        l2 = new Layer("#layer2");
        l2.showLoader();
    }, 2000);

    setTimeout(function(){
        l1.hideLoader();
        l3 = new Layer("#layer3");
        l3.showLoader();
    }, 4000);

    setTimeout(function(){
        l2.hideLoader();
        l3.hideLoader();
    }, 6000);
})();