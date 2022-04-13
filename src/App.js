import React from "react";
//styles
import GlobalStyles from "./Global.styles";
//components
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
    return (
        <>
            <GlobalStyles />
            <Search />
            <Category />
            <Pages />
        </>
    );
}

export default App;
