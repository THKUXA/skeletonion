import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations'
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar'
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons'
import React from 'react'
import './DosimeterReader.css'
const DosimeterReader = () => {
    var processingcontext = [
        {text: 'Routine Processing'}
    ]
    var dosimetrysystem = [
        {text: 'FWT-1P'}
    ]
    var dosimeterlot = [
        {text: '312347'}
    ]
    const Setup = (
        <div className='accordionparent'>
            <label className='inputlabels'> Processing Context</label>
            <hr class="hr-text"></hr>
            <div>
                <DropDownButtonComponent className='dropdown' items={processingcontext}>Routine Processing</DropDownButtonComponent>
            </div>
            <ul></ul>
            <input type="checkbox" />
            <label className='checkboxlabel'>Perform Reference Point Dosimetry</label>
            <ul></ul>
            <label className='inputlabels'> Dosimetry System</label>
            <hr class="hr-text"></hr>
            <button className='scanbarcode'>Scan Barcode</button>
            <hr class="hr-text" data-content="or"></hr>
            <div className='dropdown'>
                <DropDownButtonComponent className='dropdown' items={dosimetrysystem}>FWT-1P</DropDownButtonComponent>
            </div>
            <input type="checkbox" />
            <label className='checkboxlabel'>Require Thickness Measurement for ever dosimeter</label>
            <ul></ul>
            <label className='inputlabels'>Work Order Information</label>
            <hr class="hr-text"></hr>
            <input defaultValue='2119122'/>
            <ul></ul>
            <label className='inputlabels'>Dosimeter Lot</label>
            <hr class="hr-text"></hr>
            <div>
                <DropDownButtonComponent className='dropdown' items={dosimeterlot}>312347</DropDownButtonComponent>
            </div>
            <div>
                <button className='inactiveprevnext'>Prev</button>
                <button className='next'>Next</button>
            </div>
        </div>
    )
    const ReadDosimeter = (
        <div className='accordionparent'>
            <label className='inputlabels'>Initialize</label>
            <hr class="hr-text"></hr>
            <button className='activenormal'>Read New Dose</button>
            <ul></ul>
            <label className='inputlabels'>Dosimeter</label>
            <hr class="hr-text"></hr>
            <button className='inactivenormal'>Scan Barcode</button>
            <ul></ul>
            <label className='inputlabels'>Absorbance</label>
            <hr class="hr-text"></hr>
            <button className='inactivenormal'>Measure</button>
            <ul></ul>
            <label className='inputlabels'>Thickness</label>
            <hr class="hr-text"></hr>
            <button className='inactivenormal'>Measure</button>
            <hr class="hr-text" data-content="or"></hr>
            <div>
                <DropDownButtonComponent className='dropdown' >Select Saved Thickness</DropDownButtonComponent>
            </div>
            <ul></ul>
            <label className='inputlabels'>Received Dose</label>
            <hr class="hr-text"></hr>
            <button className='inactivenormal'>Calculate</button>
            <ul></ul>
            <div>
                <button className='activeprev'>Prev</button>
                <button className='inactiveprevnext'>Next</button>
            </div>
        </div>
    )
  return (
      <div className='parentdr'>
          {/*
        <div className='progressbar'>
            <ProgressBarComponent   segmentCount={8} value={100} animation={{
                enable: true,
                duration: 2000,
                delay: 0,
            }}/>
        </div>
            */}
        <div>
        
        <AccordionComponent expandMode='Single'>
            {/*Step 1*/}
            <div>
                <div>
                    <div>Setup</div>
                </div>
                <div>
                    <div>{Setup}</div>
                </div>
            </div>
            {/*Step 2*/}
            <div>

                <div>
                    <div>Read Dosimeters</div>
                </div>
                <div>
                    <div>{ReadDosimeter}</div>
                </div>
            </div>

            {/*Step 3*/}
            <div>

                <div>
                    <div>Report</div>
                </div>
                <div>
                    <div>{Setup}</div>
                </div>
            </div>

        </AccordionComponent>
        
        
        </div>
    </div>
  )
}

export default DosimeterReader 