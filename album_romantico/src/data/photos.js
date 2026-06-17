function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

export const photos = shuffle(
    Array.from({ length: 17 }, (_, i) => ({
        image: `${import.meta.env.BASE_URL}fotitos/a${i + 1}.jpg`,
    }))
);