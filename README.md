# 🌟 QuioscoNext - Sistema de Pedidos para Restaurante

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-000000?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.12.0-2D3748?logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwind-css)

Sistema moderno de gestión de pedidos para restaurantes desarrollado con Next.js, React y TypeScript. Incluye panel administrativo y vista para clientes con funcionalidades completas de pedidos en tiempo real.

## 🚀 Características Principales

- **Interfaz intuitiva** para clientes y administradores
- **Gestión de productos** con categorías y precios
- **Carrito de compras** persistente
- **Autenticación segura** para administradores
- **Dashboard analítico** con ventas y estadísticas
- **Responsive design** para móviles y tablets
- **Notificaciones en tiempo real** con react-toastify

## 🛠 Tecnologías Utilizadas

| Tecnología       | Versión   | Uso                          |
|------------------|-----------|------------------------------|
| Next.js          | 15.4.4    | Framework principal          |
| React            | 19.0.0    | Librería UI                  |
| TypeScript       | 5.8.3     | Tipado estático              |
| Prisma          | 6.12.0    | ORM para PostgreSQL          |
| Tailwind CSS    | 3.4.1     | Estilización                 |
| Zustand        | 5.0.3     | Gestión de estado            |
| Zod            | 3.24.1    | Validación de formularios    |

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tuusuario/quiosco-next.git
   cd quiosco-next
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   Editar el archivo `.env` con tus credenciales

4. **Inicializar la base de datos**
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

5. **Iniciar la aplicación**
   ```bash
   npm run dev
   ```

## 🖥️ Estructura del Proyecto

```
quiosco-next/
├── prisma/
│   ├── schema.prisma       # Modelos de base de datos
│   └── seed.ts             # Datos iniciales
├── src/
│   ├── app/                # Rutas de la aplicación
│   ├── components/         # Componentes reutilizables
│   ├── lib/                # Funciones utilitarias
│   ├── styles/             # Estilos globales
│   └── types/              # Tipos TypeScript
├── public/                 # Assets estáticos
└── .env.example            # Plantilla de variables de entorno
```


Las contribuciones son bienvenidas. Sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama con tu feature (`git checkout -b feature/awesome-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add awesome feature'`)
4. Haz push a la rama (`git push origin feature/awesome-feature`)
5. Abre un Pull Request




---


## 🖼️ Capturas de Pantalla

### Vista Cliente
![Interfaz de Cliente](https://github.com/user-attachments/assets/fd683ea1-ca2f-4e3f-81d5-879019acbcbb)  
*Interfaz intuitiva para realizar pedidos con categorías de productos y carrito de compras*

### Panel de Administración
![Panel de Administración](https://github.com/user-attachments/assets/77b848d6-7a28-463a-a39c-5a773fbf7050)  
*Dashboard completo con gestión de productos y pedidos*




## 🏆 Reconocimientos

- Iconos por [Heroicons](https://heroicons.com/)
- Diseño inspirado en [Tailwind UI](https://tailwindui.com/)
- Plantilla README basada en [Awesome README](https://github.com/matiassingers/awesome-readme)
