var deff = $.ajax({
    type:"get",
    url:"menu.json",
    async:true
});
deff.done(function(json){
    var strCon3 ="";
    for (var attr in json) {
        for( var j = 0 ; j < json[attr].list.length ; j++ ){
            var pro = json[attr].list[j];
            strCon3 += `<li class="col-md-3 col-sm-4 col-xs-6">
                            <a href="./details1.html?pid=${pro.id}&cname=${attr}">
                                <img src="img/${pro.src}" alt="" />
                                <p>${pro.name}</p>   
                            </a>
                            <span>加入购物车</span>
                        </li>`;
        }
    }
    $(".shoplist3").html( strCon3 );
})