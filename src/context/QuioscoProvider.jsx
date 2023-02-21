import axios from 'axios';
import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';


const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    // const [paso, setPaso] = useState(1)
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const router=useRouter()

    const obtenerCategorias = async () => {
        // const url=`http://localhost:3000/api/categorias`
        const url=`/api/categorias`
       const {data}=await axios(url)
       setCategorias(data)
    };
    useEffect(() => {
        obtenerCategorias()
    }, [])
    
    useEffect(() => {
      setCategoriaActual(categorias[0])

    }, [categorias])

    useEffect(() => {
        const nuevoTotal=pedido.reduce((total,producto)=>(producto.precio*producto.cantidad)+total,0)
        
        setTotal(nuevoTotal)
    }, [pedido])
    
    
    const handleClickCategoria = (id) => {
        const categoria=categorias.filter(cat=>cat.id===id)
        setCategoriaActual(categoria[0])
        router.push('/')
        // console.log('---',categoria);
    //    console.log(id);
    };
    const handleSetProducto = (producto) => {
       setProducto(producto)
    };
    const handleChangeModal=()=>{
        setModal(!modal)
    }
    const handleAgregarPedido = ({categoriaId,...producto}) => {
        // NOTE: esta manera invocamos conn cualquier nombre y obtenemos producto y cantidad unido
        if(pedido.some(productoState=>productoState.id===producto.id)){
            const pedidoActualizado=pedido.map(productoState=>productoState.id===producto.id?producto:productoState)
            
            console.log('ihuales modificado');
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')
        }else{
            setPedido([...pedido,producto])
            console.log('agregando');
            toast.success('Agregando al pedido ')
            // const notify = () => toast("Wow so easy!");
        }
        setModal(false)
        // if(pedido.some(productoState=>productoState.id===producto.id)){
        //     const pedidoActualizado=pedido.map(productoState=>productoState.id===producto.id?producto:productoState)
            
        //     console.log('ihuales modificado');
        //     return setPedido(pedidoActualizado)
        // }
        // setPedido([...pedido,producto])
        // console.log('agregando');
        

    };
    // const handleChangePaso= (paso) => {
    //    setPaso(paso)
    // };
    
    const handleEditarCantidades=(id)=>{
        // console.log(id);
        const productoActualizar=pedido.filter(
            producto=>producto.id===id
        )
        setProducto(productoActualizar[0])
        setModal(!modal)
    }
    const handleEliminarProducto = (id) => {
        const pedidoActualizado =pedido.filter(producto=>producto.id !== id)
        setPedido(pedidoActualizado)
    };
    const colocarOrden= async(e)=>{
        e.preventDefault()
        try {
            // NOTE: el metodo axios por defecto es GET se cambia => axios.post()...
        //    const {data}= await axios('/api/ordenes') 
           const {data}= await axios.post('/api/ordenes',{
            pedido,
            nombre,total,
            fecha:Date.now().toString()

           }) 
           console.log(data);
        //    Resetear una APP
        setCategoriaActual(categorias[0])
        setPedido([])
        setNombre('')
        setTotal(0)
        toast.success('Pedido Realizado Exitosamente')
        setTimeout(() => {
            router.push('/')
        }, 3000);






        } catch (error) {
            console.log(error);
        }
        console.log('Total',total,nombre);
        console.log('envianndo');
    }
    
  return (
    <QuioscoContext.Provider
        value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                pedido,
                setPedido,
                handleAgregarPedido,
                // paso,
                // handleChangePaso
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total

            }}
    >
        {children}
    </QuioscoContext.Provider>
  )
}

// export { 
//     QuioscoContext
// } 
// export default QuioscoProvider
//NOTE: Exportamos el componente entre parentesis
export {
    QuioscoProvider
}
// NOTE exportamos el context como default
export default QuioscoContext