$(window).on('resize', function(){
      if(window.innerWidth <= 560){
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo_sm.svg';
            console.log("Logo change")
      }else if(window.innerWidth >= 991 && window.innerWidth <= 1255){
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo_sm.svg';
            console.log("Logo change")
      }else if(window.innerWidth >= 1256){
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo.svg';
            console.log("Logo change")
      }else{
            document.getElementById('logo').src = 'https://0x7o.link/gamio/new/logo.svg';
            console.log("Logo change")
      }
});
