function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    } else {
      dropdown.classList.add("show");
    }
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollBox = document.getElementById('scroll-box');
    if (scrollPosition > 500) { // Change 500 to the pixel value where you want the box to appear
      scrollBox.style.display = 'block';
    } else {
      scrollBox.style.display = 'none';
    }
  });
  
  var scrollBar = document.getElementById('scroll-bar');
  scrollBar.addEventListener('scroll', function() {
    var scrollPosition = scrollBar.scrollLeft;
    var scrollContent = document.getElementById('scroll-content');
    scrollContent.style.transform = 'translateX(' + (-scrollPosition) + 'px)';
  });
  
  var redirectButton = document.getElementById("redirect-button");

  redirectButton.addEventListener("click", function() {
    window.location.href = "https://www.example.com";
  });
  
  
  