//let hello = "Hello World";
//alert(hello);
//alert('Hello'+'World');
//let str1 = 'Hello';
//let  str2 = "World!!";
//alert(str1 + str2);

//let orange = 100;
//let apple = 120;

//if(orange < apple){
//alert('みかんの値段が林檎よりやすい')
//} else if(orange == apple){
// alert('みかんとりんごが同じ値段');
//} else{
//alert('みかんの値段がりんごより高い');
//}

//let max = 100;
//let num = 1;
//let count = 0;

//while(num < max){
//  num = num * 2;
//  count = count + 1;
//}

//alert('2を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

//let i;
//let num = 0;

//for(i = 1;i<11;i++){
//  num = num + i;
//}

//alert('１から１０まで足し算した結果は' + num + 'です');

//let alertString;

//alertString = addString("WebCamp");

//alert(alertString);

//function addString(strA){
//  let addStr = "Hello " + strA;
//  return addStr;
//}

//let promptStr = prompt('何か好きな文字を入力してください。');

//alert(promptStr);

// じゃんけんの手を入力してもらうプロンプト欄を生成
//let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//while ((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
//  alert('グー・チョキ・パーのいずれかを入力してください');
//  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//}
// じゃんけんの手をランダムに作成する関数を呼び出す
//let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
//let judge = winLose(user_hand, js_hand);

//if (user_hand != null){
//  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
//  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//} else {
//  alert("またチャレンジしてね")
//}

// ランダムでじゃんけんの手を作成する関数
//function getJShand(){
//  let js_hand_num = Math.floor( Math.random() * 3 );
//  let hand_name;
//
//  if(js_hand_num == 0){
//    hand_name = "グー";
//  } else if(js_hand_num == 1){
//    hand_name = "チョキ";
//  } else if(js_hand_num == 2){
//    hand_name = "パー";
//  }
//  return hand_name;
//}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
//function winLose(user, js){
//  let winLoseStr;
//
//  if(user == "グー"){
//    if(js == "グー"){
//      winLoseStr = "あいこ";
//    } else if(js == "チョキ"){
//      winLoseStr = "勝ち";
//    } else if(js == "パー"){
//      winLoseStr = "負け";
//    }
//  } else if(user == "チョキ"){
//    if(js == "グー"){
//      winLoseStr = "負け";
//    } else if(js == "チョキ"){
//      winLoseStr = "あいこ";
//    } else if(js == "パー"){
//      winLoseStr = "勝ち";
//    }
//  } else if(user == "パー"){
//    if(js == "グー"){
//      winLoseStr = "勝ち";
//    } else if(js == "チョキ"){
//      winLoseStr = "負け";
//    } else if(js == "パー"){
//      winLoseStr = "あいこ";
//    }
//  }

//  return winLoseStr;
//}

//$(document).ready(function () {
//  $('body').html('<h1>Hello jQuery!!</h1>');
//});

//$(function(){
//  $('.box2').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });
//});

//$(function(){
//  $('.box3').slideDown();
//});

//$(function(){
//  $('.box4').slideUp();
//});

//$(function(){
//  $('.box5').show();
//  $('.box5').css({'background-color': '#0000ff'});
//});

//$(function(){
//  $('.box6').hide();
//});

//$(function(){
//  $('.box7').slideDown(function(){
//    $('.box7').css({
//      'background-color': '#0000ff',
//      'width': '200px',
//      'height': '100px'
//    }).slideUp();
//  });
//});

//$(function(){
//  $('.box8').mouseover(function(){
//    $('.box8').css({'background-color': '#0000FF'});
//  });
//  $('.box8').mouseout(function(){
//    $('.box8').css({'background-color': '#FF0000'});
//  });
//});

//$(function(){
//  $('.box9').mouseover(function(){
//    $('.box9').addClass('box9-ext');
//  });
//  $('.box9').mouseout(function(){
//    $('.box9').removeClass('box9-ext');
//  });
//});

//$(function(){
//  $('.box10').on('click', function(){
//    $('.box10').addClass('box10-ext');
//  });
//  $('.box10').mouseout(function(){
//    $('.box10').removeClass('box10-ext');
//  });
//});

//$(function(){
//  $('.box11').on('click', function(){
//    $(this).slideUp();
//  });
//});

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});