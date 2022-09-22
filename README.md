<div align="justify">

<div align="center">

```ocaml
 ✨ hyprland / dreamy / catppuccin ✨
```


## gallery
![cava](./assets/cava.png)
![term](./assets/terminal.png)
https://user-images.githubusercontent.com/77581181/191729869-961bf653-578e-409b-a9cf-3de08e63a65e.mp4

</div>
</div>

## installation
<hr>

# Arch
dependancies
```
hyprland-git waybar-hyprland-git cava waybar-mpris-git python rustup kitty fish wofi xdg-desktop-portal-wlr tty-clock-git swaylockd grim slurp
```
using `paru`
```
paru -S hyprland-git waybar-hyprland-git cava waybar-mpris-git python rustup kitty fish wofi xdg-desktop-portal-wlr tty-clock-git swaylockd grim slurp
```

# moving config files

```bash
cp -r ./config/* ~/.config
```

# building the tools used in this rice

`swww` | wallpaper changer/daemon
```bash
git clone https://github.com/flick0/swww
cd swww
cargo build --release
cp ./target/release/swww ~/.config/hypr/scripts/tools/
```

`rgb-borders` | rgb borders for grouped windows
```bash
git clone https://github.com/flick0/rgb-rs
cd rgb-rs
cargo build --release
cp ./target/release/rgb ~/.config/hypr/scripts/
```



