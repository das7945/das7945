let time = document.querySelector(".time")
let address = document.querySelector(".address")

setInterval(handleClock, 800); //현재시간 반복실행
// setInterval(getLocation, 800); //현재위치 반복실행
// getLocation()
// handleClock()

//현재 시간
function handleClock(){
  console.log('.')
  let date = new Date();
  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  var now = year + '-' + month + '-' + day;
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  // let seconds = ('0' + date.getSeconds()).slice(-2);  // 작동되는지 확인용
  // let timeStr = hours + ':' + minutes + ':'+ seconds; // 작동되는지 확인용  
  let timeStr = hours + ':' + minutes;
  let clock = `${now} ${timeStr}`;
  
  time.innerHTML = clock;
};

//------------------------------------------------------------------------------------------------
//현재 위도와 경도
async function getLocation() {  
 var XY = new Object();
  if(navigator.geolocation) {
    let promise = new Promise((resolve, rejected) => {
      navigator.geolocation.getCurrentPosition((position) => { 
        resolve(position);
      });//getCurrentPosition 비동기를 동기로 변경하는 작업
    });

    let position = await promise;
    // navigator.geolocation.getCurrentPosition(function(position){
      XY.lat = position.coords.latitude;  // 위도
      XY.lng = position.coords.longitude; // 경도   
  }
  return address.innerHTML = (`위도: ${XY.lat}\n 경도: ${XY.lng}`)
};