import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Analyzer from "../pages/Analyzer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: "analyzer",
                element: <Analyzer/>
            }
        ]
    }  
])

export default router