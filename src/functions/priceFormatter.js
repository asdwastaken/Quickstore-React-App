export const priceFormatter = (price) => Number(((price / 100).toFixed(2)));

export const discountPriceFormatter = (price) => Number(((price / 100) - (price / 100) * 20 / 100).toFixed(2));
