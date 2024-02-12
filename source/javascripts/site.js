// sticky headers

$(window).scroll(function() {
  if (!$("body").data("stickyStatic")) {
    if ($(this).scrollTop() > 15){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("[data-behavior='contact-form']").forEach(function(form) {
    form.addEventListener("submit", function(event) {
      const contactForm = this
      event.preventDefault();
      grecaptcha.ready(function() {
        grecaptcha
          .execute('6Lf-EIgUAAAAACtqE96q1QSsHT0B72S4NLAQi7_g', {action: 'contactForm'})
          .then(function(token, i) {
            let formData = new FormData(contactForm);
            let parsedData = {
              captcha: {
                response: token,
              },
              ticket: {
                name:        formData.get("ticket[name]"),
                email:       formData.get("ticket[email]"),
                inquiryType: formData.get("ticket[inquiry_type]"),
                app:         formData.get("ticket[app]"),
                source:      formData.get("ticket[source]"),
                subject:     formData.get("ticket[subject]"),
                message:     formData.get("ticket[message]"),
              }
            }

            let options = {
              body: JSON.stringify(parsedData),
              method: 'post',
              mode: 'cors',
              headers:{
                'Content-Type': 'application/json',
              },
            };

            fetch("https://hello.howseven.com", options).then(r => r.json()).then(data => {
              contactForm.reset()
              contactForm.style.display = "none"
              document.getElementsByClassName("form-success")[0].style.display = "block"
            });
          });
      });
    })
  })
})
