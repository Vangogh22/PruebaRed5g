function validate() {
            if (document.getElementById('invalidCheck').checked) {
                location.replace("./p1.html")
            } else {
                var myModal = new bootstrap.Modal(document.getElementById("complete"));
                myModal.show();
            }
        }