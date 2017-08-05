  var toneMap = {
    a: ['ā', 'á', 'ǎ', 'à'],
    e: ['ē', 'é', 'ě', 'è'],
    i: ['ī', 'í', 'ǐ', 'ì'],
    o: ['ō', 'ó', 'ǒ', 'ò'],
    u: ['ū', 'ú', 'ǔ', 'ù'],
    v: ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
  };

toNumber = {};
removeDiacritic = {};

for(x in toneMap) {
    for(y in toneMap[x]) {
        toNumber[toneMap[x][y]] = parseInt(y)+1;
        removeDiacritic[toneMap[x][y]] = x;
    }
}
punctuation = ",";

function toRaw(s) {
    s = s.toLowerCase();
    if(!(s[0].match(/[a-zA-Z]/i)))
        return {
            isPunctuation: true,
            original: s
        };
    var sprime = "";
    var num = "";
    for(x in s) {
        var a = s[x];
        if(a in toNumber) {
            
        num = toNumber[a];
        sprime = sprime + removeDiacritic[s[x]];
        } else {
        sprime = sprime + s[x];
        }
    }
    sprime = sprime + num;
    return {
        isPunctuation: false,
        original:s,
        raw: sprime,
        remaining: sprime
    };
}

//var s = "Zǒng shì yǒu rén , wèn wǒ rèn bù rèn shí tài lēi dé dùn gah ?";

function allToRaw(s) {
  return s.split(" ").map(function(k) {return toRaw(k);})    
}

function process(lst, char) {
    if(lst[0].remaining[0] == char) {
        lst[0].remaining = lst[0].remaining.substring(1);
        if(lst[0].remaining.length == 0) {
            var eatenElement = lst[0];
            lst.shift();
            console.log(lst);
            while(lst.length > 0 && lst[0].isPunctuation) lst.shift();
            return {success: true, eaten: true, eatenElement: eatenElement.original, finished: lst.length == 0};
        }
        else
            return {success:true, eaten: false}
    }
    return {success:false, expected: lst[0].remaining[0], received: char, full: lst[0]}
}


//var s = "Yī qiè chóng xīn huí dào yuán lái de qǐ diǎn"

var slst = [
//    {c:"Wǒ", e:"I"},
//    {c:"chà diǎn", e:"almost"},
//    {c:"wàng le", e:"forgot"},
//    {c:"tài lēi",e: "Tylor"},
//    {c:"kòng zhì zhe", e:"controlled"},
//    {c:"pò huài xíng dòng", e:"demolition thing"},
//    {c:"Wǒ chà diǎn wàng le tài lēi kòng zhì zhe pò huài xíng dòng", e:"I almost forgot about Tylor's controlled demolition"}
     // {c:"Hái yǒu sān fēn zhōng , jīng cǎi shí kè jiù yào dào le", e:"3 more minutes and the wondeful moment will come", t:10}

/*    {c:"Wo de shijie bian de qimiao geng nanyi yanyu", 
      e:"My world has become wonderful, it's hard to put into words",
      m:"jolintsai-1.mp3",
      t:6}, // 6 is the smallest possible number
  */  
    
    /*{c:"Hai yiwei shi congtian erjiang de mengjing",
     e:"I still feel like it’s a dream from heaven",
      m:"jolintsai-2.mp3",
     t:5},*/
    
    /*{c:"Zhidao queting shou de wendu laizhi ni xinli",
     e:"Until I could confirm that the warmth of your hand came from your heart",
     m:"jolintsai-3.mp3",
     t:5},*/
    
    /*{c:"Zhe yike wo zhongyu yonggan shuo ai ni",
     e:'At this moment, I’ve finally gathered the courage to say "I love you"',
     t:5,
     m:"jolintsai-4.mp3"
    },*/
    
    /*
    {c:"Yi kai shi wo zhikuzhe kan ni",
     e:"At the beginning, I only stared at you",
     t:3.5,
     m:"jolintsai-5.mp3"
    },
    */
    
//    {
//        
//        e:"A peaceful summer<br>Millions of twinkling stars",
//        c:"ningjing de xiatian tiankong zhong fan xing diandian",
//        t:6,
//        m:"chopxia/verse1.mp3"
//    },

//    {
//        
//        e:"Millions of twinkling stars<br>In my heart I’m missing",
//        c:"tiankong zhong fan xing diandian xinli tou youxie sinian",
//        t:6,
//        m:"chopxia/verse2.mp3"
//    },

//    {
//        
//        e:"In my heart I’m missing <br>missing the face of yours",
//        c:"xinli tou youxie sinian sinian zhe ni de lian",
//        t:5.5,
//        m:"chopxia/verse3.mp3"
//    },
    
   
    
    
//    {
//        
//        e:"missing the face of yours<br>I can pretend to not have seen it",
//        c:"sinianzhe ni de lian wo keyi jiazhuang kanbujian",
//        t:5.5,
//        m:"chopxia/verse4.mp3"
//    },
    
//      {
//        
//        e:"I can pretend to not have seen you<br> or miss you secretly",
//        c:"wo keyi jiazhuang kanbujian ye keyi toutou de xiangnian",
//        t:5.5,
//        m:"chopxia/verse5.mp3"
//    },
    
    
    {
        c:"ye keyi toutou de xiangnian zhidao rang wo modao ni na wennuan de lian",
        e:"or miss you secretly<br>until I can touch your warm face",
        t:7,
        m:"chopxia/verse6.mp3"
    }
    
    
//    {
//        e:"Millions of twinkling stars",
//        c:"Tiankong zhong fanxing diandian",
//        t:3,
//        m:"ninxia-2.mp3"
//    }
//   
    
  /*  {
        
        e:"A peaceful summer<br>Millions of twinkling stars",
        c:"ningjing de xiatian tiankong zhong fanxing diandian",
        t:6,
        m:"ninxia-1-2.mp3"
    },*/
    
    
    
   
    
//    {
//        e:"In my heart I’m missing",
//        c:"xinli tou youxie sinian",
//        t:3,
//        m:"ninxia-3.mp3"    
//    } 
    

];
var ci = 0;
//"Zǒng shì yǒu rén wèn wǒ rèn bù rèn shí tài lēi dé dùn";

/*
console.log(atr);
console.log(process(atr, "z"));
console.log(process(atr, "o"));
console.log(process(atr, "n"));
console.log(process(atr, "g"));
console.log(process(atr, "3"));
console.log(process(atr, "m"));
console.log(process(atr, "a"));


console.log(atr);
*/
 var started = false;
 var dead = false;
var atr;
    var elements = [];
var timeLeft = 1000;
var startTime = new Date().getTime();
var totalTime = 0;
function init(index) {
    atr = allToRaw(slst[index].c);
    totalTime = slst[index].t * 1000;
    elements = [];
    function createBox() {
        var b = $('<input spellcheck="false" class="wstyle" type="text" autocapitalize="none"/>'  );
        var ind = elements.length;
        b.keypress(function (e) {
           myFunction(e, ind);
           e.preventDefault();
        });
        $('#gameplay').append(b);
        elements.push(b);
    }
    
    $('#gameplay').empty();
    for(var i = 0; i < atr.length; i++){
        if(atr[i].isPunctuation) {
            $('#gameplay').append($('<span class="punc">&nbsp' + atr[i].original +'&nbsp</span>'))
        } else {
            createBox();
        }
    }
    $('#question').html(slst[index].e);
    elements[0].focus();
    atr = atr.filter(function(x) {return !(x.isPunctuation);});
}

init(ci);



function updateTimer() {
   // $('#timer').text(timeLeft);
    if(dead) return;
    timeLeft = startTime - new Date().getTime() + totalTime;
    var width = '' + ((timeLeft / totalTime) * 100) + 'px';
    $('#timerBar').css({"width":width});
    if(timeLeft <= 0) {
           $('#failmessage').html("<div id='fail'><br>Too slow! <br><br> " + slst[ci].c + "<br><br> giddy up <br><br><img src='slow.jpg' height=200px/>" );
            dead = true;
        timeLeft = 0;
        var audio = new Audio(slst[ci].m);
        audio.play();
        
    }
}

setInterval(updateTimer, 100);

    function myFunction(evt, i) {
        evt = evt || window.event;
        var charCode = evt.keyCode || evt.which;
        var charStr = String.fromCharCode(charCode).toLowerCase();
        
       if(charStr == ' ') {
                if(!dead) {
                    dead = true;
                    var audio = new Audio(slst[ci].m);
                    audio.play();
                     $('#failmessage').html("<div id='fail'><br>" +  slst[ci].c + "</div>" );
                }
                 else {
                     location.reload();
                 }
            return;
                               
       }
        if(dead) return;
        if(!(charStr.match(/[a-zA-Z0-9]/i))) return;
        var n = process(atr, charStr);
        console.log(n);
        if(n.success && !n.eaten) {
            elements[i].val(elements[i].val() + charStr);
        }
        if(n.success && n.eaten) {
            elements[i].val(n.eatenElement);
      //      elements[i].css("font-size","0.5em");
            if(!(n.finished)) {
               elements[i+1].focus();
            } else {
                ci++;
                if(ci < slst.length) {
                    init(ci);
                } else {
                    $('#failmessage').html("<br>Great!");
                }
            }
        }
        if(!(n.success)) {
            var audio = new Audio(slst[ci].m);
audio.play();
                $('#failmessage').html("<div id='fail'><br><br><br>Expected " + n.full.raw + "<br><br>" + slst[ci].c + "<br><br>" + "You pressed " + n.received + "</div><br><br> woops <br><br><img src='fail.jpg' height=200px/>" );
            dead = true;
        }
        
    }