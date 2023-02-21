import {categorias} from './data/categorias'
import {productos} from './data/productos'
// NOTE: siempre que queremos hacer alguna operacion exportamos
import { PrismaClient } from '@prisma/client'

const prisma =new PrismaClient()
const main =async ():Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data:categorias
        })
        await prisma.producto.createMany({
            data:productos
        })
    } catch (error) {
        console.log(error);
    }
}

main()
