

interface Stack {
  top: number;
  items: object;
  peek: any;
}

class Stack {
    constructor() {
        this.top = -1;
        this.items = {}

    }
}



describe('My Stack', () => {
    it.todo('is initialized as empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
    })
    
    it.todo('can push items to the top')

    it.todo('can pop items off the top')
})