fetch('https://www.reddit.com/search.json?limit=100&q=calvinandhobbes&sort=new&type=t3_')
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    var comicImage = document.getElementById('comicImg');
    var imgArr = [];

    for(var i=0;i<100;i++) {
      if(res.data.children[i].data.author === "CalvinBot") {
        imgArr.push(res.data.children[i].data.url);
      }
    }
    comicImage.src = imgArr[0];
  })
