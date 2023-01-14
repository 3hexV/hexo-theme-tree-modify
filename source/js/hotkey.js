window.onkeydown = function () {
    switch (event.keyCode) {
        case 192:
            switchTree();
            break;
    }
}

function switchTree() {
    if ($('#sidebar').hasClass('on')) {
        scrollOff();
    } else {
        scrollOn();
    }
}