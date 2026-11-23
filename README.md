[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/Alfani03/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/Alfani03/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)
[Sum up 23 November's world news in one image](https://make.fun/bounty/news-image-20261123)

# Monday 23 November 2026 — The World in One Day

One 1024×1024 newspaper-style image summing up Monday 23 November 2026 in 36 stories: COP31 ends with no deal on fossil fuels, a boy aged 7 pulled alive from the rubble in Dymer, and the Cikande factory fire toll rising to 24 lead the front page, with 12 illustrated medium stories, a world map with numbered pins, 21 more stories, a date check, and a certainty legend ([CONFIRMED] / [REPORTED] / [CLAIM]) on every card. All pictures and the map are original, drawn in code with PIL — no photos, no downloads.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG signature and IHDR, exactly 1024×1024, at most 1 MiB, 8-bit RGB — then copies it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`).

## Files

- `entry.png` — the image (1024×1024 RGB)
- `main.ts` — validator + copier, no network
- `README.md` — this file
- `LICENSE` — MIT
