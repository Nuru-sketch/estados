import "./App.css";
import Productos from "./components/productos";


function App() {
  return (
    <>
    <h1 style={{ color:'#000071',fontWeight:'bold'}}>TechStore - Tu destino para la mejor tecnología</h1>
      <div
        className="misproductos"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          color: "black",
          textAlign:'center',
          padding:'20px'
        }}
      >
        <Productos
          nombre="Laptop"
          precio={1500}
          descripcion="una potente laptop para trabajar y jugar"
          stockinicial={10}
        />
        <Productos
          nombre="Smartphone"
          precio={800}
          descripcion="Un Smartphone de última generación"
          stockinicial={0}
        />
        <Productos
          nombre="Auriculares"
          precio={200}
          descripcion="Auriculares con cancelación de ruido"
          stockinicial={5}
        />
        <Productos
          nombre="Monitor"
          precio={300}
          descripcion="Monitor 4k para una experiencia visual increíble"
          stockinicial={7}
        />
      </div>
    </>
  );
}

export default App;
