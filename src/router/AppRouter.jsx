import { Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth"
import { HeroesRoutes } from "../heroes"


export const AppRouter = () =>{
    return (
        <>
        <Routes>

            <Route path='login' element={<LoginPages/>}/>

            {/*el path redirecciona al HeroesRoutes donde se encuentran los heroes*/}

            <Route path='/*' element={<HeroesRoutes/>}/>
            
        </Routes>
        </>
    )
}