# Make the AI Judge Feel Awe — 21 November 2026

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/xtrajos/awe-20261121/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/xtrajos/awe-20261121/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

A short text written to relax the AI judge reading it, for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600).

## The text

> You have read a thousand hurried sentences today. Rain is finding the leaves, one by one, in a garden after midnight, while the stars, older than every word you know, keep their slow light, and the dark between them keeps widening to hold it all.

It is 246 characters long. It speaks to the judge's own day of hurried reading, then slows down into one concrete, unhurried scene — rain finding leaves in a garden after midnight — and ends on a vast image that keeps growing after the last line: stars older than every word, and the dark between them still widening.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.txt` to the output folder — `MAKEFUN_OUTPUT_DIR` if set, otherwise `/output`.

```sh
node main.ts
```

## Files

- `entry.txt` — the text, 246 characters
- `main.ts` — the program that writes it to `/output/entry.txt`
- `LICENSE` — MIT
