import { Routes, Route } from "react-router-dom"
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import NewPass from "./Components/NewPassword/NewPass";
import RePassword from "./Components/RecoPassword/RePassword";
import Testing from "./Components/Testing/Testing";
import Error404 from "./Components/404/Error404";
import Profile from "./Components/Profile/Profile";

function Pages() {
    return (
        <div >
            <Routes>

                {/*<Route path={'/login'} element={<Navigate to={'/login'}/>}/>*/}
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/newPass'} element={<NewPass/>}/>
                <Route path={'/recoveryPass'} element={<RePassword/>}/>
                <Route path={'/testingPage'} element={<Testing/>}/>
                <Route path={'/profile'} element={<Profile/>}/>

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages