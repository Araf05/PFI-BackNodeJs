# 🧪 TechLab – API REST de Gestión de Productos

Proyecto final desarrollado como parte de una **simulación laboral en TechLab**, cuyo objetivo es implementar una **API REST segura, escalable y lista para producción** para la administración de productos de una tienda oficial.

La aplicación permite **crear, leer y eliminar productos**, utilizando **Firebase Firestore** como base de datos en la nube y **JWT** para la autenticación de usuarios.

---

## 🚀 Deploy

La aplicación se encuentra desplegada y funcionando en producción:

🔗 **URL:** [https://pfi-back-node-js.vercel.app/](https://pfi-back-node-js.vercel.app/)

Al acceder a la ruta raíz (`/`) se muestra un mensaje de bienvenida con el estado de la API
y los endpoints disponibles.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **Firebase / Firestore**
- **JSON Web Tokens (JWT)**
- **dotenv**
- **cors**
- **Postman** (testing de endpoints)

---

## 📁 Arquitectura del proyecto

El proyecto sigue una arquitectura en capas, separando responsabilidades para facilitar la escalabilidad y el mantenimiento:
```bash
src/
├── data/
│   ├── data.js
│   └── token.js
│
├── routes/
│   ├── products.routes.js
│   └── auth.routes.js
│
├── controllers/
│   ├── products.controllers.js
│   └── auth.controllers.js
│
├── services/
│   └── products.services.js
│
├── models/
│   └── products.models.js
│
├── middlewares/
│   └── authentication.js
│
├── index.js
└── .env
```

---

## 🔐 Autenticación y Seguridad

- Autenticación basada en **JWT**
- Generación de **Bearer Token** al iniciar sesión
- Rutas protegidas mediante middleware de autenticación
- Manejo de errores de autorización:
  - `401 Unauthorized`
  - `403 Forbidden`

---

## 🧾 Endpoints disponibles

### 🔑 Autenticación

| Método | Endpoint       | Descripción |
|------|----------------|-------------|
| POST | `/api/login`  | Autentica al usuario y devuelve un Bearer Token |

**Body de ejemplo:**
```json
{
  "email": "test@gmail.com",
  "password": "123456"
```


### 📦 Productos
🔒 Requieren autenticación con Bearer Token: POST, PUT y DELETE
| Método | Endpoint       | Descripción |
|------|----------------|-------------|
| GET | `/api/products`  | Obtiene todos los productos |
| GET | `/api/products/:id`  | Obtiene un producto por ID |
| POST | `/api/products/create`  | Crea un nuevo producto |
| PUT | `/api/products/:id`  | Edita un producto |
| DELETE | `/api/products/:id`  | Elimina un producto |

**Body de ejemplo para creación:**
```json
{
  "nombre": "Producto ejemplo",
  "precio": 1200,
  "categoria": "Categoría ejemplo"
}
```

---

## ⚠️ Manejo de errores
La API contempla los siguientes códigos de estado:

- 400 – Error en los datos enviados
- 401 – No autenticado
- 403 – Acceso no autorizado
- 404 – Ruta no encontrada
- 500 – Error interno del servidor o fallo en servicios externos

---

## 🛠️ Configuración del proyecto
1️. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

2️. Instalar dependencias
```bash
npm install
```

3️. Configurar variables de entorno
> ⚠️ **Importante**  
> El archivo `.env` **no debe subirse al repositorio**.  
> Las variables que se muestran a continuación son solo ejemplos y deben ser reemplazadas por valores reales en cada entorno.

Crear un archivo .env en la raíz del proyecto:
```env
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_APP_ID=your_firebase_app_id
JWT_SECRET_KEY=your_jwt_secret_key
```

4️. Ejecutar el servidor
```bash
npm run start
```

El servidor se iniciará en:
```bash
http://localhost:3000
```
---

## 🧪 Testing
Los endpoints fueron testeados utilizando Postman, verificando:

- Funcionamiento correcto de CRUD
- Protección de rutas
- Generación y validación de tokens JWT
- Manejo de errores

---

## 📌 Estado del proyecto

 Funcional
- ✅ Autenticación implementada
- ✅ Base de datos en la nube
- ✅ Arquitectura escalable
- ✅ Lista para producción

---

## 👩‍💻 Autor

Desarrollado por Araceli Fernández
Backend Developer – Node.js
Proyecto Integrador Final de Talento Tech

--- 

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de evaluación técnica.
