"use strict"

//------------------------------------------------------------------------------------------------
let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let now = `${year}${month}${date}`;
//------------------------------------------------------------------------------------------------
//서울
(function weather_se() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 60 + "&ny=" + 127, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let gmsky = arr.response.body.items.item[18].category;
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
//------------------------------------------------------------------------------------------------
//인천
(function weather_incheon() {
 var xhr = new XMLHttpRequest();
 xhr.open("GET",
   "http://localhost:3000/proxy2?base_date=" + now +
   "&nx=" + 55 + "&ny=" + 124, false);
 xhr.send();
 const arr = JSON.parse(xhr.responseText);
 console.log(arr);
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
//------------------------------------------------------------------------------------------------
//대전
(function weather_daejeon() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 67 + "&ny=" + 100, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
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
//------------------------------------------------------------------------------------------------
//대구
(function weather_daegu() {
    var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 89 + "&ny=" + 90, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
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
//------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------
//현재위치의 날씨정보
// (function weather_gps() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET",
//     "http://localhost:3000/proxy2?base_date=" + now +
//     "&nx=" + `${XY.lat}` + "&ny=" + `${XY.lng}`, false);
//   xhr.send();
//   const arr = JSON.parse(xhr.responseText);
//   console.log(arr);
//   let gmsky = arr.response.body.items.item[18].category;
//   let gmskyvalue = arr.response.body.items.item[18].fcstValue;
//   let gmpty = arr.response.body.items.item[6].fcstValue;
//   let t1h = arr.response.body.items.item[24].category;
//   let t1hvalue = arr.response.body.items.item[24].fcstValue;
//   let rehvalue = arr.response.body.items.item[30].fcstValue
//   document.getElementById('setm').innerHTML = `${t1hvalue}℃`;
//   document.getElementById('sereh').innerHTML = `${rehvalue}%`
//   if (gmpty == 0) {
//     if (gmskyvalue == 1) {
//       seim.innerHTML = "<img src='./image/sun.png' width='100%' >";
//     } else if (gmskyvalue == 3) {
//       seim.innerHTML = "<img src='./image/cloud.png'' width='100%' >";
//     } else {
//       seim.innerHTML = "<img src='./image/blur.png' width='100%' >";
//     }
//   } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
//     seim.innerHTML = "<img src='./image/rain.png' width='100%' >";
//   } else {
//     seim.innerHTML = "<img src='./image/snow.png' width='100%' >";
//   }
// }());