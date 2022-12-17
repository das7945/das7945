
const express = require('express');  // express 라이브러리 로딩하기
const request = require('request');  // HTTP 요청을 다루는 라이브러리 로딩하기
const port = 3000;   // 웹 서버 포트 번호
const app = express();  // express()를 호출하여 웹 서버를 준비

app.get('/weather', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('content-Type', 'text/html; charset=UTF-8');
    let arr = [
    {day:1, location:'지역명1', temp:'온도1', weather: '맑음'},
    {day:2, location:'지역명2', temp:'온도2', weather: '비'},
    {day:3, location:'지역명3', temp:'온도3', weather: '눈'},
    {day:4, location:'지역명4', temp:'온도4', weather: '안개'},
    {day:5, location:'지역명5', temp:'온도5', weather: '흐림'}
  ];

  res.send(JSON.stringify(arr));
});

app.get('/proxy', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?" +
  "serviceKey=B1owd940AsmBpdnx%2FoLXYOpKox42TuSDluVY%2BtcxexysxKF5K8LOjbfDD%2BqVn2Z1zdWMtAsHKC34a8lHN2Q4LQ%3D%3D" +
  "&pageNo=1" +
  "&numOfRows=100" +
  "&dataType=JSON" +
  "&base_date=" + req.query.base_date +
  "&base_time=0500" +
  "&nx=" + req.query.nx +
  "&ny=" + req.query.ny +



  request.get({
      url: openApiUrl
    }, (error, response, body) => {
      res.send(body);
  });
}); 

// 웹 서버 실행하기
app.listen(
  3000,      // 포트번호 지정
  () => {    // 서버가 시작되었을 때 호출될 함수 = 리스너 = 이벤트 핸들러
    console.log(`${port}번 포트에서 서버 시작했음!`);
  } 
);
console.log("서버 시작했음!");



let today = new Date();   // Sat Dec 17 2022 15:37:33 GMT+0900 (한국 표준시)

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월. 1월은 0으로 표현되므로 +1
let date = today.getDate();  // 날짜let day = today.getDay();  // 요일

let today = new Date();  
document.write(today.toLocaleDateString() + '<br>'); //년.월.일
document.write(today.toLocaleTimeString() + '<br>'); //오전오후. 시.분.초
document.write(today.toLocaleString() + '<br><br>'); //년.월.일. 오전오후. 시.분.초






// 현재 위치 정보를 가져오기 위한 함수
// 함수를 사용할 경우 앞에 async function <<<와 같이 붙여줘야함
// promise
async function getLocation() {  //비동기
  let XY = new Object();
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
  return xy;
}


// let local = new Date();

// let time = local.toLocaleString("ko-kr"); //년.월.일. 오전오후. 시.분.초
// console.log("time");


const date = new Date();

const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);
const dateStr = year + '-' + month + '-' + day;
console.log("dateStr");