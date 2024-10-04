import { cryptoData, cryptoAssets } from "./data";

export function faceFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
}

// 1000 = 1s
// 100 = 1ms
// 1 = 1ms / 100

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1);
  });
}
