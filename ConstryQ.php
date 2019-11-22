<?
require_once("../db.php");
session_start();

if(!isset($_SESSION['id'])){   //проверяем на наличие id
header("location: https://questsinpocket.com/reg_vx/vxod-rega.php"); exit;}
 $id = $_SESSION['id'];
 $sql_res = mysql_query("SELECT id_user FROM activity_quests_users WHERE id_user='$id'") or die(mysql_error());
if(mysql_num_rows($sql_res) == 1 ){ // проверяем есть ли пользователь в активности      
header("location: https://questsinpocket.com/html/going.php"); exit;}

$sql = mysql_fetch_assoc(mysql_query("SELECT * FROM quests WHERE id = '$num'")); 
$user_id = $id ;

$id_quest = $sql['id'];
if(isset($_GET['place'])){
$points = $_GET['place'];
$arr = explode(",", $points);// конвертируем в массив
$place = serialize($arr); //массив id вопросов
$cout = count($arr);

$input = array();
$answer = array_pad($input, $cout, 1);

$ans2 = serialize($answer);
 $qw =  mysql_query("INSERT INTO activity_quests_users SET 
                                      id_user='$user_id',  
                                     
                                      points='$place',
                                      answer='$ans2'") or die(mysql_error());

$comma = implode(",", $arr);
if($qw == true){
header("location:going.php?$comma");

}}
?>
<!DOCTYPE html> 
<html> 
<head> 
<title>Simple Map</title> 
<meta name="viewport" content="initial-scale=1.0"> 
<meta charset="utf-8"> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
  <link rel="stylesheet" href="../css/experience.css">
<link rel="stylesheet" type="text/css" href="../css/choose.css"> 
<link rel="stylesheet" type="text/css" href="../css/menu.css"> 
<script type="text/javascript" src="../js/menu.js"></script>   
<script type="text/javascript" src="../js/coordinates.js"></script>   
</head> 
<body> 
  <div id="verx"> 
<span><img id="navi" src="../images/menu.jpg"></span> 
<div id="head"><div id="experience">
    
</div></div> 
<div id="menu"> 
  <p class="div_your_ball punkt">Ваши очки: <span class='your_ball'>30</span></p><!--ВСТАВЬ СЮДА PHP-->
<p class="punkt"><a href="Main.html">Главная </a></p>
<p class="punkt"><a href="Profil.php">Профиль</a></p> 
<p class="punkt"><a href="ConstryQ.php">Редактор квестов </a></p> 
<p class="punkt"><a href="All_Quests.php">Квест</a></p> 
<p class= "punkt"><a href="help.html">Помощь</a></p> 


</div> 
<img src="../images/Black.jpg" id="cloak">
<div class="body">
<div id="map"></div> 
<div class="information"> 
<div id="infochoice"> Выберите точку</div> 
<img id="infoimg" src="../images/docum.png"> 
<p id="title">Здесь будет располагаться информация об объекте</p>
<div id="choose"></div> 
<div id="first" class="flc">Первая</div>
<div id="last" class="flc">Последняя</div>

</div>

</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAdISPALibBwUr7ngh_1Mr8qqjXYxs3ls&callback=initMap"
    async defer></script>
<script> 
   var coords = [ 
{lat:54.635850,lng:39.748421 }, //И СЮДА ТОЖЕ
{lat:54.637269,lng: 39.751095}, 
{lat: 54.627103 ,lng:39.741690} ,
{lat:54.629108, lng:39.740790},
{lat:54.635358,lng: 39.747427},
{lat:54.635078,lng: 39.746919},
{lat:54.629803,lng: 39.742618},
{lat: 54.629236,lng: 39.736617},
{lat:54.625879,lng: 39.750779} 
];// 
var infoChoice=[ //И СЮДА ТОЖЕ
"Успенский собор-величественное сооружение конца XVII века,построенное зодчим Яковом Бухвостовым .Внутри находится 27-метровый деревянный иконостас", 
"Гостиница Черни-памятник архитектуры XVII.Изначально здание планировалось как житница,поэтому вы и видите сверху двери(раньше к каждой вело крыльцо)", 
"Лыбедский бульвар-отличное место для прогулок.Кстати по нему не числится ни одного дома. И в отличие от всех прочих бульваров и улиц ,он появился стихийно: после работ по расчистке русла городской речки-Лыбеди. " ,
"Гостиница построенная в 1888-89 годах.Причем было здание изначально двухэтажным, но, якобы случайно, обнаружив в подвале здания колодец с хорошей водой, купец решил достроить и третий – «банный этаж». " ,
"Соборная колокольня - памятник архитектуры XVIII-XIX веков. Строилась четырьмя архитекторами в течение 50 лет и является одним из символов Рязани." ,
"Рязанский кремль - сердце города . Здесь расположены самые старые сохранившиеся постройки Рязани. А с кремлёвского вала открываются прекрасные виды на город." ,
"Здание дворянского собрания представляет собой несколько объединённых построек и потому имеет оригинальный вид. Памятник архитектуры начала XIX века" ,
"Площадь Ленина создана по регулярному плану Екатерины II об уничтожении  кривых средневековых улиц 1780 года. Является одной из центральных площадей Рязани." ,
"Нижний городской сад (в простонародье Пьяный) в XIX веке принадлежал Обществу Трезвости и потому назывался сад Трезвости."

];// 
var  srces=[ //И СЮДА ТОЖЕ
"https://www.culture.ru/storage/images/25874504c0b74554ea6d0237c217650d/7a3aa9cebfb90555b3c02554cce72178.jpg", 
"https://b1.culture.ru/c/125646.300x217.jpg", 
"https://www.komandirovka.ru/upload/save_file22/655/655585c262a8399da125cf967b981c5d.jpg" ,
"http://or.kapital62.ru/files/objects/680x410/%D0%BF%D0%BE%D1%87%D1%82%D0%BE%D0%B2%D0%B0%D1%8F.jpg" ,
"https://img.lookmytrips.com/images/look4afg/image-58ea57f5ff93676d0c04060d-59d63912771fb-1ctce8i-lbcvr.jpg",
"https://zeir.ru/wp-content/uploads/scale_1200-min-1.jpg",
"https://imgprx.livejournal.net/dbd4590f8deac4e1be993587583e6762acabd2d4/ht2GXJHVGflviVosRheDo94XC7IpOSeANzSVOdTjJeSnFAYmTNsLD8HG6NCEVMTqJhbk7K01bKgU1-uuvXLKRPH9vmSMpmBKfYYu3i99EkkhWj8NE2-o7mbhSGmJ0AjJ7nrax9qRWCxPudPHvszbzm6lJs00OAlof5fyMpDanXj_2czGjjFhWEP9hDJWkBBUtbKsjRK8we4aRSogrHI2Pw",
"https://cdn2.rzn.info/data/image/newsadd/base/2018/01/170231_5a70a30727dac.jpg",
"https://rutraveller.ru/icache/place/7/535/005/75355_603x354.jpg"
] ;//ОСТАЛЬНОЕ НЕ ТРОГАЙ
  let places=[];
let markerI;
let map;// 
let x1;
let x2;
function Place(coords,infoChoice,src){
 this.coords=coords,
 this.infoChoice=infoChoice,
 this.src=src
}
function showContent(t){
 $("#infochoice").html(places[t].infoChoice);
 $("#infoimg").attr('src',places[t].src);
 $("#choose").show().text("Я пришел").css("backgroundColor","rgba(20, 240, 20,0.9)");
 $("#title").hide();
}
function setMyMarker(position,t){

 var marker = new google.maps.Marker({ 
    position:position,
    map:map
});
marker.addListener("click" , function(){ 
map.setCenter(marker.getPosition());
tod=t;
showContent(t);
})
return marker;
};


function initMap(){
  var directionsDisplay = new google.maps.DirectionsRenderer;//
  var directionsService = new google.maps.DirectionsService;//

map = new google.maps.Map(document.getElementById('map'), { 
center: coords[0], 
zoom: 14
});
directionsDisplay.setMap(map); // функция добавления карты
for(let i=0;i<coords.length;i++){
places[i]= new Place(coords[i], infoChoice[i], srces[i]);
setMyMarker(places[i].coords,i).setMap(map);

}///////


markerI=new google.maps.Marker({
 label:{ text:"I",
color:"green",
fontWeight:"700",
fontSize:"2em"}
})
markerI.setMap(map);
}
//////
  $("#choose").on("click",function(){
  if(x1==places[tod].coords.lat&&x2==places[tod].coords.lng){
  location.href="quest";
  }
  else{
    alert(" К сожалению,нет");
  }});
  let wp=navigator.geolocation.watchPosition(function(pos){
 x1=pos.coords.latitude.toFixed(5);
 x2=pos.coords.longitude.toFixed(5);
markerI.setPosition(new google.maps.LatLng(x1,x2));
  });
</script> 
</body> 
</html>