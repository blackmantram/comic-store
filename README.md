# comic-store
prueba técnica para pragma desarrollada en angularjs.
## Estructura

```sh
|--app
|--test/unit
```
- app: Contiene los archivos fuente de la aplicación. La estructura tiene la organización estándar de una aplicación web htaml + css + js.  
- tests: Contiene las pruebas unitarias de la aplicación. Han sido separadas por paquetes de acuerdo al ámbito de las pruebas. Actualmente existen 4 paquetes. 
    - **auth**: pruebas del sistema de autenticación (login / logout) 
    - **comics**: pruebas del sistema que administra las operaciones crud de los comics  
    - **model**: pruebas sobre los modelos de datos usados para las operaciones backend-less
	- **registry**: pruebas del sistema de registro de nuevos usuarios.
## Ejecución de la aplicación y pruebas unitarias 
La aplicación está estructurada para ser ejecutada y publicada con Gulp.
Los archivos ``` package.json ``` y ``` bower.json ``` contienen todas las dependencias necesarias para realizar las tareas de ejecución. Las dependencias se instalan ejecutando en la carpeta raiz del proyecto los comandos: 

``` npm install ```

y posteriormente 

``` bower install ```

Para ejecutar la aplicación se debe usar el comando ``` gulp ```. El servidor incia la aplicación en la dirección ```http://localhost:8888 ```.

La ejecución de las pruebas unitarias se realiza a través del comando ```gulp unit ```

para publicar la aplicacion se pudede ejecutar el comando ``` gulp build ``` el cual genera una carpeta ```dist``` que contiene los archivos listos para ser subidos a un servidor de producción.