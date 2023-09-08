# Angular Chronus Scheduler Library

The Angular Chronus Scheduler is a custom Angular library that provides scheduling functionality. It includes features for managing schedules on a daily, weekly, and monthly basis.

## Installation

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
