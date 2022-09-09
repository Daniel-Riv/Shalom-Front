import { Link } from "react-router-dom";


export const ButtonC = ({ children }) => {
    return (
        <>
            <div className="pt-2">
                <Link type="button" to='' className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2  mr-2 mb-2"
                >{children}</Link>
            </div>


        </>
    )
}
