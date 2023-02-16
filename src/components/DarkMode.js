import React from 'react'

export default function DarkMode(props) {
  return (
      <div className={`modeCont ${props.mode==='light'?'dark':'light'}`}>
        {/* <div className="form-check form-switch" >
            <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
       </div> */}
       <label className={`modeCont switch ${props.mode==='light'?'dark':'light'}`}>
          <input type="checkbox" onClick={props.toggleTheme}/>
          <span className="slider"></span>
       </label>
      </div>
  )
}

