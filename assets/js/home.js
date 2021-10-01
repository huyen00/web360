
const panorama = new PANOLENS.ImagePanorama( '/assets/image/anh360/tesst.jpg' );

var container = document.querySelector('.video');


const viewer = new PANOLENS.Viewer({
    container: container,
    initialLookAt : new  THREE.Vector3(5000.00, 178.96, 1587.13),
    autoHideInfospot: false,
    cameraFov:60,
    indicatorSize:60,
    reverseDragging:false,
    viewIndicator:true,
    autoRotate:true,
    autoRotateSpeed:0.35,
    autoRotateActivationDuration:5000,
    dwellTime:1500,
    autoReticleSelect:true,
        
});

viewer.add(panorama);

//xử lý nút click menu
$(document).ready(function(){
    $('.menu').show();
    $('.show-menu').click(function(event){
        $('.menu').toggle();
    });
});

//xử lý khi click vào arrow-left arrow-right
$(document).ready(function(){
    $('.arrow-left').click(function(event){
        $('.arrow-left').hide();
        $('.arrow-right').show();
        // const id= this.id.split('_')[1];
        // var checkid = $(this).attr('class').split(' ');
        // if(checkid.find(e=>e=='active')=='active'){
        //     $(this).removeClass('active');
        //     $('.arrow-left').hide();
        //     $('.arrow-right').show();
        // }
        // else{
        //     $(this).addClass('active');
        //     $('.arrow-right').hide();
        //     $('.arrow-left').show();
        // }
    });
    $('.arrow-right').click(function(event){
        $('.arrow-right').hide();
            $('.arrow-left').show();
        // const id= this.id.split('_')[1];
        // var checkid = $(this).attr('class').split(' ');
        // if(checkid.find(e=>e=='active')=='active'){
        //     $(this).removeClass('active');
        //     $('.arrow-left').hide();
        //     $('.arrow-right').show();
        // }
        // else{
        //     $(this).addClass('active');
        //     $('.arrow-right').hide();
        //     $('.arrow-left').show();
        // }
    });
});

//xử lý khi click vào close
$(document).ready(function(){
    $('.icon-close').click(function(event){
        $('.form-huongdan').hide();
        document.getElementById("anh360").style.opacity = '1';
    });
    $('.video').click(function(event){
        $('.form-huongdan').hide();
        document.getElementById("anh360").style.opacity = '1';
    });
    $('.menu').click(function(event){
        $('.form-huongdan').hide();
        document.getElementById("anh360").style.opacity = '1';
    });
});

//slick
$('.center').slick({
   
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  /* xử lý show owl */
  $(document).ready(function(){
      $('.fa-th-large').click(function(event){
          $('.owl').toggle();
        
      });
  });

  /* xử lý khi click vào volum */
  $(document).ready(function(){
    $('.fa-volume-up').click(function(event){
        $('.fa-volume-up').hide();
        $('.fa-volume-mute').show();
    });
    $('.fa-volume-mute').click(function(event){
        $('.fa-volume-up').show();
        $('.fa-volume-mute').hide();
    });
});


