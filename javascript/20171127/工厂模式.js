var Factory = function(type, content) {
    if(this instanceof Factory) {
        // console.log(type);
        var s = new this[type](content);
        console.log(s)
        console.log(2)
        return s;
    } else {
        console.log(1)
        return new Factory(type, content);
    }
}
Factory.prototype = {
    java: function(content) {
        // ....
    },
    php: function(content) {
        // ....
    }
}
var data = [{type: 'java', content: 'jajaja'},{type: 'php', content: 'phphphp'}]
data.map(function(item) {
    Factory(item.type, item.content);
})