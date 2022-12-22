const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function seven(a, b, c, d, e, f, g) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?=", false);
  xhr.send();
  var obj = JSON.parse(xhr.responseText);

  console.log(obj);

  if (a < 100) {
    $("#title1").html(obj.gangnamParingInfo.row[a].NM).css('display', 'block');
    $("#text1").html(`주소 : ${obj.gangnamParingInfo.row[a].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[a].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[a].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[a].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[a].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[a].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[a].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[a].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[a].TYPE}`);
    $("#title2").css('display', 'none');
    $("#title3").css('display', 'none');
    $("#title4").css('display', 'none');
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  } else if (a < 200){
    Swal.fire({
      icon: 'error',
      title: '주차장이 없습니다.',
      text: '',
      footer: ''
    })
  };
  if (b < 100) {
    $("#title2").html(obj.gangnamParingInfo.row[b].NM).css('display', 'block');
    $("#text2").html(`주소 : ${obj.gangnamParingInfo.row[b].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[b].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[b].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[b].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[b].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[b].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[b].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[b].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[b].TYPE}`);
  } else {
    $("#title3").css('display', 'none');
    $("#title4").css('display', 'none');
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (c < 100) {
    $("#title3").html(obj.gangnamParingInfo.row[c].NM).css('display', 'block');
    $("#text3").html(`주소 : ${obj.gangnamParingInfo.row[c].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[c].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[c].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[c].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[c].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[c].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[c].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[c].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[c].TYPE}`);
  } else {
    $("#title4").css('display', 'none');
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (d < 100) {
    $("#title4").html(obj.gangnamParingInfo.row[d].NM).css('display', 'block');
    $("#text4").html(`주소 : ${obj.gangnamParingInfo.row[d].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[d].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[d].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[d].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[d].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[d].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[d].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[d].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[d].TYPE}`);
  } else {
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (e < 100) {
    $("#title5").html(obj.gangnamParingInfo.row[e].NM).css('display', 'block');
    $("#text5").html(`주소 : ${obj.gangnamParingInfo.row[e].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[e].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[e].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[e].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[e].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[e].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[e].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[e].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[e].TYPE}`);
  } else {
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (f < 100) {
    $("#title6").html(obj.gangnamParingInfo.row[f].NM).css('display', 'block');
    $("#text6").html(`주소 : ${obj.gangnamParingInfo.row[f].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[f].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[f].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[f].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[f].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[f].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[f].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[f].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[f].TYPE}`);
  } else {
    $("#title7").css('display', 'none');
  };
  if (g < 100) {
    $("#title7").html(obj.gangnamParingInfo.row[g].NM).css('display', 'block');
    $("#text7").html(`주소 : ${obj.gangnamParingInfo.row[g].ADDR_OLD}<br>구분 : ${obj.gangnamParingInfo.row[g].MONEY_INFO}<br>시간당 요금 : ${obj.gangnamParingInfo.row[g].ADD_MONEY}<br>부제 : ${obj.gangnamParingInfo.row[g].BUJE_SIHENG}<br>오픈 시간 : ${obj.gangnamParingInfo.row[g].START_TM}<br>마감 시간 : ${obj.gangnamParingInfo.row[g].END_TM}<br>평일/주말 : ${obj.gangnamParingInfo.row[g].OPEN_DATE}<br>지불방식 : ${obj.gangnamParingInfo.row[g].PAY_INFO}<br>주차장타입 : ${obj.gangnamParingInfo.row[g].TYPE}`);
  }
};


seven(2, 3, 101, 101, 101, 101, 101);

































// function parking_info(a) { 
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET",
//       "http://localhost:3000/proxy2?=", false);
//   xhr.send();
//   var obj = JSON.parse(xhr.responseText);
//   console.log(obj);

// $("div > h3").html(obj.GetParkInfo.row[a].PARKING_NAME);
// $("#text1").html(
//   `주소 : ${obj.GetParkInfo.row[a].ADDR}<br>
//   전화번호 : ${obj.GetParkInfo.row[a].TEL}<br>
//   주차장 종류 : ${obj.GetParkInfo.row[a].PARKING_TYPE_NM}<br>
//   유/무료 : ${obj.GetParkInfo.row[a].PAY_NY}<br>
//   기본 주차 요금 : ${obj.GetParkInfo.row[a].RATES}<br>
//   기본 주차 시간 : ${obj.GetParkInfo.row[a].TIME_RATE}<br>
//   추가 단위 요금 : ${obj.GetParkInfo.row[a].ADD_RATES}<br>
//   추가 단위 시간 : ${obj.GetParkInfo.row[a].ADD_TIME_RATE}<br>
//   일 최대 요금 : ${obj.GetParkInfo.row[a].DAY_MAXIMUM}<br>
//   평일 OPEN : ${obj.GetParkInfo.row[a].WEEKDAY_BEGIN_TIME}<br>
//   평일 CLOSE : ${obj.GetParkInfo.row[a].WEEKDAY_END_TIME}<br>
//   평일 OPEN : ${obj.GetParkInfo.row[a].WEEKEND_BEGIN_TIME}<br>
//   평일 CLOSE : ${obj.GetParkInfo.row[a].WEEKEND_END_TIME}<br>
//   야간 무료개방 : ${obj.GetParkInfo.row[a].NIGHT_FREE_OPEN_NM}<br>
//   `);
// };


// parking_info(1);