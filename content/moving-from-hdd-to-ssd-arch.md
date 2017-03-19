+++
date = "2017-03-19T13:51:47+00:00"
title = "Moving from HDD to SSD with Arch Linux"

+++


Was scouting out a SSD for my laptop and I found the 2 year old EVO 850 series to be the right combination of performance vs reliability. I got the 250 GB one as it was within my 10k budget. I also got a metal mounting bracket, (plastic ones don't conduct heat). Originally the plan was to have the HDD in the bracket but ended up having the SSD in there.

The EVO does have some little issues though, it's made of TLC NAND which has rather slow write performance compared to SLC NAND, samsung address this problem by having an TLC NAND cache, called TurboWrite which is 3GB. After the initial 3GB write speeds are going to slow down by about 220 MB/s. (From 520 to 300). You should read up Anand Tech's review of the SSD for a more detailed analysis(http://www.anandtech.com/show/8747/samsung-ssd-850-evo-review/2). The drive is rated at 75 TBW with a five year warranty but it should be able to go way more than that.

For my use case, mainly speeding up Idea and Pycharm, it's not going to come close to that limit in 5 years. I have been running arch linux for a while now and decided to simply copy it over instead of spending time reinstalling it on the SSD. I had installed it on a 100 GB partition and was only using about 50 gigs, so I could copy it over easily.

The installing part was fairly simple, the CD -> HDD bracket dimensions were a little bit off and I had to apply a bit of force to get it to slide in. Then booted from my USB drive into elementary linux and continued from there. Used this as the reference for the copy https://jivoi.github.io/2016/04/04/move-from-hdd-to-ssd-with-archlinux/.

Used GPT and I had to create a 2mb bios partition otherwise grub install would refuse to work. Good thing I left out 4 mb before the first partition otherwise I would have had to delete all the data and do it from the beginning. The other partition was good old ext4.

```
mount /dev/sdb2 /mnt
mkdir /mnt_old
mount /dev/sda9 /mnt_old
rsync -aAXv --progress /mnt_old/ /mnt
```
Note the forward slash on `mnt_old` miss that and there will be a folder called mnt_old inside `mnt`.

Then I edited the fstab file with the UUID of the new partition, found using the `blkid` command and pointed `/` at it. Then had to chroot into arch to install grub. 

```
$ mount --bind /dev /mnt/dev
$ mount --bind /proc /mnt/proc
$ mount --bind /sys /mnt/sys
$ chroot /mnt /bin/bash
```
I realized that I didn't have grub package in arch, tried to install via pacman and it worked! (surprise). Need to learn more about chroots. Then the good old grub-install pushed the config to /boot

```
$ grub-install --debug --recheck /dev/sdb
$ grub-install --target=i386-pc --debug --recheck /dev/sdb
$ grub-mkconfig -o /boot/grub/grub.cfg
```

Rebooted and changed the boot order to boot from the SSD instead of the HDD and that was pretty much it. Went smoother than I anticipated. 

Post install I enabled the fstrim service `systemctl enable fstrim.service` and added the noatime to the mount parameters in fstab. 

There's also this handy script I found on Stack Overflow for checking the data written to the SSD.

<script src="https://gist.github.com/HackToHell/7c658179c24be63bdf739978b97f313a.js"></script>