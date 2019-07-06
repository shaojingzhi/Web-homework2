function f(i){
  return i*2;
}
var functor=[1,[2,3,[4]],[5,[6]],[]];
/*
function fmap(f, functor) {
	var s = JSON.stringify(functor);
	//var s = stringify(functor);
	var ans = "";
	var i = 0;
	//console.log(s[15]);
    while(i<s.length){
        // console.log("i=", i,"ex[i]=",s[i]);
        var str;
        if (i<s.length && ((s[i]>='0' && s[i] <='9') || s[i] == '-')){
        	//console.log("s[i]",s[i]);
            var j = i;
            while ((s[j]>='0' && s[j] <='9')||s[j] == '-'){
                j++;
                //console.log("i,j:",i,j);
            }
            str = s.substring(i,j);
            var num = Number(s.substring(i,j));
            val = f(num);
            //val = JSON.stringify(val);
            ans = ans + val;
            //console.log(str);
            i = j;
        }
        else {
        	ans = ans + s[i];
        	i++;
        }
        //val = f(num);
        //s = s.replace(str,val);
    }
    //console.log(typeof(ans));
    ans = JSON.parse(ans);
    //console.log(ans[0],ans[1],ans[2],ans[3])
    return ans;
}
*/
function fmap(f, functor) {
    var l = functor.length;
    for (var i = 0; i < l;i++){
    	if (!Number.isInteger(functor[i])) {
    		functor[i] = fmap(f,functor[i]);
    	}
    	else functor[i] = f(functor[i]);
    }
    return functor;
}
	//var s = JSON.stringify(functor);
    //var l = s.length;
    //console.log(s[]);
console.log(fmap(f,functor));
