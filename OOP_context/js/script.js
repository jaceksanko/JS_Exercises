function Button(text, nameButton) {
    this.text = text || 'Hello';
    this.nameButton = nameButton;
}

Button.prototype.createButtonNoName = function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
        this.$element.appendTo($('body'));
};

var btn1 = new Button('Hello!');
btn1.createButtonNoName();

Button.prototype = { //czy jest jakaś różnica między takim a tym powyżej sposobem tworzenia metody obiektu?
    createNameButton: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.nameButton);
        this.$element.click(function() {
            alert(self.text);
        });
        this.$element.appendTo($('body'));
    }
};

var btn2 = new Button('Hello button name', 'fajny button');
btn2.createNameButton();