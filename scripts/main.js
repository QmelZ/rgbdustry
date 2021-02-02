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
        Lines.poly(x * Vars.tilesize, y * Vars.tilesize, 4, 216, Time.time);
    }
});

disco.buildType = () => extend(Building, {
    draw(){
        Draw.z(Layer.block);
        Draw.rect(Core.atlas.find(this.block.region), this.x, this.y);
        
        Draw.z(Layer.shields);
        Draw.color(Color.red.cpy().shiftHue(Time.time));
        if(Core.settings.getBool("animatedshields")){
            Fill.poly(x, y, 4, radius);
        }else{
            Lines.stroke(1.5);
            Draw.alpha(0.17);
            Fill.poly(x, y, 4, radius);
            Draw.alpha(1);
            Lines.poly(x, y, 4, radius);
            Draw.reset();
        }
        
        Draw.reset();
    }
});
