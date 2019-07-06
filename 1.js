ddl='2018-05-05 11:22:33'
arr=['2018-05-04 11:22:33', '2017-05-05 11:22:33', '2018-05-05 11:22:33','2018-05-06 11:22:32','2018-05-06 11:22:33']
function datetimeSort(ddl, arr) {
	var l = arr.length;
	arr = arr.sort();
	var ans = new Array(l);
	var newarr = new Array(l);
	for (var i = 0;i < l;++i){
		newarr[i] = arr[i];
		newarr[i] = new Date(arr[i].replace(/-/g,"/"));
	}
	//newarr = newarr.sort();
	var newddl = new Date(ddl.replace(/-/g,"/"));

    for(var j = 0;j < arr.length;j++){
    	//console.log(newarr[j].getTime());
    	if (newarr[j].getTime() <= newddl.getTime()){
    		
    		ans[j] = "{\"datetime\":"+"\""+arr[j]+"\""+",\"lateDays\":"+0+"}";
    	}
    	else {
    		var time = newarr[j].getTime() - newddl.getTime();
			var days = parseInt(time / (1000 * 60 * 60 * 24));
			days = days+1;
			ans[j] = "{\"datetime\":"+"\""+arr[j]+"\""+",\"lateDays\":"+days+"}";
    	}
    }

    var s = ans.toString();
    s = "["+s+"]";
    return JSON.parse(s);
}
//datetimeSort(ddl,arr);
console.log(datetimeSort(ddl,arr));


