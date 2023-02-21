import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import { useEffect } from 'react'
import Layout from '@/layout/Layout'
import useQuiosco from '@/hooks/useQuiosco'
import Producto from '@/components/Producto'

export default function Home() {
  // COMMENT: No es posible consultar esto porque solo corre en el servidor y no en el cliente
  const {categoriaActual} =useQuiosco()
  return (
    
    <Layout
      pagina={`Menu ${categoriaActual?.nombre}`}
    >
      <h1
      className='text-4xl font-black'
      >
        {categoriaActual?.nombre}
      </h1>
      <p className='text-2xl my-10 '>
        Elige y personaliza tu pedido a continuación
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {categoriaActual?.productos?.map(producto=>(
            <Producto
              key={producto.id}
              producto={producto}
            />
          ))}
      </div >
     </Layout>

  )
}














// NOTE:Primera Parte
// export default function Home() {
//   // COMMENT: No es posible consultar esto porque solo corre en el servidor y no en el cliente
//   // useEffect(() => {
//   //   const consultarDB=async()=>{
//   //     const prisma=new PrismaClient()
//   //     const categorias =await prisma.categoria.findMany()
//   //   }
//   //   consultarDB()

//   // }, [])
  
//   return (
//     <>
//      Next .js
//     </>
//   )
// }

// export const getServerSideProps= async ()=>{
//   const prisma=new PrismaClient()
//   const categorias =await prisma.categoria.findMany()
//   //COMMENT: Ejemplo 
// //   const categoriaPrimero =await prisma.categoria.findFirst(
// // {    where:{
// //       // id:3,
// //       // nombre:"Pizzas"
// //       nombre:"Pasteles"
// //     }}
// //   )
// // console.log(categoriaPrimero);
//   // NOTE: EL PRIMERO QUE ENCUENTRE findfirst()
//   // console.table(categorias);
//   return {
//     props:{categorias}
//   }

// }
