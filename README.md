# A simpler cookie banner integration

Add all your tracking scripts inside the `<template>` tag and it will load them only when the user consents! Use at your own risk.

```html
<!-- ChocChip -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jeremyblaze/choc-chip@latest/chocchip/chocchip.css">
<script src="https://cdn.jsdelivr.net/gh/jeremyblaze/choc-chip@latest/chocchip/chocchip.js"></script>
<script>
    window.chocchip({
        bannerText: 'We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies for analytics and tracking. Read more in our <a href="/privacy-policy">privacy policy</a>.',
        acceptBtnText: 'Accept',
        rejectBtnText: 'Reject',
        cookieExpireDays: 365
    });
</script>
<template class="chocchip">
    <!-- Tracking Codes -->
    <script src="trackertest.js"></script>
</template>
<!-- / ChocChip -->
```