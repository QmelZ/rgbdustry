if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("rgb-graphite-press").meta.displayName = "[#ff0000]R[][#00ff00]G[][#0000ff]B[] [#b2c6d2]Graphite[] [lightgray]Press[]";
    });
};

var h = ["000000", "ff0000", "00ff00", "0000ff", "00ffff", "ff00ff", "ffff00", "ffffff"];
const effect1 = new Effect(90, e => {
    Draw.color(Color.valueOf(h[Mathf.floorPositive(Time.time % 90 / 11.25)]));
    Lines.line(e.x + 8, e.y, e.x - 8, e.y);
    Lines.line(e.x, e.y + 8, e.x, e.y - 8);
});
Blocks.graphitePress.craftEffect = effect1;
