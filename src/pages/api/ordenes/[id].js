import { PrismaClient } from "@prisma/client";




export default async function handler(req,res) {
    if (req.method==='POST') {
        const{id}=req.query
        
        const prisma =new PrismaClient()
        const ordenActualizada=await prisma.orden.update({
            where:{
                id:parseInt(id)
            },
            data:{
                estado:true
            }
        })
        
        res.status(200).json(ordenActualizada)
        
        
        // // NOTE: parecera en servidor el mensaje
        // console.log(req.query.id);
        // console.log('Actualizando');
    }
}