import React from "react"
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  withAdaptivity,
  CellButton,
  PopoutWrapper,
  ModalDismissButton,
  Button,
  Div,
  Title,
  Touch
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import bridge from '@vkontakte/vk-bridge';


bridge.send("VKWebAppInit", {}); 
bridge.subscribe((e) => console.log(e));

bridge.send("VKWebAppInit", {});

if (bridge.supports("VKWebAppResizeWindow")) {
    bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}


const circleStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'var(--accent)',
  position: 'absolute',
  left: '50%',
  top: '50%',
  marginLeft: -20,
  marginTop: -20
}

const containerStyle = {
  height: 200,
  border: '8px solid var(--icon_secondary)',
  position: 'relative'
}

bridge
  .send('VKWebAppGyroscopeStart')
  .then(data => {
    if(data.result === true) {
      console.log('Supported')
    } else {
      console.log('Not supported')
    }
  })
  .catch(error => {
    console.log(error)
  });

class Example extends React.Component {


  constructor (props) {

    super(props);

    this.state = {
      shiftX: 0,
      shiftY: 50
    }

    this.startX = 0;
    this.startY = 50;

    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.getCircleRef = this.getCircleRef.bind(this);
  }

  componentDidMount () {
    this.limitX = this.circleRef.offsetLeft;
    this.limitY = this.circleRef.offsetTop;
  }

  onMove (e) {
    let shiftX = this.startX + e.shiftX;
    let shiftY = this.startY + e.shiftY;

    this.setState({
      shiftX: shiftX > this.limitX ? this.limitX : shiftX < -this.limitX ? -this.limitX : shiftX,
      shiftY: shiftY > this.limitY ? this.limitY : shiftY < -this.limitY ? -this.limitY : shiftY,
    });
  }

  onEnd (e) {
    this.startX += e.shiftX;
    this.startY += e.shiftY;
  }

  getCircleRef (el) { this.circleRef = el };

  get limitExceeded () {
    const { shiftX, shiftY } = this.state;
    return Math.abs(shiftX) >= this.limitX || Math.abs(shiftY) >= this.limitY
  }

  render () {
    const { shiftX, shiftY, limitExceeded } = this.state;

    return (
      <View activePanel="gallery">
        <Panel id="gallery">
          <Group header={<Header mode="secondary">Финиш</Header>}>
            <div style={{
              ...containerStyle,
              borderColor: this.limitExceeded ? 'var(--destructive)' : 'var(--icon_secondary)' }}
            >
              <Touch
                getRootRef={this.getCircleRef}
                onMove={this.onMove}
                onEnd={this.onEnd}
                style={{ ...circleStyle, transform: `translate(${shiftX}px, ${shiftY}px)` }}
              />
            </div>
          </Group>
        </Panel>
      </View>
    )
  }
}



function App() {
  const { viewWidth } = useAdaptivity();
  const [popout, setPopout] = React.useState(null);

    const styles = {
      but: {
        textAlign: 'center',
        align: 'center'
      },
      title: {
        marginTop: '50px',
        marginBottom: '5px',
        textAlign: 'center'
      },
      gr: {
        margin: '0 auto 0 auto'
      }
    };

  //return
  return (
    <SplitLayout>
      <SplitCol>
    <View popout={popout} activePanel="popout">
      <Panel id="popout" >
      <Title level="1" weight="bold" style={styles.title}>Лабиринт</Title>
        <Group style={styles.gr}>
        <Example />
        </Group>
      </Panel>
    </View>
    </SplitCol>
    </SplitLayout>
  );
}



export default App;
