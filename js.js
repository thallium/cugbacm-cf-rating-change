const handles = [
    "wongdark2017",
    "trl777",
    "Thallium_is_Vegetable",
    "coslade",
    "woshiruozhi",
    "zy233123",
    "EvelynClarke",
    "Labcdefg",
    "uin",
    "Second_Draper",
    "Infinitewave",
    "badl178",
    "Iridescent.",
    "Freshfish",
    "Salty_Fish_",
    "Seventeen_Stckles",
    "ywsjlslc",
    "yuLeave",
    "Cncn_",
    "5cdc2019",
    "barar",
    "ubrightness",
    "drizzling",
    "bandiaoz",
    "TheSunspot",
    "zuimao",
    "Sylvanaswind",
    "lavender_",
    "Spirits_F",
    "lyx1656",
    "dazhao",
    "hzeroto",
    "TTWW",
    "1zpcsdf",
    "lxhabc666",
    "swiftlifeinvj",
    "yan1xiang",
    "BackNumber",
    "wzjTnT",
    "dragonprince",
    "1guBgu777",
    "cytus_lee"
];
const URL = "https://codeforces.com/api/user.info?handles=";
window.onload = function() {
    var ratings = [];
    var allHandles = "";
    handles.forEach(handle => (allHandles += handle + ";"));
    
    $.ajax({
        url: URL + allHandles,
        dataType: "json",
        success: function(data) {
            data.result.forEach(data => {
                if (data.rating != undefined)
                ratings.push({ rating: data.rating, handle: data.handle });
            });
            ratings.sort((a, b) => {
                return a.rating > b.rating?-1:1;
            });
            ratings.forEach(hAndR => {
                var para = document.createElement("a");
                var r=document.createElement('p');
                $(r).html(hAndR.rating);
                $(para).attr("id", hAndR.handle);
                $(para).attr("href", "https://codeforces.com/profile/"+hAndR.handle);
                if (hAndR.rating >= 1900) {$(para).attr("class", "CMaster");$(r).attr("class", "CMaster");}
                else if (hAndR.rating >= 1600) {$(para).attr("class", "expert");$(r).attr("class", "expert");}
                else if (hAndR.rating >= 1400) {$(para).attr("class", "specialist");$(r).attr("class", "specialist");}
                else if (hAndR.rating >= 1200) {$(para).attr("class", "pupil");$(r).attr("class", "pupil");}
                else {$(para).attr("class", "newbie");$(r).attr("class", "newbie");}
                para.innerHTML = hAndR.handle;
                $(r).prepend(para);
                $("#all").append(r);
            });
        }
    });
};
