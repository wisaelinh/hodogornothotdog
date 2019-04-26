var reader = new FileReader();
var isHotDog;
var confidenceLevel;
const url = 'https://imagga-proxy.herokuapp.com/v2/tags'

function init() {
  $('#success').hide();
  $('#fail').hide();
  $('#initial').show();
}

$(document).ready(init());

function readURL(input) {
  if (input.files && input.files[0]) {

    reader.onload = function (e) {
      document.getElementById('local').src=reader.result;
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$('#localFile').change(function(){
  readURL(this);
})

function getImage() {

  var val = $('#url').val()

  if (val) {
    var callURL = url + '?image_url=' + val
    fetch(callURL).then(res => res.json()).then(handleResponse)
  } else {
    alert('Please Enter An Image URL')
  }
}

function post() {
  const data = new FormData(uploadForm);
  fetch(url, { method: 'post', body: data })
    .then(res => res.json())
    .then(handleResponse)
}

function handleResponse({ status, result }) {
  console.log(result);
  
  result.tags.forEach(element => {

    if (element.tag.en == "hot dog") {
      isHotDog = true;
      confidenceLevel = element.confidence;
    }

  });

  if (!isHotDog) {
    isHotDog = false;
  }

  console.log(isHotDog);
  if (isHotDog) {
    $('#success').show()
    $('#initial').hide()
    document.getElementById('isHotdog').innerHTML = "Is a hotdog with " + confidenceLevel + "% accuracy";
  }

  else {
    $('#fail').show()
    $('#initial').hide()

  }
}