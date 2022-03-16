var is_logo = document.querySelectorAll("#logo").length

$(window).on('resize', function(){
      if(is_logo > 0){
            if(window.innerWidth <= 560){
                  document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo_sm.svg';
            }else if(window.innerWidth >= 991 && window.innerWidth <= 1255){
                  document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo_sm.svg';
            }else if(window.innerWidth >= 1256){
                  document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo.svg';
            }else{
                  document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo.svg';
            }
      }
});
if(is_logo > 0){
      if(window.innerWidth <= 560){
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo_sm.svg';
            console.log("Logo change")
      }else if(window.innerWidth >= 991 && window.innerWidth <= 1255){
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo_sm.svg';
            console.log("Logo change")
      }else if(window.innerWidth >= 1256){
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo.svg';
            console.log("Logo not change")
      }else{
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo.svg';
            console.log("Logo not change")
      }
}
