<br />
<div align="center">
  <img src="public/favicon.png" alt="Logo" width="128" height="128">

<h3 align="center">XML Obfuscator</h3>
  <p align="center">
    Anonamise XMLs from sensitive data
  </p>
</div>

## About The Project

XML Obfuscator can be used to anonymise XML files - removing Key pairs
and adding new and unique key pairs, randomising fields using <a href="https://next.fakerjs.dev/">Faker.JS</a>
and removing any fields specified.

### Getting Started

Download the latest <a href="https://github.com/StockusNedHESA/xml-obfuscator/releases">Release</a> (on the right side), open the index.html file and ready to go.

### Setup - Development

Ensure that Node.js and NPM are installed and functional.

1. Clone the repo
   ```sh
   git clone https://github.com/StockusNedHESA/xml-obfuscator
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Either run or build the project
   ```sh
   npm run dev
   npm run build
   ```

### Usage

Application contains two sections, forming configurations and XML viewer.
Configuration contains:
- Keys - What **Key** should be replaced with the **Replacement increment**
- Randomise - What **Key** should be randomised based on the **type** and **format** should be used with <a href="https://next.fakerjs.dev/">Faker.JS</a>
- Remove - What **Key** should be removed with the value

### Acknowledgments

List of resources used:

* [Vite](https://vitejs.dev/)
* [Typescript](https://www.typescriptlang.org/)\
  <br />

* [Faker.JS](https://www.npmjs.com/package/@faker-js/faker)
* [Fast XML Parser](https://www.npmjs.com/package/fast-xml-parser)
* [XML Formatter](https://www.npmjs.com/package/xml-formatter)
* [Vue](https://www.npmjs.com/package/vue)
* [Vue Debounce](https://www.npmjs.com/package/vue-debounce)
* [Vue Select](https://www.npmjs.com/package/vue-select)
* [Vue Toast Notification](https://www.npmjs.com/package/vue-toast-notification)
* [Vue XML Viewer](https://www.npmjs.com/package/vue3-xml-viewer)