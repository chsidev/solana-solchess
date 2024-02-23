import * as BufferLayout from "buffer-layout";

export const gameAccountDataLayout = BufferLayout.struct([
  BufferLayout.seq(BufferLayout.u8(), 138, "game_arr"),
]);
# Change 1 on 2024-02-23
