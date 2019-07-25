# FormCompare

FormCompare.js is a jQuery plugin to compare html form fields value changes upon submittion, and post the detailed changes.



## Usage

HTML
```html
<form id="testform" action="" method="post">
    <input type="text" name="email" >
    <input type="text" name="phone" >
    <input type="text" name="postal" >
    <input type="text" name="address" >
    <input type="checkbox" name="somecheckbox" type="checkbox">
    <textarea name="sometextarea"></textarea>
    <select name="someselect></select>
    <button type="submit">Submit</button>
</form>

<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="yourpath/FormCompare.js"></script>
```

JavaScript
```javascript

//compare specific fields
var field = "email,postal,address" //specify the specific field to compare
var element = "input,textarea" //specify the element to compare

#('#testform').FormCompare(field,element)

//compare all fields
var element = "input,textarea"

#('#testform').FormCompare('ALL',element)
```

JSON object in form post request
```console
{  
  "email":{
                 "Field":"email",
                 "from":"123@example.com",
                 "changed to":"abc@example.com"
          },
  "postal":{
                 "Field":"postal",
                 "from":"A1AB1B",
                 "changed to":"A1AB2B"
          },
  "address":{
                 "Field":"address",
                 "from":"123 street",
                 "changed to":"abc street"
          }
}
```






