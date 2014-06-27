window.onload = function () {
    var paper = Raphael(0, 0, 800, 400);

    var src = "SuperMarioSprites/right2.png";

    var positionX = 10;
    var img = paper.image(src, positionX, 342, 20, 29);
    var direction = 'right';

    drawGrass();

    move();

    function move() {
        if (direction == 'right') {
            img.attr({
                x: positionX++
            });

            changeImage(direction, img, positionX);
            direction = changeDirection(direction, img, positionX);
        }
        else {
            img.attr({
                x: positionX--
            });

            changeImage(direction, img, positionX);
            direction = changeDirection(direction, img, positionX);
        }

        // window.requestAnimationFrame(move);
        setTimeout(move, 30);
    }


    function changeImage(direction, img, positionX) {
        var number = positionX % 8;

        switch (number) {
            case 0:
            case 1: if (direction == 'right') {
                img.attr({
                    src: "SuperMarioSprites/right3.png"
                });
            }
            else {
                img.attr({
                    src: "SuperMarioSprites/left3.png"
                });
            };
                break;
            case 2:
            case 3: if (direction == 'right') {
                img.attr({
                    src: "SuperMarioSprites/right2.png"
                });
            }
            else {
                img.attr({
                    src: "SuperMarioSprites/left2.png"
                });
            };
                break;
            case 4:
            case 5: if (direction == 'right') {
                img.attr({
                    src: "SuperMarioSprites/right1.png"
                });
            }
            else {
                img.attr({
                    src: "SuperMarioSprites/left1.png"
                });
            };
                break;
            case 6:
            case 7: if (direction == 'right') {
                img.attr({
                    src: "SuperMarioSprites/right0.png"
                });
            }
            else {
                img.attr({
                    src: "SuperMarioSprites/left0.png"
                });
            };
                break;
        }
    }

    function changeDirection(direction, img, positionX) {
        if (positionX > (paper.width - img.attrs.width)) {
            direction = 'left';
        }
        else if (positionX < 1) {
            direction = 'right';
        }

        return direction;
    }

    function drawGrass() {
        paper.path("M0 371L22 372L69 372L232 372L800 372L778 371L731 371L568 371L0 371z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M0 372L0 376C9.39468 372.973 21.2573 375.091 31 375.434L79 375.434L152 374.692L240 375.434C362.535 371.117 485.506 379.751 608 375.434L735 375.434C755.854 376.169 779.605 371.023 800 376L800 372L0 372z").attr({ fill: "#01c903", stroke: "none" });
        paper.path("M3 374L6 375L3 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M9 374L12 375L9 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M19 374L22 375L19 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M25 374L28 375L25 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M35 374L38 375L35 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M41 374L44 375L41 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M51 374L54 375L51 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M57 374L60 375L57 374z").attr({ fill: "#0b7549", stroke: "none" });
        paper.path("M67 374L70 375L67 374z").attr({ fill: "#097557", stroke: "none" });
        paper.path("M73 374L76 375L73 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M83 374L86 375L83 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M89 374L92 375L89 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M99 374L102 375L99 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M105 374L108 375L105 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M115 374L118 375L115 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M121 374L124 375L121 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M131 374L134 375L131 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M137 374L140 375L137 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M147 374L150 375L147 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M153 374L156 375L153 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M163 374L166 375L163 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M169 374L172 375L169 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M179 374L182 375L179 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M185 374L188 375L185 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M195 374L198 375L195 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M201 374L204 375L201 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M211 374L214 375L211 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M217 374L220 375L217 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M227 374L230 375L227 374z").attr({ fill: "#03733f", stroke: "none" });
        paper.path("M233 374L236 375L233 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M243 374L246 375L243 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M249 374L252 375L249 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M259 374L262 375L259 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M265 374L268 375L265 374z").attr({ fill: "#07733f", stroke: "none" });
        paper.path("M275 374L278 375L275 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M281 374L284 375L281 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M291 374L294 375L291 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M297 374L300 375L297 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M307 374L310 375L307 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M313 374L316 375L313 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M323 374L326 375L323 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M329 374L332 375L329 374z").attr({ fill: "#0b7549", stroke: "none" });
        paper.path("M339 374L342 375L339 374z").attr({ fill: "#097557", stroke: "none" });
        paper.path("M345 374L348 375L345 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M355 374L358 375L355 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M361 374L364 375L361 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M371 374L374 375L371 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M377 374L380 375L377 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M387 374L390 375L387 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M393 374L396 375L393 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M403 374L406 375L403 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M409 374L412 375L409 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M419 374L422 375L419 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M425 374L428 375L425 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M435 374L438 375L435 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M441 374L444 375L441 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M451 374L454 375L451 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M457 374L460 375L457 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M467 374L470 375L467 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M473 374L476 375L473 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M483 374L486 375L483 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M489 374L492 375L489 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M499 374L502 375L499 374z").attr({ fill: "#03733f", stroke: "none" });
        paper.path("M505 374L508 375L505 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M515 374L518 375L515 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M521 374L524 375L521 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M531 374L534 375L531 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M537 374L540 375L537 374z").attr({ fill: "#07733f", stroke: "none" });
        paper.path("M547 374L550 375L547 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M553 374L556 375L553 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M563 374L566 375L563 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M569 374L572 375L569 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M579 374L582 375L579 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M585 374L588 375L585 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M595 374L598 375L595 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M601 374L604 375L601 374z").attr({ fill: "#0b7549", stroke: "none" });
        paper.path("M611 374L614 375L611 374z").attr({ fill: "#097557", stroke: "none" });
        paper.path("M617 374L620 375L617 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M627 374L630 375L627 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M633 374L636 375L633 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M643 374L646 375L643 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M649 374L652 375L649 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M659 374L662 375L659 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M665 374L668 375L665 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M675 374L678 375L675 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M681 374L684 375L681 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M691 374L694 375L691 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M697 374L700 375L697 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M707 374L710 375L707 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M713 374L716 375L713 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M723 374L726 375L723 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M729 374L732 375L729 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M739 374L742 375L739 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M745 374L748 375L745 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M755 374L758 375L755 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M761 374L764 375L761 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M771 374L774 375L771 374z").attr({ fill: "#03733f", stroke: "none" });
        paper.path("M777 374L780 375L777 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M787 374L790 375L787 374z").attr({ fill: "#0b7947", stroke: "none" });
        paper.path("M793 374L796 375L793 374z").attr({ fill: "#05774b", stroke: "none" });
        paper.path("M1.66667 375.333L2.33333 375.667L1.66667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M3 375L6 376L3 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M6 375L9 376L6 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M9 375L12 376L9 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M12.6667 375.333L13.3333 375.667L12.6667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M17.6667 375.333L18.3333 375.667L17.6667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M19 375L22 376L19 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M22 375L25 376L22 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M25 375L28 376L25 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M28.6667 375.333L29.3333 375.667L28.6667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M33.6667 375.333L34.3333 375.667L33.6667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M35 375L38 376L35 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M38 375L41 376L38 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M41 375L44 376L41 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M44.6667 375.333L45.3333 375.667L44.6667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M49.6667 375.333L50.3333 375.667L49.6667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M51 375L54 376L51 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M54 375L57 376L54 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M57 375L60 376L57 375z").attr({ fill: "#010105", stroke: "none" });
        paper.path("M60.6667 375.333L61.3333 375.667L60.6667 375.333z").attr({ fill: "#077b3d", stroke: "none" });
        paper.path("M65.6667 375.333L66.3333 375.667L65.6667 375.333z").attr({ fill: "#117753", stroke: "none" });
        paper.path("M67 375L70 376L67 375z").attr({ fill: "#01030d", stroke: "none" });
        paper.path("M70 375L73 376L70 375z").attr({ fill: "#017b4b", stroke: "none" });
        paper.path("M73 375L76 376L73 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M76.6667 375.333L77.3333 375.667L76.6667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M81.6667 375.333L82.3333 375.667L81.6667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M83 375L86 376L83 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M86 375L89 376L86 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M89 375L92 376L89 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M92.6667 375.333L93.3333 375.667L92.6667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M97.6667 375.333L98.3333 375.667L97.6667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M99 375L102 376L99 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M102 375L105 376L102 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M105 375L108 376L105 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M108.667 375.333L109.333 375.667L108.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M113.667 375.333L114.333 375.667L113.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M115 375L118 376L115 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M118 375L121 376L118 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M121 375L124 376L121 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M124.667 375.333L125.333 375.667L124.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M129.667 375.333L130.333 375.667L129.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M131 375L134 376L131 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M134 375L137 376L134 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M137 375L140 376L137 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M140.667 375.333L141.333 375.667L140.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M145.667 375.333L146.333 375.667L145.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M147 375L150 376L147 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M150 375L153 376L150 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M153 375L156 376L153 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M156.667 375.333L157.333 375.667L156.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M161.667 375.333L162.333 375.667L161.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M163 375L166 376L163 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M166 375L169 376L166 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M169 375L172 376L169 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M172.667 375.333L173.333 375.667L172.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M177.667 375.333L178.333 375.667L177.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M179 375L182 376L179 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M182 375L185 376L182 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M185 375L188 376L185 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M188.667 375.333L189.333 375.667L188.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M193.667 375.333L194.333 375.667L193.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M195 375L198 376L195 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M198 375L201 376L198 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M201 375L204 376L201 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M204.667 375.333L205.333 375.667L204.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M209.667 375.333L210.333 375.667L209.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M211 375L214 376L211 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M214 375L217 376L214 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M217 375L220 376L217 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M220.667 375.333L221.333 375.667L220.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M225.667 375.333L226.333 375.667L225.667 375.333z").attr({ fill: "#036f49", stroke: "none" });
        paper.path("M227 375L230 376L227 375z").attr({ fill: "#070107", stroke: "none" });
        paper.path("M230 375L233 376L230 375z").attr({ fill: "#017b3d", stroke: "none" });
        paper.path("M233 375L236 376L233 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M236.667 375.333L237.333 375.667L236.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M241.667 375.333L242.333 375.667L241.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M243 375L246 376L243 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M246 375L249 376L246 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M249 375L252 376L249 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M252.667 375.333L253.333 375.667L252.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M257.667 375.333L258.333 375.667L257.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M259 375L262 376L259 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M262 375L265 376L262 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M265 375L268 376L265 375z").attr({ fill: "#030501", stroke: "none" });
        paper.path("M268.667 375.333L269.333 375.667L268.667 375.333z").attr({ fill: "#017f43", stroke: "none" });
        paper.path("M273.667 375.333L274.333 375.667L273.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M275 375L278 376L275 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M278 375L281 376L278 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M281 375L284 376L281 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M284.667 375.333L285.333 375.667L284.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M289.667 375.333L290.333 375.667L289.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M291 375L294 376L291 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M294 375L297 376L294 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M297 375L300 376L297 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M300.667 375.333L301.333 375.667L300.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M305.667 375.333L306.333 375.667L305.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M307 375L310 376L307 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M310 375L313 376L310 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M313 375L316 376L313 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M316.667 375.333L317.333 375.667L316.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M321.667 375.333L322.333 375.667L321.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M323 375L326 376L323 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M326 375L329 376L326 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M329 375L332 376L329 375z").attr({ fill: "#010105", stroke: "none" });
        paper.path("M332.667 375.333L333.333 375.667L332.667 375.333z").attr({ fill: "#077b3d", stroke: "none" });
        paper.path("M337.667 375.333L338.333 375.667L337.667 375.333z").attr({ fill: "#117753", stroke: "none" });
        paper.path("M339 375L342 376L339 375z").attr({ fill: "#01030d", stroke: "none" });
        paper.path("M342 375L345 376L342 375z").attr({ fill: "#017b4b", stroke: "none" });
        paper.path("M345 375L348 376L345 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M348.667 375.333L349.333 375.667L348.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M353.667 375.333L354.333 375.667L353.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M355 375L358 376L355 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M358 375L361 376L358 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M361 375L364 376L361 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M364.667 375.333L365.333 375.667L364.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M369.667 375.333L370.333 375.667L369.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M371 375L374 376L371 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M374 375L377 376L374 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M377 375L380 376L377 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M380.667 375.333L381.333 375.667L380.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M385.667 375.333L386.333 375.667L385.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M387 375L390 376L387 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M390 375L393 376L390 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M393 375L396 376L393 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M396.667 375.333L397.333 375.667L396.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M401.667 375.333L402.333 375.667L401.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M403 375L406 376L403 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M406 375L409 376L406 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M409 375L412 376L409 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M412.667 375.333L413.333 375.667L412.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M417.667 375.333L418.333 375.667L417.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M419 375L422 376L419 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M422 375L425 376L422 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M425 375L428 376L425 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M428.667 375.333L429.333 375.667L428.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M433.667 375.333L434.333 375.667L433.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M435 375L438 376L435 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M438 375L441 376L438 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M441 375L444 376L441 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M444.667 375.333L445.333 375.667L444.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M449.667 375.333L450.333 375.667L449.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M451 375L454 376L451 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M454 375L457 376L454 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M457 375L460 376L457 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M460.667 375.333L461.333 375.667L460.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M465.667 375.333L466.333 375.667L465.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M467 375L470 376L467 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M470 375L473 376L470 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M473 375L476 376L473 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M476.667 375.333L477.333 375.667L476.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M481.667 375.333L482.333 375.667L481.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M483 375L486 376L483 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M486 375L489 376L486 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M489 375L492 376L489 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M492.667 375.333L493.333 375.667L492.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M497.667 375.333L498.333 375.667L497.667 375.333z").attr({ fill: "#036f49", stroke: "none" });
        paper.path("M499 375L502 376L499 375z").attr({ fill: "#070107", stroke: "none" });
        paper.path("M502 375L505 376L502 375z").attr({ fill: "#017b3d", stroke: "none" });
        paper.path("M505 375L508 376L505 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M508.667 375.333L509.333 375.667L508.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M513.667 375.333L514.333 375.667L513.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M515 375L518 376L515 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M518 375L521 376L518 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M521 375L524 376L521 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M524.667 375.333L525.333 375.667L524.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M529.667 375.333L530.333 375.667L529.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M531 375L534 376L531 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M534 375L537 376L534 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M537 375L540 376L537 375z").attr({ fill: "#030501", stroke: "none" });
        paper.path("M540.667 375.333L541.333 375.667L540.667 375.333z").attr({ fill: "#017f43", stroke: "none" });
        paper.path("M545.667 375.333L546.333 375.667L545.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M547 375L550 376L547 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M550 375L553 376L550 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M553 375L556 376L553 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M556.667 375.333L557.333 375.667L556.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M561.667 375.333L562.333 375.667L561.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M563 375L566 376L563 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M566 375L569 376L566 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M569 375L572 376L569 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M572.667 375.333L573.333 375.667L572.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M577.667 375.333L578.333 375.667L577.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M579 375L582 376L579 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M582 375L585 376L582 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M585 375L588 376L585 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M588.667 375.333L589.333 375.667L588.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M593.667 375.333L594.333 375.667L593.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M595 375L598 376L595 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M598 375L601 376L598 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M601 375L604 376L601 375z").attr({ fill: "#010105", stroke: "none" });
        paper.path("M604.667 375.333L605.333 375.667L604.667 375.333z").attr({ fill: "#077b3d", stroke: "none" });
        paper.path("M609.667 375.333L610.333 375.667L609.667 375.333z").attr({ fill: "#117753", stroke: "none" });
        paper.path("M611 375L614 376L611 375z").attr({ fill: "#01030d", stroke: "none" });
        paper.path("M614 375L617 376L614 375z").attr({ fill: "#017b4b", stroke: "none" });
        paper.path("M617 375L620 376L617 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M620.667 375.333L621.333 375.667L620.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M625.667 375.333L626.333 375.667L625.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M627 375L630 376L627 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M630 375L633 376L630 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M633 375L636 376L633 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M636.667 375.333L637.333 375.667L636.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M641.667 375.333L642.333 375.667L641.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M643 375L646 376L643 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M646 375L649 376L646 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M649 375L652 376L649 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M652.667 375.333L653.333 375.667L652.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M657.667 375.333L658.333 375.667L657.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M659 375L662 376L659 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M662 375L665 376L662 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M665 375L668 376L665 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M668.667 375.333L669.333 375.667L668.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M673.667 375.333L674.333 375.667L673.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M675 375L678 376L675 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M678 375L681 376L678 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M681 375L684 376L681 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M684.667 375.333L685.333 375.667L684.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M689.667 375.333L690.333 375.667L689.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M691 375L694 376L691 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M694 375L697 376L694 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M697 375L700 376L697 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M700.667 375.333L701.333 375.667L700.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M705.667 375.333L706.333 375.667L705.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M707 375L710 376L707 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M710 375L713 376L710 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M713 375L716 376L713 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M716.667 375.333L717.333 375.667L716.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M721.667 375.333L722.333 375.667L721.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M723 375L726 376L723 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M726 375L729 376L726 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M729 375L732 376L729 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M732.667 375.333L733.333 375.667L732.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M737.667 375.333L738.333 375.667L737.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M739 375L742 376L739 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M742 375L745 376L742 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M745 375L748 376L745 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M748.667 375.333L749.333 375.667L748.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M753.667 375.333L754.333 375.667L753.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M755 375L758 376L755 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M758 375L761 376L758 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M761 375L764 376L761 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M764.667 375.333L765.333 375.667L764.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M769.667 375.333L770.333 375.667L769.667 375.333z").attr({ fill: "#036f49", stroke: "none" });
        paper.path("M771 375L774 376L771 375z").attr({ fill: "#070107", stroke: "none" });
        paper.path("M774 375L777 376L774 375z").attr({ fill: "#017b3d", stroke: "none" });
        paper.path("M777 375L780 376L777 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M780.667 375.333L781.333 375.667L780.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M785.667 375.333L786.333 375.667L785.667 375.333z").attr({ fill: "#05775b", stroke: "none" });
        paper.path("M787 375L790 376L787 375z").attr({ fill: "#050701", stroke: "none" });
        paper.path("M790 375L793 376L790 375z").attr({ fill: "#017d41", stroke: "none" });
        paper.path("M793 375L796 376L793 375z").attr({ fill: "#0b0101", stroke: "none" });
        paper.path("M796.667 375.333L797.333 375.667L796.667 375.333z").attr({ fill: "#017b3f", stroke: "none" });
        paper.path("M0 376L1 377L0 376z").attr({ fill: "#097349", stroke: "none" });
        paper.path("M1.66667 376.333L2.33333 376.667L1.66667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M0 378L21 378.559L69 378.559L229 378.559L607 378.84C670.887 378.055 736.214 375.276 800 379C795.022 375.06 789.821 376.837 784 377.035L751 377.035C703.563 375.416 655.437 375.416 608 377.035L391 376.349C319.282 377.193 246.676 379.483 175 377.035L48 377.035C34.0038 377.513 12.8311 372.055 0 378z").attr({ fill: "#796919", stroke: "none" });
        paper.path("M6 376L9 377L6 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M12.6667 376.333L13.3333 376.667L12.6667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M14 376L17 377L14 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M17.6667 376.333L18.3333 376.667L17.6667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M22 376L25 377L22 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M28.6667 376.333L29.3333 376.667L28.6667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M30 376L33 377L30 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M33.6667 376.333L34.3333 376.667L33.6667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M38 376L41 377L38 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M44.6667 376.333L45.3333 376.667L44.6667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M46 376L49 377L46 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M49.6667 376.333L50.3333 376.667L49.6667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M54 376L57 377L54 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M60.6667 376.333L61.3333 376.667L60.6667 376.333z").attr({ fill: "#010107", stroke: "none" });
        paper.path("M62 376L65 377L62 376z").attr({ fill: "#07754b", stroke: "none" });
        paper.path("M65.6667 376.333L66.3333 376.667L65.6667 376.333z").attr({ fill: "#010107", stroke: "none" });
        paper.path("M70 376L73 377L70 376z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M76.6667 376.333L77.3333 376.667L76.6667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M78 376L81 377L78 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M81.6667 376.333L82.3333 376.667L81.6667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M86 376L89 377L86 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M92.6667 376.333L93.3333 376.667L92.6667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M94 376L97 377L94 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M97.6667 376.333L98.3333 376.667L97.6667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M102 376L105 377L102 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M108.667 376.333L109.333 376.667L108.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M110 376L113 377L110 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M113.667 376.333L114.333 376.667L113.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M118 376L121 377L118 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M124.667 376.333L125.333 376.667L124.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M126 376L129 377L126 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M129.667 376.333L130.333 376.667L129.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M134 376L137 377L134 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M140.667 376.333L141.333 376.667L140.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M142 376L145 377L142 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M145.667 376.333L146.333 376.667L145.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M150 376L153 377L150 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M156.667 376.333L157.333 376.667L156.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M158 376L161 377L158 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M161.667 376.333L162.333 376.667L161.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M166 376L169 377L166 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M172.667 376.333L173.333 376.667L172.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M174 376L177 377L174 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M177.667 376.333L178.333 376.667L177.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M182 376L185 377L182 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M188.667 376.333L189.333 376.667L188.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M190 376L193 377L190 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M193.667 376.333L194.333 376.667L193.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M198 376L201 377L198 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M204.667 376.333L205.333 376.667L204.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M206 376L209 377L206 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M209.667 376.333L210.333 376.667L209.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M214 376L217 377L214 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M220.667 376.333L221.333 376.667L220.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M222 376L225 377L222 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M225.667 376.333L226.333 376.667L225.667 376.333z").attr({ fill: "#010b01", stroke: "none" });
        paper.path("M230 376L233 377L230 376z").attr({ fill: "#030109", stroke: "none" });
        paper.path("M236.667 376.333L237.333 376.667L236.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M238 376L241 377L238 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M241.667 376.333L242.333 376.667L241.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M246 376L249 377L246 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M252.667 376.333L253.333 376.667L252.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M254 376L257 377L254 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M257.667 376.333L258.333 376.667L257.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M262 376L265 377L262 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M268.667 376.333L269.333 376.667L268.667 376.333z").attr({ fill: "#010901", stroke: "none" });
        paper.path("M270 376L273 377L270 376z").attr({ fill: "#017347", stroke: "none" });
        paper.path("M273.667 376.333L274.333 376.667L273.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M278 376L281 377L278 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M284.667 376.333L285.333 376.667L284.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M286 376L289 377L286 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M289.667 376.333L290.333 376.667L289.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M294 376L297 377L294 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M300.667 376.333L301.333 376.667L300.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M302 376L305 377L302 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M305.667 376.333L306.333 376.667L305.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M310 376L313 377L310 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M316.667 376.333L317.333 376.667L316.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M318 376L321 377L318 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M321.667 376.333L322.333 376.667L321.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M326 376L329 377L326 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M332.667 376.333L333.333 376.667L332.667 376.333z").attr({ fill: "#010107", stroke: "none" });
        paper.path("M334 376L337 377L334 376z").attr({ fill: "#07754b", stroke: "none" });
        paper.path("M337.667 376.333L338.333 376.667L337.667 376.333z").attr({ fill: "#010107", stroke: "none" });
        paper.path("M342 376L345 377L342 376z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M348.667 376.333L349.333 376.667L348.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M350 376L353 377L350 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M353.667 376.333L354.333 376.667L353.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M358 376L361 377L358 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M364.667 376.333L365.333 376.667L364.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M366 376L369 377L366 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M369.667 376.333L370.333 376.667L369.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M374 376L377 377L374 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M380.667 376.333L381.333 376.667L380.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M382 376L385 377L382 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M385.667 376.333L386.333 376.667L385.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M390 376L393 377L390 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M396.667 376.333L397.333 376.667L396.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M398 376L401 377L398 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M401.667 376.333L402.333 376.667L401.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M406 376L409 377L406 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M412.667 376.333L413.333 376.667L412.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M414 376L417 377L414 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M417.667 376.333L418.333 376.667L417.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M422 376L425 377L422 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M428.667 376.333L429.333 376.667L428.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M430 376L433 377L430 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M433.667 376.333L434.333 376.667L433.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M438 376L441 377L438 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M444.667 376.333L445.333 376.667L444.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M446 376L449 377L446 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M449.667 376.333L450.333 376.667L449.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M454 376L457 377L454 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M460.667 376.333L461.333 376.667L460.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M462 376L465 377L462 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M465.667 376.333L466.333 376.667L465.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M470 376L473 377L470 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M476.667 376.333L477.333 376.667L476.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M478 376L481 377L478 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M481.667 376.333L482.333 376.667L481.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M486 376L489 377L486 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M492.667 376.333L493.333 376.667L492.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M494 376L497 377L494 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M497.667 376.333L498.333 376.667L497.667 376.333z").attr({ fill: "#010b01", stroke: "none" });
        paper.path("M502 376L505 377L502 376z").attr({ fill: "#030109", stroke: "none" });
        paper.path("M508.667 376.333L509.333 376.667L508.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M510 376L513 377L510 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M513.667 376.333L514.333 376.667L513.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M518 376L521 377L518 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M524.667 376.333L525.333 376.667L524.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M526 376L529 377L526 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M529.667 376.333L530.333 376.667L529.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M534 376L537 377L534 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M540.667 376.333L541.333 376.667L540.667 376.333z").attr({ fill: "#010901", stroke: "none" });
        paper.path("M542 376L545 377L542 376z").attr({ fill: "#017347", stroke: "none" });
        paper.path("M545.667 376.333L546.333 376.667L545.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M550 376L553 377L550 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M556.667 376.333L557.333 376.667L556.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M558 376L561 377L558 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M561.667 376.333L562.333 376.667L561.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M566 376L569 377L566 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M572.667 376.333L573.333 376.667L572.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M574 376L577 377L574 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M577.667 376.333L578.333 376.667L577.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M582 376L585 377L582 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M588.667 376.333L589.333 376.667L588.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M590 376L593 377L590 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M593.667 376.333L594.333 376.667L593.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M598 376L601 377L598 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M604.667 376.333L605.333 376.667L604.667 376.333z").attr({ fill: "#010107", stroke: "none" });
        paper.path("M606 376L609 377L606 376z").attr({ fill: "#07754b", stroke: "none" });
        paper.path("M609.667 376.333L610.333 376.667L609.667 376.333z").attr({ fill: "#010107", stroke: "none" });
        paper.path("M614 376L617 377L614 376z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M620.667 376.333L621.333 376.667L620.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M622 376L625 377L622 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M625.667 376.333L626.333 376.667L625.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M630 376L633 377L630 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M636.667 376.333L637.333 376.667L636.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M638 376L641 377L638 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M641.667 376.333L642.333 376.667L641.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M646 376L649 377L646 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M652.667 376.333L653.333 376.667L652.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M654 376L657 377L654 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M657.667 376.333L658.333 376.667L657.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M662 376L665 377L662 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M668.667 376.333L669.333 376.667L668.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M670 376L673 377L670 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M673.667 376.333L674.333 376.667L673.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M678 376L681 377L678 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M684.667 376.333L685.333 376.667L684.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M686 376L689 377L686 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M689.667 376.333L690.333 376.667L689.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M694 376L697 377L694 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M700.667 376.333L701.333 376.667L700.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M702 376L705 377L702 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M705.667 376.333L706.333 376.667L705.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M710 376L713 377L710 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M716.667 376.333L717.333 376.667L716.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M718 376L721 377L718 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M721.667 376.333L722.333 376.667L721.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M726 376L729 377L726 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M732.667 376.333L733.333 376.667L732.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M734 376L737 377L734 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M737.667 376.333L738.333 376.667L737.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M742 376L745 377L742 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M748.667 376.333L749.333 376.667L748.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M750 376L753 377L750 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M753.667 376.333L754.333 376.667L753.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M758 376L761 377L758 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M764.667 376.333L765.333 376.667L764.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M766 376L769 377L766 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M769.667 376.333L770.333 376.667L769.667 376.333z").attr({ fill: "#010b01", stroke: "none" });
        paper.path("M774 376L777 377L774 376z").attr({ fill: "#030109", stroke: "none" });
        paper.path("M8.33333 392.667L8.66667 393.333L8.33333 392.667M24.3333 392.667L24.6667 393.333L24.3333 392.667M40.3333 392.667L40.6667 393.333L40.3333 392.667M56.3333 392.667L56.6667 393.333L56.3333 392.667M72.3333 392.667L72.6667 393.333L72.3333 392.667M88.3333 392.667L88.6667 393.333L88.3333 392.667M104.333 392.667L104.667 393.333L104.333 392.667M120.333 392.667L120.667 393.333L120.333 392.667M136.333 392.667L136.667 393.333L136.333 392.667M152.333 392.667L152.667 393.333L152.333 392.667M168.333 392.667L168.667 393.333L168.333 392.667M184.333 392.667L184.667 393.333L184.333 392.667M200.333 392.667L200.667 393.333L200.333 392.667M216.333 392.667L216.667 393.333L216.333 392.667M232.333 392.667L232.667 393.333L232.333 392.667M248.333 392.667L248.667 393.333L248.333 392.667M264.333 392.667L264.667 393.333L264.333 392.667M280.333 392.667L280.667 393.333L280.333 392.667M296.333 392.667L296.667 393.333L296.333 392.667M312.333 392.667L312.667 393.333L312.333 392.667M328.333 392.667L328.667 393.333L328.333 392.667M344.333 392.667L344.667 393.333L344.333 392.667M360.333 392.667L360.667 393.333L360.333 392.667M376.333 392.667L376.667 393.333L376.333 392.667M392.333 392.667L392.667 393.333L392.333 392.667M408.333 392.667L408.667 393.333L408.333 392.667M424.333 392.667L424.667 393.333L424.333 392.667M440.333 392.667L440.667 393.333L440.333 392.667M456.333 392.667L456.667 393.333L456.333 392.667M472.333 392.667L472.667 393.333L472.333 392.667M488.333 392.667L488.667 393.333L488.333 392.667M504.333 392.667L504.667 393.333L504.333 392.667M520.333 392.667L520.667 393.333L520.333 392.667M536.333 392.667L536.667 393.333L536.333 392.667M552.333 392.667L552.667 393.333L552.333 392.667M568.333 392.667L568.667 393.333L568.333 392.667M584.333 392.667L584.667 393.333L584.333 392.667M600.333 392.667L600.667 393.333L600.333 392.667M616.333 392.667L616.667 393.333L616.333 392.667M632.333 392.667L632.667 393.333L632.333 392.667M648.333 392.667L648.667 393.333L648.333 392.667M664.333 392.667L664.667 393.333L664.333 392.667M680.333 392.667L680.667 393.333L680.333 392.667M696.333 392.667L696.667 393.333L696.333 392.667M712.333 392.667L712.667 393.333L712.333 392.667M728.333 392.667L728.667 393.333L728.333 392.667M744.333 392.667L744.667 393.333L744.333 392.667M760.333 392.667L760.667 393.333L760.333 392.667M776.333 392.667L776.667 393.333L776.333 392.667M792.333 392.667L792.667 393.333L792.333 392.667z").attr({ fill: "#e5c149", stroke: "none" });
        paper.path("M780.667 376.333L781.333 376.667L780.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M782 376L785 377L782 376z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M785.667 376.333L786.333 376.667L785.667 376.333z").attr({ fill: "#090105", stroke: "none" });
        paper.path("M790 376L793 377L790 376z").attr({ fill: "#01010b", stroke: "none" });
        paper.path("M796.667 376.333L797.333 376.667L796.667 376.333z").attr({ fill: "#01090f", stroke: "none" });
        paper.path("M798.667 376.333L799.333 376.667L798.667 376.333z").attr({ fill: "#017b49", stroke: "none" });
        paper.path("M0 377L1 378L0 377z").attr({ fill: "#010307", stroke: "none" });
        paper.path("M14 377L17 378L14 377M30 377L33 378L30 377M46 377L49 378L46 377M62 377L65 378L62 377M78 377L81 378L78 377M94 377L97 378L94 377M110 377L113 378L110 377M126 377L129 378L126 377M142 377L145 378L142 377M158 377L161 378L158 377M174 377L177 378L174 377M190 377L193 378L190 377M206 377L209 378L206 377M222 377L225 378L222 377M238 377L241 378L238 377M254 377L257 378L254 377z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M270 377L273 378L270 377z").attr({ fill: "#070101", stroke: "none" });
        paper.path("M286 377L289 378L286 377M302 377L305 378L302 377M318 377L321 378L318 377M334 377L337 378L334 377M350 377L353 378L350 377M366 377L369 378L366 377M382 377L385 378L382 377M398 377L401 378L398 377M414 377L417 378L414 377M430 377L433 378L430 377M446 377L449 378L446 377M462 377L465 378L462 377M478 377L481 378L478 377M494 377L497 378L494 377M510 377L513 378L510 377M526 377L529 378L526 377z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M542 377L545 378L542 377z").attr({ fill: "#070101", stroke: "none" });
        paper.path("M558 377L561 378L558 377M574 377L577 378L574 377M590 377L593 378L590 377M606 377L609 378L606 377M622 377L625 378L622 377M638 377L641 378L638 377M654 377L657 378L654 377M670 377L673 378L670 377M686 377L689 378L686 377M702 377L705 378L702 377M718 377L721 378L718 377M734 377L737 378L734 377M750 377L753 378L750 377M766 377L769 378L766 377M782 377L785 378L782 377M798.667 377.333L799.333 377.667L798.667 377.333z").attr({ fill: "#010301", stroke: "none" });
        paper.path("M0 400C5.11141 400 11.9106 401.694 15 397L16 400L26 400L20 393L24 392L29 394L30 389L27 386L34 388L33 382L23 386C23.579 382.317 24.7586 380.816 28 379C23.7835 377.58 3.95906 376.182 1.02778 379.746L0 400z").attr({ fill: "#c99957", stroke: "none" });
        paper.path("M26 379L26 383L24 381L23 386L30 385L30 381L32 387L34 391L27 386L30 389L29 394L20 393C21.6161 395.886 22.7132 396.3 26 396L26 400L31 397L32 400C37.1114 400 43.9106 401.694 47 397L48 400C53.1114 400 59.9106 401.694 63 397L64 400C69.1114 400 75.9106 401.694 79 397L80 400C85.1114 400 91.9106 401.694 95 397L96 400C101.111 400 107.911 401.694 111 397L112 400C117.111 400 123.911 401.694 127 397L128 400C133.111 400 139.911 401.694 143 397L144 400C149.111 400 155.911 401.694 159 397L160 400C165.111 400 171.911 401.694 175 397L176 400C181.111 400 187.911 401.694 191 397L192 400C197.111 400 203.911 401.694 207 397L208 400C213.111 400 219.911 401.694 223 397L224 400C229.111 400 235.911 401.694 239 397L240 400C245.111 400 251.911 401.694 255 397L256 400C261.111 400 267.911 401.694 271 397L272 400C277.111 400 283.911 401.694 287 397L288 400C293.111 400 299.911 401.694 303 397L304 400C309.111 400 315.911 401.694 319 397L320 400C325.111 400 331.911 401.694 335 397L336 400C341.111 400 347.911 401.694 351 397L352 400C357.111 400 363.911 401.694 367 397L368 400C373.111 400 379.911 401.694 383 397L384 400C389.111 400 395.911 401.694 399 397L400 400C405.111 400 411.911 401.694 415 397L416 400C421.111 400 427.911 401.694 431 397L432 400C437.111 400 443.911 401.694 447 397L448 400C453.111 400 459.911 401.694 463 397L464 400C469.111 400 475.911 401.694 479 397L480 400C485.111 400 491.911 401.694 495 397L496 400C501.111 400 507.911 401.694 511 397L512 400C517.111 400 523.911 401.694 527 397L528 400C533.111 400 539.911 401.694 543 397L544 400C549.111 400 555.911 401.694 559 397L560 400C565.111 400 571.911 401.694 575 397L576 400C581.111 400 587.911 401.694 591 397L592 400C597.111 400 603.911 401.694 607 397L608 400C613.111 400 619.911 401.694 623 397L624 400C629.111 400 635.911 401.694 639 397L640 400C645.111 400 651.911 401.694 655 397L656 400C661.111 400 667.911 401.694 671 397L672 400C677.111 400 683.911 401.694 687 397L688 400C693.111 400 699.911 401.694 703 397L704 400C709.111 400 715.911 401.694 719 397L720 400C725.111 400 731.911 401.694 735 397L736 400C741.111 400 747.911 401.694 751 397L752 400L766 400L766 395C770.253 394.072 770.861 392.172 771 388L772 392L776 387L774 389L773 380C745.534 374.825 714.879 378.502 687 378.665L527 378.665L26 379z").attr({ fill: "#c99959", stroke: "none" });
        paper.path("M770 378L773 380L773 389L776 387L772 392L772 388L766 395L768 400C773.111 400 779.911 401.694 783 397L784 400L798 400L800 379L770 378z").attr({ fill: "#c99955", stroke: "none" });
        paper.path("M8 380L8 383L10 383L10 380L8 380M24 380L24 383L26 383L26 380L24 380M40 380L40 383L42 383L42 380L40 380M56 380L56 383L58 383L58 380L56 380M72 380L72 383L74 383L74 380L72 380M88 380L88 383L90 383L90 380L88 380M104 380L104 383L106 383L106 380L104 380M120 380L120 383L122 383L122 380L120 380M136 380L136 383L138 383L138 380L136 380M152 380L152 383L154 383L154 380L152 380M168 380L168 383L170 383L170 380L168 380M184 380L184 383L186 383L186 380L184 380M200 380L200 383L202 383L202 380L200 380M216 380L216 383L218 383L218 380L216 380M232 380L232 383L234 383L234 380L232 380M248 380L248 383L250 383L250 380L248 380M264 380L264 383L266 383L266 380L264 380M280 380L280 383L282 383L282 380L280 380M296 380L296 383L298 383L298 380L296 380M312 380L312 383L314 383L314 380L312 380M328 380L328 383L330 383L330 380L328 380M344 380L344 383L346 383L346 380L344 380M360 380L360 383L362 383L362 380L360 380M376 380L376 383L378 383L378 380L376 380M392 380L392 383L394 383L394 380L392 380M408 380L408 383L410 383L410 380L408 380M424 380L424 383L426 383L426 380L424 380M440 380L440 383L442 383L442 380L440 380M456 380L456 383L458 383L458 380L456 380M472 380L472 383L474 383L474 380L472 380M488 380L488 383L490 383L490 380L488 380M504 380L504 383L506 383L506 380L504 380M520 380L520 383L522 383L522 380L520 380M536 380L536 383L538 383L538 380L536 380M552 380L552 383L554 383L554 380L552 380M568 380L568 383L570 383L570 380L568 380M584 380L584 383L586 383L586 380L584 380M600 380L600 383L602 383L602 380L600 380M616 380L616 383L618 383L618 380L616 380M632 380L632 383L634 383L634 380L632 380M648 380L648 383L650 383L650 380L648 380M664 380L664 383L666 383L666 380L664 380M680 380L680 383L682 383L682 380L680 380M696 380L696 383L698 383L698 380L696 380M712 380L712 383L714 383L714 380L712 380M728 380L728 383L730 383L730 380L728 380M744 380L744 383L746 383L746 380L744 380M760 380L760 383L762 383L762 380L760 380M776 380L776 383L778 383L778 380L776 380M792 380L792 383L794 383L794 380L792 380z").attr({ fill: "#e3c553", stroke: "none" });
        paper.path("M14 381L14 384L16 384L16 381L14 381M30 381L30 384L32 384L32 381L30 381M46 381L46 384L48 384L48 381L46 381M62 381L62 384L64 384L64 381L62 381M78 381L78 384L80 384L80 381L78 381M94 381L94 384L96 384L96 381L94 381M110 381L110 384L112 384L112 381L110 381M126 381L126 384L128 384L128 381L126 381M142 381L142 384L144 384L144 381L142 381M158 381L158 384L160 384L160 381L158 381M174 381L174 384L176 384L176 381L174 381M190 381L190 384L192 384L192 381L190 381M206 381L206 384L208 384L208 381L206 381M222 381L222 384L224 384L224 381L222 381M238 381L238 384L240 384L240 381L238 381M254 381L254 384L256 384L256 381L254 381M270 381L270 384L272 384L272 381L270 381M286 381L286 384L288 384L288 381L286 381M302 381L302 384L304 384L304 381L302 381M318 381L318 384L320 384L320 381L318 381M334 381L334 384L336 384L336 381L334 381M350 381L350 384L352 384L352 381L350 381M366 381L366 384L368 384L368 381L366 381M382 381L382 384L384 384L384 381L382 381M398 381L398 384L400 384L400 381L398 381M414 381L414 384L416 384L416 381L414 381M430 381L430 384L432 384L432 381L430 381M446 381L446 384L448 384L448 381L446 381M462 381L462 384L464 384L464 381L462 381M478 381L478 384L480 384L480 381L478 381M494 381L494 384L496 384L496 381L494 381M510 381L510 384L512 384L512 381L510 381M526 381L526 384L528 384L528 381L526 381M542 381L542 384L544 384L544 381L542 381M558 381L558 384L560 384L560 381L558 381M574 381L574 384L576 384L576 381L574 381M590 381L590 384L592 384L592 381L590 381M606 381L606 384L608 384L608 381L606 381M622 381L622 384L624 384L624 381L622 381M638 381L638 384L640 384L640 381L638 381M654 381L654 384L656 384L656 381L654 381M670 381L670 384L672 384L672 381L670 381M686 381L686 384L688 384L688 381L686 381M702 381L702 384L704 384L704 381L702 381M718 381L718 384L720 384L720 381L718 381M734 381L734 384L736 384L736 381L734 381M750 381L750 384L752 384L752 381L750 381M766 381L766 384L768 384L768 381L766 381M782 381L782 384L784 384L784 381L782 381M798 381L798 384L800 384L800 381L798 381z").attr({ fill: "#e1c355", stroke: "none" });
        paper.path("M0 388L0 391L2 391L2 388L0 388M16 388L16 391L18 391L18 388L16 388M32 388L32 391L34 391L34 388L32 388M48 388L48 391L50 391L50 388L48 388M64 388L64 391L66 391L66 388L64 388M80 388L80 391L82 391L82 388L80 388M96 388L96 391L98 391L98 388L96 388M112 388L112 391L114 391L114 388L112 388M128 388L128 391L130 391L130 388L128 388M144 388L144 391L146 391L146 388L144 388M160 388L160 391L162 391L162 388L160 388M176 388L176 391L178 391L178 388L176 388M192 388L192 391L194 391L194 388L192 388M208 388L208 391L210 391L210 388L208 388M224 388L224 391L226 391L226 388L224 388M240 388L240 391L242 391L242 388L240 388M256 388L256 391L258 391L258 388L256 388M272 388L272 391L274 391L274 388L272 388M288 388L288 391L290 391L290 388L288 388M304 388L304 391L306 391L306 388L304 388M320 388L320 391L322 391L322 388L320 388M336 388L336 391L338 391L338 388L336 388M352 388L352 391L354 391L354 388L352 388M368 388L368 391L370 391L370 388L368 388M384 388L384 391L386 391L386 388L384 388M400 388L400 391L402 391L402 388L400 388M416 388L416 391L418 391L418 388L416 388M432 388L432 391L434 391L434 388L432 388M448 388L448 391L450 391L450 388L448 388M464 388L464 391L466 391L466 388L464 388M480 388L480 391L482 391L482 388L480 388M496 388L496 391L498 391L498 388L496 388M512 388L512 391L514 391L514 388L512 388M528 388L528 391L530 391L530 388L528 388M544 388L544 391L546 391L546 388L544 388M560 388L560 391L562 391L562 388L560 388M576 388L576 391L578 391L578 388L576 388M592 388L592 391L594 391L594 388L592 388M608 388L608 391L610 391L610 388L608 388M624 388L624 391L626 391L626 388L624 388M640 388L640 391L642 391L642 388L640 388M656 388L656 391L658 391L658 388L656 388M672 388L672 391L674 391L674 388L672 388M688 388L688 391L690 391L690 388L688 388M704 388L704 391L706 391L706 388L704 388M720 388L720 391L722 391L722 388L720 388M736 388L736 391L738 391L738 388L736 388M752 388L752 391L754 391L754 388L752 388M768 388L768 391L770 391L770 388L768 388M784 388L784 391L786 391L786 388L784 388z").attr({ fill: "#e1bd53", stroke: "none" });
        paper.path("M8 396L8 399L10 399L10 396L8 396M24 396L24 399L26 399L26 396L24 396M40 396L40 399L42 399L42 396L40 396M56 396L56 399L58 399L58 396L56 396M72 396L72 399L74 399L74 396L72 396M88 396L88 399L90 399L90 396L88 396M104 396L104 399L106 399L106 396L104 396M120 396L120 399L122 399L122 396L120 396M136 396L136 399L138 399L138 396L136 396M152 396L152 399L154 399L154 396L152 396M168 396L168 399L170 399L170 396L168 396M184 396L184 399L186 399L186 396L184 396M200 396L200 399L202 399L202 396L200 396M216 396L216 399L218 399L218 396L216 396M232 396L232 399L234 399L234 396L232 396M248 396L248 399L250 399L250 396L248 396M264 396L264 399L266 399L266 396L264 396M280 396L280 399L282 399L282 396L280 396M296 396L296 399L298 399L298 396L296 396M312 396L312 399L314 399L314 396L312 396M328 396L328 399L330 399L330 396L328 396M344 396L344 399L346 399L346 396L344 396M360 396L360 399L362 399L362 396L360 396M376 396L376 399L378 399L378 396L376 396M392 396L392 399L394 399L394 396L392 396M408 396L408 399L410 399L410 396L408 396M424 396L424 399L426 399L426 396L424 396M440 396L440 399L442 399L442 396L440 396M456 396L456 399L458 399L458 396L456 396M472 396L472 399L474 399L474 396L472 396M488 396L488 399L490 399L490 396L488 396M504 396L504 399L506 399L506 396L504 396M520 396L520 399L522 399L522 396L520 396M536 396L536 399L538 399L538 396L536 396M552 396L552 399L554 399L554 396L552 396M568 396L568 399L570 399L570 396L568 396M584 396L584 399L586 399L586 396L584 396M600 396L600 399L602 399L602 396L600 396M616 396L616 399L618 399L618 396L616 396M632 396L632 399L634 399L634 396L632 396M648 396L648 399L650 399L650 396L648 396M664 396L664 399L666 399L666 396L664 396M680 396L680 399L682 399L682 396L680 396M696 396L696 399L698 399L698 396L696 396M712 396L712 399L714 399L714 396L712 396M728 396L728 399L730 399L730 396L728 396M744 396L744 399L746 399L746 396L744 396M760 396L760 399L762 399L762 396L760 396M776 396L776 399L778 399L778 396L776 396M792 396L792 399L794 399L794 396L792 396z").attr({ fill: "#e1bf49", stroke: "none" });
        paper.path("M14 397L14 400L16 400L16 397L14 397M30 397L30 400L32 400L32 397L30 397M46 397L46 400L48 400L48 397L46 397M62 397L62 400L64 400L64 397L62 397M78 397L78 400L80 400L80 397L78 397M94 397L94 400L96 400L96 397L94 397M110 397L110 400L112 400L112 397L110 397M126 397L126 400L128 400L128 397L126 397M142 397L142 400L144 400L144 397L142 397M158 397L158 400L160 400L160 397L158 397M174 397L174 400L176 400L176 397L174 397M190 397L190 400L192 400L192 397L190 397M206 397L206 400L208 400L208 397L206 397M222 397L222 400L224 400L224 397L222 397M238 397L238 400L240 400L240 397L238 397M254 397L254 400L256 400L256 397L254 397M270 397L270 400L272 400L272 397L270 397M286 397L286 400L288 400L288 397L286 397M302 397L302 400L304 400L304 397L302 397M318 397L318 400L320 400L320 397L318 397M334 397L334 400L336 400L336 397L334 397M350 397L350 400L352 400L352 397L350 397M366 397L366 400L368 400L368 397L366 397M382 397L382 400L384 400L384 397L382 397M398 397L398 400L400 400L400 397L398 397M414 397L414 400L416 400L416 397L414 397M430 397L430 400L432 400L432 397L430 397M446 397L446 400L448 400L448 397L446 397M462 397L462 400L464 400L464 397L462 397M478 397L478 400L480 400L480 397L478 397M494 397L494 400L496 400L496 397L494 397M510 397L510 400L512 400L512 397L510 397M526 397L526 400L528 400L528 397L526 397M542 397L542 400L544 400L544 397L542 397M558 397L558 400L560 400L560 397L558 397M574 397L574 400L576 400L576 397L574 397M590 397L590 400L592 400L592 397L590 397M606 397L606 400L608 400L608 397L606 397M622 397L622 400L624 400L624 397L622 397M638 397L638 400L640 400L640 397L638 397M654 397L654 400L656 400L656 397L654 397M670 397L670 400L672 400L672 397L670 397M686 397L686 400L688 400L688 397L686 397M702 397L702 400L704 400L704 397L702 397M718 397L718 400L720 400L720 397L718 397M734 397L734 400L736 400L736 397L734 397M750 397L750 400L752 400L752 397L750 397M766 397L766 400L768 400L768 397L766 397M782 397L782 400L784 400L784 397L782 397M798 397L798 400L800 400L800 397L798 397z").attr({ fill: "#e3bd53", stroke: "none" });
    }
}