export const isPangram = (input) => {
    const stripped = input.toLowerCase().replace(/[^a-z]/gi, '');
    const set = new Set(stripped.split(''));
    return set.size >= 26;
};
