# Configuring virtual host using apache and nodejs
- Install the following:
    ```sh
    $ sudo a2enmod proxy
    $ sudo a2enmod proxy_http
    $ service apache2 restart
    ```
- Navigate to /etc/apache2/sites-available/
    ```sh
    $ touch <YOUR DOMAIN NAME>.conf
    ```
- Now add following into /etc/apache2/sites-available/<YOUR DOMAIN NAME>.conf
    ><VirtualHost *:80>
        ServerName <YOUR DOMAIN NAME>
        ProxyRequests Off
        ProxyPreserveHost On
        ProxyVia Full
        <Proxy *>
            Require all granted
        </Proxy>
        <Location />
            ProxyPass http://localhost:<YOUR PORT>/
            ProxyPassReverse http://127.0.0.1:<YOUR PORT>
        </Location>
    </VirtualHost>

- Enable the site
    ```sh
    $ sudo a2ensite <YOUR DOMAIN NAME>.conf
    ```
- Add domain to host
    ```sh
    $ sudo gedit /etc/hosts
    ```
    > 127.0.0.1   <YOUR DOMAIN NAME>

- Restart apache server
    ```sh
    $ sudo service apache2 reload
    ```
- Navigate to your nodejs app 
    ```sh
    $ cd ~/path/to/your/nodeapp/app.js
    ```
- Add following in the app.js file:
    >var http = require('http');
    http.createServer(function (request, response) {
       response.writeHead(200, {'Content-Type': 'text/plain'});
       response.end('Node.js is running form site1.\n');
    }).listen(8080);
    console.log('Server running at http://127.0.0.1:8080/');

- Goto the terminal, and type
    ```sh
    $ cd ~/path/to/your/nodeapp/
    $ node app.js
    ```
- In browser type <YOUR DOMAIN NAME>
 
 ## That's it, enjoy!