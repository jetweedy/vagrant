
# Vagrant Tools

These tools and instructions provide some very basic resources for getting an Ubuntu (Bionic 64bit) Linux Box up and Running in VirtualBox using Vagrant. It also lists a few problem points I've encountered along the way (in Windows). I've had an easier time using it consistently in a Linux host, but my work computer is a Windows machine, so... well... here we are.

## Installation of the Box Itself:

Open up a cmd line:

```
vagrant init ubuntu/bionic64
```

Wait until it says it has placed a 'Vagrantfile' in the directory.

COPY THE CONTENTS OF Vagrantfile.txt INTO Vagrantfile

```
vagrant up
```

Wait for a bunch of stuff to happen. (This will take a while.)

Sometimes it seems to have built the box, but hasn't set up ports and sharing right. Go into Virtual Box, right-click the box, and "Close" it (choosing the shut down option). Then from your command line, just repeat...

```
vagrant up
```

Then if it gets where it needs to go (Windows 10 has been finicky!), you can do this from within your 'vagrant' folder (where Vagrantfile is located) to enter your box's command line...

```
vagrant ssh
```

... and this to suspend or halt it

```
vagrant suspend
vagrant halt
```

... and this to bring it up again if it's ever down:

```
vagrant up
```


Once it says you're in, hopefully you'll be able to do the following:

```
cd /vagrant
cd /var/www
```

If so, you're ready to start playing with your new Ubuntu Virtual Box!


## Install Stuff in your Vagrant Box:

Once you're in your box, you can do whatever you want like it's Ubuntu:

### Install Apache:

```
sudo apt-get install apache2 -y
sudo a2enmod rewrite
sudo a2enmod cgi
sudo service apache2 restart
```
In your desktop browser, visit http://localhost:20080
(Port 20080 maps to Port 80 on our virtual box.)

### Install NPM and Node

Install NPM and Node:

```
sudo apt-get install npm -y
sudo npm cache clean -f
sudo npm install -g n
sudo n latest
```

Run the Sample Application:

```
cd /var/www/node
npm install
node sample-node-app.js
```

In your desktop browser, visit http://localhost:13000/
(Port 13000 maps to Port 3000 on our virtual box.)




## Problem Points

Some computers require that you enabel virtualization in the BIOS. There are any number of resources online that you can Google to help you if so. (I don't recall having to on my latest work machine.)

Sometimes you'll run into a problem creating a machine if some old machine files weren't deleted properly. You may have to go into "C:\Users\USERNAME\VirtualBox VMs" and manually delete that.

Sometimes THAT won't be possible because the VM is still running in the background. Hit Ctrl+Alt+Delete to open up Task Manager and stop tasks like VirtualBox Manager and VirtualBox Headless.

Sometimes boxes aren't cleanly deleted from VirtualBox and you'll see the listed in the VirtualBox interface. Stop (if needed) and Remove them (deleting all files) to clean them out. 

Sometimes in an unclean destruction of a VB, the 'box' folder will linger in the folder. Once you've stopped the processes and deleted the VB and what not, you should be able to just delete that box folder to start over.

*Any number of other things can happen, too. Honestly, this stuff is super useful and INCREDIBLY frustrating and shakily constructed, all at once.*