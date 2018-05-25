## Below are the points that describe new Features and Enhancement in angular 5.

1. Added AOT compilation for development, now we can use "ng serve --aot". It will decrease build and rebuild time which makes development faster.

2. Preserve Whitespace, we used to add tabs, newlines, and spaces in our templates for better readabilty of code, these tabs, newlines, and spaces are included in our build by the compiler. we can now choose whether to keep it in our template or not. this reduces the bundle size.

we can set this option component specific.
@Component({
  templateUrl: 'about.component.html',
  preserveWhitespaces: false
}

or application wide 
"angularCompilerOptions": {
    "preserveWhitespaces": false
},



3. angular 5 have built new number, date, and currency pipes that increase standardization across browsers and eliminate the need for i18n polyfills.
In Angular we have relied on the browser to provide number, date, and currency formatting using browser i18n APIs. This resulted in the need for a polyfill for most developers, meant that we were seeing inconsistent results across browsers.

4. In order to remove even more polyfills, angular have replaced the ReflectiveInjector with the StaticInjector. This injector no longer requires the Reflect polyfill, reducing application size.

5. angular have made zones faster by default, and angular have made it possible to bypass zones entirely for performance focused applications.

To bypass zones, bootstrap our application with ‘noop’ as your ngZone.
platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'}).then( ref => {} );

6, exportAs, we can use multiple name for components / directives.
@Component({
  moduleId: module.id,
  selector: '',
  exportAs: 'matButton, matAnchor',

}

7. We can now run validation and value updates on `blur` or on `submit`, instead of on every input event.

For Template Driven Forms
<input name="firstName" ngModel [ngModelOptions]="{updateOn: 'blur'}">
or 
<form [ngFormOptions]="{updateOn: 'submit'}">

For Reactive Forms
new FormGroup(value, {updateOn: 'blur'}));
new FormControl(value, {updateOn: 'blur', asyncValidators: [myValidator]})



8. New Router Lifecycle Events
Angular have added new lifecycle events to the router, allowing developers to track the cycle of the router from the start of running guards through to completion of activation. These events could be used for things such as showing a spinner on a specific router outlet when a child is updating or to measure performance of guards and/or resolvers.
The new events (in sequence) are GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd. An example of using these events to start/stop a spinner might look like this:

class MyComponent {
  constructor(public router: Router, spinner: Spinner) {
    router.events.subscribe(e => {
      if (e instanceof ChildActivationStart) {
        spinner.start(e.route);
      } else if (e instanceof ChildActivationEnd) {
        spinner.end(e.route);
      }
    });
  }
}

