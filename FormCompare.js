
/*
Audit form field change upon form submittion, post change details to backend, by Xiaolong Liu
Copyright 2019 Xiaolong Liu


*/

(function($) {

  $.fn.FormCompare = function(fieldInclude, element) {
    formId = this.attr("id");

    var elements = document.querySelectorAll("#" + formId + " " + element);
    var fieldOld = {};

    for (var i = 0, element; (element = elements[i++]); ) {
      if (element.type == "checkbox") {
        fieldOld[element.name] = element.checked;
      } else {
        fieldOld[element.name] = element.value;
      }
    }

    $(this).submit(function() {
      var fieldChanged = {};
      for (var i = 0, element; (element = elements[i++]); ) {
        if (element.type == "checkbox") {
          if (fieldOld[element.name] !== element.checked) {
            var checkMsg = "unchecked";
            if (element.checked) {
              checkMsg = "checked";
            }
            if (fieldOld[element.name]) {
              fieldOld[element.name] = "checked";
            } else {
              fieldOld[element.name] = "unchecked";
            }
            fieldChanged[element.name] = {
              Field: element.name + "-" + element.value,
              from: fieldOld[element.name],
              "changed to": checkMsg
            };
          }
        } else {
          if (fieldInclude === "ALL") {
            if (fieldOld[element.name] !== element.value) {
              fieldChanged[element.name] = {
                Field: element.name,
                from: fieldOld[element.name],
                "changed to": element.value
              };
            }
          } else {
            if (
              fieldOld[element.name] !== element.value &&
              fieldInclude.includes(element.name)
            ) {
              fieldChanged[element.name] = {
                Field: element.name,
                from: fieldOld[element.name],
                "changed to": element.value
              };
            }
          }
        }
      }

      $(this).append(
        "<input type='hidden' id='formCompare'  name='formCompare'>"
      );
      if (Object.keys(fieldChanged).length === 0) {
        $("#formCompare").val("No changes made to the target fields");
      } else {
        $("#formCompare").val(JSON.stringify(fieldChanged));
      }
    });
  };
  
})(jQuery);
