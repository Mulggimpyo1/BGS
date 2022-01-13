function load()
{
  var online = fetch('https://api.codetabs.com/v1/proxy/?quest=http://elevenlogcollector-env.js6z6tixhb.us-west-2.elasticbeanstalk.com/ElevenServerLiteSnapshot')
  .then(function(res){
	var data = res.json();

	return data;
  }).then(function(data){
	var online = data.OnlineUses;

	var bgs = online.filter(function(post,index){
	  if(post.UserName.indexOf('BGS') >= 0){
		return true;
	  }
	})

	return bgs;
  }).then(function(bgs){
	var html = "접속중인 방구석 멤버가 없습니다.";
	if(bgs.length > 0){
	  var html = "<table class='container'><tr><th><h1>유저이름</h1></th><th><h1>유저아이디</h1></th><th><h1>디바이스</h1></th><th><h1>ELO</h1></th></tr>";
	  for(var i=0; i < bgs.length; i++){
		html += '<tr>';
		html += '<td>'+bgs[i].UserName+'</td>';
		html += '<td>'+bgs[i].Id+'</td>';
		html += '<td>'+bgs[i].Device+'</td>';
		html += '<td>'+bgs[i].ELO+'</td>';
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

var timed = setInterval(load,10000);