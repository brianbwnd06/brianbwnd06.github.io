$(document).ready(function () {
    $('.ham-menu').click(function(){
        $('.nav-menu').toggleClass('active');
        $('.hamIcon').toggleClass('fa-xmark');
    })

    // dark - light mode
    $('.mode').click(function() { 
        $('body').toggleClass('dark');
        $('.modeIcon').toggleClass('fa-moon');
        $('.modeIcon').toggleClass('fa-sun');
     })
    //  Scroll To top
     function addClassOnScroll() {
        const windowScroll = $(window).scrollTop();
        const targetElement = $('.side-btn'); 
        if (windowScroll > 100) {
          targetElement.addClass('on');
        } else {
          targetElement.removeClass('on');
        }
    }
      $(window).on('scroll', addClassOnScroll);
      addClassOnScroll();
    $('#btn-to-top').click(function() {
        console.log("bisa")
        $('html, body').animate({ scrollTop: 0 }, 200);
    });


    $('.tab-uiux, .tab-video').hide()
    $('.btn-tabs').click(function(){
      $('.btn-tabs').removeClass('on')
      $(this).addClass('on')
    })

    $('.btn-web').click(function(){
      $('.tab-web').show();
      $('.tab-uiux, .tab-video').hide()
    })
    $('.btn-ui').click(function(){
      $('.tab-uiux').show();
      $('.tab-web, .tab-video').hide()
    })
    $('.btn-vid').click(function(){
      $('.tab-video').show();
      $('.tab-uiux, .tab-web').hide()
    })

});

ScrollReveal().reveal('.on-scroll',{delay : 100,duration:500, easing : 'ease-out', interval : 100, origin : 'bottom', scale : 0.9});




const namaDepan = document.getElementById('i-namadepan');
const namaBelakang = document.getElementById('i-namabelakang');
const email = document.getElementById('i-email');
const telepon = document.getElementById('i-telepon');
const pesan = document.getElementById('i-pesan');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=>{
  e.preventDefault();


  let ebody =`
  <b>Nama :</b> ${namaDepan.value}&nbsp;${namaBelakang.value}
  <br>
  <b>Email :</b> ${email.value}
  <br>
  <b>Telepon :</b> ${telepon.value}
  <br>
  <br>
  <b>Pesan : </b> <br> ${pesan.value}
  
  `
  
  


  Email.send({
    SecureToken : "069c0fde-98cc-421d-b5c7-21fe46c9c696",
    To : 'bwndbrayen06@gmail.com',
    From : "bwndbrayen06@gmail.com",
    Subject : "Pesan From " + namaDepan.value +" " + namaBelakang.value,
    Body : ebody
  }).then(function (message) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pesan Terkirim',
      showConfirmButton: false,
      timer: 2000
      }).then(() => {
        namaDepan.value = "";
        namaBelakang.value = "";
        email.value = "";
        telepon.value = "";
        pesan.value = "";
      });
  });
})

