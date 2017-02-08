fetch('https://www.reddit.com/search.json?limit=100&q=calvinandhobbes&sort=new&type=t3_')
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    console.log(res.data.children.length);
    var comicImage = document.getElementById('comicImg');
    var imgArr = [];

    for(var i=0;i<100;i++) {
      if(res.data.children[i].data.author === "CalvinBot") {
        imgArr.push(res.data.children[i].data.url);
      }
    }
    console.log("img: " + imgArr.length);

    comicImage.src = imgArr[0];
  })

// fetch('https://reddit.com/user/CalvinBot/overview.json')
//   .then(function(res) {
//     return res.json()
//   })
//   .then(function(res) {
//     var imgUrl = res.data.children[0].url
//     console.log(imgUrl);
//     var comicImage = document.getElementById('comicImg');
//
//     comicImage.src = imgUrl;
//
//   })

//
//
// document.addEventListener('DOMContentLoaded', function() {
//   var imageResult = document.getElementById('image-result');
//
//   imageResult.src = "CH.jpg";
// })
