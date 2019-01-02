// sticky headers

$(window).scroll(function() {
    if ($(this).scrollTop() > 15){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("[data-behavior='contact-form']").forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let formData = new FormData(this);
      let parsedData = {
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
        console.log(data);
      });
      console.log("yeah")
    })
  })
})
