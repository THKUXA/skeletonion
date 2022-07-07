import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import React from 'react'

const DetailsReadings = () => {
    var drheight = 332
    var drwidth = 386
    var data = [
        {
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: '-', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: '-', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: '-', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: 'Nancy took it by accident, will follow up Monday', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: '-', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },{
            ID: 10248, ABS: 1.004, THI: 0.0489, DOSE: '48.1K KGy', 'READ DATETIME': '2022-04-01T21:39',
            INCIDENT: 'Lost Dosimeter', COMMENT: '-', REREAD: false
        },
        
    ];
    var DetailData = ['1131', '312347', '0.075', '225759876451', '2022-03-31T21:50','2022-04-01T21:39','00:18','605.0 nm','3.0 nm', '0.5 s']
    const Readings = (
        

            <GridComponent dataSource={data} allowResizing = {true} allowTextWrap = {true} height = {drheight - 81} width = '386px'>
            <ColumnsDirective>
                <ColumnDirective field='ID' width='100' />
                <ColumnDirective field='ABS' width='100' format = 'N3' />
                <ColumnDirective field='THI' width='100' format = 'N4' />
                <ColumnDirective field='DOSE' width='130' />
                <ColumnDirective field='READ DATETIME'   type='dateTime' format={'dd/MM/yyyy hh:mm a'}/>
                <ColumnDirective field='INCIDENT'  />
                <ColumnDirective field='COMMENT' width='200' />
                <ColumnDirective field='REREAD' width='100' />


            </ColumnsDirective>
        </GridComponent>
    )
    const Details = (
        <div>
            <div>
                <span style={{fontWeight: 'bold'}}>Batch ID:</span>
                <span style={{float: 'right'}}>{DetailData[0]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Lot ID: </span>
                <span style={{float: 'right'}}>{DetailData[1]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Lot I.A.: </span>
                <span style={{float: 'right'}}>{DetailData[2]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Irradiation Container: </span>
                <span style={{float: 'right'}}>{DetailData[3]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Irradiation DateTime: </span>
                <span style={{float: 'right'}}>{DetailData[4]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Unload DateTime: </span>
                <span style={{float: 'right'}}>{DetailData[5]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Post-Unload Reading Due: </span>
                <span style={{float: 'right'}}>{DetailData[6]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Wavelength: </span>
                <span style={{float: 'right'}}>{DetailData[7]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Spectral Bandwidth: </span>
                <span style={{float: 'right'}}>{DetailData[8]}</span>
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>Analysis Time: </span>
                <span style={{float: 'right'}}>{DetailData[9]}</span>
            </div>
        </div>
    )
  return (
    <div style={{boxShadow: ' -1px 4px 15px -1px #1d3a4915', height: drheight, width: drwidth, borderRadius: '25px'}}>
        <TabComponent height='332px' width = '386px'>
            <div className='e-tab-header'>
                <div>Details</div>
                <div>Readings</div>
            </div>
            <div className='e-content'>

                <div style={{margin: '20px'}}>{Details}</div>
                <div>{Readings}</div>
            </div>
        
        </TabComponent>
        </div>

  )
}

export default DetailsReadings