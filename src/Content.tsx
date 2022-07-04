import {HashRouter} from "react-router-dom";
import Pages from "./Pages";
import Header from "./Header/Header";

function Content(){
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Pages/>

            </HashRouter>
        </div>
    )
}
export default Content
