$('.skillsAndTool .toolContainer .tool').click(function(){
    $(this).addClass('active')
    $(this).siblings('.tool').removeClass('active')
    $(this).siblings('.content').stop().slideUp();
    $(this).next().stop().slideDown();
  });
