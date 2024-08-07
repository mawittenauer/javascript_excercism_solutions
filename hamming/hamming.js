export const compute = (str1, str2) => {
    if (str1.length != str2.length)
        throw new Error('strands must be of equal length');

    let count = 0;
    str1.split('').forEach((c, i) => {
        if (c != str2[i])
            count += 1;
    });

    return count;
};
