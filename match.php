<!DOCTYPE html>
<html lang="kor" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>test bgs</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
	  <script type="text/javascript" src="match.js"></script>
  </head>
  <body>
	  <h1>
		  매치
	  </h1>
	  <div style="width:100%; text-align:center;">
		  <button type="button" class="btn w-btn" onClick="goHome()">
			  온라인현황
		  </button>
		  <button type="button" class="btn w-btn" onClick="goMatch()">
			  매치현황
		  </button>
	  </div>
    <div id="loading">로딩중</div>
    <div id="bgs_list">
    </div>
    <script>
    
    load();
		
	function goHome(){
		location.href = "/";
	}
		
	function goMatch(){
		location.href = "/match.php";
	}
    </script>
  </body>
</html>