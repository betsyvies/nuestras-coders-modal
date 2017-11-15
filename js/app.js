var selectPromo = document.getElementById('select-promo');
var imagesContainer = document.getElementById('images-container');
var subImagesContainer = null;

imagesContainer.addEventListener('click', showModal);

selectPromo.addEventListener('change', showPromo);

var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

var CHILE4 = '4-chile';
var LIMA5 = '5-Lima';
var LIMA6 = '6-Lima';

{/* <img src="../assets/images/4-chile/anais-araya.jpg" alt="anais-araya"> */}

function showCoders(arr, promo) {
  if(subImagesContainer) 
  imagesContainer.removeChild(subImagesContainer);
  subImagesContainer = document.createElement('div');
  imagesContainer.appendChild(subImagesContainer);

  for(var i = 0; i < arr.length; i++) 
    createImage(promo,arr[i]);    
}

function createImage(promo, nombre) {
  var img = document.createElement('img');
    
  img.setAttribute('src', 'assets/images/' + promo + '/' + nombre + '.jpg');
  subImagesContainer.appendChild(img);
}

function showPromo(event) {
  switch(true) {
    case event.target.value === '4chile':
      /*imagesContainer.textContent = '';*/
      showCoders(arr4Chile, CHILE4);
      break;
    case event.target.value === '5lima':
      /*imagesContainer.textContent = '';*/
      showCoders(arr5Lima, LIMA5);
      break;
    case event.target.value === '6lima':
      /*imagesContainer.textContent = '';*/
      showCoders(arr6Lima, LIMA6);
      break;
    default:
      showCoders(arr4Chile, CHILE4);
      showCoders(arr5Lima, LIMA5);
      showCoders(arr6Lima, LIMA6);
  }
}

showCoders(arr4Chile, CHILE4);
showCoders(arr5Lima, LIMA5);
showCoders(arr6Lima, LIMA6);

function showModal(event) {
   var modal = document.creatElement('div');
   body.appendChild(modal);
   modal.className = 'modal';
   modal.appendChild(event.target);
   event.target.className = 'event-target';
   modal.addEventListener('click', function(event) {
     event.target.parentElement.removeChild(event.target);
   })
 };
