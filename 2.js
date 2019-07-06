tree = {
  val: 1,
  children: [
    {
      val: 2,
      children : []
    },
    {
    val: 3,
    children : [
      {
        val: 4,
        children : []
      }
      ]
    },
    {
    val: 5,
    children : []
    }
  ]}
class TreeIterator {
    constructor(tree) {
        this.stack = new Array();
        function* makeTree(tree){
            let stack = new Array();
            
            let root = tree;
            if (tree == null) return [];
            else{
                stack.push(root);
                while (stack.length > 0){
                    root = stack.pop();
                    //console.log(root);
                    yield root.val;
                    if (root.children.length > 0){
                        for (let i = root.children.length - 1; i >= 0; i--){
                            stack.push(root.children[i]);
                        }
                    }
                    //console.log(stack);
                }
            }
            return;
        }
        console.log(makeTree(tree));
        for (let x of makeTree(tree)){
            this.stack.push(x);
        }
        //console.log(this.stack);
        this.idx = 0;
        this.length = this.stack.length;
    }
    has_next() {
        return (this.idx + 1 <= this.length);
    }
    next_value() {
        return this.stack[this.idx++];
    }
}

let gen = new TreeIterator(tree);

console.log(gen.next_value());
console.log(gen.has_next());
// expected output: 10

console.log(gen.next_value());
console.log(gen.has_next());

console.log(gen.next_value());
console.log(gen.has_next());

console.log(gen.next_value());
console.log(gen.has_next());

console.log(gen.next_value());
console.log(gen.has_next());

console.log(gen.next_value());
console.log(gen.has_next());

console.log(gen.next_value());