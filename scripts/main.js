if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("rgbdustry").meta.displayName = "[#ff0000]R[][#00ff00]G[][#0000ff]B[][accent]dustry[]";
    });
};

// rgb graphite press
const graphite = new Effect(90, e => {
    Draw.color(Color.red.cpy().shiftHue(Time.time));
    Draw.z(Layer.blockOver)
    Draw.rect(Core.atlas.find("graphite-press"), e.x, e.y)
});
Blocks.graphitePress.craftEffect = graphite;

// rgb force projector (code to steal)
const disco = extend(Block, "disco-projector", {
    localizedName: "Disco Projector",
    description: "It's also square.",
    buildVisibility: BuildVisibility.shown,
    size: 3,
    destructible: true,
    update: true,
    category: Category.effect,
    alwaysUnlocked: true,
    icons(){
        return [Core.atlas.find(this.region)];
    },
    drawPlace(x, y, rot, val){
        Draw.color(Color.red.cpy().shiftHue(Time.time));
        Lines.stroke(1.2);
        Lines.poly(x * Vars.tilesize, y * Vars.tilesize, 4, 216, 45);
    }
});

disco.buildType = () => extend(Building, {
    draw(){
        Draw.z(Layer.block);
        Draw.rect(Core.atlas.find(this.block.region), this.x, this.y)
        Draw.z(Layer.shields);
        Draw.color(Color.red.cpy().shiftHue(Time.time))
        Fill.poly(this.x, this.y, 4, 216, 45);
        Draw.reset();
    }
});
