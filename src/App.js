import { useState, useEffect } from 'react';
import ArticleRouter from './router'
import { setRouter } from '@yababay67/hash-router'

function App() {
    const [component, setComponent] = useState()

    function factory(component) {
        setComponent(component)    
    }

    useEffect(_ => {
        setRouter(ArticleRouter, factory)
    }, [])
  
    return (
        <>
            {component}
        </>
    );
}

export default App;

