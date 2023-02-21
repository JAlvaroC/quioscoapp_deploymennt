// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// NOTE: Corre en lado del servidor
//COMMENT: Abres en el navegado https://localhost:3000/api/categorias
//COMMENT: Abres en el navegado http://localhost:3000/api/categorias

import { PrismaClient } from "@prisma/client"

// NOVEDAD:solo funciona con http
const prisma = new  PrismaClient()
export default  async function  handler (req, res) {
    const categorias = await prisma.categoria.findMany({
      include:{
        productos:true,
      }
    });
    console.log(categorias);
    // res.status(200).json({ name: 'John Doe' })
    // NOTE respondemos como json
    res.status(200).json( categorias )
  }
  

// COMMENT Primera Novedad  
//  NOVEDAD:solo funciona con http
// const prisma = new  PrismaClient()
// export default  async function  handler (req, res) {
//     const categorias = await prisma.categoria.findMany();
//     console.log(categorias);
//     // res.status(200).json({ name: 'John Doe' })
//     // NOTE respondemos como json
//     res.status(200).json( categorias )
//   }
  