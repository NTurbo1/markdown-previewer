import sizeGrowIcon from '../icons/size-grow-icon.svg'
import sizeShrinkIcon from '../icons/size-shrink-icon.png'
import { marked } from 'marked'
import { useState } from 'react'

function Previewer({inputText, setEditorIsRendered}) {
    const [previewerIsExpanded, setPreviewerIsExpanded] = useState(false)

    function expandPreviewer(e) {
        const imgBtn = e.target
        imgBtn.src = sizeShrinkIcon
        imgBtn.alt = 'size-shrink-button'
        setPreviewerIsExpanded(true)
        setEditorIsRendered(false)
    }

    function shrinkPreviewer(e) {
        const imgBtn = e.target
        imgBtn.src = sizeGrowIcon
        imgBtn.alt = 'size-grow-button'
        setPreviewerIsExpanded(false)
        setEditorIsRendered(true)
    }

    return (
        <div id="previewer-box">
            <div className="header-box" id="previewer-header-box">
                <div className="header-text-box" id="previewer-header-text-box">
                    <span className="header-text" id="previewer-header-text">Previewer</span>
                </div>

                <img className="size-grow-icon" src={sizeGrowIcon} alt="size-grow-button"
                    onClick={previewerIsExpanded ? shrinkPreviewer : expandPreviewer}
                />
            </div>
            <div className="input-display-box" dangerouslySetInnerHTML={{__html: marked.parse(inputText)}}>
            </div>
        </div>
    )
}

export {
    Previewer
}