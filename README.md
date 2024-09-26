# GoodTime

Proyecto de alarmas. 
Este proyecto fue generado con Angular CLI versión 18.0.0-next.4.

## Authors
* Robert Castro
* Jhon Puentes

## Pre-requisitos para ejecutar esta web app
### Paso 1: Instalar Node.js y npm
Angular requiere Node.js y npm para funcionar. npm (Node Package Manager) se instala automáticamente con Node.js.

* Descargar Node.js:
    Vaya a la página oficial de Node.js.
    Descargue la versión LTS (Long Term Support) recomendada.
    Siga las instrucciones para instalarlo en su sistema operativo.

* Verificar la instalación:
    Abra una terminal (CMD, PowerShell, Terminal en Mac/Linux).
    Ejecute los siguientes comandos para asegurarse de que Node.js y npm están instalados correctamente:

    ```bash
    node -v
    npm -v
    ```
    Debería ver las versiones instaladas de ambos programas. Aplicacion probada en la versión v20.12.2 de node

### Paso 2: Instalar Angular CLI
La CLI (Command Line Interface) de Angular le ayuda a crear proyectos, generar código y ejecutar aplicaciones Angular.
* Instalar Angular CLI:
    En la terminal, ejecute el siguiente comando para instalar Angular CLI globalmente:

    ```bash
    npm install -g @angular/cli
    ```
* Verificar la instalación:
    Una vez instalada, verifique la versión de Angular CLI con este comando:
    ```bash
    ng version
    ```

### Paso 3: Instalar Git
Git es necesario para gestionar el control de versiones de tu proyecto.

* Descargar Git:
    Vaya a la página oficial de Git.
    Descargue e instala la versión más reciente.
* Verificar la instalación:
    En la terminal, ejecute el siguiente comando para verificar que Git se instaló correctamente:
    ```bash
    git --version
    ```

Debería ver la versión de Git instalada.

## Ejecutar esta web app

### Paso 1: Abrir su IDE favorito
Recomendado: Visual Studio Code o WebStorm

### Paso 2: Ejecutar
Para iniciar el servidor de desarrollo y ver tu aplicación Angular en el navegador, ejecute:


```bash
npm install
```

luego:
```bash
ng build
```

luego:
```bash
ng serve
```
o
```bash
sudo ng serve
```

luego de esto, abra su navegador y acceda a: `http://localhost:4200/`
