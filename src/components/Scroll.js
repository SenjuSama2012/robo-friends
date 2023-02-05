import React, {Fragment} from 'react'

const Scroll = (props) => {
  return (
    <Fragment>
        <div style={{ overflowY: 'scroll', border: "5px solid blue", height: "500px"}}>
        {props.children}
        </div>
    </Fragment>
  )
}

export default Scroll