$(function () {
  $.get('http://localhost:3000/service', (data) => {
    let services = JSON.parse(data);
    console.log(services);
    $('.shoplist').append(template('content-list', {data: services}))
    /* $.get('template/left-nav.html',function (data) {
       let render=template.compile(data);
       $('.service-items').append(render({data:services}))
     })*/
  })

  let $header = $('.header-wrap');
  let headerHeight = $header.outerHeight();
  let ishide = false;
  $(window).scroll(function () {
    console.log(document.documentElement.scrollTop);
    console.log(headerHeight);
    if (document.documentElement.scrollTop > headerHeight) {
      if (!ishide) {
        $header.hide().slideDown('slow').addClass('header-wrap header-fixed');
        ishide = true;
        window.scrollTo(0,headerHeight)
      }

    } else if (document.documentElement.scrollTop <headerHeight) {
      if (ishide) {
        console.log('a');
        $header.removeClass('header-fixed').prependTo('#app')
        ishide = false;
        window.scrollTo(0,headerHeight)
      }
    }

  });
});