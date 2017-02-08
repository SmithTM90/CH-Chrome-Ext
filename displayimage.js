fetch('https://www.reddit.com/search.json?limit=100&q=calvinandhobbes')
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    var randomChild = Math.floor(Math.random() * 100);
    console.log(res.data.children.length);
    console.log(res.data.children[randomChild]);
    // document.addEventListener('DOMContentLoaded', function() {
      var comicImage = document.getElementById('comicImg');

      comicImage.src = res.data.children[randomChild].data.url
    // })
  })
//
//
// document.addEventListener('DOMContentLoaded', function() {
//   var imageResult = document.getElementById('image-result');
//
//   imageResult.src = "CH.jpg";
// })
