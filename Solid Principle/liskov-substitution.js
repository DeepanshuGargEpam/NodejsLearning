// Without LSP
class Bird {
    fly() {
      // Fly logic
    }
  }
  
  class Penguin extends Bird {
    // Penguins can't fly
    fly() {
      throw new Error('Penguins can\'t fly');
    }
  }
  
  // With LSP
  class Bird {
    move() {}
  }
  
  class FlyingBird extends Bird {
    fly() {
      // Fly logic
    }
  }
  
  class Penguin extends Bird {
    // Penguins can't fly
    move() {}
  }