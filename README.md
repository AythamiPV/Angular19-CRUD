# Angular 19 CRUD con Firebase

[![Angular v19](https://img.shields.io/badge/Angular-19.x-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)
[![Firebase](https://img.shields.io/badge/Firebase-Google_Cloud-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/AythamiPV/Angular19-CRUD?style=social)](https://github.com/AythamiPV/Angular19-CRUD/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/AythamiPV/Angular19-CRUD?style=social)](https://github.com/AythamiPV/Angular19-CRUD/network/members)

## 🚀 Descripción del Proyecto

Este proyecto es una aplicación web sencilla desarrollada con **Angular 19** que implementa las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) básicas. Utiliza **Firebase** como su base de datos en la nube para persistir la información de forma eficiente y en tiempo real.

El ejemplo concreto implementado en esta aplicación es la gestión de una lista de **frutas**. Los usuarios pueden:

* **Visualizar** una lista de todas las frutas almacenadas en la base de datos de Firebase.
* **Añadir** nuevas frutas a la lista.
* **Editar** el nombre de una fruta existente.
* **Eliminar** frutas de la lista.

Este proyecto sirve como un punto de partida práctico para entender cómo integrar Angular con Firebase para realizar operaciones CRUD, una habilidad fundamental en el desarrollo de aplicaciones web dinámicas.

## ✨ Características Principales

* **Desarrollado con Angular 19:** Utiliza las últimas características y mejoras del framework Angular.
* **Integración con Firebase:** Aprovecha la escalabilidad y la naturaleza en tiempo real de la base de datos Firestore de Firebase.
* **Implementación completa de CRUD:** Permite la creación, lectura, actualización y eliminación de datos.
* **Ejemplo práctico:** Gestión de una lista de frutas, fácil de entender y adaptar.
* **Componentes Standalone:** Estructura moderna del proyecto utilizando componentes, directivas y pipes standalone de Angular 19.
* **Interfaz de usuario sencilla:** Una interfaz intuitiva para interactuar con la lista de frutas.
* **Estilos básicos:** Incorpora estilos CSS sencillos para una presentación clara.

## 🛠️ Tecnologías Utilizadas

* **[Angular](https://angular.io/)**: Framework de desarrollo web en TypeScript.
* **[Firebase](https://firebase.google.com/)**: Plataforma de desarrollo de Google para la creación de aplicaciones web y móviles.
    * **[Firestore](https://firebase.google.com/docs/firestore)**: Base de datos NoSQL en la nube.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático.
* **[Angular CLI](https://angular.io/cli)**: Herramienta de línea de comandos para Angular.
* **[npm](https://www.npmjs.com/)** o **[yarn](https://yarnpkg.com/)**: Gestor de paquetes de JavaScript.

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio de GitHub:**

    ```bash
    git clone [https://github.com/AythamiPV/Angular19-CRUD.git](https://github.com/AythamiPV/Angular19-CRUD.git)
    cd Angular19-CRUD
    ```

2.  **Instala las dependencias:**

    Si utilizas npm:

    ```bash
    npm install
    ```

    Si utilizas yarn:

    ```bash
    yarn install
    ```

3.  **Configura Firebase:**
    * Crea un proyecto en la [consola de Firebase](https://console.firebase.google.com/).
    * Crea una base de datos Firestore.
    * Obtén la configuración de tu proyecto Firebase (apiKey, authDomain, projectId, etc.) desde la consola de Firebase (Configuración del proyecto).
    * Reemplaza los valores en el archivo `src/environments/environment.ts` con tu configuración de Firebase:

        ```typescript
        export const environment = {
          production: false,
          firebaseConfig: {
            apiKey: "TU_API_KEY",
            authDomain: "TU_AUTH_DOMAIN",
            projectId: "TU_PROJECT_ID",
            storageBucket: "TU_STORAGE_BUCKET",
            messagingSenderId: "TU_MESSAGING_SENDER_ID",
            appId: "TU_APP_ID",
            measurementId: "TU_MEASUREMENT_ID"
          }
        };
        ```

4.  **Ejecuta la aplicación:**

    Si utilizas npm:

    ```bash
    ng serve -o
    ```

    Si utilizas yarn:

    ```bash
    ng serve --open
    ```

    Esto construirá la aplicación y la abrirá automáticamente en tu navegador (normalmente en `http://localhost:4200/`).

## 📝 Próximas Mejoras (¡Contribuciones Bienvenidas!)

Este proyecto es una base y se puede seguir mejorando. Algunas ideas para futuras implementaciones podrían ser:

* Validación de formularios al añadir y editar frutas.
* Implementación de una funcionalidad de búsqueda o filtrado.
* Mejoras en la interfaz de usuario y la experiencia del usuario.
* Adición de pruebas unitarias y de integración.
* Implementación de autenticación de usuarios.
* Gestión de errores más robusta.

¡Siéntete libre de contribuir con tus ideas y pull requests!

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Consulta el archivo `LICENSE` para obtener más detalles.

## 🧑‍💻 Autor

[AythamiPV](https://github.com/AythamiPV)

---

¡Espero que este README sea atractivo y explique bien tu proyecto! Puedes personalizarlo aún más añadiendo capturas de pantalla, diagramas o cualquier otra información que consideres relevante. ¡Mucha suerte con tu proyecto!
