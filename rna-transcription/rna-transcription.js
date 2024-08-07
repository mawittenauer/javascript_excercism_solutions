const DNATORNA = {
    C: 'G',
    G: 'C',
    T: 'A',
    A: 'U'
}

export const toRna = (dna) => {
    return dna.split('').map(c => DNATORNA[c]).join('');
};
