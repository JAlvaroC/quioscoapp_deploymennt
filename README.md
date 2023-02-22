This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Crear Proyecto en next js
npx create-next-app@latest
Escribiras ombre ,tipo (js o ts) ,(con o sin eslint)
## Instalar dependecias

    npn i  - D tailwindcss postcss autoprefixer
    Esto funciono =>    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

## Crea el archivo porcss.cofig.js
    npx tailwindcss init -p

## Prisma
Es una ORM (existe dif ORM para diferenctes lenguaje de progrmacion)
Tiene metodos para:
+ seleccionar datos
+ crear datos
+ actualizarlos datos
+ eliminarlos datos

Este soporta PostgreSQL,MySQL,SQL server,SQLite
and MongoDB

Benneficios :Prisma permtie crear aplicaciones fullstack sin necesidad de una api
I nteractuando directamete con una base de datos
## Abrir shel de mysql yb ejecutar esto funcionara cuanto activamos el puerto

mysql -u root
## Instalar Prisma
 npm i -D prisma
npm i @prisma/client
## creara .env y conexion
npx prisma init


+npx prisma migrate dev(actualizar la tabla o crear)
NOTE:connfigurar env y el schema.prisma  con mysql
+name for migration:categorias y productos
Acciones
+ Eliminar un los datos de todas las tablas : ```npx prisma migrate reset``` (funnciona en el mismo EC Visual estudio  no fuera)
+ Abrir una ventana para visualizar los datos y inicializar : `npx prisma studio`
+ Para que node soporte ts ```npm i ts-node``` => "seed":"ts-node prisma/seed.ts" (permitira ejecutar un script en ese archivo)=> ```npx prisma db seed```

## Instalando react Modal

## AXIOS
+ npm i axios
## React Modal
+ npm install --save react-modal
## React toastify
+  npm install --save react-toastify


### Siempre ejecutar para ver funcionando
+ Encender xampp en el puerto 3306
+ Abrir una ventana para visualizar los datos y inicializar : `npx prisma studio`
+npm run dev
## SWR (Stale While Revalidate)
useSWR Hook para consultar o obtener API's (creado por Vercel)
+Consultas en tiempo real
+ PAginacion
+Obtenner actualizados tus datos

+install : ```npm i swr```

## DeployMent
+ subir a gitHub 
En Ralway

cod en consola
+ git init
+ git add .
+ git commit -m "first commit"
+ git branch -M main
+ git remote add origin https://github.com/JAlvaroC/quioscoapp_deploymennt.git
+ git push -u origin main


## Exportar nuestra BD y subir a railway
+ Provision sql : y ponnemos lo que hemos exportado
+ Conectaremos tablePlus a Railway

![](./TablePlus%20Railway.jpg)
>Llenamos para conectar con railwey
+ conectamos y importamos y automaticamente ya estara instalado 
+ hacemos deploy en railway en la misma carpeta de la base de datos
+ agregamos la variable de entorno 
+ generemoa el link en settings (generate Domain)
+ Corregimos las tablas producto => Producto en( Mac no hay problema) la base de datos esta en minuscula