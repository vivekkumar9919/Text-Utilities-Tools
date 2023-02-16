import React ,{ useRef } from 'react'

export default function ModalComp({onSubmit}) {
  const input1Ref=useRef();
  // const input2Ref=useRef();


 const handleSubmit=(e)=>{
   e.preventDefault();
   const inputValues = [input1Ref.current.value];
   console.log("Input values:", inputValues);
   if(inputValues){
     onSubmit(inputValues);
   }
   let d=document.getElementsByClassName(".modal-dialog");
   d.style.display="none";
  }
  return (
    <div>

     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Enter Word:</label>
                  <input type="text" className="form-control" id="recipient-name" ref={input1Ref}/>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Message:</label>
                  <input type="text" className="form-control" id="recipient-name" ref={input2Ref}/>
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Search</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
