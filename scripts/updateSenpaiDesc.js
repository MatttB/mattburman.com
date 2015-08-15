function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'http://cors.io/?u=https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=Senpai_Bot_', true);
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);
}

loadJSON(function(response){//passing in callback
  var formatted_followers_count = JSON.parse(response)[0].formatted_followers_count;
  var desc = document.getElementById("senpaibot-desc");
  var prefix = postfix = "";
  if(desc.getAttribute("param") === "portfolio"){
    prefix = "<p>";
    postfix = "</p>";
  }
  if(formatted_followers_count){
    desc.innerHTML = prefix + "A <a href='https://twitter.com/Senpai_Bot_'>Twitter Bot</a>, currently with " + formatted_followers_count + ". Implemented in <a href='https://nodejs.org/'>Node.js</a> using <a href='https://github.com/ttezel/twit'> Twit</a>." + postfix;
  } else {//fallback
    desc.innerHTML = prefix + "A <a href='https://twitter.com/Senpai_Bot_'>Twitter Bot</a> implemented in <a href='https://nodejs.org/'>Node.js</a> using <a href='https://github.com/ttezel/twit'> Twit.</a>" + postfix;
  }
});
