const handles = ['Thallium_is_Vegetable', 'trl777', 'coslade', 'woshiruozhi', 'zy233123', 'EvelynClarke', 'Labcdefg', 'uin', 'Second_Draper', 'Infinitewave', 'badl178', 'Iridescent', 'Freshfish', 'Salty_Fish_', 'Seventeen_Stckles', 'ywsjlslc', 'yuLeave', 'Cncn_', '5cdc2019', 'barar', 'ubrightness', 'drizzling', 'bandiaoz', 'TheSunspot', 'zuimao', 'Sylvanaswind', 'lavender_', 'Spirits_F', 'lyx1656', 'dazhao', 'hzeroto', 'TTWW', '1zpcsdf', 'lxhabc666', 'swiftlife', 'yan1xiang', 'BackNumber', 'wzjTnT', 'pokerfacecyf', 'XZY666', 'dragonprince', '1814234280', '1guBgu777'];
const URL='https://codeforces.com/api/user.info?handles=';
window.onload=function(){
    var rating=[];
    var allHandles="";
    handles.forEach(handle=>allHandles+=handle+';');
        // $.getJSON(URL+allHandles,
        //     res=>{
        //         console.log(res.result);
        //         res.result.forEach(data=>{
        //             rating.push([data.rating,data.handle]);
        //         })
        //     }
        // )

        // ,{
        //     headers:{
        //         'Access-Control-Allow-Origin': 'https://codeforces.com'
        //     },
        //     mode:'cors'
        // }
        // fetch(URL+ allHandles)
        //     .then(data => data.json())
        //     .then(res => {
        //         res.result.forEach(data=>{
        //             rating.push([data.rating,data.handle]);
        //         })
        //     })
        handles.forEach(handle=>{
            var para=document.createElement('p');
            para.innerHTML=handle;
            $("#all").append(para);
        })
    rating.sort();
    console.log(rating);
};