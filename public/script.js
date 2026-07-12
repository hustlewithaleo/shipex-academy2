// Enable reveal animations (also set inline in <head> to avoid flash)
document.documentElement.classList.add('js');

// Mobile nav toggle
(function() {
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
        menu.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                menu.classList.remove('open');
            });
        });
    }
})();

// Scroll reveal
(function() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
        els.forEach(function(el) {
            el.classList.add('in');
        });
        return;
    }
    var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(function(el) {
        io.observe(el);
    });

    // Safety net: nothing stays invisible. If an element hasn't revealed
    // shortly after load (e.g. fast scroll / observer hiccup), reveal it.
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelectorAll('[data-reveal]:not(.in)').forEach(function(el) {
                if (el.getBoundingClientRect().top < window.innerHeight * 1.25) el.classList.add('in');
            });
        }, 900);
    });
})();

// Custom Kit email form (posts directly to Kit, themed, no badge)
(function() {
    document.querySelectorAll('.es-form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = form.querySelector('input[name=email_address]');
            var email = ((input && input.value) || '').trim();
            if (!email) return;
            var btn = form.querySelector('.es-btn');
            var label = btn ? btn.textContent : '';
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Sending…';
            }
            fetch(form.action, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'email_address=' + encodeURIComponent(email)
                }).then(function(r) {
                    return r.json().catch(function() {
                        return {};
                    });
                })
                .then(function(d) {
                    if (d && d.status === 'failed') {
                        fail();
                    } else {
                        ok();
                    }
                })
                .catch(function() {
                    ok();
                });

            function ok() {
                var s = form.parentNode.querySelector('.es-ok');
                form.style.display = 'none';
                if (s) s.hidden = false;
            }

            function fail() {
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = label;
                }
                var er = form.parentNode.querySelector('.es-err');
                if (!er) {
                    er = document.createElement('div');
                    er.className = 'es-err';
                    form.parentNode.appendChild(er);
                }
                er.textContent = 'Hmm, that didn’t go through — try again?';
            }
        });
    });
})();