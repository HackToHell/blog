+++
date = "2017-03-12T17:34:53+00:00"
title = "Adding multi level commands using spf13 cobra"

+++


We can chain commands pretty simply, say you want to make an app `streamer` that has a sub command `read` and an sub-command of that called `csv` and `json`. You can use the cobra init to generate these separate ones,

> cobra add csv    
> cobra add json   
> cobra add read

Then go into the source file and hook up csv and json with the proper parent, in this case, `readCmd`. 

So we change from 

> RootCmd.AddCommand => readCmd.AddCommand

This allows us to easily create a large tree.