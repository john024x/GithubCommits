import React, { Component} from "react";
import Header from './Header';
import Search from './Search';
import { CssBaseline } from '@mui/material'
class App extends Component{
    render(){
        return(
            <main>
                <CssBaseline />
                <Header/>
                <Search/>
            </main>
        )
    }
}
export default App;