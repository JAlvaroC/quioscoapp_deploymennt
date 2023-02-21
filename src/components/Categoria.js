import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";

const Categoria = ({categoria}) => {
    const {handleClickCategoria,categoriaActual}=useQuiosco()
    console.log(
        'categoria',categoria
    );
    const {nombre,icono,id}=categoria
  return (
    // como categoria actualñ sera vacio este  sera un ?
    <div className={`${categoriaActual?.id===id?'bg-amber-400':''}
    flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
    <Image 
        width={100}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
        className="mr-5"
    />
    <button
    type="button"
    className="text-2xl font-bold hover:cursor-pointer"
    onClick={()=>handleClickCategoria(id)}
    >
        {nombre}
    </button>
    </div>
  )
}

export default Categoria