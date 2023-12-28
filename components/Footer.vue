<template>
    <footer>
        <div class="website-footer">
            <div class="footer-text">
                <span>© 2023 Geeks. All Rights Reserved</span>
            </div>

            <div>
                <ul class="footer-links">
                    <li><NuxtLink to=""><span>About</span></NuxtLink></li>
                    <li><NuxtLink to=""><span>Terms & Conditions</span></NuxtLink></li>
                    <li><NuxtLink to="/PrivacyPage"><span>Privacy Policy</span></NuxtLink></li>
                    <li><NuxtLink to=""><span>Contact</span></NuxtLink></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer{
    display: flex;
}
.website-footer{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    line-height: 24px;
    color: #5c5776;
    padding: 8px 12px;
}

.footer-text{
    justify-self: center;
}

.footer-links{
    display: flex;
}

.footer-links span{
    padding: 4px 16px;
}

</style>