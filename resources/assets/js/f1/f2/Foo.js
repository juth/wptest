import Bar from 'bar/Bar';

class Foo {
    
    constructor() {
        this.bar = new Bar();
        this.bar.alert('we did it!');
    }
}

export default Foo;