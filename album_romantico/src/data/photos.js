function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

const firstPhoto = {
    image: `${import.meta.env.BASE_URL}fotitos/a1.jpg`,
};

const lastPhoto = {
    image: `${import.meta.env.BASE_URL}fotitos/a17.jpg`,
};

const middlePhotos = shuffle(
    Array.from({ length: 15 }, (_, i) => ({
        image: `${import.meta.env.BASE_URL}fotitos/a${i + 2}.jpg`,
    }))
);

export const photos = [
    firstPhoto,
    ...middlePhotos,
    lastPhoto,
];