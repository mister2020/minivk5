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
  Title
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";


function App() {
  const { viewWidth } = useAdaptivity();


  //Первая модалка - Максим Терновенко
  const CustomPopout1 = withAdaptivity(({ onClose, viewWidth }) => {
    return (
      <PopoutWrapper player1={onClose}>
        <div style={{
          backgroundColor: "var(--background_content)",
          borderRadius: 8,
          position: "relative",
          padding: "12px"
        }}>
        <h4>Максим Терновенко, 16 лет</h4><br/>
        <p>Frontend-Developer</p>
        <p>Программирует уже четвёртый год, основное направление - веб-разработка</p>
        <p>Основной стэк:</p>
        <p>Node JS</p>
        <p>React</p>
        <p>PHP</p>
        <p>Express</p>
        <p>MySql / MongoDB</p><br/>
        <p>VK: <a href="https://vk.com/podnebes_______________________m">@podnebes_______________________m</a></p>
        <Div>
          <Button onClick={onClose} size="l" stretched mode="secondary">Назад</Button>
        </Div>
        </div>
      </PopoutWrapper>
      )
    }, {
      viewWidth: true
    })


  //Вторая модалка - Артём Киселёв
  const CustomPopout2 = withAdaptivity(({ onClose, viewWidth }) => {
    return (
      <PopoutWrapper player2={onClose}>
      <div style={{
        backgroundColor: "var(--background_content)",
        borderRadius: 8,
        position: "relative",
        padding: "12px"
      }}>
        <h4>Артём Киселёв, 18 лет</h4><br/>
        <p>Fullstack-Developer, DevOps</p>
        <p>Занимается девятый год программированием, из которых 6 лет посвятил веб-разработке</p>
        <p>Основной стэк:</p>
        <p>PHP / Laravel | Phalcon | Swoole</p>
        <p>GoLang / Gin</p>
        <p>Vue.js</p>
        <p>Webpack / SCSS / Tailwind</p>
        <p>Docker / K8S</p><br/>
        <p>VK: <a href="https://vk.com/aaaa0">@aaaa0</a></p>
        <Div>
          <Button onClick={onClose} size="l" stretched mode="secondary">Назад</Button>
        </Div>
      </div>
      </PopoutWrapper>
      )
    }, {
      viewWidth: true
  })


  //Третья модалка - Дарья Вознюк
  const CustomPopout3 = withAdaptivity(({ onClose, viewWidth }) => {
    return (
    <PopoutWrapper player3={onClose}>
    <div style={{
      backgroundColor: "var(--background_content)",
      borderRadius: 8,
      position: "relative",
      padding: "12px"
    }}>
      <h4>Дарья Вознюк, 20 лет</h4>
      <p>Дизайнер, web-дизайнер</p>
      <p>Занимается дизайном 5 лет, web-дизайном - 3 года</p>
      <p>Основной стэк:</p>
      <p>Figma</p>
      <p>Sketch</p>
      <p>Zeplin</p>
      <p>After Effects</p>
      <p>VK: <a href="https://vk.com/dashyliadvlalalalala">@dashyliadvlalalalala</a></p>
      <Div>
          <Button onClick={onClose} size="l" stretched mode="secondary">Назад</Button>
        </Div>
    </div>
    </PopoutWrapper>
    )
  }, {
    viewWidth: true
  })


  //Четвертая модалка - Олег Царев
  const CustomPopout4 = withAdaptivity(({ onClose, viewWidth }) => {
    return (
      <PopoutWrapper player4={onClose}>
      <div style={{
      backgroundColor: "var(--background_content)",
      borderRadius: 8,
      position: "relative",
      padding: "12px"
    }}>
        <h4>Олег Царев, 23 года</h4><br/>
        <p>Frontend-Developer, Backend-Developer</p>
        <p>Занимается программированием уже 8 лет, в основном Frontend-разработкой, но и Backend</p>
        <p>Основной стэк:</p>
        <p>PHP</p>
        <p>Node JS</p>
        <p>Vue.js</p>
        <p>React</p>
        <p>C++ / C#</p>
        <p>MySql / MongoDB</p><br/>
        <p>VK: <a href="https://vk.com/id276839994">@id276839994</a></p>
        <Div>
          <Button onClick={onClose} size="l" stretched mode="secondary">Назад</Button>
        </Div>
      </div>
      </PopoutWrapper>
    )
    }, {
    viewWidth: true
  })
 
  const [popout, setPopout] = React.useState(null);
  
  const player1 = () => setPopout(
    <CustomPopout1 onClose={() => setPopout(null)} />
  );
  const player2 = () => setPopout(
    <CustomPopout2 onClose={() => setPopout(null)} />
  );
  const player3 = () => setPopout(
    <CustomPopout3 onClose={() => setPopout(null)} />
  );
  const player4 = () => setPopout(
    <CustomPopout4 onClose={() => setPopout(null)} />
  );

    const styles = {
      but: {
        textAlign: 'center',
        align: 'center'
      },
      title: {
        marginTop: '5px',
        marginBottom: '5px',
        textAlign: 'center'
      },
      gr: {
        margin: '0 auto 0 auto'
      }
    }

  //return
  return (
    <SplitLayout>
      <SplitCol>
    <View popout={popout} activePanel="popout">
      <Panel id="popout" >
      <Title level="1" weight="bold" style={styles.title}>Команда "Уральские монстры"</Title>
        <Group style={styles.gr}>
          <CellButton onClick={player1} style={styles.but}>Максим Терновенко</CellButton>
          <CellButton onClick={player2} style={styles.but}>Артём Киселёв</CellButton>
          <CellButton onClick={player3} style={styles.but}>Дарья Вознюк</CellButton>
          <CellButton onClick={player4} style={styles.but}>Олег Царев</CellButton>
        </Group>
      </Panel>
    </View>
    </SplitCol>
    </SplitLayout>
  );
}

export default App;
