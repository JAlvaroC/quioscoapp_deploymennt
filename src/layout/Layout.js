import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import { PrismaClient } from '@prisma/client'
// import { useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import Modal from 'react-modal'
import useQuiosco from '@/hooks/useQuiosco'
import ModalProducto from '@/components/ModalProducto'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '@/components/Pasos'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Layout({children,pagina}) {

//NOTE: cuando usamos un framework cambia como ejemplo :root ,__next
Modal.setAppElement('#__next');
const {modal}=useQuiosco()
  return (
    <>
        <Head>
            <title>
                Café - {pagina}
            </title>
            <meta
            name='description'
            content='Quiosco Cafeteria'
            >
            </meta>
        </Head>


        <div className='md:flex'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                <Sidebar/>

            </aside>
            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                <div className='p-10 '>
                {/* <div className='p-10 mt-10'> */}
                    <Pasos/>
                    {children}
                </div>
            </main>
        </div>
        {modal&&(
            <Modal
            isOpen={modal}
            style={customStyles}
            >
                <ModalProducto/>
            </Modal>
        )}
        <ToastContainer/>
    </>
  )
}














