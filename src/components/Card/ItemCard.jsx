import { ButtonC } from "../components/Button/ButtonC";

export const ItemCard = ({ category }) => {
    const { categoria, descripcion, url } = category;
    return (
        <>
            <div className="p-10 bg-purple">
                <div className="bg-white  rounded-lg shadow-2xl md:flex">
                    <img src={url} alt="Laptop on Desk" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                    <div className="p-6">
                        <h2 className="font-bold text-xl md:text-3xl mb-2 text-black">{categoria}</h2>
                        <p className="text-black">
                            {descripcion}
                        </p>
                        <ButtonC >Ver mas</ButtonC>
                    </div>
                        
                </div>
            </div>

        </>
    )
}
