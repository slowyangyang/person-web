/**
 * Created by Chris on 2016/4/4.
 */
var project_info  = function () {

//        褰撳墠娲诲姩鏍囩
    var current = 1;

    display($('#rotmenu li:first'));
    $('#rotmenu li').bind('click', function (e) {
        display($(this));
        e.preventDefault();
    });
    function display(elem) {
        var $this = elem;
        var repeat = false;

        $this.parent().find('li:nth-child(' + current + ') a')
            .stop()
            .animate({'marginRight': '-20px'}, 300, function () {
                $(this).animate({'opacity': '0.7'}, 700);
            });

        //閲嶇疆褰撳墠current
        current = parseInt($this.index() + 1);

        // 鎶奱寰€澶栫Щ鍔ㄦ晥鏋滄樉绀�
        var elem = $('a', $this);
        elem.stop().animate({'marginRight': '0px', 'opacity': '1.0'}, 300);

        // 淇℃伅灞曠ず
        var info_elem = elem.next();
        $('#rot1 .heading').stop().animate({'left': '-420px'}, 500, 'easeOutCirc', function () {
            $('h1', $(this)).html(info_elem.find('.info_heading').html());
            $(this).animate({'left': '0px'}, 400, 'easeInOutQuad');
        });

        $('#rot1 .description').stop().animate({'bottom': '-270px'}, 500, 'easeOutCirc', function () {
            $('p', $(this)).html(info_elem.find('.info_description').html());
            $(this).animate({'bottom': '0px'}, 400, 'easeInOutQuad');
        })

        $('#rot1').prepend(
            $('<img/>', {
                style: 'opacity:0',
                className: 'bg'
            }).load(
                function () {
                    $(this).animate({'opacity': '1'}, 600);
                    $('#rot1 img:first').next().animate({'opacity': '0'}, 700, function () {
                        $(this).remove();
                    });
                }
            ).attr('src', 'images/' + info_elem.find('.info_image').html()).attr('width', '100%').attr('height', '300')
        );
    }

}