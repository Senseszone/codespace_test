// Výpočet columnGap/rowGap tak, aby se 10×10 grid rozprostřel přes herní plochu,
// při zachování fixní velikosti dlaždic 166×166 px.
export function computeGaps(containerW, containerH, cols, rows, tileW, tileH) {
  const totalTilesW = cols * tileW;
  const totalTilesH = rows * tileH;

  const remW = Math.max(containerW - totalTilesW, 0);
  const remH = Math.max(containerH - totalTilesH, 0);

  const colGaps = Math.max(cols - 1, 1);
  const rowGaps = Math.max(rows - 1, 1);

  const columnGap = remW / colGaps;
  const rowGap = remH / rowGaps;

  // vnější odsazení: rozdělíme rovnoměrně po stranách, aby mřížka zůstala centrovaná
  const padX = Math.max((containerW - (totalTilesW + columnGap * (cols - 1))) / 2, 0);
  const padY = Math.max((containerH - (totalTilesH + rowGap * (rows - 1))) / 2, 0);

  return { columnGap, rowGap, padX, padY };
}
