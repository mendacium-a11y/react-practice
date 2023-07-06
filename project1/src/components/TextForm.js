import React,{useState} from 'react'


export default function TextForm({heading}) {
    const[text,setText] = useState('Enter text')
    const[click,setClick] = useState(0)

    const changeToUpper = () =>{
        let newText = text.toLocaleUpperCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("text")
        setText(event.target.value)
    }

    const textOnClick = () => {
        if (click === 0) {
          setText("");
        }
        setClick(click + 1);
      };
      

    return (
        <div>
            <div className="mb-3">
                <h3>{heading}</h3>
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea value={text} onClick={textOnClick} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn btn-primary" onClick={changeToUpper}>Click to UpperCase</button>
            </div>
        </div>
    )
}
