import useQuiosco from '@/hooks/useQuiosco'
import Image from 'next/image'
import React from 'react'
import Categoria from './Categoria'

const Sidebar = () => {
  const {categorias}=useQuiosco();
  // useQuiosco

  return (
    <>
    {/* No es necesario agregar public para ingregar al archivo en el src */}
    <Image 
      width={300} 
      height={100} 
      src="assets/img/logo.svg" 
      alt='imagen logotipo'
    />
    <nav className='mt-10'>
      {categorias.map(categoria=>(
        <Categoria
          key={categoria.id}
          categoria={categoria}
        />
      )
      )}
    </nav>
    </>
  )
}

export default Sidebar