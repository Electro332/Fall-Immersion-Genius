document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("myForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            if (name && email && message) {
                alert("Form submitted successfully!\nName: ${name}\nEmail ${email} \nMessage ${message}");
            } else {
                alert("Please fill out the required information") ;
            }
        }
    )

    })
