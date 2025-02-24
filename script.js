document.addEventListener("DOMContentLoaded", function() {
    // Typing effect
    const text = "Let's Work Together!";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-header").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            document.getElementById("typing-header").style.borderRight = "none"; // Remove cursor effect
        }
    }
    typeWriter();

    // Form validation with a friendly message
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let feedback = document.getElementById("feedback");

        if (name === "" || email === "" || message === "") {
            feedback.innerHTML = "Oops! Please fill in all the fields. 😊";
            feedback.style.color = "red";
            feedback.classList.remove("hidden");
            return;
        }

        feedback.innerHTML = "🎉 Thank you, " + name + "! Your message has been sent.";
        feedback.style.color = "green";
        feedback.classList.remove("hidden");

        // Reset form after success
        setTimeout(() => {
            document.getElementById("contactForm").reset();
            feedback.classList.add("hidden");
        }, 3000);
    });
});

