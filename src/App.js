import "./App.css"
import ProductGrid from "./components/ProductGrid/productGrid"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Check out our Featured Products!</p>
                <ProductGrid categoryId={19} nProducts={6}/>
            </header>
        </div>
    )
}

export default App
