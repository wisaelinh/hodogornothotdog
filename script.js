function startUpload() {
  var fileInput = document.getElementById("myFile");

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.readyState === xhr.DONE) {
      if (xhr.status == 200 && xhr.readyState == 4) {
        alert("Successful!");
        console.log(xhr.responseText);
      }
      else {
        alert("Try Again");
      }
    }
  };

  xhr.onerror = function() {
    alert("Error! Upload failed. Can not connect to server.");
  };

  xhr.open("POST", 'https://httpbin.org/post', true);
  xhr.setRequestHeader("Content-Type", fileInput.files[0].type);
  xhr.send(fileInput.files[0]);
  xhr.responseType = "text";
  var body = xhr.response;
  console.log(body);
}

var reader = new FileReader();

function readURL(input) {
  if (input.files && input.files[0]) {

    reader.onload = function (e) {
      document.getElementById('img').src=reader.result;
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$('#myFile').change(function(){
  readURL(this);
})
