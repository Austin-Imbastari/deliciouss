import React from "react";
//styles
import GlobalStyles from "./Global.styles";
//components
import Pages from "./pages/Pages";
import Category from "./components/Category";

function App() {
    return (
        <>
            <GlobalStyles />
            <Category />
            <Pages />
        </>
    );
}

export default App;
