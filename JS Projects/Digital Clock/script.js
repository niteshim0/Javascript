setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  const hr = document.getElementById("hr");
  const mn = document.getElementById("mn");
  const sc = document.getElementById("sc");
  hr.innerText = htime;
  mn.innerText = mtime;
  sc.innerText = stime;
}, 1000);