if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("rgbdustry").meta.displayName = "[#ff0000]R[][#00ff00]G[][#0000ff]B[][accent]dustry[]";
    });
};

// rgb graphite press
Blocks.graphitePress.buildType = () => extend(GenericCrafter.GenericCrafterBuild, Blocks.graphitePress, {
    draw(){
        if(this.cons.valid()){
            Draw.color(Color.red.cpy().shiftHue(Time.time));
        }else{
            Draw.color();
        }
        Draw.rect("graphite-press", this.x, this.y);
    }
});

// rgb force projector
Blocks.forceProjector.buildType = () => extend(ForceProjector.ForceBuild, Blocks.forceProjector, {
    drawShield(){
        if(!this.broken){
            let radius = this.realRadius();
            
            Draw.z(Layer.shields);
            Draw.color(Color.red.cpy().shiftHue(Time.time), Color.white, Mathf.clamp(this.hit));
            if(Core.settings.getBool("animatedshields")){
                Fill.poly(this.x, this.y, 6, radius);
            }else{
                Lines.stroke(1.5);
                Draw.alpha(0.09 + Mathf.clamp(0.08 * this.hit));
                Fill.poly(this.x, this.y, 6, radius);
                Draw.alpha(1);
                Lines.poly(this.x, this.y, 6, radius);
                Draw.reset();
            }
        }
        Draw.reset();
    }
});
