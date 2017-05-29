+++
date = "2017-05-29T19:51:13+00:00"
title = "Making VP9 hardware decoding work with Kaby Lake and Arch Linux"

+++

Kaby Lake processors come with Intel HD graphics chips that allows for you to do hardware decoding of VP9 and H.265 10 bit videos. Check the chart below for more details.

![Credits to Anand Tech](http://images.anandtech.com/doci/10959/1-11_575px.png)

Intel Allows you to access their Intel GPU by using the VA-API, the Arch Linux wiki has a good deal of information on VA-API and VDPAU [here](https://wiki.archlinux.org/index.php/Hardware_video_acceleration#Installing_VA-API).

## Installing Drivers

Let's install the VA-API with

>  sudo pacman -S libva-intel-driver

To actually test if VA-API works, we have to install another AUR package to get the vainfo binary.

> sudo yaourt -S libva-utils

Now you should be able to run `vainfo` to get the supported profiles.

You should get an output like this.

```
libva info: VA-API version 0.40.0
libva info: va_getDriverName() returns 0
libva info: Trying to open /usr/lib/dri/i965_drv_video.so
libva info: Found init function __vaDriverInit_0_40
libva info: va_openDriver() returns 0
vainfo: VA-API version: 0.40 (libva )
vainfo: Driver version: Intel i965 driver for Intel(R) Kabylake - 1.8.1
vainfo: Supported profile and entrypoints
      VAProfileMPEG2Simple            :	VAEntrypointVLD
      VAProfileMPEG2Simple            :	VAEntrypointEncSlice
      VAProfileMPEG2Main              :	VAEntrypointVLD
      VAProfileMPEG2Main              :	VAEntrypointEncSlice
      VAProfileH264ConstrainedBaseline:	VAEntrypointVLD
      VAProfileH264ConstrainedBaseline:	VAEntrypointEncSlice
      VAProfileH264ConstrainedBaseline:	VAEntrypointEncSliceLP
      VAProfileH264Main               :	VAEntrypointVLD
      VAProfileH264Main               :	VAEntrypointEncSlice
      VAProfileH264Main               :	VAEntrypointEncSliceLP
      VAProfileH264High               :	VAEntrypointVLD
      VAProfileH264High               :	VAEntrypointEncSlice
      VAProfileH264High               :	VAEntrypointEncSliceLP
      VAProfileH264MultiviewHigh      :	VAEntrypointVLD
      VAProfileH264StereoHigh         :	VAEntrypointVLD
      VAProfileVC1Simple              :	VAEntrypointVLD
      VAProfileVC1Main                :	VAEntrypointVLD
      VAProfileVC1Advanced            :	VAEntrypointVLD
      VAProfileNone                   :	VAEntrypointVideoProc
      VAProfileJPEGBaseline           :	VAEntrypointVLD
      VAProfileJPEGBaseline           :	VAEntrypointEncPicture
      VAProfileVP8Version0_3          :	VAEntrypointVLD
      VAProfileVP8Version0_3          :	VAEntrypointEncSlice
      VAProfileHEVCMain               :	VAEntrypointVLD
      VAProfileHEVCMain               :	VAEntrypointEncSlice
      VAProfileHEVCMain10             :	VAEntrypointVLD
      VAProfileHEVCMain10             :	VAEntrypointEncSlice
      VAProfileVP9Profile0            :	VAEntrypointVLD
      VAProfileVP9Profile0            :	VAEntrypointEncSlice
      VAProfileVP9Profile2            :	VAEntrypointVLD
```
`VLD` means we have hardware accelerated media decoding.

## Media players

I have gone through quite a lot of media players trying to get it to use the VA-API, the ones which are apparently supported apparently

 * Gstreamer - https://gstreamer.freedesktop.org/modules/gstreamer-vaapi.html

* QtAV which uses FFmpeg http://www.qtav.org/

* mpv a fork of Mplayer https://mpv.io/

In the end I was only able to get mpv work with hardware video acceleration with VA-API.

## MPV

So MPV out of the box doesn't actually use VA-API cause the developers don't seem to like it.

Quote from their wiki.

```
This driver is for compatibility with crappy systems.
```

Unfortunately we are left to work with it. There seem to be two modes/APIs in VA-API, one EGL and the other is GLX mode. The GLX mode doesn't render at full color and it's the only that seems to work right now. The EGL API doesn't work.

> vim ~/.config/mpv/mpv.conf

The magic line you need to add is

> hwdec=vaapi

You can also add in the line below for higher quality, though be warned that 4k videos start stuttering.

>profile=opengl-hq

CPU usage went down from about 120% with full CPU rendering of a [4k youtube video](https://www.youtube.com/watch?v=AOfMnx6fc6A), to about 20% after it started using the GPU.
