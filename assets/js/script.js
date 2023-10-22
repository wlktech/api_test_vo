$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left left_arrow d-none">',
    nextArrow: '<i class="fas fa-angle-right right_arrow d-none">',
    // rtl: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

$('.responsive1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left left_arrow d-none">',
    nextArrow: '<i class="fas fa-angle-right right_arrow d-none">',
    // rtl: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

$('.responsive2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left left_arrow2">',
    nextArrow: '<i class="fas fa-angle-right right_arrow2">',
    // rtl: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

//  Scroll to top for index.html
// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//music player
// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let ctrlIcon = document.getElementById("ctrlIcon");
// let startTime = document.getElementById('start-time');
// let endTime = document.getElementById('end-time');

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
//     let duration = song.duration;
//     endTime.textContent = formatTime(duration);
// }
// modify codes for timeupdate
// song.addEventListener('timeupdate', function() {
//     const currentTime = song.currentTime;
//     startTime.textContent = formatTime(currentTime);
// });

// function formatTime(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// }
// modify codes for timeupdate

// function playPause(){
//     if(ctrlIcon.classList.contains("fa-pause")){
//         song.pause();
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }else{
//         song.play();
//         ctrlIcon.classList.remove("fa-play");
//         ctrlIcon.classList.add("fa-pause");
//     }
// }

// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500);
// }

// progress.onchange = function(){
//     song.play();
//     song.currentTime = progress.value;
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.remove("fa-play");
// }
//music player


//modified codes
// Get DOM elements
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const startTime = document.getElementById('start-time');
const endTime = document.getElementById('end-time');

// Function to format time
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Event listener for when metadata is loaded
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    endTime.textContent = formatTime(song.duration);
    startTime.textContent = formatTime(song.currentTime); // Add this line
}


// Event listener for time update
song.addEventListener('timeupdate', function() {
    const currentTime = song.currentTime;
    startTime.textContent = formatTime(currentTime);
    progress.value = currentTime;
});

// Event listener for play/pause button
function playPause(){
    if(song.paused){
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }else{
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Event listener for progress bar change
progress.oninput = function(){
    song.currentTime = progress.value;
}

// Update progress bar every 500ms
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);
