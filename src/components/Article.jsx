import './Article.css'
import { useState, useEffect } from 'react'


export default function Article(props) {

    const [isEditing, setEditing] = useState(false)
    
    function toggleEditing() {
        setEditing(!isEditing)
    }

    useEffect(_=>{
        setEditing(false)
        console.log(props.link)
    }, [props.link])

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
