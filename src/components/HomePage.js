import React ,{useState} from 'react';
import ModalComp from './ModalComp';


export default function HomePage(props) {
    // change upper case
    const uppercasefunc= ()=>{
        setOutput(text.toUpperCase());
    }
    // change lowecase
    const lowecasecasefunc= ()=>{
        setOutput(text.toLowerCase());
    }
    // clear input
    const clearinput=()=>{
        setText("");
        setOutput("");
    }
    // copy button 
    const copyoutput=()=>{
        navigator.clipboard.writeText( output);
        alert('text copy Successfully');
    }
    // remove extra space
    const removeExtraSpace=()=>{
        setOutput(text.split(" ").join(" "));
    }
    // find word
    const findWord=()=>{
        console.log('word');
        
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    

    const handleSubmit = (data) => {
       let newText=[...text.split(" ")]
        setOutput(newText.indexOf(data[0])>=0 ? "word found at Index"+ newText.indexOf(data[0]) : "word not Found");
        console.log("this is data in home page " + data);
        console.log("from home page "+ data[0]);
        
      }

    const [text, setText] = useState("");
    const [output, setOutput] = useState("");
  return (

    <div className="homeCont">
        <div className="heading title">Text Utilities Tool</div>

        {/* form */}
        <div id='formCont'>
            <div id="formbox">
            <div className="formbox">
                <div className="row row-cols- row-cols-md-2 g-4">
                    <div className="col" >
                        <div className="card " style={{'maxWidth':'450px','minWidth':'300px' ,backgroundColor:props.mode==='light'?'black':'white',border:props.mode==='light'?'1px solid white':'1px solid rgba(0, 0, 0, 0.175)'}} >
                        <div className="card-body" >
                            <div className='input' >
                                <h5 className="card-title" style={{color:props.mode==='dark'?'black':'white'}}>Input</h5>
                                <button className='clear' style={{color:props.mode==='dark'?'black':'white'}} onClick={clearinput}>clear</button>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'black':'white',color:props.mode==='dark'?'black':'white'}} id="floatingTextarea" onChange={handleOnChange} ></textarea>
                            </div> 
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card " style={{'maxWidth':'450px','minWidth':'300px',backgroundColor:props.mode==='light'?'black':'white',border:props.mode==='light'?'1px solid white':'1px solid rgba(0, 0, 0, 0.175)'}}>
                        <div className="card-body ">
                            <div className='input'>
                                <h5 className="card-title" style={{color:props.mode==='dark'?'black':'white'}}>Output </h5>
                                <button className='clear' onClick={copyoutput} style={{color:props.mode==='dark'?'black':'white'}}>copy</button>
                            </div>
                            <div className="card" id="outputcard" style={{backgroundColor:props.mode==='light'?'black':'white',color:props.mode==='dark'?'black':'white' ,border:props.mode==='light'?'1px solid white':'1px solid rgba(0, 0, 0, 0.175)'}}>
                               {output}
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            </div>
        </div>

         {/* modal for find word start */}
         <ModalComp onSubmit={handleSubmit}></ModalComp>

         {/*  */}



        {/* btn container */}
            <div className="btnCont">
                <div className="btnBox">
                    <button className=' mybtn m-2' onClick={uppercasefunc}>Change Uppercase</button>
                    <button className=' mybtn m-2' onClick={lowecasecasefunc}>Change lowercase</button>
                    <button className=' mybtn m-2' onClick={removeExtraSpace}>Remove Extra Space</button>
                    <button className=' mybtn m-2' onClick={findWord} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Find Word</button>
                </div>
            </div>


    </div>

    
  )
}






