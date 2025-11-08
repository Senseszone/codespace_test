export const TILE_SIZE = { w: 166, h: 166 }; // fixní velikost jedné buňky
export const GRID = { rows: 10, cols: 10 };
export const PLAYFIELD = { w: 3520, h: 1840 }; // cílová plocha

export const EVENTS = { START: "START", HIT: "HIT", ERROR: "ERROR", END: "END" };

export const MODE = {
  WAIT: "WAIT",   // pole svítí do timeoutu nebo kliknutí
  CATCH: "CATCH"  // pole se posouvá časem bez ohledu na klik
};

// sjednocené názvy metrik
export const METRICS = {
  Completion_Time: 0,
  Reaction_Time_Avg: 0,
  Reaction_Time_List: [],
  Hits: 0,
  Errors: 0,
  Total_Lines: 0,
  Final_Speed: 0
};
