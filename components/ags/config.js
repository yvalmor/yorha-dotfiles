// importing
import {
  Hyprland,
  Notifications,
  Mpris,
  Audio,
  Battery,
  SystemTray,
  App,
  Widget,
  Utils,
  Variable,
} from "./imports.js";

import {
  NierLongButton,
  NierLongButtonGroup,
  NierToggle,
} from "./nier/buttons.js";

import { css, scss } from "./util.js";
import { Workspaces } from "./widgets/workspace.js";
import { Info } from "./widgets/info.js";

const { exec, subprocess } = Utils;
const { Box, Window, Label } = Widget;

exec(`sassc ${scss} ${css}`);

subprocess(
  [
    "inotifywait",
    "--recursive",
    "--event",
    "create,modify",
    "-m",
    App.configDir + "/style",
  ],
  () => {
    exec(`sassc ${scss} ${css}`);
    App.resetCss();
    App.applyCss(css);
  }
);

const top = () =>
  Box({
    vertical: true,
    className: ["top"],
    children: [
      Box({
        children: [Workspaces(), Info()],
      }),
      Box({
        className: ["under-workspaces"],
        style: `background: url("${
          App.configDir + "/assets/nier-border.svg"
        }") repeat-x;min-width: ${SCREEN_WIDTH}px;background-size: 80px 20px;min-height: 80px;`,
        child: Label(""),
      }),
    ],
  });

const Bar = ({ monitor } = {}) => {
  return Window({
    name: `bar-${monitor}`, // name has to be unique
    className: "bar",
    monitor,
    margin: [0, 0],
    anchor: ["top", "left", "right"],
    exclusive: true,
    layer: "top",
    child: Box({
      style: "margin-top: 10px;",
      children: [top()],
    }),
  });
};
export default {
  style: css,
  windows: [
    // BottomBar()
    Bar(),
    // you can call it, for each monitor
    // Bar({ monitor: 0 }),
    // Bar({ monitor: 1 })
  ],
};
