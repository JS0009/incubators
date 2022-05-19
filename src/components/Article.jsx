import './Article.css'
import { useState } from 'react'


export default function Article(props) {
    const [currentLink, setCurrentLink] = useState(null)

    const [isEditing, setEditing] = useState(props.link === currentLink)
    setCurrentLink(props.link)
    
    function toggleEditing() {
        setEditing(!isEditing)
        // viewer.current.style.display='none'
        // editor.current.style.display = 'none'
        // if(isEditing) editor.current.style.display='block'
        // else viewer.current.style.display='block'
    }
    return (
        <>
            <p className='text-end'>
                <button onClick={toggleEditing} className="btn btn-primary">
                    {isEditing ? 'Сохранить' : 'Редактировать'}
                </button>
            </p>
            <div  style={{display: isEditing ? 'none' : 'block'}} dangerouslySetInnerHTML={{__html:props.html}}>

            </div>
            <div  style={{display: isEditing ? 'block' : 'none'}}>
                <textarea className='control' value={props.markdown}></textarea>
            </div>
        </>
    )
}
