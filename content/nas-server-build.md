+++
title = "NAS and selfhosted server build"
date = "2024-04-23T04:38:03.809845"
+++

While I have officially had a whole load of smaller machines as "selfhosted" servers, they have been adhoc all over the place (raspis are quite fun to stick in random places and then forget about). I have also been running 
on some older laptop hard drives that finally kicked the bucket and I don't have space on my main rig anymore after fiting a 3090 and a 3070 in it. 

I wanted a system that was relatively light on power even if where I live power is reasonably cheap and also didn't want to spend over 250$ on hardware. Thankfully now that ebay.com is a thing in my life, it was pretty easy to source the parts. I used 
the excellent [NAS Killer](https://forums.serverbuilds.net/t/guide-nas-killer-6-0-ddr4-is-finally-cheap/13956) guide as a base for choosing the parts. I did have to meander off the list for motherboard options since almost all of them are out of stock in ebay. 

| Component     | Description                             | Price    |
|---------------|------------------------------------------|----------|
| CPU[used]     | i5-8500t                        | $47.95   |
| Motherboard[used]   |ASUS Prime H370M Plus           | $47.97   |
| PSU           | EVGA 550 BP                              | $77.00   |
| Heatsink      | Thermalright Assassin X120               | $19.00   |
| Case          | Cooler Master N400                       | $82.11   |
| RAM           | Old 32GB (8x4)                           | $0.00    |
| **Total**     |                                          | **$274.03** |

For the main RAID storage, I got  2x `HGST Ultrastar DC HC520 12TB SATA 6Gb 256MB` for about 80$ each which had been running for around 5 years in a datacenter. The power on cycles on both of the drives look extremly good which is great, need to figure out a way to dump this info into git over time so I can keep track of them failing. Boot drive is an old SSD WD green 256GB I had lying around from some time ago. 

The HDD is pretty noisy with some pointed sounds coming out of it, but it's not as annoying as I though it would be so it continues to churn on right next to my main desk, on idle it uses about 45W in total which is not bad at all.

## Software

Running manjaro with btrfs raid 1 on the HDDs, planning to run plex, immich on k3s, but that's for another day.