
# Libélula Cinema

## 1. Propósito de la Aplicación

Libélula Cinema es una aplicación diseñada para demostrar conocimientos en Next.js, React.js y TailwindCSS, con un enfoque en diseño y experiencia de usuario (UX). Su objetivo principal es proporcionar una plataforma donde los usuarios puedan visualizar, buscar y comentar sobre películas.

## 2. Funcionalidades Principales

- **Visualización de películas:** Los usuarios pueden explorar una lista de películas con sus respectivos detalles.
- **Búsqueda de películas:** Los usuarios pueden buscar películas específicas.
- **Autenticación:** Registro e inicio de sesión de usuarios.
- **Comentarios:** Los usuarios autenticados pueden dejar comentarios en las páginas de detalle de las películas.

## 3. Tecnologías Utilizadas

- **Frameworks y Librerías:**
  - Next.js
  - React.js
  - TailwindCSS
- **Lenguajes:**
  - TypeScript
- **Servicios y APIs:**
  - Firebase (para autenticación y Firestore)
  - The Movie Database (TMDb) API (para obtener información sobre las películas)

## 4. Arquitectura General

La estructura principal de carpetas y archivos es la siguiente:
```
├── app
│   ├── auth
│   │   └── register
│   ├── components
│   │   ├── BurgerMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── LoginForm.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieDetail.tsx
│   │   ├── MovieList.tsx
│   │   ├── Navbar.tsx
│   │   └── SearchBox.tsx
│   ├── containers
│   │   └── MainContainer.tsx
│   ├── context
│   │   ├── menuContext
│   │   │   ├── MenuContext.tsx
│   │   │   └── MenuProvider.tsx
│   │   ├── movieContext
│   │   │   ├── MovieContext.tsx
│   │   │   └── MovieProvider.tsx
│   │   └── userContext
│   │       ├── UserContext.tsx
│   │       └── UserProvider.tsx
│   ├── favicon.ico
│   ├── favicon3.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── login
│   │   ├── page copy.tsx
│   │   └── page.tsx
│   ├── movie
│   │   └── [id]
│   │       └── page.tsx
│   ├── page.tsx
│   └── register
│       └── page.tsx
└── lib
    └── tmdb.ts
```

## 5. Manejo de la Autenticación de Usuarios

La autenticación de usuarios se maneja mediante Firebase Auth, utilizando correo electrónico y contraseña. Los usuarios deben iniciar sesión para dejar comentarios en las películas.

## 6. Almacenamiento de Datos

- **Películas:** Los datos de las películas se obtienen de la API de TMDb.
- **Comentarios:** Los comentarios se almacenan en Firestore, con los siguientes campos:
  - `movieId`: ID de la película.
  - `user`: Correo electrónico del usuario que realiza el comentario.
  - `message`: El comentario.
  - `date`: Fecha y hora del comentario.

## 7. Servicios Externos Utilizados

- **TMDb API:** Para obtener información sobre las películas.
- **Firebase:** Para autenticación y almacenamiento de comentarios en Firestore.

## 8. Flujo de Navegación

- **Página principal:** Listado de películas.
- **Página de detalles de película:** Muestra información detallada sobre una película específica y permite dejar comentarios.
- **Página de login:** Para que los usuarios puedan iniciar sesión.
- **Página de registro:** Para que los usuarios se registren.

## 9. Medidas de Seguridad

Para dejar comentarios, los usuarios deben iniciar sesión, asegurando que solo los usuarios autenticados puedan interactuar con esta funcionalidad. Los tokens, keys y otros datos importantes se manejan con variables de entorno para asegurar la protección de la información sensible.

## 10. Consideraciones de Rendimiento

Next.js se utiliza por su capacidad para realizar renderizado en el lado del servidor (SSR) y generación estática (SSG), lo que mejora el rendimiento y la experiencia del usuario.

## 11. Despliegue

La aplicación se desplegará en el dominio [https://libelula-cinema.vercel.app/](https://libelula-cinema.vercel.app/).

## 12. Repositorio de Código

El código fuente de la aplicación está disponible en el siguiente repositorio de GitHub: [https://github.com/gabosoam/libelula-cinema](https://github.com/gabosoam/libelula-cinema)
