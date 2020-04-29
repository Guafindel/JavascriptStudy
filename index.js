/*
var, let, const의 차이점
var은 var a = 10;
var a = 5; 이런 방식의 선언이 가능하고 a = 5;와 같은 재할당 또한 가능하다 그러나, 이는 옳지 않은 방법이다.
const의 경우는 const a = 10;
한번 선언한 경우 다시 초기화 선언이 불가능하며
a = 5같은 재할당 또한 불가능하다.
let의 경우에는 let a = 10;
다시 초기화 선언은 불가능하나, a = 5;와 같은 재할당 선언은 가능하다.
*/

const myInfo = {
    name : "Joshua",
    age : 30,
    gender : "Male",
    isHandsome : false,
    favMovies : [
        {        
            name : "a1",
            actor : "a2"
        },
        {
            name : "b1",
            actor : "b2"
        },
        {
            name : "c1",
            actor : "c2"
        }
    ],
    favFood : ["d1", "d2", "d3",],
    favGirl : [{
        name : "e1"
    },
    {
        name : "e2"
    },
    {
        name : "e3"
    }]
}

function sayHello(food, drink) {
    console.log('my favFood is ' + food + 'and favDrink is ' + drink);
}

//const getSayHello = sayHello("chicken", "coke");

//console.log(getSayHello);

function sayHello2(name, age) {
    return 'your name is ' + name + 'and your age is ' + age 
}

const getSayHello2 = sayHello2("Joshua", 31);

//console.log(getSayHello2);

const calculator = {
    plus : function(a, b) {
        return a + b;
    },
    minus : function(a, b) {
        return a - b;
    },
    multiple : function(a, b) {
        return a * b;
    },
    divide : function(a, b) {
        return a / b;     
    },
    // pow : function(a, b) {
    //     return a ** b;
    // }
}

const plus = calculator.plus(5, 5);
//console.log(plus);

const minus = calculator.minus(5, 5);
//console.log(minus);

const multiple = calculator.multiple(5, 5);
//console.log(multiple);

const divide = calculator.divide(5, 5);
//console.log(divide);

// const pow = calculator.pow(5, 5);
// console.log(pow);

// console.log(document);

document.title = "is this right?";

const simple = document.querySelector("#simple");

simple.innerHTML = "how about this?";
simple.style.color = "blue";

const ufn_Date = {
    addZero : function(i) {
        if(i < 10) {
            i = "0" + i;
        }
        return i;
    },
    getDecember : function(i) {
        if(i == "00") {
            i = "12"
        }
        return i;
    },
    getNowYearMonth : function() {
        const now = new Date();
        const yyyy = this.addZero(now.getFullYear());
        const mm = this.addZero(now.getMonth() + 1);
        return yyyy + mm;
    },
    getNowYear : function() {
        const now = new Date();
        const yyyy = this.addZero(now.getFullYear());
        return yyyy+"";
    },
    getNowMonth : function() {
        const now = new Date();
        const mm = this.addZero(now.getMonth() + 1);
        return mm+"";
    }, 
    getOneMonthAgo : function(){
        return String(new Date().getMonth())[1]?String(new Date().getMonth()):'0'+String(new Date().getMonth());
    }, 
    getOneMonthLater : function(){
        return String(new Date().getMonth() + 2)[1]?String(new Date().getMonth() + 2):'0'+String(new Date().getMonth() + 2);
    },
    getNextYearMonth : function(separator){
    	if(separator == undefined) separator = "";
    	var nextDate = new Date(new Date().setMonth(new Date().getMonth()+1));
    	var yyyy = this.addZero(nextDate.getFullYear());
    	var mm = this.addZero(nextDate.getMonth() + 1);
    	return yyyy + separator + mm + separator;
    },
    getAgoYearMonth : function(separator) {
        if(separator == undefined) separator = "";
        const nextDate = new Date(new Date().setMonth(new Date().getMonth()));
        let yyyy = this.addZero(nextDate.getFullYear());
        let mm = this.addZero(nextDate.getMonth());
        mm = this.getDecember(mm);
        if(mm == "12") {
            yyyy--;
        }
        return yyyy + separator + mm + separator;
    },
    getAgo01YearMonth : function(separator) {
        if(separator == undefined) separator = "";
        const nextDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
        let yyyy = this.addZero(nextDate.getFullYear());
        let mm = this.addZero(nextDate.getMonth());
        mm = this.getDecember(mm);
        if(mm == "12") {
            yyyy--;
        }
        return yyyy + separator + mm + separator;
    },
    getAgo02YearMonth : function(separator) {
        if(separator == undefined) separator = "";
        const nextDate = new Date(new Date().setMonth(new Date().getMonth() - 2));
        let yyyy = this.addZero(nextDate.getFullYear());
        let mm = this.addZero(nextDate.getMonth());
        mm = this.getDecember(mm);
        if(mm == "12") {
            yyyy--;
        }
        return yyyy + separator + mm + separator;
    }
};

const nowDay = ufn_Date.getNowYearMonth();

//202004

// const yearMonth = {
//     agoYearMonth : ufn_Date.getAgoYearMonth(),
//     nowYearMonth : ufn_Date.getNowYearMonth(),
//     laterYearMonth : ufn_Date.getNextYearMonth()
// }

// const yearMonthObj = {
//     agoYearMonth02 : {
//         year : "",
//         month : ""
//     },
//     agoYearMonth01 : {
//         year : "",
//         month : ""
//     },
//     agoYearMonth : {
//         year : "",
//         month : ""
//     },
//     nowYearMonth : {
//         year : ufn_Date.getNowYear(),
//         month : ufn_Date.getNowMonth()
//     }
// }


const getLaterAgoDate = {
    agoYear02 : function() {
        return "";
    },
    agoMonth02 : function() {
        return "";
    },
    agoYear01 : function() {
        return "";
    },
    agoMonth01 : function() {
        return "";
    },
    agoYear : function() {
        return "";
    },
    agoMonth : function() {
        return "";
    }
}

// console.log(ufn_Date.getNowYearMonth());
// console.log(ufn_Date.getAgoYearMonth());
// console.log(ufn_Date.getAgo01YearMonth());
// console.log(ufn_Date.getAgo02YearMonth());



//const nextDate = 
//console.log(new Date(new Date().setMonth(new Date().getMonth() - 10)));
//const getDate = new Date(date.setMonth(date.getMonth() - 3));

function getAgoYearMonth(separator, index) {
    if(separator == undefined) separator = "";
    if(index == undefined) index = 0;
    const nextDate = new Date(new Date().setMonth(new Date().getMonth() - index));
    let yyyy = ufn_Date.addZero(nextDate.getFullYear());
    let mm = ufn_Date.addZero(nextDate.getMonth());
    mm = ufn_Date.getDecember(mm);
    if(mm == "12") {
        yyyy--;
    }
    return yyyy + separator + mm + separator;
}

function getKey(strNum) {
    const a = strNum.substring(0, 4);
    const b = strNum.substring(4, 6);

    return a + '년' + b + '월';
}


const yearMonth = [
    {
        KEY : getKey(ufn_Date.getNowYearMonth()),
        VAL : ufn_Date.getNowYearMonth()
    },
    {
        KEY : getKey(getAgoYearMonth()),
        VAL : getAgoYearMonth()
    },
    {
        KEY : getKey(getAgoYearMonth("", 1)),
        VAL : getAgoYearMonth("", 1)
    },
    {
        KEY : getKey(getAgoYearMonth("", 2)),
        VAL : getAgoYearMonth("", 2)
    },
    {
        KEY : getKey(getAgoYearMonth("", 3)),
        VAL : getAgoYearMonth("", 3)
    }
];

console.log(yearMonth[0]);

let firstMonth = {};

function getClick() {
    console.log(yearMonth[0]);
    console.log(yearMonth[1]);
    console.log(yearMonth[2]);
    console.log(yearMonth[3]);
    
    firstMonth = yearMonth[0];
    console.log(firstMonth);

}

// function ResizeImage() {
//     var filesToUpload = document.getElementById('imageFile').files;
//     var file = filesToUpload[0];
     
//     // 문서내에 img 객체를 생성합니다
//     var img = document.createElement("img");
//     // 파일을 읽을 수 있는 File Reader 를 생성합니다
//     var reader = new FileReader();
     
//     // 파일이 읽혀지면 아래 함수가 실행됩니다
//     reader.onload = function(e) {
//         img.src = e.target.result;
     
//         // HTML5 canvas 객체를 생성합니다
//         var canvas = document.createElement("canvas");      
//         var ctx = canvas.getContext("2d");
    
//         // 캔버스에 업로드된 이미지를 그려줍니다
//         ctx.drawImage(img, 0, 0);
    
//         // 최대폭을 400 으로 정했다고 가정했을때
//         // 최대폭을 넘어가는 경우 canvas 크기를 변경해 줍니다.
//         var MAX_WIDTH = 400;
//         var MAX_HEIGHT = 400;
//         var width = img.width;
//         var height = img.height;
    
//         if (width > height) {
//             if (width > MAX_WIDTH) {
//                 height *= MAX_WIDTH / width;
//                 width = MAX_WIDTH;
//             }
//         } else {
//             if (height > MAX_HEIGHT) {
//                 width *= MAX_HEIGHT / height;
//                 height = MAX_HEIGHT;
//             }
//         }
//         canvas.width = width;
//         canvas.height = height;
    
//         // canvas에 변경된 크기의 이미지를 다시 그려줍니다. 
//         var ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0, width, height);
     
//         // canvas 에 있는 이미지를 img 태그로 넣어줍니다
//         var dataurl = canvas.toDataURL("image/png");
//         document.getElementById('output').src = dataurl;
//         } 
//     reader.readAsDataURL(file);
//     }

//     function getImg() {
//         var filesToUpload = document.getElementById('imgFile').files;
//         var file = filesToUpload[0];

//         // 문서내에 img 객체를 생성합니다
//         var img = document.createElement("img");
//         // 파일을 읽을 수 있는 File Reader 를 생성합니다
//         var reader = new FileReader();
        
//         // 파일이 읽혀지면 아래 함수가 실행됩니다
//         reader.onload = function(e) {

//             img.src = e.target.result;
        
//             // HTML5 canvas 객체를 생성합니다
//             var canvas = document.createElement("canvas");      
//             var ctx = canvas.getContext("2d");
        
//             // 캔버스에 업로드된 이미지를 그려줍니다
//             ctx.drawImage(img, 0, 0);

//             // canvas 에 있는 이미지를 img 태그로 넣어줍니다
//             var dataurl = canvas.toDataURL("image/png");
//             document.getElementById('imgOn').src = dataurl;

//         }
//     }

//     function resize(img) {
//         //원본 이미지 사이즈 저장
//         const width = img.width;
//         const height = img.height;

//         //가로, 세로 최대 사이즈 설정
//         const MAX_WIDTH = 350;
//         const MAX_HEIGHT = 350;

//         resizeWidth = MAX_WIDTH;
//         resizeHeight = MAX_HEIGHT;

//     }

//     function resize(img){
//         // 원본 이미지 사이즈 저장
//         var width = img.width;
//         var height = img.height;

//         // 가로, 세로 최대 사이즈 설정
//         var maxWidth = width * 0.5;   // 원하는대로 설정. 픽셀로 하려면 maxWidth = 100  이런 식으로 입력
//         var maxHeight = height * 0.5;   // 원래 사이즈 * 0.5 = 50%
     
//         // 가로나 세로의 길이가 최대 사이즈보다 크면 실행  
//          if(width > maxWidth || height > maxHeight){
     
//            // 가로가 세로보다 크면 가로는 최대사이즈로, 세로는 비율 맞춰 리사이즈
//            if(width > height){
//                resizeWidth = maxWidth;
//                resizeHeight = Math.Round((height * resizeWidth) / width);
     
//            // 세로가 가로보다 크면 세로는 최대사이즈로, 가로는 비율 맞춰 리사이즈
//            }else{
//                resizeHeight = maxHeight;
//                resizeWidth = Math.Round((width * resizeHeight) / height);
//             }
    
//         // 최대사이즈보다 작으면 원본 그대로
//         }else{
//             resizeWidth = width;
//             resizeHeight = height;
//          }
     
//         // 리사이즈한 크기로 이미지 크기 다시 지정
//         img.width = resizeWidth;
//          img.height = resizeHeight;
//       }

    //   const BASE_COLOR = "black";
    //   const OTHER_COLOR = "#7f8c8d";

    //   function handleClick() {
    //       const currentColor = title.style.color;
    //       if(currentColor === BASE_COLOR) {
    //           title.style.color = OTHER_COLOR;
    //       } else {
    //           title.style.color = BASE_COLOR;
    //       }
    //   }

    //   function init() {
    //       title.style.color = BASE_COLOR;
    //       title.addEventListener("click", handleClick);
    //   }
    //   init();

    //   function handleOffline() {
    //       console.log("offLine");
    //   }

    //   function handleOnline() {
    //       console.log("onLine");
    //   }

    //   window.addEventListener("offline", handleOffline);

    //   window.addEventListener("online", handleOnline);

    // const title = document.querySelector("#title");

    // const CLICKED_CLASS = "clicked";

    // function handleClick() {
        // const hasClass = title.classList.contains(CLICKED_CLASS);
        // if(hasClass) {
        //     title.classList.remove(CLICKED_CLASS);
        // } else {
        //     title.classList.add(CLICKED_CLASS);
        // }
    //     title.classList.toggle(CLICKED_CLASS);
    // }
    
    // function init() {
    //     title.addEventListener("click", handleClick);
    // }

    // init();

    var date = new Date();

    var getMilli = date.getMilliseconds();

    console.log(getMilli);

    // var firstMilli = getMilli.substring(0, 1);

    // function getKey(strNum) {
    //     const a = strNum.substring(0, 4);
    //     const b = strNum.substring(4, 6);
    
    //     return a + '년' + b + '월';
    // }

    //var subMilliSeconds = getFirstMilli(milliseconds);

    //console.log(subMilliSeconds);

    let thirdWord = false;

    function getMilliSeconds() {
        var date = new Date();
        var milliSeconds = date.getMilliseconds();
        var firstMilliSeconds = String(milliSeconds).substring(0, 1);
        return firstMilliSeconds;
    }

    console.log(getMilliSeconds()+1);

    function getScrollTop() {

        var scroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        
        thirdWord = (scroll > 500 ? 'Y' : 'N');

        console.log(scroll);
        console.log(thirdWord);

    }
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function getThisMonthLastDay(separator) {
        if(separator == undefined) separator = "";
        var now = new Date();
        var temp = new Date(now.getYear(), now.getMonth()+1, 0);
        var yyyy = addZero(now.getFullYear());
        var mm = addZero(now.getMonth() + 1);
        var dd = addZero(temp.getDate() < 10 ? "0" + temp.getDate() : "" + temp.getDate());
        return yyyy + separator + mm + separator + dd;
    }

    function parse(str) {
        var y = str.substr(0, 4);
        var m = str.substr(4, 2);
        var d = str.substr(6, 2);
        return new Date(y,m-1,d);
    }

    console.log(parse('20200430'));