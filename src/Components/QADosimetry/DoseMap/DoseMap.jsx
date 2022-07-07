import React from 'react'

const DoseMap = ({boxes}) => {
    var pheight = 415
    var pwidth = 386
  return (
    <div style={{boxShadow: ' -1px 4px 15px -1px #1d3a4915', height: 'fit-content', width: pwidth, display: 'inline-block', borderRadius: '25px'}} >
        <span>Dose Map</span>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(16px, auto)', rowGap: '17px', margin:'5px', marginBottom: '5px'}}>   
            {boxes.map((item,i) => 
                <div style={{ display: 'inline-block'}}>
                    <span style={{fontSize: '10px', height: pheight/boxes.length*5, width: pwidth/5}}>
                        <span style={{fontWeight: 'bold'}}>{i+1}:</span>
                        <span>{item[0]}/{item[1]}/{item[2]}</span>
                    </span>
                </div >
            )}
        </div>
    </div>
  )
}

export default DoseMap