<div id="banner" class="banner">
    <?php
        $slider = get_field('slider');
    ?>
    <?php if($slider): ?>
        <?php foreach($slider as $slide): ?>
    <div class="banner__item">
        <div class="banner__content bg-image" style="background-image: url(<?= $slide['image']['url'] ?>);">
            <div class="banner__info">
                <p class="banner__title"><?= $slide['title'] ?></p>
                <div class="banner__desc"><?= $slide['description'] ?></div>
                <?php
                    $button_title = $slide['button_title'];
                    $button_link = $slide['button_link'];
                ?>
                <?php if($button_title && $button_link): ?>
                <a class="banner__watch" href="<?= $button_link ?>">
                    <span class="banner__watch-text"><?= $button_title ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--middle" width="18" height="18" viewBox="0 0 100 100" fill="currentColor">
                        <circle fill="#FBC700" cx="50" cy="50" r="40.194"/>
                        <polyline fill="#FFFFFF" points="44.779,37.998 63.004,50 44.779,62.002  "/>
                    </svg>
                </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>