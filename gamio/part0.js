$('#t').on('focus', function(e) {
    var check = $('#t').val();
    if (check == '') {
        console.log('Change value')
        $('#t').val("> ");
    } else {
        console.log(check)
    }
});
$("#form").on("submit", function(e) {
    e.preventDefault();
    console.log('Sending data...')
    $("#s").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="visually-hidden">Loading...</span>')
    $('#s').attr('disabled', true);
    $.ajax({
        url: '/game/preparation-text',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),
        success: function(data) {
            var jss = jQuery.parseJSON(data);
            console.log(jss.text)
            $.ajax({
                type: 'POST',
                url: '/game/create-task',
                data: {
                    'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
                    'text': jss.text,
                    'engine': $('input[name="engine"]').val(),
                    'key': $('input[name="key"]').val(),
                    'act': $('input[name="text"]').val(),
                },
                success: function(msg) {
                    console.log(msg);
                    var task_id = msg.task_id;

                    function ping() {
                        $.ajax({
                            type: 'POST',
                            url: '/game/ping-task',
                            data: {
                                'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),
                                'task_id': task_id,
                                'key': $('input[name="key"]').val(),
                            },
                            success: function(msg) {
                                console.log(msg)
                                if (msg.in_queue == true && msg.count != 0) {
                                    $('#t').val('Вы в очереди. Перед вами ' + msg.count + ' чел.');
                                }else if (msg.count == 0 && msg.in_queue == true) {
                                    $('#t').val('Генерация...');
                                }else if (msg.in_queue == false){
                                    window.location.reload();
                                }
                            }
                        })
                        return 0;
                    };

                    setInterval(function() {
                        currentTime = ping()
                    }, 1000);
                }
            });
        }
    });
});
