
function _fu() {
    let controlPanel = document.getElementsByClassName('control-panel');
    let controlPanelInner = Array.from(controlPanel[0].children)[0]

    let body = document.getElementsByTagName("body")[0];
    let space = body.children[0];


    console.log(controlPanel[0].children.length);
    console.log(controlPanelInner.children.length);
    console.log(controlPanel[0].getElementsByTagName('input'));
    console.log(controlPanel[0].getElementsByTagName('div'));
}