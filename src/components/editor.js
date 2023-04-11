import { useState } from 'react'
import sizeGrowIcon from '../icons/size-grow-icon.svg'
import sizeShrinkIcon from '../icons/size-shrink-icon.png'

function Editor({inputText, setInputText, setPreviewerIsRendered}) {

    const [editorIsExpanded, setEditorIsExpanded] = useState(false)

    function handleTextAreaChange(e) {
        setInputText(e.target.value)
    }

    function expandEditor(e) {
        const imgBtn = e.target
        imgBtn.src = sizeShrinkIcon
        imgBtn.alt = 'size-shrink-button'
        setEditorIsExpanded(true)
        setPreviewerIsRendered(false)

        const editorBox = document.getElementById('editor-box')
        editorBox.style.height = '730px'
    }

    function shrinkEditor(e) {
        const imgBtn = e.target
        imgBtn.src = sizeGrowIcon
        imgBtn.alt = 'size-grow-button'
        setEditorIsExpanded(false)
        setPreviewerIsRendered(true)

        const editorBox = document.getElementById('editor-box')
        editorBox.style.height = '230px'
    }

    return (
        <div id="editor-box">
            <div className="header-box" id="editor-header-box">
                <div className="header-text-box" id="editor-header-text-box">
                    <span className="header-text" id="editor-header-text">Editor</span>
                </div>

                <img className="size-grow-icon" src={sizeGrowIcon} alt="size-grow-button" 
                    onClick={
                        editorIsExpanded ? shrinkEditor : expandEditor
                    }
                />
            </div>
            <div className="input-box">
                <textarea className="input-text" value={inputText} onChange={handleTextAreaChange}></textarea>
            </div>
        </div>
    )
}

export {
    Editor
}