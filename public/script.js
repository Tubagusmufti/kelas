//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex');
        toTop.classList.add('hidden')
    }
};


// burger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-activ');
    navMenu.classList.toggle('hidden');
});


//klik luar burger
window.addEventListener('click', function (e){
    if (e.target != burger && e.target != navMenu) {
        burger.classList.remove('burger-activ');
        navMenu.classList.add('hidden');
    }
});

//dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const image = document.getElementById('image');
const darkImage = document.getElementById('dark-image');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


//pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    darkToggle.checked = true;
}else{
    darkToggle.checked = false;
}

darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
    image.style.display = 'none';
    darkImage.style.display = 'block';
    } else {
    image.style.display = 'block';
    darkImage.style.display = 'none';
    }
   });



   document.addEventListener("DOMContentLoaded", function (){
    new TypeIt("#ty", {
        waitUntilVisible: true,
      })
        .type("")
        .exec(async () => {
          //-- Return a promise that resolves after something happens.
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve();
            }, 2000);
          });
        })
        .type("")
        .go();

    })

    document.addEventListener("DOMContentLoaded", function() {
        const hariList = document.querySelectorAll("#jadwal li");
        const bukaN = document.getElementById('bukaN');

        hariList.forEach((hari) => {
            hari.classList.remove("buka");

            const tombolBuka = hari.querySelector(".cursor-pointer");
            tombolBuka.addEventListener("click", function() {
                if (hari.classList.toggle("buka")){
                    tombolBuka.innerHTML = 'tutup';
                }else{
                    tombolBuka.innerHTML = 'buka';
                }
            });

            
            

        });

        const minggu1 = document.getElementById('minggu1');
        const minggu2 = document.getElementById('minggu2');
        const minggu3 = document.getElementById('minggu3');
        const hariListMinggu1 = document.querySelectorAll("#jadwal .minggu1");
        const hariListMinggu2 = document.querySelectorAll("#jadwal .minggu2");
        const hariListMinggu3 = document.querySelectorAll("#jadwal .minggu3");


       

        minggu1.addEventListener("click", function() {
            minggu1.classList.add("buka");
            minggu2.classList.remove("buka");
            minggu3.classList.remove("buka");

            hariListMinggu2.forEach((hari) => {
                hari.classList.add("hidden");
            });

            hariListMinggu3.forEach((hari) => {
                hari.classList.add("hidden");
            });

            hariListMinggu1.forEach((hari) => {
                hari.classList.remove("hidden");
            });
        });

        minggu2.addEventListener("click", function() {
            minggu2.classList.add("buka");
            minggu1.classList.remove("buka");
            minggu3.classList.remove("buka");

            hariListMinggu1.forEach((hari) => {
                hari.classList.add("hidden");
            });
            
            hariListMinggu3.forEach((hari) => {
                hari.classList.add("hidden");
            });

            hariListMinggu2.forEach((hari) => {
                hari.classList.remove("hidden");
            });

        });

       minggu3.addEventListener("click", function() {
            minggu3.classList.add("buka");
            minggu1.classList.remove("buka");
            minggu2.classList.remove("buka");

            hariListMinggu1.forEach((hari) => {
                hari.classList.add("hidden");
            });

            hariListMinggu2.forEach((hari) => {
                hari.classList.add("hidden");
            });

            hariListMinggu3.forEach((hari) => {
                hari.classList.remove("hidden");
            });

           
        });
    });

    function toggleText() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var button = document.getElementById("button");

        if (dots.classList.contains("hidden")) {
            dots.classList.remove("hidden");
            moreText.classList.add("hidden");
            button.innerHTML = "Read more";
        } else {
            dots.classList.add("hidden");
            moreText.classList.remove("hidden");
            button.innerHTML = "Read less";
        }
    }
    function toggleText1() {
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var button = document.getElementById("button1");

        if (dots.classList.contains("hidden")) {
            dots.classList.remove("hidden");
            moreText.classList.add("hidden");
            button.innerHTML = "Read more";
        } else {
            dots.classList.add("hidden");
            moreText.classList.remove("hidden");
            button.innerHTML = "Read less";
        }
    }

// function toggleText() {
    //     var dots = document.getElementById("dots");
    //     var moreText = document.getElementById("more");
    //     var button = document.getElementById("button");

    //     if (dots.classList.contains("hidden")) {
    //         dots.classList.remove("hidden");
    //         moreText.classList.add("hidden");
    //         button.innerHTML = "Read more";
    //     } else {
    //         dots.classList.add("hidden");
    //         moreText.classList.remove("hidden");
    //         button.innerHTML = "Read less";
    //     }
    // }
    // function toggleText() {
    //     var dots = document.getElementById("dots");
    //     var moreText = document.getElementById("more");
    //     var button = document.getElementById("button");

    //     if (dots.classList.contains("hidden")) {
    //         dots.classList.remove("hidden");
    //         moreText.classList.add("hidden");
    //         button.innerHTML = "Read more";
    //     } else {
    //         dots.classList.add("hidden");
    //         moreText.classList.remove("hidden");
    //         button.innerHTML = "Read less";
    //     }
    // }




    