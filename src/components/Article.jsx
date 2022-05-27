import './Article.css'
import { useState, useEffect } from 'react'

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

export default function Article(props) {

    const [isEditing, setEditing] = useState(false)
    
    function toggleEditing() {
        if(!isLocal) return
        setEditing(!isEditing)
    }

    useEffect(_=>{
        setEditing(false)
        console.log(props.link)
    }, [props.link])

    return (
        <>
            <p style={{display:isLocal ? 'block' : 'none'}} className='text-end'>
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
