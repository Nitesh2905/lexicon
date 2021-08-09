import React from 'react'
import "./Definitions.css"
const Definitions = ({word, category, meanings}) => {
    return (
        <div className='meanings'>
            {meanings[0] && word && category==="en" && (
                <audio style={{backgroundColor:"#fff", borderRadius:"10px"}}src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>
                    Your Browser Does't support audio element!
                </audio>
            )}
           {word === "" ? (
               <span className="subTitle">Search Something!!</span>
           ): (
               meanings.map((mean) => mean.meanings.map((item)=> (
                   item.definitions.map((def)=>(
                       <div className="singleMean">
                           {def.definition}
                           <hr style={{backgroundColor:"black",width:"100vw"}} />
                           {def.example && <span><b>Example:</b> {def.example} </span>}
                           {def.synonyms && <span><b>Synonyms:</b> {def.synonyms.map((s) => `${s},`)} </span>}
                           </div>
                   ))
               )))
           )}
        </div>
    )
}

export default Definitions
