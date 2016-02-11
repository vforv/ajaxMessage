# Ajax message directive AngularJS

#Usage


Inside controller:
```
//To display error message replace success with error
$scope.message = 'success';
```

Template:
```
<ajax-message is-success="message" message-success="succes message" message-error="error message"></ajax-message>
```

and add directive:

```
<script src="js/ajaxMessageDirective.js"></script>
```
