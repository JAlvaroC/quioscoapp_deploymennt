import Orden from "@/components/Orden"
import AdminLayout from "@/layout/AdminLayout"
import axios from "axios"

import useSWR from 'swr'
export default function Admin(){    
    const fetcher=()=>axios('/api/ordenes').then(dato=>dato.data)
    // console.log(fetcher);}
    // NOTE: Es connveniente usar swr que useEffect y use state para no usar callback
    const {data,error,isLoading}=useSWR('/api/ordenes',fetcher,{
        refreshInterval:100
    })
    console.log(data);
    console.log(error);
    console.log(isLoading);
    
 return  ( 
    <AdminLayout pagina={'Admin'}>
            <h1 className="text-4xl font-black ">
                Panel de administrador
            </h1>
            <p className="text-2xl my-10">
                Administra las ordenes
            </p>
            {data&&data.length?data.map(orden=>
                <Orden
                key={orden.id}
                orden={orden}
                />
            ):
            <p>No hay orden pendiente</p>
            }
    </AdminLayout>
     ) 
}