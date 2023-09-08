// Import necessary modules and components
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { format, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getDay, subDays } from 'date-fns';

// Define the component
@Component({
  selector: 'chronus-scheduler',
  templateUrl: 'angular-chronus-scheduler.html',
  styleUrls: ['angular-chronus-scheduler.scss'],
})
export class AngularChronusSchedulerComponent implements OnInit, AfterViewInit {
  // Properties

  // Holds the formatted current date
  currentDate: string = '';


  // Holds the current time
  currentTime: Date = new Date();

  // Holds a list of dates in the schedule
  schedule: Date[] = [];

  // Names of days of the week
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // List of time slots
  timeSlots: string[] = [
    '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM',
    '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM',
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
    '11:59 AM',
   ];

  // Current view (day, week, month)
  currentView: 'day' | 'week' | 'month' = 'month'; // Default view

  // Holds an array of weeks in the month view
  weeks: Date[][] = [];

  // Default to current month and year
  selectedMonth: number = new Date().getMonth();
  selectedYear: number = new Date().getFullYear();

  // Names of months
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Generate an array of years including 5 years before and after the current year
  years: number[] = Array.from({ length: 11 }, (_, i) => new Date().getFullYear() - 5 + i);

  public monthYears: {
  name: string,
  options: { text: string, value: number }[],
  selectedIndex: number
  }[] = [];

  // Reference to an element in the template
  @ViewChild('weekViewContainer') weekViewContainer!: ElementRef;

  // Methods

  // Updates the current time
  updateCurrentTime() {
    this.currentTime = new Date();
  }

  // Lifecycle Hook: Initializes the component
  ngOnInit(): void {
    // Initialize with the current date
    this.currentDate = this.formatDay(new Date());

    //current year and month
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    // index of the current month
    const currentMonthIndex = this.months.findIndex(month => month === this.months[currentMonth]);

     // Dropdown options for month and year
    this.monthYears = [
    {
      name: 'years',
      options: this.years.map(year => ({
          text: year.toString(),
          value: year,
        })),
        selectedIndex: 5,
    },
    {
      name: 'months',
      options: this.months.map((month, index) => ({
          text: month,
          value: index,
        })),
        selectedIndex: currentMonthIndex
    },
  ];

    // Generate initial schedule
    this.generateSchedule();

    // Update the current time periodically (e.g., every minute)
    setInterval(() => {
      this.updateCurrentTime();
    }, 60000); // Update every minute (adjust as needed)
  }

  // Scrolls to the current time in week view
  scrollToCurrentTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const totalMinutes = currentHour * 60 + currentMinutes; // Total minutes from midnight
    const rowHeight = 60; // Height of each row (adjust as needed)

    // Calculate the scroll position based on the time
    const scrollPosition = (totalMinutes / 60) * rowHeight;

    if (this.weekViewContainer.nativeElement) {
     this.weekViewContainer.nativeElement.scrollTop = scrollPosition;
    }
  }

  // Lifecycle Hook: Called after view initialization
  ngAfterViewInit() {
    if (this.currentView === 'week') {
      this.scrollToCurrentTime(); // Scroll to current time on Week View initialization
    }
  }

  // Generates the schedule based on view and selected month/year
  generateSchedule(): void {
    const today = new Date();
    today.setFullYear(this.selectedYear); // Set the selected year
    today.setMonth(this.selectedMonth); // Set the selected month

    this.schedule = [];

    if (this.currentView === 'day') {
      this.schedule.push(today);
    } else if (this.currentView === 'week') {
      const startOfWeekDate = startOfWeek(today);
      for (let i = 0; i < 7; i++) {
        const day = addDays(startOfWeekDate, i);
        this.schedule.push(day);
      }
    } else if (this.currentView === 'month') {
      const firstDayOfMonth = startOfMonth(today);
      const lastDayOfMonth = endOfMonth(today);
      const startOfMonthDay = getDay(firstDayOfMonth);

      this.weeks = [];
      let currentWeek: Date[] = [];

      for (let i = 0; i < startOfMonthDay; i++) {
        const previousMonthDay = subDays(firstDayOfMonth, startOfMonthDay - i);
        currentWeek.push(previousMonthDay);
      }

      for (let currentDay = firstDayOfMonth; currentDay <= lastDayOfMonth; currentDay = addDays(currentDay, 1)) {
        currentWeek.push(currentDay);

        if (getDay(currentDay) === 6) {
          this.weeks.push([...currentWeek]);
          currentWeek = [];
        }
      }

      if (currentWeek.length > 0) {
        this.weeks.push([...currentWeek]);
      }
    }
  }

  // Formats a date to a string
  formatDay(date: Date): string {
    return format(date, 'MMMM dd, yyyy');
  }

  // Formats a date to display day only
  formatDate(date: Date): string {
    return format(date, 'dd');
  }

  // Switches the view (day, week, month)
  switchView(view: 'day' | 'week' | 'month'): void {
    this.currentView = view;
    this.generateSchedule();
  }

  // Changes the displayed month when the user selects a different month
  changeMonth(): void {
    this.generateSchedule();
  }

  // Checks if a given time slot is the current time slot
  isCurrentTimeSlot(timeSlot: string): boolean {
    const currentTime = new Date();
    const [hourMinute, period] = timeSlot.split(' ');
    const [currentHour, currentMinute] = currentTime.toLocaleTimeString().split(':');
    const currentPeriod = currentTime.getHours() < 12 ? 'AM' : 'PM';

    return currentPeriod === period && currentHour === hourMinute.split(':')[0] && currentMinute >= '00' && currentMinute <= '29';
  }

  // Handles the click event on a date
  onDateClick(date: Date) {
    const formattedDate = this.formatDay(date);
    alert(`You clicked on ${formattedDate}`);
  }
}
