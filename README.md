# Kaede WaBot - WhatsApp Bot en JavaScript

**Kaede WaBot** es un bot de WhatsApp desarrollado en **JavaScript con Node.js**, que utiliza la biblioteca [`@whiskeysockets/baileys`](https://github.com/WhiskeySockets/Baileys) para establecer conexiones con WhatsApp Web.

Este proyecto independiente ofrece una variedad de comandos y herramientas diseñadas para mejorar la experiencia de los usuarios, automatizar tareas y facilitar la administración de grupos de WhatsApp.

Es un proyecto en constante desarrollo, con nuevas funcionalidades, actualizaciones y correcciones.

> [!NOTE]
> Kaede WaBot continúa en desarrollo. Algunas funciones, especialmente las herramientas de soporte para administradores de grupos mediante LIDs, todavía pueden presentar errores.
>
> Te invitamos a unirte a nuestro [Canal oficial de WhatsApp](https://whatsapp.com/channel/0029VbB1ujH8qIzjgU3Vul1l) para conocer novedades y actualizaciones.

<p align="center">
  <strong>Gratuito, independiente y de código abierto.</strong>
</p>

## Características

Kaede WaBot incluye diferentes sistemas y herramientas para WhatsApp:

- **Sistema Gacha:** comandos de colección y obtención de personajes.
- **Sistema de economía:** funcionalidades relacionadas con monedas y economía virtual.
- **Administración de grupos:** herramientas de gestión para administradores.
- **Soporte para LIDs:** funcionalidades de soporte para administradores de grupos.
- **Comandos variados:** herramientas de entretenimiento y automatización.

## Tecnologías utilizadas

- **JavaScript:** lenguaje principal de desarrollo.
- **Node.js:** entorno de ejecución.
- **Baileys:** biblioteca para la conexión con WhatsApp Web.
- **Termux:** entorno compatible para ejecutar el proyecto en Android.

## Instalación en Termux

### 1. Configurar el almacenamiento

```bash
termux-setup-storage
```

### 2. Actualizar los paquetes e instalar dependencias

```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```

### 3. Clonar el repositorio

```bash
git clone https://github.com/ulises12354/Kaede-WaBot
```

### 4. Entrar al directorio del proyecto

```bash
cd Kaede-WaBot
```

### 5. Instalar las dependencias de Node.js

```bash
yarn install
```

### 6. Iniciar Kaede WaBot

```bash
npm start
```

> [!TIP]
> Si durante la instalación aparece el mensaje `(Y/I/N/O/D/Z) [default=N] ?`, revisa qué operación solicita el instalador. Si corresponde continuar, escribe `y` y presiona `Enter`.

## Mantener el proceso activo con PM2

Si deseas administrar el proceso mediante PM2, puedes instalarlo y ejecutar:

```bash
termux-wake-lock && npm install -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```

Para iniciar nuevamente el proceso:

```bash
pm2 start index
```

## Comunidad y actualizaciones

Puedes seguir las novedades, actualizaciones y anuncios de Kaede WaBot mediante nuestro canal:

**[Unirse al Canal de WhatsApp](https://whatsapp.com/channel/0029VbB1ujH8qIzjgU3Vul1l)**

## Repositorio oficial

El código fuente de Kaede WaBot se encuentra disponible públicamente en GitHub.

**[https://github.com/ulises12354/Kaede-WaBot](https://github.com/ulises12354/Kaede-WaBot)**

## Aviso legal

Kaede WaBot es un proyecto independiente y no está afiliado, patrocinado ni respaldado por WhatsApp, Inc. o WhatsApp LLC.

WhatsApp es una marca registrada de sus respectivos titulares. Este proyecto no mantiene ninguna relación oficial con dicha compañía.

---

<p align="center">
  <strong>Kaede WaBot</strong>
  <br>
  Proyecto independiente desarrollado por Santi.
</p>
