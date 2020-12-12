<br />
<p align="center">
  <h3 align="center">Smarti Test - Cars Server</h3>
  <p align="center">
    A cars CRUD project made Laravel 
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Content</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#API">API</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="../doc_images/recording.gif" />
This Repository is server-side, here we cn see the db connotation and the CRUD API.

### Built With

* [Laravel](https://laravel.com/)
* [Xampp](https://www.apachefriends.org/index.html)
* [Mysql](https://www.phpmyadmin.net/)

## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
* xampp
  ```sh
  start xampp my sql
  ```
* DB
  ```sh
    Create `smarti` DB in phpmyadmin 
  ```

### Installation

1. Run migrations
   ```sh
   php artisan migrate
   ```
2. Run the server
   ```sh
     php artisan serve --port=8000
   ```

The serve will start in localhost:8000, **check if the API works by URl - localhost:8000/cars**

#### If The Server don't work
1. Check the phpmyadmin user setting - the server set to user: root, password: none. if need to change, go to .env file and change it.
2. If you get this error `SQLSTATE[HY000] [2002] No connection could be made because the target machine actively refused it.(SQL: select * from cars)` in "http://localhost:8000/cars". check again if mysql is active.

<!-- USAGE EXAMPLES -->
<h3 id="API">API</h3>

1. <b>GET request</b> - http://localhost:8000/cars, give all the cars that in the DB.
2. <b>POST request</b> - http://localhost:8000/cars, add row to cars table. need to have body object - 
```
{
    'company':string('required'),
     'type': string('required'),
     'color':string('required')
}
```
3. <b>PUT request</b> - http://localhost:8000/cars/:id, edit one row (by the id given) in cars table.
4. <b>DELETE request</b> - http://localhost:8000/cars/:id, delete one row (by the id given) in cars table.

