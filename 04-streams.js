'use strict'

var fs = require('fs'),
	readStream = fs.createReadStream('assets/nombres.txt'),
	writeStream =fs.createWriteStream('assets/nombres_copy.txt')

readStream.pipe(writeStream)

readStream
	.on('data',function (chunk){
		console.log(
			'He leído:',
			chunk.length,
			'caracteres'
		)
	})
	.on('end',function(){
		console.log('Terminé de leer el archivo')
	})