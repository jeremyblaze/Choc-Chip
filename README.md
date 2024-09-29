# A simpler cookie banner integration

Add all your tracking scripts to the template and it will load them only when the user consents.

```
<link rel="stylesheet" href="chocchip/chocchip.css">
<script src="chocchip/chocchip.js"></script>
<script>
    window.chocchip({
        bannerText: 'We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies for analytics and tracking. Read more in our <a href="/privacy-policy">privacy policy</a>.',
        acceptBtnText: 'Accept',
        rejectBtnText: 'Reject',
        cookieExpireDays: 365
    });
</script>
<template class="chocchip">
    <!-- place all tracking scripts here -->
    <script src="trackertest.js"></script>
</template>
```

**Use at your own risk**