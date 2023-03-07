import React from 'react'

export default function Resume() {
    const styles = {
        width : '100%',
        padding : '100px 10px',
        height : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItem : 'center' ,
    }
  return (
    <div style={styles}>
        <iframe
            title="resume"
            src="https://drive.google.com/file/d/10ljYyMKeYgMRHX4ihfY9LUf0fCW3hEQl/preview"
          />
    </div>
  )
}
