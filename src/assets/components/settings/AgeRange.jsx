
export default function ageRange (min, max, intervalle = 1){
    const length = (max - min) / intervalle + 1;
    const arr = Array.from({length }, (_, i) => min + i * intervalle);
    return arr;
}