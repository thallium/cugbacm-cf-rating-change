// var handle = prompt("Please enter your cf handle");
const URL='https://codeforces.com/api/user.rating?handle='
const handles = [ "wongdark2017", "trl777", "Thallium54", "coslade", "woshiruozhi", "zy233123", "EvelynClarke", "Labcdefg", "uin", "Second_Draper", "Infinitewave", "badl178", "Iridescent.", "Freshfish", "Salty_Fish_", "Seventeen_Stckles", "ywsjlslc", "yuLeave", "Cncn_", "5cdc2019", "barar", "ubrightness", "drizzling", "bandiaoz", "TheSunspot", "zuimao", "Sylvanaswind", "lavender_", "Spirits_F", "lyx1656", "dazhao", "hzeroto", "yukun80", "1zpcsdf", "lxhabc666", "swiftlifeinvj", "yan1xiang", "BackNumber", "wzjTnT", "dragonprince", "1guBgu777", "cytus_lee" ];
const partialHandles = ['Thallium54', 'trl777','hzeroto','swiftlifeinvj']

var ratingChanges=[];

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
displayRating();

function getData(){
    let promise=[];
    partialHandles.forEach(handle => {
        promise.push(fetch(URL + handle).then(data => data.json()).then(res => {
            console.log(res)
            ratingChanges.push(res.result);
        }))
    });
    return Promise.all(promise);
}
function drawChart() {
    getData().then(()=>{
        var data = new google.visualization.DataTable();
        data.addColumn('datetime', 'date');
        let ratings=[]
        ratingChanges.forEach((ratingChange) => {
            data.addColumn('number', ratingChange[0].handle)
            ratings.push([])
            ratingChange.forEach(data => {
                ratings[ratings.length - 1].push([data.ratingUpdateTimeSeconds, data.newRating]);
            });
        })
        var options = {
            title: 'Rating Change',
            legend: { position: 'right' },
            hAxis: {
                format: 'MMM yyyy'
            },
            vAxis: {
                viewWindowMode: 'pretty'
            },
            curveType: 'function'
        };
        var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));
        data.addRows(alignTimeline(ratings));
        chart.draw(data, options);

    })
}


function displayRating() {
    const URL_INFO = "https://codeforces.com/api/user.info?handles=";
    var ratings = [];
    var allHandles = "";
    handles.forEach(handle => (allHandles += handle + ";"));

    $.ajax({
        url: URL_INFO + allHandles,
        dataType: "json",
        success: function (data) {
            data.result.forEach(data => {
                if (data.rating != undefined)
                    ratings.push({ rating: data.rating, handle: data.handle });
            });
            ratings.sort((a, b) => {
                return a.rating > b.rating ? -1 : 1;
            });
            ratings.forEach(hAndR => {
                var para = document.createElement("a");
                var r = document.createElement('p');
                $(r).html(hAndR.rating);
                $(para).attr("id", hAndR.handle);
                $(para).attr("href", "https://codeforces.com/profile/" + hAndR.handle);
                if (hAndR.rating >= 1900) { $(para).attr("class", "CMaster"); $(r).attr("class", "CMaster"); }
                else if (hAndR.rating >= 1600) { $(para).attr("class", "expert"); $(r).attr("class", "expert"); }
                else if (hAndR.rating >= 1400) { $(para).attr("class", "specialist"); $(r).attr("class", "specialist"); }
                else if (hAndR.rating >= 1200) { $(para).attr("class", "pupil"); $(r).attr("class", "pupil"); }
                else { $(para).attr("class", "newbie"); $(r).attr("class", "newbie"); }
                para.innerHTML = hAndR.handle;
                $(r).prepend(para);
                $("#all").append(r);
            });
        }
    });

}
