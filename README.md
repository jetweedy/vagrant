
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

Then if it gets where it needs to go (Windows 10 has been finicky!), you can do this to enter your box's command line:

```
vagrant ssh
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
In your desktop browser, visit http://localhost:8880
(Port 20080 maps to Port 20080 on our virtual box.)

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
npm install --no-bin-links
node sample-node-app.js
```

In your desktop browser, visit http://localhost:13000/
(Port 13000 maps to Port 3000 on our virtual box.)


### Install Python

```
sudo apt-get install -y libmysqlclient-dev
sudo apt-get install python -y
sudo apt-get install -y python-pip python-dev
sudo pip install -y --upgrade pip
sudo pip install -y --upgrade setuptools
sudo pip install -y MySQL-python
sudo apt-get install python3 -y
sudo apt-get install -y python3-pip python3-dev
sudo apt install -y python3-mysqldb
sudo service apache2 restart
```