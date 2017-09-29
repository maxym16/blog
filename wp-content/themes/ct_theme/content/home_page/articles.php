<?php
$articles = get_field('articles');
?>
<?php if($articles): ?>
<section class="articles">
    <div class="articles__inner">
        <h2 class="articles__title">
            <?= __('Read articles by successful','ct') ?><span class="text-black"><?= __('Talents','ct') ?></span>
        </h2>
        <div id="articles" class="articles__content">
            <?php /** @var WP_Post $article */
            foreach($articles as $article): ?>
            <article class="articles__item article">
                <div class="article__inner">
                    <?php
                        $image = get_the_post_thumbnail_url($article->ID, 'full')?:CT_ARTICLE_IMAGE_URL;
                    ?>
                    <a class="article__image bg-image" href="<?= get_permalink($article->ID) ?>" style="background-image: url(<?= $image ?>);"></a>
                    <div class="article__info">
                        <a class="article__title" href="<?= get_permalink($article->ID) ?>">
                            <?= get_the_title($article->ID) ?>
                        </a>
                        <div class="article__desc">
                            <?php excerpt([
                                    'text' => strip_tags($article->post_content),
                                    'maxchar' => 120,
                                    'more_text' => ' ...'
                            ]) ?>
                        </div>
                        <?php
                            $author_id = $article->post_author;
                        ?>
                        <div class="article__date">
                            <time><?= get_the_date('M jS, Y', $article->ID) ?></time> <?= __('by', 'ct')?>
                            <span class="bold"><?= get_the_author_meta('display_name', $author_id) ?></span>
                        </div>
                    </div>
                </div>
            </article>
            <?php endforeach; ?>
        </div>
        <button class="articles__arrow articles__arrow--prev" type="button" data-relation="articles-prev">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--middle" width="17" height="30" viewBox="0 0 17 30" fill="currentColor">
                <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                <polyline fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" points="14.587997436523438,28.442001342773438 2,15.358001708984375 14.587997436523438,2 " />
            </svg>
        </button>
        <button class="articles__arrow articles__arrow--next" type="button" data-relation="articles-next">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--middle" width="17" height="30" viewBox="0 0 17 30" fill="currentColor">
                <rect width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                <polyline fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" points="2,2 14.587997436523438,15.081001281738281 2,28.438003540039062 "/></g>
            </svg>
        </button>
    </div>
</section>
<?php endif; ?>
