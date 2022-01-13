function load()
{
  var online = fetch('https://api.codetabs.com/v1/proxy/?quest=http://elevenlogcollector-env.js6z6tixhb.us-west-2.elasticbeanstalk.com/ElevenServerLiteSnapshot')
  .then(function(res){
	var data = res.json();

	return data;
  }).then(function(data){
	var matches = data.ActiveMatches;
	  

  var bgs = [];
	  
  	bgs['away'] = matches.filter(function(post,index){

	  if(post.AwayPlayer.UserName.indexOf('BGS') >= 0 ){

		return true;
	  }
	});
	  
	  
	bgs['home'] = matches.filter(function(post,index){
		

	  if(post.HomePlayer.UserName.indexOf('BGS') >= 0 ){

		return true;
	  }
	});
	  
	  console.log(bgs);

	return bgs;
  }).then(function(bgs){
	var html = "경기중인 방구석 멤버가 없습니다.";
	if(bgs['away'].length > 0 || bgs['home'].length >0){
	  var html = "<table class='container'><tr><th><h1>유저이름</h1></th><th><h1>유저아이디</h1></th><th><h1>경기보기</h1></th><th><h1>ELO</h1></th></tr>";
	  for(var i=0; i < bgs['away'].length; i++){
		html += '<tr>';
		html += '<td>'+bgs['away'][i].AwayPlayer.UserName+'</td>';
		html += '<td>'+bgs['away'][i].AwayPlayer.Id+'</td>';
		html += '<td><a href="https://cristy94.github.io/eleven-vr-scoreboard/?user='+bgs['away'][i].AwayPlayer.Id+'&rowsReversed=0&home-offset=0&away-offset=0" target="_blank">🔍</a></td>';
		html += '<td>'+bgs['away'][i].AwayPlayer.ELO+'</td>';
		html += '</tr>';
	  }
		
		for(var j=0; j < bgs['home'].length; j++){
			html += '<tr>';
			html += '<td>'+bgs['home'][j].HomePlayer.UserName+'</td>';
			html += '<td>'+bgs['home'][j].HomePlayer.Id+'</td>';
			html += '<td><a href="https://cristy94.github.io/eleven-vr-scoreboard/?user='+bgs['home'][j].HomePlayer.Id+'&rowsReversed=0&home-offset=0&away-offset=0" target="_blank">🔍</a></td>';
			html += '<td>'+bgs['home'][j].HomePlayer.ELO+'</td>';
			html += '</tr>';
		}
	  html += '</table>';
	}
	var bgs_list = document.getElementById('bgs_list');

	bgs_list.innerHTML = html;
	document.getElementById('loading').style.display = "none";
  });
	
	console.log("---");

}

var timed = setInterval(load,60000);