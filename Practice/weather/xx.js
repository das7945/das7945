// let local = new Date();

// let time = local.toLocaleString("ko-kr"); //년.월.일. 오전오후. 시.분.초
// console.log("time");
let time = document.querySelector(".time")


// let year = date.getFullYear();
// let month = ('0' + (date.getMonth() + 1)).slice(-2);
// let day = ('0' + date.getDate()).slice(-2);
// let dateStr = year + '-' + month + '-' + day;

// let hours = ('0' + date.getHours()).slice(-2);
// let minutes = ('0' + date.getMinutes()).slice(-2);
// let Seconds = ('0' + date.getSeconds()).slice(-2);
// let timeStr = hours + ':' + minutes + ':'+ Seconds;
// let clock = `${dateStr} ${timeStr}`;


setInterval(handleClock,500);

function handleClock(){
  console.log('.')
  let date = new Date();
  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let dateStr = year + '-' + month + '-' + day;

  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  let Seconds = ('0' + date.getSeconds()).slice(-2);
  let timeStr = hours + ':' + minutes + ':'+ Seconds;
  let clock = `${dateStr} ${timeStr}`;
  time.innerHTML = clock;
};


