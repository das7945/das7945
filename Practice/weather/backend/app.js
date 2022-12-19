const { response } = require('express');// express 라이브러리 로딩하기
const express = require('express');
const request = require('request');// HTTP 요청을 다루는 라이브러리 로딩하기
const port = 3000; // 웹 서버 포트번호
// express()를 호출하여 웹서버를 준비한다.
const app = express();

app.use(express.urlencoded({extended : true}));



app.get('/proxy2', (req, res) => {    
  
  res.set('Access-Control-Allow-Origin', '*');       
  res.set('Content-Type', 'application/json; charset=UTF-8')

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?" + 
                    "serviceKey=B1owd940AsmBpdnx%2FoLXYOpKox42TuSDluVY%2BtcxexysxKF5K8LOjbfDD%2BqVn2Z1zdWMtAsHKC34a8lHN2Q4LQ%3D%3D" +
                    "&pageNo=1" +
                    "&numOfRows=1000" +
                    "&dataType=JSON" +
                    "&base_date="+req.query.base_date +
                    "&base_time=0600" +
                    "&nx="+req.query.nx +
                    "&ny="+req.query.ny;

  request.get({
    url : openApiUrl
  }, (error, response, body) => {
    res.send(body);
    console.log(openApiUrl)
  });       

}); 

app.listen(    // 웹서버 실행하기
  3000,             // 포트 번호 지정
  () => {           // 서버가 시작되었을 때 호출될 함수 = 리스너 = 이벤트 핸들러
    console.log(`${port}번 포트에서 서버 시작했음!`);
  } 
);
console.log("서버 시작");












