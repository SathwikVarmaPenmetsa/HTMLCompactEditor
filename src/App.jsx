import { useEffect, useState } from "react"
import Editor from "./components/Editor"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const [html,setHtml] =useLocalStorage('html','')
  const [css,setCss] = useLocalStorage('css','')
  const [js,setJs] = useLocalStorage('js','')
  const [srcDoc,setSrcDoc] = useState('')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
    }, 250);

    return () => clearTimeout(timeout); // Cleanup to prevent multiple timeouts
  }, [html, css, js])

  
  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language='xml' 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
        />

        <Editor 
          language='css' 
          displayName="css" 
          value={css} 
          onChange={setCss} 
        />
        <Editor 
          language='javascript' 
          displayName="js" 
          value={js} 
          onChange={setJs} 
        />
      </div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
          frameborder="0"
          title="output"
          sandbox="allow-scripts" //sandbox="allow-scripts" lets scripts run in the iframe, but keeps other restrictions for safety.
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App






