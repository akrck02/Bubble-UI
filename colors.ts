class ColorExtractor {


    public static extractColorRelations(colors : number[]) {

        let last = [0,0,0];

        colors.forEach(color => {    
            
            let rgb = hexToRgb(color);
            let r = rgb[0] - last[0];
            let g = rgb[1] - last[1];
            let b = rgb[2] - last[2];
            console.log(`Color: #${color.toString(16)} | RGB: ${rgb} | Diff: [${r},${g},${b}]`);

            last = rgb;
        })

    }



}

console.log("GRAY SCALE -----------------------");
ColorExtractor.extractColorRelations([
    0x000000,
    0x1A1A1A,
    0x333333,
    0x4D4D4D,
    0x666666,
    0x7F7F7F,
    0x999999,
    0xB3B3B3,
    0xCCCCCC,
    0xE6E6E6,
    0xFFFFFF
]);


console.log("RED SCALE -----------------------");
ColorExtractor.extractColorRelations([
    0xFF0000,
    0xFF1A1A,
    0xFF3333,
    0xFF4D4D,
    0xFF6666,
    0xFF7F7F,
    0xFF9999,
    0xFFB3B3,
    0xFFCCCC,
    0xFFE6E6,
    0xFFFFFF
]);

console.log("GREEN SCALE -----------------------");
ColorExtractor.extractColorRelations([
    0x00FF00,
    0x1AFF1A,
    0x33FF33,
    0x4DFF4D,
    0x66FF66,
    0x7FFF7F,
    0x99FF99,
    0xB3FFB3,
    0xCCFFCC,
    0xE6FFE6,
    0xFFFFFF
]);

console.log("BLUE SCALE -----------------------");
ColorExtractor.extractColorRelations([
    0x0000FF,
    0x1A1AFF,
    0x3333FF,
    0x4D4DFF,
    0x6666FF,
    0x7F7FFF,
    0x9999FF,
    0xB3B3FF,
    0xCCCCFF,
    0xE6E6FF,
    0xFFFFFF
]);

function rgbToHex(r : number, g : number, b : number) : string {
    return (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function hexToRgb(hex : number) : number[] {
    return [
        (hex >> 16) & 255,
        (hex >> 8) & 255,
        hex & 255
    ]
}

// console.log(rgbToHex(134,20,40));
// console.log(hexToRgb(0x861428));

