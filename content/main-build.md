+++
title = "Main Desktop Build and Pain Points"
date = "2024-06-03T00:49:28.235361"
+++

Documenting my current main desktop build.

| Component                          | Description                             | Price  |
|------------------------------------|-----------------------------------------|--------|
| CPU                                | 3900x                                   | 100?   |
| Motherboard                        | ASUS AM4 TUF Gaming X570-Plus           | 214    |
| PSU                                | MONTECH Titan Gold 1200W                | 189    |
| Fans                               | ARCTIC P12 PWM PST                      | 40     |
| RAM                                | G.SKILL Ripjaws V DDR4 RAM 64GB (2x32GB) 3600MT/S | 129    |
| Case                               | CORSAIR 4000D                           | 89.99  |
| GPU                                | Nvidia Founder Edition 3070             | 600    |
| GPU                                | Zotac GeForce RTX 3090 Trinity (used)   | 760    |
| Cooler                             | Liquid Freezer II 240                   | 86     |
|                                    | **Total**                               | **2207.99** |

Most of this build was slowly updated/evolved over time with a lot of changes when I moved. The majority of them were trying to accommodate a dual GPU system on a budget (just don't). I updated from the Steel Legend B450 to the X570-Plus, and it's honestly one of the few X570 being produced right now. Technically, it can run both GPUs with one at 8x instead of full width 16x (my thinking was if I run 2x3090, I am going to NVLink them, and it doesn't matter as much). Of course, there's not enough space for 2 fat 3090s. I will probably update this to run 2 liquid-cooled 3090s at some point, but at this point, it's more trouble than it's worth.

Some things I messed up were the PSU connections. The Titan Gold implements the ATX 3.0 spec, so that means there's the 12VHPWR cable, except they melt, so now there's a newer version of it which is kinda compatible with this? I would honestly avoid all this. The 12VHPWR cable which comes with this isn't compatible with the 3070 I have since it doesn't support the sense pins (feels like USB 3.0 specs all over again). Without the 600W output from the PSU, I couldn't power the extra cable to the motherboard which normally wouldn't matter but was bothering me with the 3900x and 2 GPUs each sucking 75W from the socket, so I ended up getting a 12VHPWR to 8 pin female and plugging half of the 3090 into it. TL;DR get the normal non-ATX 3.0 PSU as of June 2024.

The chipset fan on the motherboard is also unbelievably loud and extremely whiny, so now I eternally run fan control *eyeroll*.


In terms of future upgrades, will probably throw in a 5950x and more ram if needed(though it would be wasted if I jump to 7900x)