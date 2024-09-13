// // SIDEBAR ACTIVE
// const menuItems = document.querySelectorAll('.menu-item');

// //Messages
// const messagesNotification = document.querySelector('#messages-notification');
// const messages = document.querySelector('.messages');
// const message = document.querySelectorAll('.message');
// const messageSearch = document.querySelector('#message-search');

// //Custom Theme
// const theme = document.querySelector('#theme');
// const themeBox = document.querySelector('.customize-theme');
// const fontSizes = document.querySelectorAll('.choose-size span');
// var root = document.querySelector(':root');
// const colorPalette = document.querySelectorAll('.choose-color span');

// const bg1 = document.querySelector('.bg-1');
// const bg2 = document.querySelector('.bg-2');
// const bg3 = document.querySelector('.bg-3');

// //Sidebar


// //Remove active class from all menu items
// const changeActiveItem = () => {
//   menuItems.forEach(item => {
//     item.classList.remove('active');
//   })
// };

// menuItems.forEach(item => {
//   item.addEventListener('click', () => {
//     changeActiveItem();
//     item.classList.add('active');
//     if (item.id != 'notifications') {
//       document.querySelector('#notifications .notifications-popup').style.display = 'none';
//     } else {
//       document.querySelector('#notifications .notifications-popup').style.display = 'block';
//       document.querySelector('#notifications .notification-count').style.display = 'block';
//     };
//   })
// });

// //Messages

// messagesNotification.addEventListener('click', () => {
//   messages.style.boxShadow = '0 0 1rem var(--color-primary)';
//   messagesNotification.querySelector('.notification-count').style.display = 'none';
//   setTimeout(() => {
//     messages.style.boxShadow = 'none';
//   }, 2000)
// })

// //search chat 

// const searchMessage = () => {
//   const val = messageSearch.value.toLowerCase();
//   message.forEach(user => {
//     let name = user.querySelector('h5').textContent.toLowerCase();
//     if (name.indexOf(val) != -1) {
//       user.style.display = 'flex';
//     } else {
//       user.style.display = 'none';
//     }
//   })
// };

// messageSearch.addEventListener('keyup', searchMessage);


// //Custom Theme 

// //OPEN  THEME BOX Function

// const openThemeBox = () => {
//   themeBox.style.display = 'grid';
// }

// //OPEN  THEME BOX Function
// const closeThemeBox = (e) => {
//   if (e.target.classList.contains('customize-theme')) {
//     themeBox.style.display = 'none';
//   }
// }

// //CLOSE  THEME BOX EVENT
// themeBox.addEventListener('click', closeThemeBox);

// //OPEN  THEME BOX EVENT
// theme.addEventListener('click', openThemeBox);

// //Rmoves active class from span
// const removeSizeSelector = () => {
//   fontSizes.forEach(size => {
//     size.classList.remove('active');
//   })
// };


// //Font Sizes 
// fontSizes.forEach(size => {
//   size.addEventListener('click', () => {
//     removeSizeSelector();
//     let fontSize;
//     size.classList.toggle('active');

//     if (size.classList.contains('font-size-1')) {
//       fontSize = '10px';
//       root.style.setProperty('--sticky-top-left', '5.4rem');
//       root.style.setProperty('--sticky-top-right', '5.4rem');

//     } else if (size.classList.contains('font-size-2')) {
//       fontSize = '13px';
//       root.style.setProperty('--sticky-top-left', '5.4rem');
//       root.style.setProperty('--sticky-top-right', '-7rem');

//     } else if (size.classList.contains('font-size-3')) {
//       fontSize = '16px';
//       root.style.setProperty('--sticky-top-left', '-2rem');
//       root.style.setProperty('--sticky-top-right', '-17rem');

//     } else if (size.classList.contains('font-size-4')) {
//       fontSize = '19px';
//       root.style.setProperty('--sticky-top-left', '-5rem');
//       root.style.setProperty('--sticky-top-right', '-25rem');

//     } else if (size.classList.contains('font-size-5')) {
//       fontSize = '22px';
//       root.style.setProperty('--sticky-top-left', '-12rem');
//       root.style.setProperty('--sticky-top-right', '-35rem');
//     }

//     //Change font size of the root html element 
//     document.querySelector('html').style.fontSize = fontSize;
//   });
// });

// const changeActiveColorClass = () => {
//   colorPalette.forEach(colorPicker => {
//       colorPicker.classList.remove('active');
//   });
// };


// //Change Primary Colors
// colorPalette.forEach(color => {
//   color.addEventListener('click', () => {
//     let primaryHue;
//     changeActiveColorClass();

//     if (color.classList.contains('color-1')) {
//       primaryHue = 252;
//     } else if (color.classList.contains('color-2')) {
//       primaryHue = 52;
//     } else if (color.classList.contains('color-3')) {
//       primaryHue = 352;
//     } else if (color.classList.contains('color-4')) {
//       primaryHue = 152;
//     } else if (color.classList.contains('color-5')) {
//       primaryHue = 202;
//     }
//     color.classList.add('active');
//     //Change font size of the root html element 
//     root.style.setProperty('--primary-color-hue', primaryHue)
//   })
// });

// //BACKGROUND COLORS

// let lightColorLightness;
// let whitetColorLightness;
// let darktColorLightness;

// const changeBg = () => {
//   root.style.setProperty('--light-color-lightness', lightColorLightness);
//   root.style.setProperty('--white-color-lightness', whitetColorLightness);
//   root.style.setProperty('--dark-color-lightness', darktColorLightness);
// };

// bg1.addEventListener('click', ()  =>{
//   //active class adding
//   bg1.classList.add('acitve');
  
//   //active class remove
//   bg2.classList.remove('active');
//   bg3.classList.remove('active');
  
//   //Removes customized theme from local storage
//   window.localStorage.reload();
// });

// bg2.addEventListener('click', ()  =>{
//   darktColorLightness = '95%';
//   whitetColorLightness = '20%';
//   lightColorLightness = '15%';

//   //active class adding
//   bg2.classList.add('acitve');
  
//   //active class remove
//   bg1.classList.remove('active');
//   bg3.classList.remove('active');

//   changeBg();
// });

// bg3.addEventListener('click', ()  =>{
//   darktColorLightness = '95%';
//   whitetColorLightness = '10%';
//   lightColorLightness = '0%';

//   //active class adding
//   bg3.classList.add('acitve');
  
//   //active class remove
//   bg1.classList.remove('active');
//   bg2.classList.remove('active');
//   changeBg();
// });



// SIDEBAR ACTIVE
const menuItems = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Custom Theme
const theme = document.querySelector('#theme');
const themeBox = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//Sidebar

//Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('#notifications .notifications-popup').style.display = 'none';
    } else {
      document.querySelector('#notifications .notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'block';
    };
  })
});

//Messages

messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000)
})

//search chat 

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  })
};

messageSearch.addEventListener('keyup', searchMessage);


//Custom Theme 

//OPEN  THEME BOX Function

const openThemeBox = () => {
  themeBox.style.display = 'grid';
}

//OPEN  THEME BOX Function
const closeThemeBox = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeBox.style.display = 'none';
  }
}

//CLOSE  THEME BOX EVENT
themeBox.addEventListener('click', closeThemeBox);

//OPEN  THEME BOX EVENT
theme.addEventListener('click', openThemeBox);

//Rmoves active class from span
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
};


//Font Sizes 
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.add('active'); // Changed from toggle to add

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');

    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');

    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');

    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');

    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }

    //Change font size of the root html element 
    document.querySelector('html').style.fontSize = fontSize;
  });
});

const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
      colorPicker.classList.remove('active');
  });
};


//Change Primary Colors
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();

    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    //Change font size of the root html element 
    root.style.setProperty('--primary-color-hue', primaryHue)
  })
});

//BACKGROUND COLORS

let lightColorLightness;
let whitetColorLightness;
let darktColorLightness;

const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whitetColorLightness);
  root.style.setProperty('--dark-color-lightness', darktColorLightness);
};

bg1.addEventListener('click', ()  =>{
  //active class adding
  bg1.classList.add('active');
  
  //active class remove
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  
  //Removes customized theme from local storage
  window.localStorage.reload();
});

bg2.addEventListener('click', ()  =>{
  darktColorLightness = '95%';
  whitetColorLightness = '20%';
  lightColorLightness = '15%';

  //active class adding
  bg2.classList.add('active');
  
  //active class remove
  bg1.classList.remove('active');
  bg3.classList.remove('active');

  changeBg();
});

bg3.addEventListener('click', ()  =>{
  darktColorLightness = '95%';
  whitetColorLightness = '10%';
  lightColorLightness = '0%';

  //active class adding
  bg3.classList.add('active');
  
  //active class remove
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBg();
});