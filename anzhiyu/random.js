var posts=["2024/11/23/机房珍贵图片awa/","2024/11/23/周杰伦全专辑免费分享/","2024/12/08/视频链接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };