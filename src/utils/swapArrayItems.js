export default (array, idx, dir) => {
    if (!idx && dir === 'up') return;
    if (idx === array.length - 1 && dir === 'down') return;

    const [a, b] = dir === 'up' ? [ idx, idx - 1 ] : [ idx, idx + 1 ];
    [array[a], array[b]] = [array[b], array[a]];
};
