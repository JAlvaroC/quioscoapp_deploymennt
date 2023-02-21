// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// NOTE: Corre en lado del servidor
//COMMENT: Abres en el navegado https://localhost:3000/api/productos
//COMMENT: Abres en el navegado http://localhost:3000/api/productos

import { PrismaClient } from "@prisma/client"

// NOVEDAD:solo funciona con http
const prisma = new  PrismaClient()
export default  async function  handler (req, res) {
    const productos = await prisma.producto.findMany({
        where:{
            categoriaId:1
        }
    });

    res.status(200).json( productos )
  }
  