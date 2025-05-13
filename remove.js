function openHyper() {
            // Get the URL from the input field
            var url = document.getElementById("urlInput").value;

            // Check if the URL is empty
            if (!url) {
                alert("Please enter a URL.");
                return;
            }

            // Check if the URL starts with 'https://', if not add it
            if (!url.startsWith('https://')) {
                url = 'https://' + url;
            }

            // Open a new window with about:blank
            var win = window.open('about:blank', '_blank');

            // Set the title and favicon for the new window
            win.document.title = 'nothing - Google Search';
            var link = win.document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = 'google.png';
            win.document.head.appendChild(link);

            // Create an embed element and set its properties
            var embed = win.document.createElement('embed');
            embed.style.width = "100vw";
            embed.style.height = "100vh";
            embed.style.margin = "0";
            embed.style.overflow = "hidden";
            embed.style.top = "0";
            embed.style.left = "0";
            embed.style.position = "absolute";
            embed.src = url;

            // Append the embed element to the new window's document
            win.document.body.appendChild(embed);
        }

        function openGoogleSearch() {
            var query = document.getElementById("googleInput").value.trim();
            if (!query) {
                alert("Please enter a search term.");
                return;
            }
            // Replace all # with the input value (URL encoded)
            var encoded = encodeURIComponent(query);
            var googleUrl = "https://www.google.com/search?q=#&oq=#&gs_lcrp=EgZjaHJvbWUqEggCEAAYQxiDARixAxiABBiKBTIPCAAQLhhDGLEDGIAEGIoFMgwIARAAGEMYgAQYigUyEggCEAAYQxiDARixAxiABBiKBTIPCAMQABhDGLEDGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyDAgFEAAYQxiABBiKBTINCAYQABiDARixAxiABDIGCAcQBRhA0gEIMjI1NWoxajeoAgCwAgA&sourceid=chrome&ie=UTF-8";
            googleUrl = googleUrl.replace(/#/g, encoded);

            var win = window.open('about:blank', '_blank');
            win.document.title = 'nothing - Google Search';
            var link = win.document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = 'google.png';
            win.document.head.appendChild(link);

            var embed = win.document.createElement('embed');
            embed.style.width = "100vw";
            embed.style.height = "100vh";
            embed.style.margin = "0";
            embed.style.overflow = "hidden";
            embed.style.top = "0";
            embed.style.left = "0";
            embed.style.position = "absolute";
            embed.src = googleUrl;

            win.document.body.appendChild(embed);
        }

        // Theme switcher functionality
        const themeSwitcher = document.getElementById('theme-switcher');
        const body = document.body;

        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeSwitcher.innerHTML = "&#9790;"; // Sun Icon (Light Mode)
        } else {
            body.classList.remove('light-theme');
            themeSwitcher.innerHTML = "&#9788;"; // Moon Icon (Dark Mode)
        }

        // Toggle theme on button click
        themeSwitcher.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                themeSwitcher.innerHTML = "&#9788;"; // Moon Icon (Dark Mode)
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-theme');
                themeSwitcher.innerHTML = "&#9790;"; // Sun Icon (Light Mode)
                localStorage.setItem('theme', 'light');
            }
        });