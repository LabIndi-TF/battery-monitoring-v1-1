/************************** Import library/fungsi ****************************/
import React, { Component } from 'react';

// modul-modul SemanticUI
import { Accordion } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

// komponen yang dimuat
import TableChartSection from './TableChartSection'

// variabel global
import { localConfigHome } from './ConfigFetcherHome'

/************************ Deklarasi objek/variabel ***************************/
var linkBuffer = 'api/buffer';
export var localBuffer = {
  data: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ],
  timestamp: "00:00:00"
};

/************************ Deklarasi kelas/komponen ***************************/
class HomeContent extends Component {
  constructor() {
    super();
    this.state = {
      TAG_LIST: localConfigHome,
      BUFFER: localBuffer,
      ACTIVE_INDEX: [
        [false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,],
      ],
    }

    this.handleSection1TitleClick = this.handleSection1TitleClick.bind(this);
    this.handleSection2TitleClick = this.handleSection2TitleClick.bind(this);
    this.handleSection3TitleClick = this.handleSection3TitleClick.bind(this);
    this.handleSection4TitleClick = this.handleSection4TitleClick.bind(this);

  } // JS : end of constructor()

  FetchBufferTimer = 0;

  componentDidMount() {
    //this.mountFetchBuffer(200);
    this.fetchBuffer();
    //console.log(localBuffer);
  }

  componentDidUpdate() {
    //console.log("update!");
  }

  componentWillUnmount() {
    //clearInterval(this.FetchBufferTimer);
  }

  fetchBuffer() {
    fetch(linkBuffer)
      .then(res => res.json())
      .then((result) => {
        localBuffer = result;
        //console.log('DATAFETCHER : Buffer fetch success!', localBuffer);
      });
    this.setState({
      BUFFER: localBuffer
    }, () => {

      //console.log('DATAFETCHER : Buffer Refresh success!', localBuffer);
    });
  }

  mountFetchBuffer = (SAMPLE_PERIOD) => {
    this.FetchBufferTimer = setInterval(() => {
      this.fetchBuffer();
    }, SAMPLE_PERIOD);
  }

  handleSection1TitleClick = (e, itemProps) => {
    const {index} = itemProps;
    const activeIndex = this.state.ACTIVE_INDEX;

    activeIndex[0][index] = !activeIndex[0][index];
    //console.log(activeIndex);

    this.setState({
      ACTIVE_INDEX: activeIndex,
    });
  }

  handleSection2TitleClick = (e, itemProps) => {
    const {index} = itemProps;
    const activeIndex = this.state.ACTIVE_INDEX;

    activeIndex[1][index] = !activeIndex[1][index];
    //console.log(activeIndex);

    this.setState({
      ACTIVE_INDEX: activeIndex,
    });
  }

  handleSection3TitleClick = (e, itemProps) => {
    const {index} = itemProps;
    const activeIndex = this.state.ACTIVE_INDEX;

    activeIndex[2][index] = !activeIndex[2][index];
    //console.log(activeIndex);

    this.setState({
      ACTIVE_INDEX: activeIndex,
    });
  }

  handleSection4TitleClick = (e, itemProps) => {
    const {index} = itemProps;
    const activeIndex = this.state.ACTIVE_INDEX;

    activeIndex[3][index] = !activeIndex[3][index];
    //console.log(activeIndex);

    this.setState({
      ACTIVE_INDEX: activeIndex,
    });
  }

  render() { 
    var section1AContent = (
      //false && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={1}/>
      this.state.ACTIVE_INDEX[0][0] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={1}/>
    );

    var section1BContent = (
      this.state.ACTIVE_INDEX[0][1] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={2}/>
    );

    var section1CContent = (
      this.state.ACTIVE_INDEX[0][2] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={3}/>
    );

    var section1DContent = (
      this.state.ACTIVE_INDEX[0][3] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={4}/>
    );

    var section1EContent = (
      this.state.ACTIVE_INDEX[0][4] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={5}/>
    );

    var section1FContent = (
      this.state.ACTIVE_INDEX[0][5] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={6}/>
    );

    var section1GContent = (
      this.state.ACTIVE_INDEX[0][6] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={7}/>
    );

    var section1HContent = (
      this.state.ACTIVE_INDEX[0][7] && <TableChartSection NO_DEVICE={1} NO_GROUPTAG={8}/>
    );

    var section2AContent = (
      this.state.ACTIVE_INDEX[1][0] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={1}/>
    );

    var section2BContent = (
      this.state.ACTIVE_INDEX[1][1] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={2}/>
    );

    var section2CContent = (
      this.state.ACTIVE_INDEX[1][2] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={3}/>
    );

    var section2DContent = (
      this.state.ACTIVE_INDEX[1][3] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={4}/>
    );

    var section2EContent = (
      this.state.ACTIVE_INDEX[1][4] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={5}/>
    );

    var section2FContent = (
      this.state.ACTIVE_INDEX[1][5] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={6}/>
    );

    var section2GContent = (
      this.state.ACTIVE_INDEX[1][6] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={7}/>
    );

    var section2HContent = (
      this.state.ACTIVE_INDEX[1][7] && <TableChartSection NO_DEVICE={2} NO_GROUPTAG={8}/>
    );

    var section3AContent = (
      this.state.ACTIVE_INDEX[2][0] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={1}/>
    );

    var section3BContent = (
      this.state.ACTIVE_INDEX[2][1] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={2}/>
    );

    var section3CContent = (
      this.state.ACTIVE_INDEX[2][2] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={3}/>
    );

    var section3DContent = (
      this.state.ACTIVE_INDEX[2][3] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={4}/>
    );

    var section3EContent = (
      this.state.ACTIVE_INDEX[2][4] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={5}/>
    );

    var section3FContent = (
      this.state.ACTIVE_INDEX[2][5] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={6}/>
    );

    var section3GContent = (
      this.state.ACTIVE_INDEX[2][6] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={7}/>
    );

    var section3HContent = (
      this.state.ACTIVE_INDEX[2][7] && <TableChartSection NO_DEVICE={3} NO_GROUPTAG={8}/>
    );

    var section4AContent = (
      this.state.ACTIVE_INDEX[3][0] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={1}/>
    );

    var section4BContent = (
      this.state.ACTIVE_INDEX[3][1] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={2}/>
    );

    var section4CContent = (
      this.state.ACTIVE_INDEX[3][2] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={3}/>
    );

    var section4DContent = (
      this.state.ACTIVE_INDEX[3][3] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={4}/>
    );

    var section4EContent = (
      this.state.ACTIVE_INDEX[3][4] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={5}/>
    );

    var section4FContent = (
      this.state.ACTIVE_INDEX[3][5] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={6}/>
    );

    var section4GContent = (
      this.state.ACTIVE_INDEX[3][6] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={7}/>
    );

    var section4HContent = (
      this.state.ACTIVE_INDEX[3][7] && <TableChartSection NO_DEVICE={4} NO_GROUPTAG={8}/>
    );

    // JS : Panel-panel Accordion

    var section1Panels = [
      this.state.TAG_LIST[0].GROUPTAG_LIST[0].GROUPTAG_VISIBLE && { key: 'panel-1a', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[0].GROUPTAG_NAME + ' (Group Tag 1A)'), content: { content: <div>{section1AContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[1].GROUPTAG_VISIBLE && { key: 'panel-1b', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[1].GROUPTAG_NAME + ' (Group Tag 1B)'), content: { content: <div>{section1BContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[2].GROUPTAG_VISIBLE && { key: 'panel-1c', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[2].GROUPTAG_NAME + ' (Group Tag 1C)'), content: { content: <div>{section1CContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[3].GROUPTAG_VISIBLE && { key: 'panel-1d', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[3].GROUPTAG_NAME + ' (Group Tag 1D)'), content: { content: <div>{section1DContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[4].GROUPTAG_VISIBLE && { key: 'panel-1e', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[4].GROUPTAG_NAME + ' (Group Tag 1E)'), content: { content: <div>{section1EContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[5].GROUPTAG_VISIBLE && { key: 'panel-1f', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[5].GROUPTAG_NAME + ' (Group Tag 1F)'), content: { content: <div>{section1FContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[6].GROUPTAG_VISIBLE && { key: 'panel-1g', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[6].GROUPTAG_NAME + ' (Group Tag 1G)'), content: { content: <div>{section1GContent}</div> } },
      this.state.TAG_LIST[0].GROUPTAG_LIST[7].GROUPTAG_VISIBLE && { key: 'panel-1h', title: (this.state.TAG_LIST[0].GROUPTAG_LIST[7].GROUPTAG_NAME + ' (Group Tag 1H)'), content: { content: <div>{section1HContent}</div> } },
    ];

    var section2Panels = [
      this.state.TAG_LIST[1].GROUPTAG_LIST[0].GROUPTAG_VISIBLE && { key: 'panel-2a', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[0].GROUPTAG_NAME + ' (Group Tag 2A)'), content: { content: <div>{section2AContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[1].GROUPTAG_VISIBLE && { key: 'panel-2b', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[1].GROUPTAG_NAME + ' (Group Tag 2B)'), content: { content: <div>{section2BContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[2].GROUPTAG_VISIBLE && { key: 'panel-2c', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[2].GROUPTAG_NAME + ' (Group Tag 2C)'), content: { content: <div>{section2CContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[3].GROUPTAG_VISIBLE && { key: 'panel-2d', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[3].GROUPTAG_NAME + ' (Group Tag 2D)'), content: { content: <div>{section2DContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[4].GROUPTAG_VISIBLE && { key: 'panel-2e', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[4].GROUPTAG_NAME + ' (Group Tag 2E)'), content: { content: <div>{section2EContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[5].GROUPTAG_VISIBLE && { key: 'panel-2f', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[5].GROUPTAG_NAME + ' (Group Tag 2F)'), content: { content: <div>{section2FContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[6].GROUPTAG_VISIBLE && { key: 'panel-2g', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[6].GROUPTAG_NAME + ' (Group Tag 2G)'), content: { content: <div>{section2GContent}</div> } },
      this.state.TAG_LIST[1].GROUPTAG_LIST[7].GROUPTAG_VISIBLE && { key: 'panel-2h', title: (this.state.TAG_LIST[1].GROUPTAG_LIST[7].GROUPTAG_NAME + ' (Group Tag 2H)'), content: { content: <div>{section2HContent}</div> } },
    ];

    var section3Panels = [
      this.state.TAG_LIST[2].GROUPTAG_LIST[0].GROUPTAG_VISIBLE && { key: 'panel-3a', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[0].GROUPTAG_NAME + ' (Group Tag 3A)'), content: { content: <div>{section3AContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[1].GROUPTAG_VISIBLE && { key: 'panel-3b', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[1].GROUPTAG_NAME + ' (Group Tag 3B)'), content: { content: <div>{section3BContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[2].GROUPTAG_VISIBLE && { key: 'panel-3c', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[2].GROUPTAG_NAME + ' (Group Tag 3C)'), content: { content: <div>{section3CContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[3].GROUPTAG_VISIBLE && { key: 'panel-3d', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[3].GROUPTAG_NAME + ' (Group Tag 3D)'), content: { content: <div>{section3DContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[4].GROUPTAG_VISIBLE && { key: 'panel-3e', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[4].GROUPTAG_NAME + ' (Group Tag 3E)'), content: { content: <div>{section3EContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[5].GROUPTAG_VISIBLE && { key: 'panel-3f', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[5].GROUPTAG_NAME + ' (Group Tag 3F)'), content: { content: <div>{section3FContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[6].GROUPTAG_VISIBLE && { key: 'panel-3g', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[6].GROUPTAG_NAME + ' (Group Tag 3G)'), content: { content: <div>{section3GContent}</div> } },
      this.state.TAG_LIST[2].GROUPTAG_LIST[7].GROUPTAG_VISIBLE && { key: 'panel-3h', title: (this.state.TAG_LIST[2].GROUPTAG_LIST[7].GROUPTAG_NAME + ' (Group Tag 3H)'), content: { content: <div>{section3HContent}</div> } },
    ];

    var section4Panels = [
      this.state.TAG_LIST[3].GROUPTAG_LIST[0].GROUPTAG_VISIBLE && { key: 'panel-4a', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[0].GROUPTAG_NAME + ' (Group Tag 4A)'), content: { content: <div>{section4AContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[1].GROUPTAG_VISIBLE && { key: 'panel-4b', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[1].GROUPTAG_NAME + ' (Group Tag 4B)'), content: { content: <div>{section4BContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[2].GROUPTAG_VISIBLE && { key: 'panel-4c', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[2].GROUPTAG_NAME + ' (Group Tag 4C)'), content: { content: <div>{section4CContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[3].GROUPTAG_VISIBLE && { key: 'panel-4d', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[3].GROUPTAG_NAME + ' (Group Tag 4D)'), content: { content: <div>{section4DContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[4].GROUPTAG_VISIBLE && { key: 'panel-4e', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[4].GROUPTAG_NAME + ' (Group Tag 4E)'), content: { content: <div>{section4EContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[5].GROUPTAG_VISIBLE && { key: 'panel-4f', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[5].GROUPTAG_NAME + ' (Group Tag 4F)'), content: { content: <div>{section4FContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[6].GROUPTAG_VISIBLE && { key: 'panel-4g', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[6].GROUPTAG_NAME + ' (Group Tag 4G)'), content: { content: <div>{section4GContent}</div> } },
      this.state.TAG_LIST[3].GROUPTAG_LIST[7].GROUPTAG_VISIBLE && { key: 'panel-4h', title: (this.state.TAG_LIST[3].GROUPTAG_LIST[7].GROUPTAG_NAME + ' (Group Tag 4H)'), content: { content: <div>{section4HContent}</div> } },
    ];

    var section1Content = (
      <div>
        {/*Welcome to section 1*/}
        <Accordion.Accordion panels={section1Panels} onTitleClick={this.handleSection1TitleClick} exclusive={false} />
      </div>
    );

    var section2Content = (
      <div>
        {/*Welcome to section 2*/}
        <Accordion.Accordion panels={section2Panels} onTitleClick={this.handleSection2TitleClick} exclusive={false} />
      </div>
    );

    var section3Content = (
      <div>
        {/*Welcome to section 3*/}
        <Accordion.Accordion panels={section3Panels} onTitleClick={this.handleSection3TitleClick} exclusive={false} />
      </div>
    );

    var section4Content = (
      <div>
        {/*Welcome to section 4*/}
        <Accordion.Accordion panels={section4Panels} onTitleClick={this.handleSection4TitleClick} exclusive={false} />
      </div>
    );

    var rootPanels = [
      this.state.TAG_LIST[0].DEVICE_VISIBLE && { key: 'panel-1', title: (this.state.TAG_LIST[0].DEVICE_NAME + ' (Device 1)'), content: { content: section1Content } },
      this.state.TAG_LIST[1].DEVICE_VISIBLE && { key: 'panel-2', title: (this.state.TAG_LIST[1].DEVICE_NAME + ' (Device 2)'), content: { content: section2Content } },
      this.state.TAG_LIST[2].DEVICE_VISIBLE && { key: 'panel-3', title: (this.state.TAG_LIST[2].DEVICE_NAME + ' (Device 3)'), content: { content: section3Content } },
      this.state.TAG_LIST[3].DEVICE_VISIBLE && { key: 'panel-4', title: (this.state.TAG_LIST[3].DEVICE_NAME + ' (Device 4)'), content: { content: section4Content } },
    ];

    return (
      <div>
        <h1 className="centeredH1">Device List</h1>
        <Grid columns={2}>
          <Grid.Row>
            {/* Nilai default : defaultActiveIndex={0}
                Untuk membuat Accordion mampu membuka lebih dari 1 item sekaligus,
                buat exclusive={false} (defaultnya ={true}).
                Jika exclusive={false}, defaultActiveIndex harus array. 
                Untuk membuat gaada yg terbuka pada kondisi default, kosongkan arraynya. */}
            <Accordion fluid styled defaultActiveIndex={[]} panels={rootPanels} exclusive={false} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
};

export default HomeContent;