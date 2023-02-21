

// import QuioscoContext, { QuioscoProvider } from '@/context/QuioscoProvider'
import QuioscoContext, { QuioscoProvider } from '@/context/QuioscoProvider'
import React, { useContext } from 'react'

const useQuiosco = () => {
  return useContext(QuioscoContext)
}

export default useQuiosco