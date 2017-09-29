<div class="subscription">
    <div class="subscription__inner">
        <div class="subscription__text">
            <p class="subscription__desc"><?= get_field('get_in_touch_description') ?></p>
            <h2 class="subscription__title"><?= get_field('get_in_touch_title') ?></h2>
        </div>
        <form>
            <fieldset class="subscription__form">
                <input class="subscription__field" type="email" name="email" placeholder="Insert your best email" required="required" />
                <div class="subscription__send">
                    <button class="button button--default button--white" type="submit">
                        <span class="button__text"><?= __('Send', 'ct') ?></span>
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
</div>