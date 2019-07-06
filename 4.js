function operatorDefinition(defination, expression) {
    // Add your code here
    var nodeStack = new Array();
    // var charStack = new Array();
    var i = 0;
    while(i<expression.length){
        // console.log("i=", i,"ex[i]=",expression[i]);
        if (i<expression.length && ((expression[i]>='0' && expression[i] <='9') || expression[i] == '-')){
            var j = i;
            while ((expression[j]>='0' && expression[j] <='9')||expression[j] == '-'){
                j++;
            }
            var num = Number(expression.substring(i,j));
            // console.log(num);
            nodeStack.push(num);
            i = j;
        }else if ((i>=expression.length || expression[i]==')') && nodeStack.length>1){
            var y = nodeStack.pop();
            var x = nodeStack.pop();
            if (defination[0]=='y'){
                x = [y, y=x][0];
            }//交换变量的值
            // console.log("x=",x,"y=",y);
            var ans;
            switch (defination[1]){
                case '+':
                    ans = x + y;
                    break;
                case '-':
                    ans = x - y;
                    break;
                case '*':
                    ans = x * y;
                    break;
                case '/':
                    ans = Math.floor(x/y);
                    break;
            }
            nodeStack.push(ans);
            i++;
            // console.log(nodeStack)
        }else{
            i++;
        }
    }

    while (nodeStack.length>1){
            var y = nodeStack.pop();
            var x = nodeStack.pop();
            if (defination[0]=='y'){
                x = [y, y=x][0];
            }//交换变量的值
            // console.log("x=",x,"y=",y);
            var ans;
            switch (defination[1]){
                case '+':
                    ans = x + y;
                    break;
                case '-':
                    ans = x - y;
                    break;
                case '*':
                    ans = x * y;
                    break;
                case '/':
                    ans = Math.floor(x/y);
                    break;
            }
            nodeStack.push(ans);
    }

    return nodeStack.pop().toString();
}

console.log(operatorDefinition("y/x", "4&(-43)"))