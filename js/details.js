//获取路径信息
var str = location.href;

//http://127.0.0.1/shopCart1822/page.html?pid=shop03&cname=classify001
var str = str.split("?")[1];//"pid=shop03&cname=classify001"
console.log(str)
var arr = str.split("&");// ["pid=shop03", "cname=classify001"]
console.log(arr[0])
var pid = arr[0].split("=")[1];
console.log(pid)
console.log(arr[1])
var cname = arr[1].split("=")[1];
console.log(cname)

//请求服务器数据
$.ajax({
	type:"get",
	url:"menu.json",
	async:false,
	success : function(msg){
		var str = "";
		for( var i = 0 ; i < msg[cname].zonglist.length ; i++ ){
			var pro = msg[cname].zonglist[i];
			if( pro.id ==  pid ){
				str += `
                <div id = 'small'>
                    <img src="img/${pro.src}" alt="">
                <div id = 'mark'></div>
                </div>
                <div id = 'big'>
                    <img src="img/${pro.src}" alt="">
                </div>
				`;
			}
		}
		$(".FDJ").html( str );
	}
});


$(function(){
    $("#small").mouseenter(function(){
        $("#mark,#big").show();
    }).mouseleave(function(){
        $("#mark,#big").hide();
    }).mousemove(function(ev){
        var l = ev.pageX - $("#small").offset().left - 100;
        var t =  ev.pageY - $("#small").offset().top - 100;
        l = range(l, 0, 377);
        t = range(t, 0, 376);

        $("#mark").css({
            left: l,
            top: t
        });
        $("#big img").css({
            left: -1 * l,
            top: -1 * t
        })
    })
})

function range(iCur, iMin, iMax){
    if(iCur < iMin){
        return iMin;
    }else if(iCur > iMax){
        return iMax;
    }else{
        return iCur;
    }
}