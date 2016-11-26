console.log("90'smart server!");

var express = require("express");
var app = express();
var path = require("path");
var scanf = require("scanf");
var mongojs = require("mongojs");
var myParser = require ("body-parser");
var answer;



app.use(myParser.urlencoded({extended : false}));
app.use(myParser.json());
app.use(express.static(__dirname + ''));


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+ "/index.html"));
});

app.get("/game", function(req, res){
    res.sendFile(path.join(__dirname+ "/game.html"));
});

app.get('/jsons/Last-Characters.json',function(req,res){
   res.sendFile(path.join(__dirname + '/json/last-characters.json')) 
});

app.get("/get-characters", (req, res) => {
   var db = mongojs("localhost:27017/akinator", ["human_real"]);
    db.collection("human_real").find((err, docs) => {
       res.send(docs); 
    });
    
});

 app.post("/ans", function(req, res) {
      answer = req.body.answer;
      console.log(answer); 
     res.send({});
    
 //sendQuestion(questions_Human_real[randNumber()].question);
});


app.listen(1337);
console.log(answer);
console.log("1337 is the port!");

// Questions
var questions_human_real = [
	{"question":"Is your character a ", "atribute":"age" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Does your character have a missing family member?" ,"atribute":"missing_family_member","value":"yes","efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character in love?" , "atribute":"in_love" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character knows how to" , "atribute":"talent" , "value":"tba" , "efective":0,"isBool":false,"percentage":0},
	{"question":"Does your character knows how to" , "atribute":"talent" , "value":"tba" , "efective":0,"isBool":false,"percentage":0},
	{"question":"Is your character a " , "atribute":"occupation" , "value":"tba" , "efective":0,"isBool":false,"percentage":0},
	{"question":"Does your character a villain?" , "atribute":"villain" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character dumb?" , "atribute":"dumb" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character mean?" , "atribute":"mean" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character funny?" , "atribute":"funny" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character have hair color " , "atribute":"hair_color" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Is your character a " , "atribute":"gender" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Does your character have skin color " , "atribute":"skin_color" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Is your character " , "atribute":"weight" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Does your character have a catch frase?" , "atribute":"catch_phrase" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character have his/her name in the show title?" , "atribute":"name_in_show_title" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character from an educational show?" , "atribute":"educational" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character wears glasses?" , "atribute":"glasses" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character from " , "atribute":"channel" , "value":"tba" , "efective":0, "isBool":false,"percentage":0} ];

var questions_human_animated = [
    {"question":"Is your character a ", "atribute":"age" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Does your character have a missing family member?" ,"atribute":"missing_family_member","value":"yes","efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character in love?" , "atribute":"in_love" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character knows how to" , "atribute":"talent" , "value":"tba" , "efective":0,"isBool":false,"percentage":0},
	{"question":"Does your character knows how to" , "atribute":"talent" , "value":"tba" , "efective":0,"isBool":false,"percentage":0},
	{"question":"Is your character a " , "atribute":"occupation" , "value":"tba" , "efective":0,"isBool":false,"percentage":0},
	{"question":"Does your character a villain?" , "atribute":"villain" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character dumb?" , "atribute":"dumb" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character mean?" , "atribute":"mean" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character funny?" , "atribute":"funny" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character have hair color " , "atribute":"hair_color" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Is your character a " , "atribute":"gender" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Does your character have skin color " , "atribute":"skin_color" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Is your character " , "atribute":"weight" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
	{"question":"Does your character have a catch frase?" , "atribute":"catch_phrase" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character have his/her name in the show title?" , "atribute":"name_in_show_title" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character from an educational show?" , "atribute":"educational" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Does your character wears glasses?" , "atribute":"glasses" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
	{"question":"Is your character from " , "atribute":"channel" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
    {"question":"Does your character have superpower?" , "atribute":"superpower" , "value":"yes" , "efective":0, "isBool":true,"percentage":0},
    {"question":"Does your character have one set of clothes? " , "atribute":"one_set_clothes" , "value":"yes" , "efective":0, "isBool":true,"percentage":0}];

var question_animal_real = [
    {"question":"Is your character a " , "atribute":"gender" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
    {"question":"Does your character have hair color " , "atribute":"hair_color" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
    {"question":"Is your character " , "atribute":"type" , "value":"tba" , "efective":0, "isBool":false, "percentage":0},
    {"question":"Does your character talks?" , "atribute":"talks" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character " , "atribute":"personality" , "value":"tba" , "efective":0, "isBool":false, "percentage":0},
    {"question":"Does your character have a catch phrase?" , "atribute":"catch_phrase" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Does your character have his/her name in the show title?" , "atribute":"name_in_show_title" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character from an educational show?" , "atribute":"educational" , "value":"yes" , "efective":0,"isBool":true,"percentage":0}
]

var question_animal_animated = [
    {"question":"Is your character a " , "atribute":"gender" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
    {"question":"Does your character have hair color " , "atribute":"hair_color" , "value":"tba" , "efective":0, "isBool":false,"percentage":0},
    {"question":"Is your character " , "atribute":"type" , "value":"tba" , "efective":0, "isBool":false, "percentage":0},
    {"question":"Does your character talks?" , "atribute":"talks" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character " , "atribute":"personality" , "value":"tba" , "efective":0, "isBool":false, "percentage":0},
    {"question":"Does your character have a catch phrase?" , "atribute":"catch_phrase" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Does your character have his/her name in the show title?" , "atribute":"name_in_show_title" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character from an educational show?" , "atribute":"educational" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character the primary character?" , "atribute":"primary_character" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Does your character wears clothes?" , "atribute":"clothes" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character a sidekick?" , "atribute":"sidekick" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
]

var question_other_animated = [
    {"question":"Is your character " , "atribute":"personality" , "value":"tba" , "efective":0, "isBool":false, "percentage":0},
    {"question":"Is your character human like?" , "atribute":"human_like" , "value":"yes" , "efective":0,"isBool":true,"percentage":0},
    {"question":"Is your character shaped like a " , "atribute":"shape" , "value":"tba" , "efective":0, "isBool":false, "percentage":0},
]

var stadistics = {"played":0, "human_real":0, "human_animated":0, "animal_real":0, "animal_animated":0, "other_animated":0,"guessed":0};


// Question method
// 1: Sorts in order of efectiveness.
questions_Human_real.sort(function(a,b){
	if(a.efective == b.efective)
		return 0;
	if(a.efective > b.efective)
		return 1;
	if(a.efective < b.efective)
		return -1;
});

//Rand Number

function randNumber(){
      return Math.floor((Math.random() * questions_Human_real.length))
}

//Send Question
function sendQuestion(questionToSend){
    console.log(questionToSend);
    app.get('/Question',function(req,res){
   res.send(questionToSend);
    });
}



//Counter method
function counter(array) {
    array.sort();
    var temp_array = [];
    array.forEach(function(value, index) {
        var counted = false;
        if(index === 0){
            temp_array.push([value, 1]);
        }else{
            var i = 0;
            while (i < temp_array.length && !counted) {
                if(temp_array[i][0] == value){
                    temp_array[i][1] += 1;
                    counted = true;
                }else{
                    i += 1;
                }
            }
            if(!counted){
                temp_array.push([value, 1]);
            }
        }
    } );
    temp_array.forEach(function(value){
        console.log(value);
    });
    var k = 0;
    for(i = 0; i < temp_array.length; i++){
        if(temp_array[k][1] < temp_array[i][1])
            k = i;
    }
    console.log(temp_array[k][1]);
    return temp_array[k][0];
}



//Answer controller
function answer_controller(answer, atribute, answValue, isBool){
	if(answer){
		db.copy.deleteMany({ atribute :{ $ne: answValue}});
	}else{
		db.copy.deleteMany({ atribute :{ $eq: answValue}});
	}
	if(isBool){
		if(answer)
			return "yes";
		else
			return "no";
	}else{
		if(answer)
			return answValue;
		else
			return "";
	}
}
//getAnswer
function getAnswer(){

}

// Question maker
function question_maker(questions, copyCollection){
	var possibleCharacter = { }; //initialize the posible new character.
	questions.some(function(question){
		if(!question.isBool){
			var properties = copyCollection.map(function(person){
  				return person[copyCollection.atribute];
			});
			question.value = counter(properties);		
			console.log(question.question + question.value + "?");
		}else
			console.log(question.question);
		var answer = scanf("%d");
		possibleCharacter.atribute = answer_controller(answer, question.atribute, question.value, question.isBool);
		return copyCollection.length > 2;
	});
	return possibleCharacter;
}

console.log("Welcome");
//question_maker(questions_Human_real, copyCollection);

  function gameOn(){
    var posiblecharacter;
    sendQuestion("Is your character real?");
    if(answer === "yes"){
        //codigo que lo hacer esperar otra respuesta
        sendQuestion("Is your character a human?");
        if(answer === "yes"){
            //codigo que crea la copia de humano real
            //posiblecharacter = question_maker(question_human_real, dbcopy)
            console.log("Your group is human real");
        }else{
            //codigo que crea la copia de animal real
            //posiblecharacter = question_maker(question_animal_real, dbcopy)
            console.log("Your group is animal real");
        }
    }else{
        //codigo que lo hacer esperar otra respuesta
        sendQuestion("Is your character a human?");
        if(answer === "yes"){
            //codigo que crea copia de humano animado

            //posiblecharacter = question_maker(question_human_animated, dbcopy)
            console.log("Your group is human animated");
        }else{
            //codigo que lo hacer esperar otra respuesta
            sendQuestion("Is your character an Animal?");
            if(answer === "yes"){
                //codigo que crea la copia aniaml animado

                //posiblecharacter = question_maker(question_animal_animated, dbcopy)
                console.log("Your group is Animal animated");
            }else{
                //codigo que crea la copia otros

                //posiblecharacter = question_maker(question_other_animated, dbcopy)
                console.log("Your group is other animated");
            }
        }
    }

}


    