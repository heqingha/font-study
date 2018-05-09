function prototypeExtend() {
  var F = function() {},
  args = arguments,
    i = 0,
    len = args.length;
    // console.log(arguments)
  for (; i < len; i++) {
    for (var j in args[i]) {
      F.prototype[j] = args[i][j];
      console.log(F.prototype)
    }
  }
  return new F();
}

var penguin = prototypeExtend(
  {
    speed: 20,
    swim: function() {
      console.log(".......1");
    }
  },
  {
    sd: 300,
    run: function(speed) {
      console.log("......2"+ speed);
    }
  },
  {
    jump: function() {
      console.log(".........3");
    }
  }
);
penguin.swim()
penguin.run(10)
penguin.jump()

