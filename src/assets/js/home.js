

    var scriptLoaded = false;
    window.addEventListener('scroll', function() {
        if (!scriptLoaded && window.scrollY >= 50) {
            scriptLoaded = true;
            var script = document.createElement('script');
            script.src = '/src/assets/js/carousel-home.min.js';
            document.body.appendChild(script);
            
        }
    });


    var scriptLoadedcs = false; 
    
    window.addEventListener('scroll', function() {
        if (!scriptLoadedcs && window.scrollY >= 50) {
            scriptLoadedcs = true;
            
            var scriptcs = document.createElement('script');
            scriptcs.src = '/src/assets/js/main.js'; // Change 'path/to/your/style.css' to your actual stylesheet path
            
           document.body.appendChild(scriptcs);
        }
    });


	
        var recaptcha_response = '';
        function submitUserForm() {
            if(recaptcha_response.length == 0) {
                document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
                return false;
            }
            return true;
        }
     
        function verifyCaptcha(token) {
            recaptcha_response = token;
            document.getElementById('g-recaptcha-error').innerHTML = '';
        }
   
	
        var recaptcha_response = '';
        function submitUserForm1() {
            if(recaptcha_response.length == 0) {
                document.getElementById('g-recaptcha-error-1').innerHTML = '<span style="color:red;">This field is required.</span>';
                return false;
            }
            return true;
        }
     
        function verifyCaptcha1(token) {
            recaptcha_response = token;
            document.getElementById('g-recaptcha-error-1').innerHTML = '';
        }
   
	
        function showPreview(imageSrc) {
            const preview = document.getElementById("preview");
            const previewImage = document.getElementById("preview-image");

            previewImage.src = imageSrc;
            preview.style.display = "block";
        }
    
    
    	$(document).ready(function () {
    		// append plus symbol to every list item that has children
    		$('#mobile-nav .parent').append('<span class="open-menu fa fa-plus"></span>');
    		
    		// fix non-scrolling overflow issue on mobile devices
    		$('#mobile-nav > ul').wrap('<div class="overflow"></div>');
    		$(window).on('load resize', function () {
    			var vph = $(window).height() - 57; // 57px - height of #mobile-nav
    			$('.overflow').css('max-height', vph);
    		});
    		
    		// global variables
    		var menu = $('.overflow > ul');
    		var bg = $('html, body');
    		
    		// toggle background scrolling
    		function bgScrolling() {
    			// if menu has toggled class... *
    			if (menu.hasClass('open')) {
    				// * disable background scrolling
    				bg.css({
    					'overflow-y': 'hidden',
    					'height': 'auto'
    				});
    			// if menu does not have toggled class... *
    			} else {
    				// * enable background scrolling
    				bg.css({
    					'overflow-y': 'visible',
    					'height': '100%'
    				});
    			}
    		}
    		
    		// menu button click events
    		$('.menu-button').on('click', function (e) {
    			e.preventDefault();
    			// activate toggles
    			menu.slideToggle(250);
    			menu.toggleClass('open');
    			$(this).children().toggleClass('fa-reorder fa-remove');
    			bgScrolling();
    		});
    		
    		// list item click events
    		$('.open-menu').on('click', function (e) {
    			e.preventDefault();
    			$(this).prev('ul').slideToggle(250);
    			$(this).toggleClass('rotate');
    		});
    	});
    
    
    	$(document).ready(function(){
    		$(".menu-button").click(function(){
    			$("#mobile-nav").toggle();
    		});
    	});
    
    
    
        // Show the first tab and hide the rest
        $('#tabs-nav_TCB .list_TCB:first-child').addClass('active');
        $('.tab-content_TCB').hide();
        $('.tab-content_TCB:first').show();
        
        // Click function
        $('#tabs-nav_TCB .list_TCB').mouseenter(function(){
          $('#tabs-nav_TCB .list_TCB').removeClass('active');
         // $(this).addClass('active');
          $('.tab-content_TCB').hide();
          
          var activeTab = $(this).find('p').attr('href');
          $(activeTab).fadeIn();
          return false;
        });
    
    
        // Show the first tab and hide the rest
        $('#tabs-nav_TCB2 .list_TCB:first-child').addClass('active');
        $('.tab-content_TCB2').hide();
        $('.tab-content_TCB2:first').show();
        
        // Click function
        $('#tabs-nav_TCB2 .list_TCB').mouseenter(function(){
          $('#tabs-nav_TCB2 .list_TCB').removeClass('active');
         // $(this).addClass('active');
          $('.tab-content_TCB2').hide();
          
          var activeTab = $(this).find('p').attr('href');
          $(activeTab).fadeIn();
          return false;
        });
    
    
        $('.home_tab_carouser').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:4
            },
    		1468:{
                items:2
            },
    		1800:{
                items:3
            },
        }
    })
    
    
        function openCity(evt, cityName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }
          document.getElementById("defaultOpen").click();
    
    
        $('.Show_').click(function() {
        $('#target_').show(200);
        $('.Show_').hide(0);
        $('.Hide_').show(0);
        });
        $('.Hide_').click(function() {
        $('#target_').hide(500);
        $('.Show_').show(0);
        $('.Hide_').hide(0);
        });
        $('.toggle_').click(function() {
        $('#target_').toggle('slow');
        });
    
	// <!-- Start of  Zendesk Widget script -->
	// <!--<script id="ze-snippet" async src="https://static.zdassets.com/ekr/snippet.js?key=aad1bfb2-4242-448c-8889-71f1c57369d1">-->
    
    var scriptLoadedz = false;
    window.addEventListener('scroll', function() {
        if (!scriptLoadedz && window.scrollY >= 50) {
            scriptLoadedz = true;
            var scriptz = document.createElement('script');
            scriptz.id = 'ze-snippet';
            scriptz.src = '../static.zdassets.com/ekr/snippet2b6a.js?key=aad1bfb2-4242-448c-8889-71f1c57369d1';
            document.body.appendChild(scriptz);
            
        }
    });
