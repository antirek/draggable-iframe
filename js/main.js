
var dragButton = function (key) {
    var options = {};
    options.key = key;

    var mainOptions = {
        height: '100px',
        width: '300px'
    }

    var Layout = function () {
        var component = document.createElement("div");
        component.setAttribute("class","draggable");
        component.setAttribute('style', [
            'position:absolute;',
            'width:' + mainOptions.width,
            'height:' + mainOptions.height,
            'top:100px;',
            'left:100px;',
            'background:#FFF;',
            'border:1px solid #000;'
            ].join(""));

        var panel = document.createElement("div");
        panel.setAttribute("id", "webcallPanel");

        var iframe = document.createElement("iframe");        
        var url = '//call.mobilon.ru/' + options.key + '/remote2';

        //iframe.setAttribute('src', url);
        iframe.setAttribute('height', '200');
        iframe.setAttribute('width', '300');
        iframe.setAttribute('frameborder', '1');
        iframe.setAttribute('allowtransparency', 'true');
        iframe.setAttribute('style', 'position:relative; top:0px; left:0px;');

        panel.appendChild(iframe);
        component.appendChild(panel);        

        document.body.appendChild(component);
        /*
        var doc = iframe.contentWindow.document;
        doc.open();
        doc.write('Test');
        doc.close();
        */
    }

    Layout();

    var pixelSize = 10;
    interact('.draggable').draggable({onmove: dragMoveListener});
};



function dragMoveListener (event) {
var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

// translate the element
target.style.webkitTransform =
target.style.transform =
  'translate(' + x + 'px, ' + y + 'px)';

// update the posiion attributes
target.setAttribute('data-x', x);
target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;