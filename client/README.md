<br />
<p align="center">
  <h3 align="center">Smarti Test - Cars Client</h3>
  <p align="center">
    A cars CRUD project made Angular 
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
    <li><a href="#Components">Components</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="../doc_images/recording.gif" />
This Repository is client-side, here we can see the UI architecture.

### Built With
* [Angular](https://angular.io/)
* [bootstrap](https://getbootstrap.com/)


## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
If you don't have the Angular CLI installed on your computer it's recommended to download it for better control.
   ```sh
   npm install -g @angular/cli
   ```

### Installation

1. Run the client
   ```sh
   ng serve --open
   ```
the client will be live in localhost:4200

<!-- USAGE EXAMPLES -->
<h3 id="Components">Components</h3>

1. <b>App</b> - app.component.ts is the main controller it will control on all the other components.
2. <b>Popup</b> - The delete row option (when the user presses on the row in the table). this component is general for reuse on different states (if we need pop up of other functionality).
3. <b>Table</b> - show the cars data in table.
4. <b>Form</b> - use for create form and edit form, can be reused for other functionality.



