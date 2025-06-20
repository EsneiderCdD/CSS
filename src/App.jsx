

function App() {


  return (
    <>
      

    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>🧠 Sintaxis y Selectores Básicos en CSS</h1>

      <p>
        CSS (Cascading Style Sheets) es el lenguaje que controla la apariencia de un sitio web. Mientras que HTML define
        la estructura, CSS define el "cómo se ve".
      </p>

      <h2 style={{ color: '#34495e' }}>🔹 ¿Cómo funciona la sintaxis?</h2>
      <p>
        Una regla CSS se compone de dos partes: el <strong>selector</strong> y el <strong>bloque de declaraciones</strong>.
      </p>

      <pre style={{ background: '#ecf0f1', padding: '1rem', borderRadius: '8px' }}>
        {`selector {
  propiedad: valor;
}`}
      </pre>

      <p>
        Cada declaración termina en punto y coma, y cada regla se encierra entre llaves <code>{'{}'}</code>. Por ejemplo:
      </p>

      <pre style={{ background: '#ecf0f1', padding: '1rem', borderRadius: '8px' }}>
        {`h1 {
  color: blue;
  font-size: 24px;
}`}
      </pre>

      <h2 style={{ color: '#34495e' }}>🔹 Tipos de selectores básicos</h2>
      <ul>
        <li><strong>Selector de etiqueta</strong>: aplica estilos a todos los elementos de un tipo (ej. <code>p</code>, <code>h1</code>).</li>
        <li><strong>Selector de clase</strong>: usa un punto (.) y aplica a elementos con esa clase. Ej: <code>.titulo</code>.</li>
        <li><strong>Selector de ID</strong>: usa un numeral (#) y aplica al elemento con ese ID único. Ej: <code>#principal</code>.</li>
      </ul>

      <h3 style={{ color: '#2d3436' }}>📌 Ejemplo en JSX (inline)</h3>
      <div>
        <p style={{ color: 'red' }}>Esto es un párrafo con estilo inline (selector de etiqueta).</p>
        <div style={{ backgroundColor: '#dfe6e9', padding: '1rem', borderRadius: '5px' }}>
          <p style={{ fontWeight: 'bold' }}>Este bloque simula un elemento con clase usando estilos directos.</p>
        </div>
        <div id="principal" style={{ marginTop: '1rem', border: '1px solid #0984e3', padding: '1rem' }}>
          <p style={{ color: '#0984e3' }}>Simulación de un ID con estilo.</p>
        </div>
      </div>

      <h2 style={{ color: '#34495e' }}>⚠️ Errores comunes</h2>
      <ul>
        <li>Olvidar el punto y coma <code>;</code> después de cada declaración.</li>
        <li>Usar <code>#</code> o <code>.</code> dentro del selector en HTML (eso solo va en CSS).</li>
        <li>No cerrar correctamente las llaves <code>{'{}'}</code>.</li>
        <li>Confundir ID y clase (un ID debe ser único, una clase puede repetirse).</li>
      </ul>

      <h2 style={{ color: '#34495e' }}>🧠 Curiosidades y Tips</h2>
      <ul>
        <li>El selector más específico es el de ID, pero no siempre es recomendable usarlo para estilizar — mejor usar clases.</li>
        <li>CSS ignora los espacios extra, tabulaciones o saltos de línea: todo es por jerarquía, no por formato visual.</li>
        <li>Se puede combinar selectores: <code>div.titulo</code> selecciona un <code>&lt;div&gt;</code> con clase <code>titulo</code>.</li>
        <li>Una hoja CSS puede tener miles de reglas, pero la cascada (de ahí su nombre) y la especificidad determinan cuál se aplica.</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Con esta base ya puedes empezar a escribir tus primeras reglas y entender cómo el navegador interpreta los estilos.
      </p>
    </div>

    </>
  )
}

export default App
