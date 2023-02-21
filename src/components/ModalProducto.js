import { formatearDinero } from '@/helpers'
import useQuiosco from '@/hooks/useQuiosco'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } =
    useQuiosco()
  const [cantidad, setCantidad] = useState(1)
  const [edicion, setEdicion] = useState(false)
  //   Comprobar si el mdoal actual esta en el pedido

  useEffect(() => {
    if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
      console.log('Si existe')
      const productoEdicion = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      )

      setEdicion(true)
      setCantidad(productoEdicion.cantidad)
    } else {
      console.log('No existe')
      // setEdicion(false)
    }
  }, [producto, pedido])

  return (
    <div className='md:flex gap-10'>
      <div className='md:w-1/3'>
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre} `}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className='md:w-2/3'>
        {/* NOTE: PAG: HEROICONS */}
        <div className='flex justify-end'>
          <button onClick={handleChangeModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <h1 className='text-3xl font-bold mt-5'>{producto.nombre}</h1>
        <p className='mt-5 font-black  text-5xl text-amber-500'>
          {formatearDinero(producto.precio)}
        </p>
        <div className='flex gap-4 mt-5'>
          <button
            type='button'
            onClick={() => {
              if (cantidad <= 0) {
                return
              }
              setCantidad(cantidad - 1)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          <p>{cantidad}</p>
          <button
            type='button'
            onClick={() => {
              if (cantidad >= 5) return
              setCantidad(cantidad + 1)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
        <button
          type='button'
          className='bg-indigo-600 hover:bg-slate-800 px-5 py-2 mt-5 text-white font-bold uppercase'
          // NOTE: para unir dos objetos pasamos dos paramenntos dentro de un objeto
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
            {edicion ?'Guardar Cambios':`Añadir al Pedido`}
          
        </button>
      </div>
    </div>
  )
}

export default ModalProducto
