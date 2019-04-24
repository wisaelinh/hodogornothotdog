var reader = new FileReader();
var isHotDog;

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

function post() {
  const data = new FormData(uploadForm);
  const url = 'http://imagga-proxy.herokuapp.com/v2/tags'
  console.log(data);
  
  fetch(url, { method: 'post', body: data })
    .then(res => res.json())
    .then(handleResponse)
}

function handleResponse({ status, result }) {
  result.tags.forEach(element => {
    if (element.tag.en == "hot dog") {
      isHotDog = true;
    }
  });
  if (!isHotDog) {
    isHotDog = false;
  }
  console.log(isHotDog);
  
}