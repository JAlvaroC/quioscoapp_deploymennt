import { PrismaClient } from "@prisma/client";

//COMMENT: Abres en el navegado http://localhost:3000/api/ordenes
export default async function handler(req,res) {
    const prisma=new PrismaClient()

    // Obtener Ordenes 
    const ordenes=await prisma.orden.findMany({
        where:{
            estado:false
        }
    })

    // Crear Ordenes
    res.status(200).json(ordenes)


    if (req.method==='POST') {
        //NOTE: se mostrara en la consola de VS <servidor

        const orden=await prisma.orden.create({
            data:{
                nombre:req.body.nombre,
                total:req.body.total,
                pedido:req.body.pedido,
                fecha:req.body.fecha
            }

        })
        // console.log(req.body);
        // res.json({metodo:'POST'})
        res.status(200).json(orden)
    }else{
        res.json({metodo:'GET'})
    }
// NOTE: GET para visitar unn sitio
// NOTE: POST enviar datos
// NOTE: PUT enviar datos
// NOTE: PATCH enviar datos
};
