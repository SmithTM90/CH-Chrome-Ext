fetch('https://www.reddit.com/search.json?q=author:CalvinBot&sort=new')
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    var comicImage = document.getElementById('comicImg');
    var imgArr = [];
    var CHImage = res.data.children[0].data.url
    imgArr.push(CHImage);
    comicImage.src = imgArr[0];
  })
