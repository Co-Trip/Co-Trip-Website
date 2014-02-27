/**
 * 
 * @authors Tom Hu (h1994st@gmail.com)
 * @date    2014-02-26 17:11:38
 * @version 1.0
 */

$(document).ready(function() {
    $('button[data-toggle="clear_notification"]').click(function(event) {
        $('.CT-notification-list').empty();
        var unreadNumber = parseInt($('#unread-badge').text());
        $('#unread-badge').empty();
        var readNumber = parseInt($('#read-badge').text());
        $('#read-badge').text(readNumber + unreadNumber);
        $('#notification-circle').removeClass('notification-unread');
    });
});