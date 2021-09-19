import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import bridge from '@vkontakte/vk-bridge'
import App from './App';
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
  SimpleCell
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

bridge.send("VKWebAppInit");
ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);