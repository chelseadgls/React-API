export const SliderData = [
  {
    image: 'http://www.metmuseum.org/-/media/images/visit/met-fifth-avenue/fifthave_teaser.jpg?sc_lang=en'
  },
  {
    image: 'https://media.vanityfair.com/photos/5a4e7bb6518d781e720e1059/master/pass/Metropolitan-Museum-of-Art-Tourist-Rate.jpg'
  },
  {
    image: 'https://cdn.britannica.com/27/166627-138-92467E5F/overview-A-World-of-Art-The-Metropolitan.jpg?w=800&h=450&c=crop'
  }
]

// const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
// let metImages = [];

// // API Call
// async function fetchData(randomNum) {
//   let response = await axios.get(url + randomNum);

//   if (response.data.primaryImage.length > 0) {
//     metImages.push(response.data);
//   }

//   if (metImages.length >= 9) {
//     displayImgSource();
//   }
// }

// // Initial Function (calls API appropriate number of times necessary to fill metImages array)
// function init() {
//   for (let i = 0; i < 25; i++) {
//     let min = Math.ceil(1);
//     let max = Math.floor(82000);
//     let randNum = Math.floor(Math.random() * (max - min) + min);
//     fetchData(randNum);
//   }
// }

// init();