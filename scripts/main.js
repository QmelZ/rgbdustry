if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("rgbdustry").meta.displayName = "[#ff0000]R[][#00ff00]G[][#0000ff]B[][accent]dustry[]";
    });
};

// rgb graphite press
const graphite = new Effect(90, e => {
    Draw.color(Color.red.cpy().shiftHue(Time.time));
    Lines.line(e.x + 8, e.y, e.x - 8, e.y);
    Lines.line(e.x, e.y + 8, e.x, e.y - 8);
});
Blocks.graphitePress.craftEffect = graphite;
