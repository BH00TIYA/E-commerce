document.addEventListener('DOMContentLoaded', (event) => {
  checkLoginStatus();
});
const scrollPercentage = ()=>{
    const scrollProgress = document.getElementById("progress");
    const progressValue = document.getElementById("progress-value");
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round( pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%, #c0c0ff ${scrollValue}%)`
  }

  window.onscroll = scrollPercentage;
  
const range = document.getElementById("range");
range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;
  
    const rangeWidth = +getComputedStyle(e.target)
      .getPropertyValue("width")
      .slice(0, -2);
    const labelWidth = +getComputedStyle(label)
      .getPropertyValue("width")
      .slice(0, -2);
  
    const max = +e.target.max;
    const min = +e.target.min;
  
    const left =
      value * (rangeWidth / max) -
      labelWidth / 2 +
      scale(value, min, max, 10, -10);
  
    label.style.left = left + "px";
  
    label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};


