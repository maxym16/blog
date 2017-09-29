<div class="choice">
    <div class="choice__item">
        <div class="choice__inner">
            <h2 class="choice__title">
                <?= __('I have a ', 'ct') ?><br /><span class="text-yellow transition"><?= __('Talent','ct') ?></span>
            </h2>
            <div class="choice__table">
                <div class="choice__cell">
                    <div class="choice__desc"><?= get_field('i_have_a_talent_description') ?></div>
                </div>
                <div class="choice__cell choice__cell--icon choice__cell--icon_right choice__cell--talent">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--middle transition" width="44" height="67" viewBox="0 0 65 99" fill="currentColor">
                        <rect width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                        <circle fill-rule="evenodd" clip-rule="evenodd" cx="34.24300003051758" cy="65.02901840209961" r="14.227999687194824" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.155273517080786e-8,65.90202072143555 c0,18.912 15.33,32.842 34.241,32.842 c18.912,0 30.466,-15.57 30.466,-30.688 c0,-7.236 -2.334,-13.965 -7.217,-18.523 c-5.606,-5.234 -12.071,-6.846 -20.515,-6.846 c10.982,1.979 17.626,12.711 17.626,23.215 c0,11.244 -9.115,20.359 -20.36,20.359 c-11.244,0 -20.359,-9.115 -20.359,-20.359 c0,-11.279 3.457,-16.32 17.153,-28.412 c17.705,-15.633000000000001 3.4370000000000003,-37.49 3.4370000000000003,-37.49 s3.776,13.314 -4.821,22.055 c-3.4050000000000002,3.461 -9.642,7.771 -17.785,15.898 C5.116000091552735,44.68902072143555 9.155273517080786e-8,55.69502072143555 9.155273517080786e-8,65.90202072143555 " />
                    </svg>
                </div>
            </div>
            <?php
                $more_title = get_field('talent_button_title');
                $more_link = get_field('talent_button_link');
            ?>
            <?php if($more_title && $more_link): ?>
            <div class="choice__more">
                <a class="button button--default button--yellow" href="<?= $more_link ?>">
                    <span class="button__text"><?= $more_title ?></span>
                </a>
            </div>
            <?php endif; ?>
        </div>
    </div>
    <div class="choice__item">
        <div class="choice__inner">
            <h2 class="choice__title choice__title--right">
                <?= sprintf('%s<br /><span class="text-yellow transition">%s</span>',
                    __('I have an ', 'ct'), __('Opportunity','ct'))  ?>
            </h2>
            <div class="choice__table">
                <div class="choice__cell">
                    <div class="choice__desc choice__desc--right"><?= get_field('i_have_a_opportunity_description') ?></div>
                </div>
                <div class="choice__cell choice__cell--icon choice__cell--icon_left choice__cell--icon_small choice__cell--opportunity">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--middle transition" width="49" height="67" viewBox="0 0 72 99" fill="currentColor">
                        <rect width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                        <path d="M67.51299534606933,65.53251302289962 c-4.476,-4.34 -6.817,-10.027 -6.925,-15.828 l-0.0010000000000000041,-0.4080000000000003 c0.10800000000000012,-5.803 2.45,-11.488 6.926,-15.83 c4.459,-4.322 4.585,-11.193 0.2890000000000003,-15.635 c-4.259,-4.4 -11.215,-4.475 -15.609,-0.16600000000000106 c-8.898,8.729 -22.336,9.402 -31.453,0.793 c-5.369,-5.07 -12.229,-4.596 -16.111,-0.98 c-4.6290000000000004,4.312 -4.385,10.328 0.6180000000000034,16.371 c3.878,4.678 5.746,10.07 5.651,15.447 v0.4080000000000003 c0.0940000000000008,5.377 -1.7730000000000001,10.768 -5.651,15.447 c-5.002,6.041 -5.247,12.057 -0.6180000000000034,16.369 c3.883,3.615 10.742,4.09 16.111,-0.98 c9.117,-8.609 22.555,-7.934 31.453,0.793 c4.394,4.309 11.352,4.236 15.609,-0.16400000000000103 C72.09799534606934,76.72751302289963 71.97199534606933,69.85451302289962 67.51299534606933,65.53251302289962 zM47.523995346069334,49.70451302289964 c0,2.992 -1.161,5.996 -3.484,8.307 c-4.638,4.617 -12.073,4.611 -16.537,-0.014000000000000064 c-2.177,-2.254 -3.23,-5.281 -3.187,-8.293 v-0.4080000000000003 c-0.04500000000000035,-3.014 1.01,-6.039 3.187,-8.295 c4.464,-4.625 11.899000000000001,-4.631 16.537,-0.014000000000000064 c2.323,2.311 3.484,5.314 3.484,8.309 V49.70451302289964 z" />
                    </svg>
                </div>
            </div>
            <?php
            $more_title = get_field('opportunity_button_title');
            $more_link = get_field('opportunity_button_link');
            ?>
            <?php if($more_title && $more_link): ?>
            <div class="choice__more choice__more--right">
                <a class="button button--default button--yellow" href="<?= $more_link ?>">
                    <span class="button__text"><?= $more_title ?></span>
                </a>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
