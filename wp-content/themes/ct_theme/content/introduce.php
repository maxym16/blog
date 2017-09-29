<?php if(!isset($_COOKIE['introduce'])): ?>
<div class="intro">
    <div id="intro" class="intro__inner">
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-1.png" alt="" />
            </div>
        </div>
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-2.png" alt="" />
            </div>
        </div>
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-3.png" alt="" />
                <p class="intro__phrase intro__phrase--1">
                    Discover your<br />unique <span class="bold">Talent</span>
                </p>
            </div>
        </div>
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-4.png" alt="" />
                <p class="intro__phrase intro__phrase--2">
                    Cultivate your<br /><span class="bold">Passions</span>
                </p>
            </div>
        </div>
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-5.png" alt="" />
                <p class="intro__phrase intro__phrase--3">
                    Invest in the right<br /><span class="bold">Skills</span>
                </p>
            </div>
        </div>
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-6.png" alt="" />
                <p class="intro__phrase intro__phrase--4">
                    Find the right <span class="bold">Opportunity</span>
                </p>
            </div>
        </div>
        <div class="intro__slide">
            <div class="intro__box">
                <img src="<?= CT_ASSETS_URI ?>/images/intro-slide-7.png" alt="" />
                <p class="intro__phrase intro__phrase--5">
                    <span class="bold">Connect</span> with<br />other Tallents
                </p>
            </div>
        </div>
    </div>
    <button class="intro__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17" viewBox="0 0 30 17" fill="currentColor">
            <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
            <polyline fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" points="28.438003540039062,2 15.352001190185547,14.587997436523438 2,2 "/>
        </svg>
    </button>
</div>
<?php endif; ?>