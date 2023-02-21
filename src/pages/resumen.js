import ResumenProducto from "@/components/ResumenProducto";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";

export default function Resumen(params) {
    const {pedido}= useQuiosco()

    return(
        <Layout
         pagina={`resumen`}
        >
            <h1 className="text-4xl font-black ">
                Resumen
            </h1>
            <p className="text-2xl my-10">
                Revisa tu pedido
            </p>
            {pedido.length===0?(
                <p className="text-center text-2xl ">
                    No hay elemenntos e tu pedido
                </p>
            ):(
                pedido.map(producto=>(
                    <ResumenProducto
                    key={producto.id}
                    producto={producto}
                    />
                ))
            )}
        </Layout>
    )
};
