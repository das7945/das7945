
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
  // 배열 객체를 JSON 문자열로 변환하여 클라이언트에게 보낸다.
  // serialization(직렬화)
  res.send(JSON.stringify(arr));
});

app.get('/proxy', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?" +
    "serviceKey=DbSZXR9hJZpE84BWY2zIwk2rohohciUQnK0WNVgFTxPdXiiSIWZ4X6buqhUdoenXqSYvJXiuNMP77pq4NGwFiQ%3D%3D" +
    "&pageNo=1" +
    "&numOfRows=1000" +
    "&dataType=JSON" +
    "&base_date=" + req.query.base_date +
    "&base_time=0600" +
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

