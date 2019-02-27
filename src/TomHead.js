// creates a constructor function - research ES6 classes
class TomHead {
  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $(
      '<img id="tomhead" src="http://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG63.png"></img>'
    );
    this.node.css({ top: 650, left: 950 });
    $el.append(this.node);
    this.currentDirection = 'left';
    this.SPEED = 300;
    setTimeout(this.move.bind(this), this.SPEED);
  }

  // same as Head.prototype.move = function() {...}
  move() {
    let position = this.node.position();
    let jerryPos = $('#head').position();
    let distance = Math.abs(jerryPos.left - position.left) + Math.abs(jerryPos.top - position.top);

    // if (this.SPEED >= 100) this.SPEED -= 25;

    let randomMove = 2;

    if ((randomMove+6)*4 % 8 === 0) randomMove = this.getRandomIntInclusive(1, 4);

    //check direction and move head randomly
    if (distance < 100) {
      if (randomMove === 1) {
        if (position.left === 0) position.left += 50;
        else position.left -= 50;
      }

      else if (randomMove === 2) {
        if (position.left === 950) position.left -= 50;
        else position.left += 50;
      }
      else if (randomMove === 3) {
        if (position.top === 0) position.top += 50;
        else position.top -= 50;
      }

      else if (randomMove === 4) {
        if (position.top === 650) position.top -= 50;
        else position.top += 50;
      }
    } else {
      if (jerryPos.left < position.left) {
        position.left -= 50;
      } else if (jerryPos.left > position.left) {
        position.left += 50;
      } else if (jerryPos.top < position.top) {
        position.top -= 50;
      } else if (jerryPos.top > position.top) {
        position.top += 50;
      }
    }


    // moves the head
    this.node.css(position);

    setTimeout(this.move.bind(this), this.SPEED);
  }

  //random helper
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
}
