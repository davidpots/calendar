var postTypes = {
    "Wildcard" : {
        'name'  : "Wildcard",
        'desc'  : "A post of your choice",
    },
    "Business Highlight" : {
        'name'  : "Business Highlight",
        'desc'  : "Showcase a product or service that the business offers",
    },
    "Consumer Prompt" : {
        'name'  : "Consumer Prompt",
        'desc'  : "Question, fill-in-the-blank, or multiple choice",
    },
    "Testimonial" : {
        'name'  : "Testimonial",
        'desc'  : "Highlight existing or encourage new",
    },
    "Feel Good" : {
        'name'  : "Feel Good",
        'desc'  : "Comical, sentimental, or inspirational graphic",
    },
    "Informative or Educational" : {
        'name'  : "Informative or Educational",
        'desc'  : "A fact or tip about the business or the industry at large",
    },
    "Customer-specific Photo" : {
        'name'  : "Customer-specific Photo",
        'desc'  : "Something reminiscent of being at the business",
    },
    "Conversational" : {
        'name'  : "Conversational",
        'desc'  : "Conversational graphic (or text-only) to encourage comments",
    },
    "Consumer Prompt" : {
        'name'  : "Consumer Prompt",
        'desc'  : "Question, fill-in-the-blank, or multiple choice",
    },
    "Introduction" : {
        'name'  : "Introduction",
        'desc'  : "Core function of the business. Overview, location, year founded, etc",
    },
    "Local Love" : {
        'name'  : "Local Love",
        'desc'  : "Regional celebration or local event that’s relevant to the business",
    },
    "Experiential" : {
        'name'  : "Experiential",
        'desc'  : "A customer-specific photo that represents the experience of being at the business",
    },
    "Unique Element" : {
        'name'  : "Unique Element",
        'desc'  : "Content that highlights a unique element of the business",
    },
    "Call-to-action" : {
        'name'  : "Call-to-action",
        'desc'  : "Content whose goal is to move a consumer to buy a product or schedule a service",
    },
    "Time sensitive" : {
        'name'  : "Time sensitive",
        'desc'  : "Content that relates to a holiday, season, or regional event",
    },

};

var banana = '<ul class="banana">';
    $.each(postTypes, function(i) {
      banana += "<li data-post-type='"+ postTypes[i].name +"'>"+ postTypes[i].name +"</li>";
    });
    banana += '</ul>';

$(window).bind("load", function() {

  $(document).on("click", '.tile.tile--withImage', function(e) {
    if($(e.target).is(".caption")) return;
    $(this).addClass('tile--textOnly');
    $(this).removeClass('tile--withImage');
    $('.caption').blur();
    return false;
  });

  $(document).on("click", '.tile.tile--textOnly', function(e) {
    if($(e.target).is(".caption")) return;
    $(this).removeClass('tile--textOnly');
    $(this).addClass('tile--withImage');
    $('.caption').blur();
    return false;
  });

  $(document).on("click", '.imageWrapper.hasImage .imageClose', function(e) {
    $(this).parent('.imageWrapper').removeClass('hasImage').addClass('predrop');
    $(this).parent('.imageWrapper').find('.dropImage').attr('src','');
    $(this).parent('.imageWrapper').find('.dragDropInstructions').show();
    $(dropImage).attr('src',event.target.result);
  });



  $(document).on("click", '.calendar-item-head', function(e) {
    if($(e.target).parent().is(".banana")) return;
    $('.banana').hide();
    $(this).append(banana);
  });

  $(document).on("click", '.banana li', function(e) {
    replacer = $(this).data('post-type');
    replacerDesc = postTypes[replacer].desc;
    $(this).closest('.calendar-item-head').find('h3').html(replacer);
    $(this).closest('.calendar-item-head').find('p').html(replacerDesc);
    $(this).parent().hide();
  });



  // Change that sequence
  $(document).on("click", '.sequence-selector li', function(e) {
    $('.sequence-selector li').removeClass("sequence-selector--active");
    $(this).addClass("sequence-selector--active");
  });

  $(document).on("click", '.sequence-selector--ongoing', function(e) {
    $('.sequence-container--roadmap').hide();
    $('.sequence-container--ongoing').fadeIn();
  });

  $(document).on("click", '.sequence-selector--roadmap', function(e) {
    $('.sequence-container--ongoing').hide();
    $('.sequence-container--roadmap').fadeIn();
  });




var holder = [];

$.each( $('.dropzone'), function(index,val) {
  $(val).addClass('dropzone' + index);
});

for (i = 0; i < $('.dropzone').length; i++ ) {

  holder[i] = $('.dropzone')[i];

    holder[i].ondragover = function () { $(this).find('.tile').addClass('hover'); return false; };
    holder[i].ondragleave = function () { $(this).find('.tile').removeClass('hover'); return false; };
    holder[i].ondrop = function (e) {
      var dropImage = $(this).find('.dropImage'),
          imageWrapper = $(this).find('.imageWrapper'),
          dragDropInstructions = $(this).find('.dragDropInstructions');

      $(this).find('.tile').removeClass('hover');
      $(imageWrapper).removeClass('predrop').addClass('hasImage');
      $(dragDropInstructions).hide();
      e.preventDefault();
      var file = e.dataTransfer.files[0],
          reader = new FileReader();
      reader.onload = function (event) {
        $(dropImage).attr('src',event.target.result);
      };
      reader.readAsDataURL(file);
      return false;
    };

}

});
