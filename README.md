# Chronus

This repository contains two projects:

- [Angular Chronus Scheduler Library](projects/angular-chronus-scheduler): A custom Angular library for scheduling.
- [Chronus Demo Site](chronus-demo): An Ionic Angular project demonstrating the usage of the Angular Chronus Scheduler Library.

## Angular Chronus Scheduler Library

The Angular Chronus Scheduler is a custom Angular library that provides scheduling functionality. It includes features for managing schedules on a daily, weekly, and monthly basis.

### Usage

To use the Angular Chronus Scheduler in your project, follow these steps:

1. Install the library using npm:

   ```bash
   npm install angular-chronus-scheduler
   ```

2. Import the module in your application:

   ```typescript
   import { AngularChronusSchedulerModule } from 'angular-chronus-scheduler';

   @NgModule({
     imports: [AngularChronusSchedulerModule],
     // ...
   })
   export class YourModule { }
   ```

3. Use the `chronus-scheduler` component in your templates:

   ```html
   <chronus-scheduler></chronus-scheduler>
   ```

## Chronus Demo Site

The Chronus Demo Site is an Ionic Angular project that showcases the usage of the Angular Chronus Scheduler Library. It provides examples and demonstrations of various scheduling scenarios.

### Development Server

To run the demo site locally, follow these steps:

1. Navigate to the `chronus-demo` directory:

   ```bash
   cd chronus-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   ionic serve
   ```

The application will automatically reload if you change any of the source files.

## Development

- For library development, refer to the [Angular Chronus Scheduler Library documentation](projects/angular-chronus-scheduler/README.md).
- For demo site development, refer to the [Chronus Demo Site documentation](chronus-demo/README.md).

## Build

- To build the library, run `ng build angular-chronus-scheduler`.
- To build the demo site, run `ionic build` within the `chronus-demo` directory.

## Running Tests

- Unit tests for the library can be executed via Karma by running `ng test angular-chronus-scheduler`.
- End-to-end tests for the demo site can be executed using Protractor.

For additional help, refer to the respective documentation for each project.
