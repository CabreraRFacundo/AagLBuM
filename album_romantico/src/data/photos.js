function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

export const photos = [
    {
        image: "/fotitos/a1.jpg",
    },

    ...shuffle(
        Array.from(
            { length: 16 },
            (_, i) => ({
                image: `/fotitos/a${i + 2}.jpg`,
            })
        )
    ),
];