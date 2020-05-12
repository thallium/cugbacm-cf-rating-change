// align timeline,
// one user might have done a contest and other might haven't
// we need to add a point for the one who hasn't, what his rating was in that time
function alignTimeline(data) {
    var allTimes = new Set();
    for(let person of data){
        for(let cell of person){
            allTimes.add(cell[0]);
            // console.log(cell[1])
        }
    }
    // [...allTimes]
    var arrTime=Array.from(allTimes);
    arrTime.sort();
    var ret=[]
    for(let time of arrTime){
        ret.push([new Date(time*1000)]);
    }
    for(let person of data){
        var pos=0;
        var curRating=undefined;
        for(let cell of person){
            while(pos<arrTime.length&&arrTime[pos]!=cell[0]){
                ret[pos].push(curRating);
                pos++;
            }
            curRating=cell[1];
        }
        while(pos<arrTime.length){
            ret[pos].push(curRating);
            pos++;
        } 
    }
    return ret;
}