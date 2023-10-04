$(document).ready(function(){
	$("a.mainMenu").mouseenter(function(){
		$("header nav").stop().slideDown();
	});
    $("header ul").mouseleave(function(){
        $("header nav").stop().slideUp();
    });
	
	const a = $("#slide div");
	setInterval(right, 5000);
	function right(){
		a.stop().animate({left: "-3600px"},4200,function(){
			a.prepend(a.children().last()).css("left","-4800px");
		});
	}

	//스크롤바 만지기 전 퀵배너 Y위치
    const pos = $("#fixed").position().top;
    console.log( pos );
    $(document).scroll(function(){
        //스크롤바 만졌을 때의 스크롤바 Y위치
        const x = $(document).scrollTop();
        $("#fixed").stop().animate({ top : (pos + x ) });
    });
	
	
	// 상담문의 폼 제출(닫기) //
	$("#fixed div").click(function(){
		$("#online").stop().fadeIn();
	});
	$("#online h2>button").click(function(){
		$("#online").stop().fadeOut();
	})
	$("#submit").click(function(){
		$("#online").stop().fadeOut();
		alert("제출이 완료되었습니다. 빠른 시일 내에 답변드리겠습니다.");
	})
	
});/////////end