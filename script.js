let scrollingWrapper = document.getElementById("scrollingWrapper");
let scrollingContainer = document.getElementById("scrollingContainer");
let step = 30; // 滚动步长，可以根据需要调整
let scrollPos = 0;

// 监听滚轮事件
scrollingContainer.addEventListener("wheel", function(event) {
  event.preventDefault();
  
  // 判断滚轮方向并更新滚动位置
  if (event.deltaY > 0) {
    scrollPos += step;
  } else {
    scrollPos -= step;
  }

  // 循环滚动
  let maxScroll = scrollingWrapper.scrollHeight - scrollingContainer.clientHeight;
  if (scrollPos > maxScroll) {
    scrollPos = 0;
  } else if (scrollPos < 0) {
    scrollPos = maxScroll;
  }

  // 更新滚动位置
  scrollingWrapper.style.top = -scrollPos + "px";
});
