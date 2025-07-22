import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import CodeMirror from '@uiw/react-codemirror'
import { material } from '@uiw/codemirror-theme-material'
import { useState } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons'




const Editor = (props) => {
  const { displayName, language, value, onChange } = props;

    const[open,setOpen]=useState(true);

    
  let extensions = [];
  if (language === 'javascript') extensions = [javascript()];
  if (language === 'xml') extensions = [html()];
  if (language === 'css') extensions = [css()];

  return (
    <div className={`editor-container ${open? "" : 'close'}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={()=>setOpen(priv=>!priv)}
          type='button'
          className='expand-btn'

          ><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /></button>
      </div>
      <CodeMirror
        value={value}
        height="100%"
        theme={material}
        extensions={extensions}
        onChange={onChange}
        className="code-mirror-wrapper"
      />
    </div>
  )
}

export default Editor
