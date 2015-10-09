(function() {
    function Button(label) {
        this.Container_constructor();
        this.label = label;
    }

    var p = createjs.extend(Button, createjs.Container);

    p.draw = function() {
        this.Container_draw();
    }

    window.Button = createjs.promote(Button, 'Container');
})();