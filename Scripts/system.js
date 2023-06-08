! function(e) {
    function t(t) {
        return (e.cookie.match("(^|; )" + t + "=([^;]*)") || 0)[2]
    }
    var a, s = navigator.userAgent,
        i = / mobile/i.test(s),
        o = !(!/ gecko/i.test(s) || !/ firefox\//i.test(s)),
        n = "was" === t("wasmobile"),
        m = "user-scalable=yes, maximum-scale=2";
    i && !n ? e.cookie = "wasmobile=was" : !i && n && (o ? 
	(
	a = e.createElement("meta"), 
	a.setAttribute("content", m), 
	a.setAttribute("name", "viewport"), 
	e.getElementsByTagName("head")[0].appendChild(a)) : (
	 e.getElementsByName("viewport")[0].setAttribute("content", m))
	 )
}(document);
function left(str, n) {
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else
		return String(str).substring(0, n);
}

function right(str, n) {
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else {
		var iLen = String(str).length;
		return String(str).substring(iLen, iLen - n);
	}
}
function setActive(e){
	
	$(e +" li a").each(function(index, element) {
        if(document.location.href.indexOf($(this).attr("href"))>=0 && $(this).attr("href")!='/')
		{
			$(this).addClass("active");
			$(this).parent("li").parent("ul").parent("li").children("a").addClass("active");
		}
    });
}

function getajaxcontent(e,t,n){$("#"+e).html('<center><img src="/images/processing.gif"><br>Đang xử lý...<center>');
$.ajax({type:"GET",url:t,data:n,success:function(t){$("#"+e).html(t)}})}
function getLotoDonVi(e){
$("#DDM"+e).html('<div id="DDMfull'+e+'"><center><img src="/images/processing.gif"><br>Đang xử lý...<center></div>');
$.ajax({type:"GET",url:"/ajax/dauduoimien.php",data:"get="+e,success:function(t){$("#DDMfull"+e).html(t)}})
	$(".btntk2sc[data-id='"+e+"']").removeClass("btnclicked");
}
function CloseLotoDonVi(e) {
	$("#DDMfull" + e).hide(500,null,function()
			{
			$("#DDMfull" + e).remove();			
			});
	$(".btntkhdv[data-id='"+e+"']").removeClass("btnclicked");
}
function CloseItemLotoDonVi(e) {
	$("#DDM" + e).hide(300);
	setTimeout(function(){
	var n = e.substring(0, e.length - 2);
	if ($("#DDMfull" + n).height() < 20) {
		CloseLotoDonVi(n)
	}
	},300);
}
function clearDot(e) {
	var t = "",
		n = 0,
		r = "";
	if (e != "") {
			var s = e.length;
			r = e.substr(0, 1);
			if (r == "-") {
				n = 1;
				t = "-"
			}
			for (i = n; i < s; i++) {
				if (e.substr(i, 1) != "." && e.substr(i, 1) != "-" && !isNaN(e.substr(i, 1))) t = t + e.substr(i, 1)
			}
		}
	return t
}
function convert(e) {
	var t = $(e).val(),
		n = "",
		r = 0,
		s = "";
	var o = clearDot(t);
	if (o != "") {
			var u = o.length - 1;
			s = o.substr(0, 1);
			if (s == "-") {
				r = 1
			} else s = "";
			k = 0;
			for (i = u; i >= r; i--) {
				k++;
				n = o.substr(i, 1) + n;
				if (o.substr(i, 1) == ".") {
					k = 0
				}
				if (k == 3 && i > r) {
					k = 0;
					n = n
				}
			}
		}
	e.value = s + n
}
function getajaxcontentnoprocessing(e, t, n) {
	$.ajax({
		type: "GET",
		url: t,
		data: n,
		success: function(t) {
			$("#" + e).html(t)
		}
	})
}
function onof(e, t) {
	document.getElementById(e).style.display = "";
	document.getElementById(t).style.display = "none"
}

function closeid(e){$("#"+e).hide()}function openurl(e){window.location=e}function getajaxcontenton(e,t,n){$("#"+e).append('<div class="onidprocess"><img src="/images/processing.gif"></div>');$.ajax({type:"GET",url:t,data:n,success:function(t){$("#"+e).html(t)}})}function getlichxoso(e){getajaxcontenton("hottoday","/ajax/lichxoso.php","ngay="+e)}
function print_vedo(e,t){$(".dailog_bog").dialog({modal:true,open:function(){
	$(this).html('<form action="/ve-do.php" method="get" name="frminkq" target="vedo" id="frminkq"><table border="0" align="center" cellpadding="0" cellspacing="0"><tr><td align="center"><img src="/upload/images/in-ve-do-4-bang.png" width="79" height="98"  onclick="printxs(4);" /></td><td width="20" align="center">&nbsp;</td><td align="center"><img src="/upload/images/in-ve-do-6-bang.png" width="70" height="90"  onclick="printxs(6);"/></td><td width="20" align="center">&nbsp;</td><td align="center"><img src="/upload/images/in-ve-do-1-bang.png" width="79" height="98"  onclick="printxs(1);"/></td></tr><tr><td align="center"><input name="mien" type="hidden" value="'+e+'" /><input name="page" id="page" type="hidden" value="0" /><input class="btninvedo" onClick="printxs(4);" type="button" value="In 4/1" /></td><td align="center">&nbsp;</td><td align="center"><input class="btninvedo" onClick="printxs(6);" type="button" value="In 6/1" /></td><td align="center">&nbsp;</td><td align="center"><input class="btninvedo" onClick="printxs(1);" type="button" value="In 1/1" /></td></tr></table><br><a href="/huong-dan/" title="Hướng Dẫn In Vé Dò Chuyên Nghiệp" target="_blank"><strong>Hướng Dẫn In Vé Dò Chuyên Nghiệp</strong></a><input name="vdn" type="hidden" value="'+t+'"></form>');},width:500,title:"Chọn loại vé dò cần in"});if(getCookie("username")!=""){$(".titlebangincookie").hide()}}
function printxs(e){$("#page").val(e);if($("#txttitle").attr("title")!=$("#txttitle").val()){$("#txttitle").attr("name","txttitle")}$("#frminkq").submit();$(".dailog_bog").dialog("close");return false}
function print_vedo_tructiep(e){$(".dailog_bog").dialog({modal:true,open:function(){$(this).html('<form action="/ve-do-truc-tiep.php" method="get" name="frminkq" target="vedo" id="frminkq"><table border="0" align="center" cellpadding="0" cellspacing="0"><tr><td align="center"><img src="/upload/images/in-ve-do-4-bang.png" width="79" height="98"  onclick="printxs(4);" /></td><td width="20" align="center">&nbsp;</td><td align="center"><img src="/upload/images/in-ve-do-6-bang.png" width="70" height="90"  onclick="printxs(6);"/></td><td width="20" align="center">&nbsp;</td><td align="center"><img src="/upload/images/in-ve-do-1-bang.png" width="79" height="98"  onclick="printxs(1);"/></td></tr><tr><td align="center"><input name="mien" type="hidden" value="'+e+'" /><input name="page" id="page" type="hidden" value="0" /><input class="btninvedo" onClick="printxs(4);" type="button" value="In 4/1" /></td><td align="center">&nbsp;</td><td align="center"><input class="btninvedo" onClick="printxs(6);" type="button" value="In 6/1" /></td><td align="center">&nbsp;</td><td align="center"><input class="btninvedo" onClick="printxs(1);" type="button" value="In 1/1" /></td></tr></table><br><a href="/huong-dan/" title="Hướng Dẫn In Vé Dò Chuyên Nghiệp" target="_blank"><strong>Hướng Dẫn In Vé Dò Chuyên Nghiệp</strong></a></form>')},width:500,title:"Chọn loại vé dò cần in"});if(getCookie("username")!=""){$(".titlebangincookie").hide()}}

function closetk2sc(e) {
	$("#loto_" + e).remove();
	$(".btntk2sc").each(function(t, n) {
		if ($(this).attr("data-id") == e) {
			$(this).removeClass("btnclicked");
		}
	})
}

function setCookie(e,t,n){var r=new Date;r.setDate(r.getDate()+n);var i=escape(t)+(n==null?"":"; expires="+r.toUTCString());document.cookie=e+"="+i+"; path=/"}

function getCookie(c_name){
	
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++)
	{
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name)
		{
			return unescape(y);
		}
	}
	return "";
	
	}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
function SetUserLocation(position) {
	$.ajax({type:"GET",url:"/ajax/setUserLocation.php",data:"lat="+position.coords.latitude+"&lng="+position.coords.longitude,success:function(t){
		setCookie("usgl","1",30);
		
		}})
}
function changecssclass()
{
	
	if(tivimod==1)
	{
		$("html, body").animate({ scrollTop:0,scrollLeft:0}, 0);
		$("#fullscreen").height(window.innerWidth);
		$("#fullscreen").width(window.innerHeight);
		$("#fullscreen").css("right","0");
		$("#bangtructiep").attr("class","bangtructiepH");
	
	var tylewh=window.innerHeight/window.innerWidth;
	$("#bangtructiep").width(1280 * tylewh );

		
	var zw=window.innerHeight / $("#bangtructiep").width();
	var zh=window.innerWidth / $("#bangtructiep").height();
	var zoom;
	if(zw>zh)zoom=zh;
	else
	zoom=zw;

		$("#bangtructiep").css("margin-top",(window.innerWidth - $("#bangtructiep").height())/2 );
		$("#bangtructiep").css("margin-left",(window.innerHeight - $("#bangtructiep").width())/2  );
		
	
		$("#bangtructiep").css("-moz-transform", "scale("+zoom+")"); 
		$("#bangtructiep").css("-webkit-transform", "scale("+zoom+")"); 
		$("#bangtructiep").css("-o-transform", "scale("+zoom+")");
	

	
	}
	else
	{
if(window.innerHeight>window.innerWidth)
	{
	
	if(window.innerHeight/window.innerWidth < 1.4)
	{
	$("#bangtructiep").attr("class","bangtructiepH43");
	var tylewh=window.innerWidth/window.innerHeight;
	$("#bangtructiep").width(1024 * tylewh );
	}
	else
	{
	$("#bangtructiep").attr("class","bangtructiepH");
	var tylewh=window.innerWidth/window.innerHeight;
	$("#bangtructiep").width(1280 * tylewh );
	}
	
	
}
	else	
	{
		if(window.innerWidth/window.innerHeight < 1.5)
		{
	$("#bangtructiep").attr("class","bangtructiepW43");
	var tylewh=window.innerWidth/window.innerHeight;
	$("#bangtructiep").width(804 * tylewh );

		}
		else
		{
	$("#bangtructiep").attr("class","bangtructiepW");
	var tylewh=window.innerWidth/window.innerHeight;
	$("#bangtructiep").width(720 * tylewh );

		}
	
	
	}
	
	var zw=window.innerWidth / $("#bangtructiep").width();
	var zh=window.innerHeight / $("#bangtructiep").height();
	var zoom;
	if(zw>zh)zoom=zh;
	else
	zoom=zw;
	$("#bangtructiep").css("top",(window.innerHeight - $("#bangtructiep").height())/2 +"px");
	$("#bangtructiep").css("left",(window.innerWidth - $("#bangtructiep").width())/2 +"px");
	
	setTimeout(function(){
	$("#bangtructiep").css("-moz-transform", "scale("+zoom+")"); 
	$("#bangtructiep").css("-webkit-transform", "scale("+zoom+")"); 
	$("#bangtructiep").css("-o-transform", "scale("+zoom+")");
	},500);

	
	}
	
	
}
function setToolBkqxs()
{
	var siteDomain="http://"+window.location.hostname;
	$(".btnlinkprint").click(function(e) {
        var idp=$(this).attr("data-id");
		print_vedo(left(idp,1),right(idp,10));
    });
	$(".btnlinkprinttt").click(function(e) {
        var idp=$(this).attr("data-id");
		print_vedo_tructiep(left(idp,1));
    });
	
	$(".btnshare").click(function(e) {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $(".boxsharekqxs").remove();

        } else {
            $(this).addClass('clicked');
            var id = left($(this).attr("data-id"), 1);
            var date = right($(this).attr("data-id"), 10);
            var title = ["Kết Quả Xổ Số", "Kết Quả Xổ Số Miền Nam", "Kết Quả Xổ Số Miền Bắc", "Kết Quả Xổ Số Miền Trung"];
            var url = ["/ket-qua-xo-so/", "/ket-qua-xo-so-mien-nam/", "/ket-qua-xo-so-mien-bac/", "/ket-qua-xo-so-mien-trung/"];

            var ids = $(this).attr("data-id");
            $("#tolkqxs_" + ids).after('<div class="boxsharekqxs"><div class="embed-share group">  <label style="float:left">Chia sẻ:</label>  <a href="#" name="zm_share" class="buttonimage icon32 fn-share-zing" title="Chia sẻ lên Zing Me" target="_blank">Zing Me</a><a href="#" class="buttonimage icon32 fn-share-fb" title="Chia sẻ lên Facebook">Facebook</a><a href="#" class="buttonimage icon32 fn-share-gplus" title="Chia sẻ lên Google+">Google plus</a><input type="button" class="btnsavekqxs" value="Lưu Hình KQXS"/> </div><form id="frm' + ids + '" action="/download.php" method="post"><input id="id" name="id" type="hidden" value=""><input id="image" name="image" type="hidden" value=""></form></div>');

            $(".btnsavekqxs").click(function(e) {
                html2canvas($("#kqxs_" + ids), {
                    onrendered: function(canvas) {
                        var dataURL = canvas.toDataURL();
                        $("#frm" + ids + " #image").val(dataURL);
                        $("#frm" + ids + " #id").val(ids);
                        $("#frm" + ids).submit();

                    }
                });
            });
            $(".boxsharekqxs .fn-share-zing").click(function() {
                var a = "http://link.apps.zing.vn/share?u=" + siteDomain + url[id] + date + ".html&t=" + title[id] + ' ngày ' + date + "";
                window.open(a, "share", "height=400,width=600");
                return false
            });
            $(".boxsharekqxs .fn-share-fb").click(function() {
                var a = 'https://www.facebook.com/sharer/sharer.php?u=' + siteDomain + url[id] + date + '.html';
                window.open(a, "share", "height=400,width=600");
                return false
            });
            $(".boxsharekqxs .fn-share-gplus").click(function() {
                var a = "https://plus.google.com/share?url=" + siteDomain + url[id] + date + ".html&t=" + title[id] + ' ngày ' + date + '';
                window.open(a, "share", "height=400,width=600");
                return false
            })



        }
    });

    $(".btnsharett").click(function(e) {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $(".boxsharekqxs").remove();

        } else {
            $(this).addClass('clicked');
            var id = left($(this).attr("data-id"), 1);
            var date = right($(this).attr("data-id"), 10);
            var title = ["Kết Quả Xổ Số", "Trực Tiếp Xổ Số Miền Nam", "Trực Tiếp Xổ Số Miền Bắc", "Trực Tiếp Xổ Số Miền Trung"];
            var url = ["/ket-qua-xo-so/", "/truc-tiep-xo-so-mien-nam.html", "/truc-tiep-xo-so-mien-bac.html", "/truc-tiep-xo-so-mien-trung.html"];

            var ids = $(this).attr("data-id");
            $(".bangkqxs_link").after('<div class="boxsharekqxs"><div class="embed-share group">  <label style="float:left">Chia sẻ:</label>  <a href="#" name="zm_share" class="buttonimage icon32 fn-share-zing" title="Chia sẻ lên Zing Me" target="_blank">Zing Me</a><a href="#" class="buttonimage icon32 fn-share-fb" title="Chia sẻ lên Facebook">Facebook</a><a href="#" class="buttonimage icon32 fn-share-gplus" title="Chia sẻ lên Google+">Google plus</a><input type="button" class="btnsavekqxs" value="Lưu Hình KQXS"/> </div><form id="frm' + ids + '" action="/download.php" method="post"><input id="id" name="id" type="hidden" value=""><input id="image" name="image" type="hidden" value=""></form></div>');

            $(".btnsavekqxs").click(function(e) {
                html2canvas($(".box_kqxs"), {
                    onrendered: function(canvas) {
                        var dataURL = canvas.toDataURL();
                        $("#frm" + ids + " #image").val(dataURL);
                        $("#frm" + ids + " #id").val(ids);
                        $("#frm" + ids).submit();

                    }
                });
            });
            $(".boxsharekqxs .fn-share-zing").click(function() {
                var a = "http://link.apps.zing.vn/share?u=" + siteDomain + url[id]  + "&t=" + title[id] + ' ngày ' + date + "";
                window.open(a, "share", "height=400,width=600");
                return false
            });
            $(".boxsharekqxs .fn-share-fb").click(function() {
                var a = 'https://www.facebook.com/sharer/sharer.php?u=' + siteDomain + url[id];
                window.open(a, "share", "height=400,width=600");
                return false
            });
            $(".boxsharekqxs .fn-share-gplus").click(function() {
                var a = "https://plus.google.com/share?url=" + siteDomain + url[id]+"&t=" + title[id] + ' ngày ' + date + '';
                window.open(a, "share", "height=400,width=600");
                return false
            })



        }
    });
	$(function() {
					$('.btnfullsize').click(function() {
						if(tivimod==1)
						{
							alert("Ở Chế Độ Xoay Chỉ Hỗ Trợ FullScreen Trên Trang Trực Tiếp KQXS");
						return false;	
						}
						
						var idf=$(this).attr('data-id');
						$('body').prepend('<div id="fullscreen"><div id="bangtructiep" class="bangtructiepH"><button class="miximize_icon"></button></div></div>');
						$("body").css({ overflow: 'hidden' });
						$('#fullscreen').fullscreen();
						
						$.ajax({type:"GET",url:'/user/fullview.php',data:'mien='+left(idf,1)+'&ngay='+right(idf,10),success:function(t){
							$("#bangtructiep").append(t);
							changecssclass();
							$('.miximize_icon').click(function() {
						
						$.fullscreen.exit();
						$("#fullscreen").remove();	
						window.location=window.location+"";
							
						
						
						return false;
						
					});
							}});
						
					
					
					return false;
					});
				});
}
var runxstt=0;
var waitingNumber="";
function ketquaHightlight(id,num,css)
{
	var val="";var hsc="";
	var shownum=$(id).attr("shownum");
	if(shownum=="")shownum=0;
	$(id +" .dayso").each(function(index, element) {
               
			   if(shownum==2 || shownum==3)
               val=right($(this).attr("data"),shownum);
			   else
               val=$(this).attr("data");
			   
			   hsc=right(val,2);
			   hc=left(hsc,1);
			   hdv=right(hsc,1);
			   
			   if(runxstt==1)
			   {
				   if(!isNaN(val))
				   {
				   if(hc==num && hdv==num)
				   {
					$(this).html(left(val,val.length -2) + '<span class="ketquadaysoHightlight '+css+' cahaihang">'+hsc+'</span>');
				   }
				   else
				   if(hc==num)
				   {
					   $(this).html(left(val,val.length -2) + '<span class="ketquadaysoHightlight '+css+' hangdonvi">'+hsc+'</span>');
				   }
				   else
				   if(hdv==num)
				   {
					  $(this).html(left(val,val.length -2) + '<span class="ketquadaysoHightlight '+css+' hangchuc">'+hsc+'</span>');
				   }
				   }
			   }
			   else
			   {
			   
			   if(hc==num && hdv==num)
			   {
				$(this).html(left(val,val.length -2) + '<span class="ketquadaysoHightlight '+css+' cahaihang">'+hsc+'</span>');
			   }
			   else
			   if(hc==num)
			   {
				   $(this).html(left(val,val.length -2) + '<span class="ketquadaysoHightlight '+css+' hangdonvi">'+hsc+'</span>');
			   }
			   else
			   if(hdv==num)
			   {
				  $(this).html(left(val,val.length -2) + '<span class="ketquadaysoHightlight '+css+' hangchuc">'+hsc+'</span>');
			   }
			}
			  
			    
            });
}
function UnketquaHightlight(id,css){
	var shownum=$(id).attr("shownum");
	if(shownum=="")shownum=0;

	$(id +" .ketquadaysoHightlight."+css).each(function(index, element) {
		
			if(shownum==2 || shownum==3)              
               $(this).parents(".dayso").html( right($(this).parent().attr("data"),shownum) );
			   else
               $(this).parents(".dayso").html( $(this).parent().attr("data") );
	});
	
}
$(this).resize(function(e) {
                    changecssclass();
                });
var tivimod=0;				
function xoay901()
{
	tivimod=1;
	 $("body").width( $(".bodylayout").height());
		 $("body").height(1030);
		  $(".bodylayout").width(1030);
		
        $(".bodylayout").css("transform"," rotate(-90deg)");
		 $(".bodylayout").css("margin-top", - $(".bodylayout").height()/2 +515 );
		 $(".bodylayout").css("margin-left", $(".bodylayout").height()/2 - 515  );
}
function xoay90()
{
	tivimod=1;
	 $("body").width( 1030 );
		$("body").height(1030);
	
		
         $("body").css("transform"," rotate(-90deg)");
		 $("body").css("overflow:","auto"  );
		 
		// $("body").height( window.innerWidth);
		 //$("body").css("margin-left", ( );
		 
		 
	
  $("html, body").animate({ scrollTop:99999}, 1000);
	
	
}
$(document).ready(function(e) {
	
	// xoay man hinh
	$("#btnxoay90").click(function(e) {
		
	 if(tivimod==0)
	  {
		  xoay90();
		  setCookie('xoay90',1,365);
	  }
	else
	{
		tivimod=0;	
		setCookie('xoay90',0,2);	
		window.location=window.location+"";
		
    }
	
	return false;
	});
	  if(getCookie('xoay90')==1) 
	{ 
	xoay90();
	}
	// end xoay
	
	$(".password").focus(function(e) {
        $(this).attr("type","password");
    });
	
	setActive("#cssmenu ul ");
$("#MobileMenuIcon a").click(function(e) {  
$(this).toggleClass("clicked"); 
	$('#cssmenu').css("max-height",window.innerHeight); 
	$('#cssmenu').toggleClass('mobilemenushow');
	//$(".topbarmenu").toggle(300);
	$('body').toggleClass('hideover');
	return false;
});
$(".menuxhn-hq > li > span").click(function(e) {
 $(".menuxhn-hq > li > div").toggle(300);
});
	$(".btncloselototructiep").click(function(e) {
		var idt=$(this).attr("data-id");
        $(".box_dauduoitinh_"+idt).hide(300);
    });
	$(".box_sms").click(function(e) {
		window.open("/sms", "_sms")
	});
	
	setToolBkqxs();
	
	$(window).scroll(function() {
		
		if($("body").width()<480)
		{
		if ($(this).scrollTop() > 100) {
			$(".popupmenubottom").fadeIn();
		} else {
			$(".popupmenubottom").fadeOut();

		}	
		}
		
		if(tivimod==1)
		{
		
		}
		else
		{
		  if($(this).scrollTop() > 190) 
		  {
			  $("#navbar").addClass("menuontop");
		  }
		  else
		  {
			   $("#navbar").removeClass("menuontop");
		  }
		}
		
		if ($(this).scrollTop() > 100) {
			$(".scrollup").fadeIn()
		} else {
			$(".scrollup").fadeOut()

		}
	});
	$(".scrollup").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false
	});
	/* ty chinh bkq xem 2 3 6 so*/
	$(".config_Item").click(function(e) {
        var idkqxs="#kqxs_"+$(this).parent().parent().attr("data-id");
		var sl=$(this).attr("data");
		$(idkqxs).attr("shownum",sl);
		 if(runxstt==1)
			   {
				   
				   if(sl==0)
					{
						$(idkqxs +" .dayso").each(function(index, element) {
							$(this).html(xlKQXS($(this).attr("data") ));
						});	
					}
					else
					{
						
						$(idkqxs +" .dayso").each(function(index, element) {
							$(this).html(xlKQXS(right($(this).attr("data"),sl)));
						});
					}
				
				   
			   }
			   else
			   {
		if(sl==0)
		{
			$(idkqxs +" .dayso").each(function(index, element) {
                $(this).html($(this).attr("data"));
            });	
		}
		else
		{
			
			$(idkqxs +" .dayso").each(function(index, element) {
                $(this).html(right($(this).attr("data"),sl));
            });
		}
			   }
    });
	
	/*danh dau so xuat hien*/
	$(".daysoThongke").hover(function(){
		if(!$(this).hasClass("daysoThongkeClick")){
		$(this).addClass("daysoThongkeHover");
		var idkqxs="#kqxs_"+$(this).parent().parent().attr("data-id");
		var num=$(this).html();
		ketquaHightlight(idkqxs,num,"hover");
		}
		
	},function(){
		
		var idkqxs="#kqxs_"+$(this).parent().parent().attr("data-id");
		$(this).removeClass("daysoThongkeHover");
		UnketquaHightlight(idkqxs,"hover");
		
		
	});
	
	$(".daysoThongke").click(function(e) {
		if($(this).hasClass("daysoThongkeClick")){
			UnketquaHightlight(idkqxs,"clicked");
			$(this).removeClass("daysoThongkeClick");
			waitingNumber="";
		}
		else{
			
        
		var idkqxs="#kqxs_"+$(this).parent().parent().attr("data-id");
		var num=$(this).html();
		$(idkqxs +" .daysoThongke").removeClass("daysoThongkeClick");
		$(this).addClass("daysoThongkeClick");
		waitingNumber=num;
		UnketquaHightlight(idkqxs,"clicked");
		ketquaHightlight(idkqxs,num,"clicked");
		}
    });

	$(".btntkhdv").click(function(e) {
		var t = $(this).attr("data-id");
		if ($(this).hasClass("btnclicked")) {
			CloseLotoDonVi(t, t);
			$(this).removeClass("btnclicked");
		} else {
			getLotoDonVi(t, t);
			$(this).addClass("btnclicked");
		}
	});
	$(".btntk2sc").click(function(e) {
		var t = $(this).attr("data-id");
		if ($(this).hasClass("btnclicked")) {
			$("#loto_" + t).hide(500,null,function()
			{
			$("#loto_" + t).remove();			
			});
			$(this).removeClass("btnclicked");
		} else {
			$("#DDM"+t).html('<div id="DDMfull'+t+'"><center><img src="/images/processing.gif"><br>Đang xử lý...<center></div>');
			$.ajax({
				type: "GET",
				url: "/ajax/tkloto2so.php",
				data: "get=" + t,
				success: function(e) {
					$("#DDM" + t).html('<div id="loto_' + t + '">' + e + "</div>")
						$(".btntkhdv[data-id='"+t+"']").removeClass("btnclicked");

				}
			});  
			$(this).addClass("btnclicked");
		}
	});
	$(".defaulttext").each(function() {
		if ($.trim(this.value) == "") {
			this.value = $(this).attr("title")
		} else {
			if ($.trim(this.value) != $(this).attr("title")) $("#" + $(this).attr("id")).addClass("removedefaulttext")
		}
		$(this).focus(function() {
			if (this.value == $(this).attr("title")) {
				this.value = "";
				$("#" + $(this).attr("id")).addClass("removedefaulttext")
			}
		});
		$(this).blur(function() {
			if (this.value == "") {
				$("#" + $(this).attr("id")).removeClass("removedefaulttext");
				this.value = $(this).attr("title")
			} else if (this.value == "") {
				$("#" + $(this).attr("id")).removeClass("removedefaulttext");
				this.value = "..."
			}
		})
	});
	
	
	$(function() {
	if(getCookie("username")!="")
	{
		if(getCookie("usgl")=="")
		{
			 if (navigator.geolocation) {
		setCookie("usgl","1",7);
        navigator.geolocation.getCurrentPosition(SetUserLocation);
    			}
				else
				{
					setCookie("usgl","0",7);
				}
		}
	}
	
		
	});
	
	$(".youtubeIframe").each(function(index, element) {
        $(this).height($(this).width()*(9/16));
    });
});


$(window).resize(function(e) {
    $(".youtubeIframe").each(function(index, element) {
        $(this).height($(this).width()*(9/16));
    });
});

