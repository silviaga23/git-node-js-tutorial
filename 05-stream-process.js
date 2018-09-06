'use strict'

var stdin = process.stdin,
	stdout = process.stdout,
	person = {
		name : null,
		age : 0,
		estado: null
	}

function estadoCivil(estado){
	person.estado = estado 
	stdout.write ('Vaya ' + person.name + '! debes estar muy feliz')

	process.exit()

}	

function saveAge(age){
	person.age = age

	if ( person.age >= 18 ){
		stdout.write( person.name + ' es mayor de edad' + '\n')
	}else{
		stdout.write( person.name + ' es menor de edad' + '\n')
	}
	var question = 'ahora dime ' + person.name + ', eres soltero o casado?'
	quiz(question,estadoCivil)
}

function saveName(name){
	person.name = name

	// vuelvo a preguntar 

	var question = 'Hola ' + person.name + ' cuantos años tienes?'
	quiz(question,saveAge)
}

function quiz(question,callback){
	stdin.resume()
	stdout.write(question + ': ' )

	stdin.once('data',function(res){
		callback(res.toString().trim() )
	})
}

stdin.setEncoding('utf8')
quiz('¿Cómo te llamas?',saveName)