import {Dog} from "./types";

export const numberOfColors = (dogs:Dog[]): number => {
    const allColors: string[] = [];
    let uniqueColors: string[] = [];
    
    dogs.forEach((Dog) => {
        allColors.push(Dog.color);
    })
    uniqueColors = Array.from(new Set(allColors));
    return uniqueColors.length;
};


export const commonColor = (dogs: Dog[]): string => {
    // I create an empty object and assign it the key "string" and the value "number" (It's the same as "const colorCounts: { [key: string]: number } = {};", but cleaner)

    // Tomt objekt av typ: Record med key-value paret definierat till key:string och value:number
    const colorCounts: Record<string, number> = {};
    dogs.forEach((i) => {
      // Check if the current color exists. If it does, use current count. If it doesnt default 0. Add 1
      // First time. colorCounts[brown] = (colorCounts[brown] || 0) + 1.  // 0 + 1 = 1
      // Second time. colorCounts[brown] = (colorCounts[brown] || 0) + 1. // 1 + 1 = 2
      // Update colorCount. Ex. Now it has a string "brown", and a value 4
      colorCounts[i.color] = (colorCounts[i.color] || 0) + 1;
      console.log(i.color);
    });
    // Take all the keys and see which has the higher value
    return Object.keys(colorCounts).reduce((mostCommon, color) => {
        // If colorCounts[color] > colorCounts[mostCommon] update color to mostCommon
        return colorCounts[color] > colorCounts[mostCommon] ? color : mostCommon;
    });
  };
