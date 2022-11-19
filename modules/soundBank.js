const letters = Array.from({length: 26}).map((elem, i) => String.fromCodePoint(97 + i))

const data = letters.map(elem => [elem,{file: `public/instrumentSounds/${elem}.mp3`}])

export const soundBank = new Map(data)