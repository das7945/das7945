"use strict"

//--------------------------------------------------------------------
let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let now = `${year}${month}${date}`;
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//서울
(function weather_se() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 60 + "&ny=" + 127, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  // let gmsky = arr.response.body.items.item[18].category;
  let gmskyvalue = arr.response.body.items.item[18].fcstValue;
  let gmpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue
  document.getElementById('setm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('sereh').innerHTML = `${rehvalue}%`
  if (gmpty == 0) {
    if (gmskyvalue == 1) {
      seim.innerHTML = "<img src='./image/sun.png' width='100%' >";
    } else if (gmskyvalue == 3) {
      seim.innerHTML = "<img src='./image/cloud.png' width='100%' >";
    } else {
      seim.innerHTML = "<img src='./image/blur.png' width='100%' >";
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    seim.innerHTML = "<img src='./image/rain.png' width='100%' >";
  } else {
    seim.innerHTML = "<img src='./image/snow.png' width='100%' >";
  }
}());
//--------------------------------------------------------------------
//인천
(function weather_incheon() {
 var xhr = new XMLHttpRequest();
 xhr.open("GET",
   "http://localhost:3000/proxy2?base_date=" + now +
   "&nx=" + 55 + "&ny=" + 124, false);
 xhr.send();
 let arr = JSON.parse(xhr.responseText);
//  console.log(arr);
 let gmsky = arr.response.body.items.item[18].category;
 let gmskyvalue = arr.response.body.items.item[18].fcstValue;
 let gmpty = arr.response.body.items.item[6].fcstValue;
 let t1h = arr.response.body.items.item[24].category;
 let t1hvalue = arr.response.body.items.item[24].fcstValue;
 let rehvalue = arr.response.body.items.item[30].fcstValue;
 
 document.getElementById('incheontm').innerHTML = `${t1hvalue}℃`;
 document.getElementById('incheonreh').innerHTML = `${rehvalue}%`
 if (gmpty == 0) {
   if (gmskyvalue == 1) {
     incheonim.innerHTML = "<img src='./image/sun.png' width='100%' >";
   } else if (gmskyvalue == 3) {
     incheonim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
   } else {
     incheonim.innerHTML = "<img src='./image/blur.png' width='100%' >";
   }
 } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
   incheonim.innerHTML = "<img src='./image/rain.png' width='100%' >";
 } else {
   incheonim.innerHTML = "<img src='./image/snow.png' width='100%' >";
 }
}());    
//--------------------------------------------------------------------
//대전
(function weather_daejeon() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 67 + "&ny=" + 100, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  // console.log(arr);
  let daejeonsky = arr.response.body.items.item[18].category;
  let daejeonskyvalue = arr.response.body.items.item[18].fcstValue;
  let daejeonpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;
  document.getElementById('daejeontm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('daejeonreh').innerHTML = `${rehvalue}%`;
  if (daejeonpty == 0) {
    if (daejeonskyvalue == 1) {
      daejeonim.innerHTML = "<img src='./image/sun.png' width='100%' >";
    } else if (daejeonskyvalue == 3) {
      daejeonim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
    } else {
      daejeonim.innerHTML = "<img src='./image/blur.png' width='100%' >";
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    daejeonim.innerHTML = "<img src='./image/rain.png' width='100%' >";
  } else {
    daejeonim.innerHTML = "<img src='./image/snow.png' width='100%' >";
  }
}());
//--------------------------------------------------------------------
//대구
(function weather_daegu() {
    var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 89 + "&ny=" + 90, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  // console.log(arr);
  let daegusky = arr.response.body.items.item[18].category;
  let daeguskyvalue = arr.response.body.items.item[18].fcstValue;
  let daegupty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue
  document.getElementById('daegutm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('daegureh').innerHTML = `${rehvalue}%`
  if (daegupty == 0) {
      if (daeguskyvalue == 1) {
        daeguim.innerHTML = "<img src='./image/sun.png' width='100%' >";
    } else if (daeguskyvalue == 3) {
        daeguim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
    } else {
        daeguim.innerHTML = "<img src='./image/blur.png' width='100%' >";
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
      daeguim.innerHTML = "<img src='./image/rain.png' width='100%' >";
  } else {
      daeguim.innerHTML = "<img src='./image/snow.png' width='100%' >";
  }
}());
//--------------------------------------------------------------------
//부산
(function weather_busan() {
    var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 63 + "&ny=" + 126, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let busansky = arr.response.body.items.item[18].category;
  let busanskyvalue = arr.response.body.items.item[18].fcstValue;
  let busanpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue
  
  document.getElementById('busantm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('busanreh').innerHTML = `${rehvalue}%`

  if (busanpty == 0) {
    if (busanskyvalue == 1) {
      busanim.innerHTML = "<img src='./image/sun.png' width='100%' >";
   } else if (busanskyvalue == 3) {
      busanim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
   } else {
      busanim.innerHTML = "<img src='./image/blur.png' width='100%' >";
   }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    busanim.innerHTML = "<img src='./image/rain.png' width='100%' >";
  } else {
    busanim.innerHTML = "<img src='./image/snow.png' width='100%' >";
  }  
}());
//--------------------------------------------------------------------
var i;

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
  //  return address.innerHTML = (`위도: ${XY.lat}\n 경도: ${XY.lng}`)
   address.innerHTML = (`위도: ${XY.lat}\n 경도: ${XY.lng}`)
  //  var rs = fs_xy_conv('toXY', XY.lat, XY.lng)
  //  return rs
  i = dfs_xy_conv('toXY', XY.lat, XY.lng);
 };
 
// console.log(getLocation());
 //--------------------------------------------------------------------
 // 기상청 홈페이지에서 발췌한 변환 함수
//
// LCC DFS 좌표변환을 위한 기초 자료
//
var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기1준점 Y좌표(GRID
//CC DFS 좌표변환 ( code : 
//        "toXY"(위경도->좌표, v1:위도, v2:경도), 
//        "toLL"(좌표->위경도,v1:x, v2:y) )

function dfs_xy_conv(code, v1, v2) {
    var DEGRAD = Math.PI / 180.0;
    var RADDEG = 180.0 / Math.PI;
    
    var re = RE / GRID;
    var slat1 = SLAT1 * DEGRAD;
    var slat2 = SLAT2 * DEGRAD;
    var olon = OLON * DEGRAD;
    var olat = OLAT * DEGRAD;
    
    var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
    var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = re * sf / Math.pow(ro, sn);
    var rs = {};
    if (code == "toXY") {
        rs['lat'] = v1;
        rs['lng'] = v2;
        var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
        ra = re * sf / Math.pow(ra, sn);
        var theta = v2 * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
        rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    }
    else {
        rs['x'] = v1;
        rs['y'] = v2;
        var xn = v1 - XO;
        var yn = ro - v2 + YO;
        ra = Math.sqrt(xn * xn + yn * yn);
        if (sn < 0.0) - ra;
        var alat = Math.pow((re * sf / ra), (1.0 / sn));
        alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;
        
        if (Math.abs(xn) <= 0.0) {
            theta = 0.0;
        }
        else {
            if (Math.abs(yn) <= 0.0) {
                theta = Math.PI * 0.5;
                if (xn < 0.0) - theta;
            }
            else theta = Math.atan2(xn, yn);
        }
        var alon = theta / sn + olon;
        rs['lat'] = alat * RADDEG;
        rs['lng'] = alon * RADDEG;
    }
    
    return rs;
}


 //--------------------------------------------------------------------
// 현재위치
// (function weather_local() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET",
//     "http://localhost:3000/proxy2?base_date=" + now +
//     "&nx=" + `${rs.x}` + "&ny=" + `${rs.y}`, false);
//   xhr.send();
//   const arr = JSON.parse(xhr.responseText);
//   console.log(arr);
//   let gmsky = arr.response.body.items.item[18].category;
//   let gmskyvalue = arr.response.body.items.item[18].fcstValue;
//   let gmpty = arr.response.body.items.item[6].fcstValue;
//   let t1h = arr.response.body.items.item[24].category;
//   let t1hvalue = arr.response.body.items.item[24].fcstValue;
//   let rehvalue = arr.response.body.items.item[30].fcstValue
//   document.getElementById('localtm').innerHTML = `${t1hvalue}℃`;
//   document.getElementById('localreh').innerHTML = `${rehvalue}%`
//   if (gmpty == 0) {
//     if (gmskyvalue == 1) {
//       localim.innerHTML = "<img src='./image/sun.png' width='100%' >";
//     } else if (gmskyvalue == 3) {
//       localim.innerHTML = "<img src='./image/cloud.png' width='100%' >";
//     } else {
//       localim.innerHTML = "<img src='./image/blur.png' width='100%' >";
//     }
//   } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
//     localim.innerHTML = "<img src='./image/rain.png' width='100%' >";
//   } else {
//     localim.innerHTML = "<img src='./image/snow.png' width='100%' >";
//   }
// }());
// 현재위치의 날씨정보
// (function weather_gps() {
//   let XY = {};
//   getLocation();
//   XY = i;
//   console.log(i);
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET",
//     "http://localhost:3000/proxy2?base_date=" + now +
//     "&nx=" + `${XY.lat}` + "&ny=" + `${XY.lng}`, false);
//   xhr.send();
//   const arr = JSON.parse(xhr.responseText);
//   console.log(arr.response.body.items.item[18].category);
//   let localsky = arr.response.body.items.item[18].category;
//   let localskyvalue = arr.response.body.items.item[18].fcstValue;
//   let localpty = arr.response.body.items.item[6].fcstValue;
//   let t1h = arr.response.body.items.item[24].category;
//   let t1hvalue = arr.response.body.items.item[24].fcstValue;
//   let rehvalue = arr.response.body.items.item[30].fcstValue
//   document.getElementById('setm').innerHTML = `${t1hvalue}℃`;
//   document.getElementById('sereh').innerHTML = `${rehvalue}%`
//   if (localpty == 0) {
//     if (localskyvalue == 1) {
//       localim.innerHTML = "<img src='./image/sun.png' width='100%' >";
//     } else if (gmskyvalue == 3) {
//       localim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
//     } else {
//       localim.innerHTML = "<img src='./image/blur.png' width='100%' >";
//     }
//   } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
//     localim.innerHTML = "<img src='./image/rain.png' width='100%' >";
//   } else {
//     localim.innerHTML = "<img src='./image/snow.png' width='100%' >";
//   }
// }());

getLocation();
setTimeout(function weather_gps() {
  let XY = {};
  XY = i;
  var xhr = new XMLHttpRequest();
  let str = "http://localhost:3000/proxy2?base_date=" + now +
  "&nx=" + `${XY.x}` + "&ny=" + `${XY.y}`;
  xhr.open("GET",
    str, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  let localsky = arr.response.body.items.item[18].category;
  let localskyvalue = arr.response.body.items.item[18].fcstValue;
  let localpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue
  document.getElementById('localtm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('localreh').innerHTML = `${rehvalue}%`
  if (localpty == 0) {
    if (localskyvalue == 1) {
      localim.innerHTML = "<img src='./image/sun.png' width='100%' >";
    } else if (gmskyvalue == 3) {
      localim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
    } else {
      localim.innerHTML = "<img src='./image/blur.png' width='100%' >";
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    localim.innerHTML = "<img src='./image/rain.png' width='100%' >";
  } else {
    localim.innerHTML = "<img src='./image/snow.png' width='100%' >";
  }
}, 1000)