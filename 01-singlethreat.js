'use strict'

function singleThread()
{
	console.log('----------------------------')
	console.log(' Proceso de node.js         ')
	console.log('Id del proceso........' + process.pid)
	
	console.log('titulo........' + process.title)
	console.log('Direccion de node.......' + process.execPath)
	console.log('Directorio actual........' + process.cwd())
	console.log('version de node.......' + process.version)
	console.log('versiones de dependencias........' + process.versions)
	console.log('plataforma sistema operativo.......' + process.platform)
	console.log('architecture sp........' + process.arch)
	console.log('tiempo activo de node........' + process.uptime())
	console.log('argumentos del proceso........' + process.argv)
	

}
singleThread()