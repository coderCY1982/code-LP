/*ハンバーガーメニューを開閉させる命令*/
    $(function() {
        var $header = $('#header');
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
