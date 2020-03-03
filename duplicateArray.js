var name = [2, 3, 6, 3, 3, 6, 7, 8, 2, 2, 4, 6];
var uniqueNum = [];

for(i = 0; i < name.length; i++)
    {
        var element = name[i];
        var index = uniqueNum.indexOf(element);
        if(index == -1){
            uniqueNum.push(element);
        }
        
    }
    console.log(uniqueNum);