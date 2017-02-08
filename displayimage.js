fetch('https://www.reddit.com/search.json?limit=100&after=t3_5p8gyr&q=calvinandhobbes')
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    console.log(res.data.children.length);
    var comicImage = document.getElementById('comicImg');
    var imgArr = [];

    for(var i=0;i<res.data.children.length;i++) {
      if(res.data.children[i].data.author === "CalvinBot") {
        imgArr.push(res.data.children[i].data.url);
      }
    }
    console.log("img: " + imgArr.length);

    comicImage.src = imgArr[0];
  })
//
//
// document.addEventListener('DOMContentLoaded', function() {
//   var imageResult = document.getElementById('image-result');
//
//   imageResult.src = "CH.jpg";
// })
